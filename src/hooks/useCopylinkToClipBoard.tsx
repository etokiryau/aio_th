import { ReactNode, useState } from "react";
import CopyingMessage from "@/components/ui/copyingMessage/CopyingMessage";

export const useCopyLinkToClipboard = (text: string): 
    [ReactNode, (e: React.MouseEvent<HTMLElement, MouseEvent>, base?: boolean) => void] => 
{
    const [isVisibleCopyingMessage, setIsVisibleCopyingMessage] = useState(false);
    const baseUrl: string = process.env.SITE_URL ?? 'https://aio.house';

    const copyLinkToClipboard = (e: React.MouseEvent<HTMLElement, MouseEvent>, base = true): void => {
        const target = e.currentTarget as HTMLElement;

        const link = base 
            ? String(baseUrl + target.getAttribute("data-link"))
            : String(target.getAttribute("data-link"));
        
        navigator.clipboard
            .writeText(link)
            .then(() => {
                setIsVisibleCopyingMessage(true);
                setTimeout(() => setIsVisibleCopyingMessage(false), 2000);
            })
            .catch(error => {
                console.error("Failed to copy link: ", error);
            });
    };

    return [
        <CopyingMessage key="copying-message" text={text} isActive={isVisibleCopyingMessage} />, 
        copyLinkToClipboard,
    ];
};