import { FC, useState } from "react";
import { useFormik } from 'formik';
import axios from "axios";

import CrossIcon from "@/components/ui/_icons/CrossIcon";
import LoadingButton from "@/components/loadingButton/LoadingButton";
import { useOverflowHidden } from "@/hooks/useOverflowHidden";

import styles from "./learnForm.module.scss";

interface IProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

interface IForm {
    email: string
    name: string
    telephone: string
    comment: string
}

const LearnForm: FC<IProps> = ({ state }) => {
    const [isPopup, setIsPopup] = state;
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);

    useOverflowHidden(isPopup);

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            telephone: '',
            comment: '',
        },
        validateOnMount: true,
        onSubmit: (values: IForm) => handleSubmit(values),
    });

    const handleSubmit = async (values: IForm): Promise<void> => {
        setIsError(false);
        
        try {
            await axios.post('/api/sendContacts', values);
            setIsSent(true);
        } catch (error) {
            setIsError(true);
            console.error('Error sending email:', error);
        }
    };

    const togglePopup = () => setIsPopup(prev => !prev);

    return (
        <div className={`${styles.learn} ${isPopup ? styles.active : ''}`}>
            <div className={styles.learn__wrapper}>
                <div className={styles.learn__header}>
                    <button type="button" onClick={togglePopup} className={styles.learn__header_close}>
                        <CrossIcon />
                    </button>
                </div>

                <p className={styles.learn__title}>Fill out the form to get full information about our offer</p>

                <form onSubmit={formik.handleSubmit} className={styles.learn__form}>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"  id="email"  name="email" placeholder="Email"
                        disabled={isSent}
                    />
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="name" name="name" type="text" placeholder="Name"
                        disabled={isSent}
                    />
                    <input
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="telephone" name="telephone" type="tel" placeholder="Phone number"
                        disabled={isSent}
                    />

                    <textarea
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        id="comment" name="comment" placeholder="Comment"
                        disabled={isSent}
                    />

                    <div className={styles.learn__form_submit}>
                        {!isSent && 
                            <LoadingButton 
                                title="Submit application"
                                styleType="light"
                                isloading={formik.isSubmitting}
                                type="submit" 
                                disabled={
                                    formik.isSubmitting || 
                                    Boolean(!formik.values.email || !formik.values.name || !formik.values.telephone)
                                }
                            />
                        }
                        {isSent && 
                            <p className={styles.learn__form_success}>Your application is successfully sent!</p>
                        }
                        {isError &&
                            <p className={styles.quiz__title}>Something went wrong with email sending</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LearnForm;