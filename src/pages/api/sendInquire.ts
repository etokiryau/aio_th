import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface IResponse {
    success: boolean
    error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    if (req.method === 'POST') {
        const { email, name, phone, area, floors, pool, style, distance, purpose } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: "info@aio.house",
                pass: "xandmzelpaaisctt",
            },
        });

        const message = `Email: ${email}\nName: ${name}\nPhone number: ${phone}\nArea: ${area}\nFloors: ${floors}\nSwimming pool: ${pool}\nArchitecture tyle: ${style}\nDistance from the coast: ${distance}\nPurchase purpose: ${purpose}`;

        try {
            await transporter.sendMail({
                from: "info@aio.house",
                to: "info@aio.house",
                subject: 'Invoice from Thailand landing',
                text: message,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}