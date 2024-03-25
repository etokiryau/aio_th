import type { FC } from "react";
import Link from "next/link";

import MainLayout from "@/components/layouts/mainLayout/MainLayout";

import styles from "./notFound.module.scss";

const NotFound: FC = () => {
    return (
        <MainLayout title="Not found" isPublic={false} footer={false}>
            <div className={styles.notFound}>
                <p>Error 404:</p>
                <p>Page was not found</p>
                <Link href="/">Go to homepage</Link>
            </div>
        </MainLayout>
    );
};

export default NotFound;