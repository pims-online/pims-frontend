import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";


/** Updated the language of the html element to match the one of i18n */
export default function HtmlLanguageUpdater(): ReactNode {
    const { i18n } = useTranslation();
    const language = i18n.language;
    
    useEffect(() => {
        const htmlNodes = document.getElementsByTagName("html");
        for (let i = 0; i < htmlNodes.length; i++) {
            const node = htmlNodes[i];
            node.lang = language;
        }
    }, [language]);

    return <></>;
}