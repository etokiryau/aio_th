import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import axios from "axios";

import LoadingButton from "../loadingButton/LoadingButton";

import styles from "./quizForm.module.scss";

interface IForm {
    area: string
    floors: string
    pool: string
    style: string
    distance: string
    purpose: string
    email: string
    name: string
    phone: string
}

interface IStepData {
    name: keyof IForm
    title: string
    options: string[]
}

const QuizForm: FC = () => {
    const [step, setStep] = useState(0);
    const [isContacts, setIsContacts] = useState(false);
    const [isError, setIsError] = useState(false);
    const { push } = useRouter();

    const quizData: Record<number, IStepData> = {
        0: {
            name: 'area',
            title: 'Desired area of the villa',
            options: ['100-200 m', '300-400 m', '200-300 m', 'More than 400 m'],
        },
        1: {
            name: 'floors',
            title: 'Villa number of floors',
            options: ['1 floor', '2 floors', '3 floors', 'Don\'t know yet'],
        },
        2: {
            name: 'pool',
            title: 'Swimming pool availability',
            options: ['Yes', 'No', 'Don\'t know yet'],
        },
        3: {
            name: 'style',
            title: 'Architectural style',
            options: ['Contemporary', 'Traditional Thailand', 'Futuristic', 'Classic European'],
        },
        4: {
            name: 'distance',
            title: 'Distance from the coast',
            options: ['First line', 'Second line', 'Within a 20-minute drive', 'No matter'],
        },
        5: {
            name: 'purpose',
            title: 'Purpose of purchase',
            options: ['For accommodation', 'Investments (resale)', 'Investments (lease)', 'Don\'t know yet'],
        },
    };

    const formik = useFormik({
        initialValues: {
            area: '',
            floors: '',
            pool: '',
            style: '',
            distance: '',
            purpose: '',
            email: '',
            name: '',
            phone: '',
        },
        onSubmit: (values: IForm) => handleSubmit(values),
    });

    const handleSubmit = async (values: IForm) => {
        setIsError(false);
        
        try {
            await axios.post('/api/sendInquire', values);
            push('/thanks');
        } catch (error) {
            setIsError(true);
            console.error('Error sending email:', error);
        }
    };

    const handleNextStep = () => {
        if (step === 5) {
            setIsContacts(true);
            setStep(prev => prev + 1);
        }
        else setStep(prev => prev + 1);
    };

    const currentQuiz = quizData[step];

    const handleOptionClick = (value: string) => () => {
        formik.setFieldValue(currentQuiz.name, value);
    };

    const optionsContent: JSX.Element[] = currentQuiz?.options.map((item, i) => {
        return (
            <li key={i}>
                <button type="button" 
                    className={`
                        ${item === formik.values[currentQuiz.name] ? styles.active : ''}
                        ${currentQuiz.name === 'area' ? styles.two : ''}
                    `}
                    onClick={handleOptionClick(item)}
                >
                    {item}
                </button>
            </li>
        );
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.quiz}>
            <p className={styles.quiz__text}>
                {isContacts 
                    ? 'Leave your contacts so that we can prepare the perfect proposal for you'
                    : 'Fill out the form to find the perfect villa for you'
                }
            </p>

            <div className={styles.quiz__status}>
                <div className={styles.quiz__status_bar}>
                    <div style={{ width: `${(step + 1) * 100 / 7}%` }} />
                </div>
            </div>

            {!isContacts && <>
                <p className={styles.quiz__title}>{step + 1}. {currentQuiz.title}</p>

                <ul className={styles.quiz__options}>
                    {optionsContent}
                </ul>

                <div className={styles.quiz__next}>
                    <button type="button" 
                        onClick={handleNextStep}
                        disabled={Boolean(!formik.values[currentQuiz.name])}
                    >
                        Next
                    </button>
                </div>
            </>}

            {isContacts && <>
                <div className={styles.quiz__inputs}>
                    <input 
                        type="text" placeholder="Name"
                        id="name" name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />

                    <input 
                        type="email" placeholder="Email"
                        id="email" name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />

                    <input 
                        type="phone" placeholder="Phone number"
                        id="phone" name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />
                </div>
                
                <div className={styles.quiz__submit}>
                    <LoadingButton
                        title="Submit application"
                        styleType="light"
                        isloading={formik.isSubmitting}
                        type="submit"
                        disabled={
                            Boolean(!formik.values.name || !formik.values.email || !formik.values.phone) || 
                            formik.isSubmitting
                        }
                    />
                </div>
                
                {!isError &&
                    <p className={styles.quiz__error}>Something went wrong with submitting</p>
                }
            </>}
            
        </form>
    );
};

export default QuizForm;