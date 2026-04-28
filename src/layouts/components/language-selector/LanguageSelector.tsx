import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { 
    LanguageSelect as LanguageSelect_base, 
    addLanguageSelectTranslations 
} from "@codegouvfr/react-dsfr/LanguageSelect";

import { supportedLanguages } from "@/i18n/i18n";

type Props = {
    id?: string;
};

export default function LanguageSelector(props: Props) {

    const { id } = props;

	const { t, i18n } = useTranslation("header");
	const lang = i18n.language;
	const languages = supportedLanguages;
	const setLang = useCallback(
		(nextValue: string) => {
			i18n.changeLanguage(nextValue);
			localStorage.setItem('i18nextLng', nextValue);
		},
		[i18n]
	);

	languages.forEach(lang =>
		addLanguageSelectTranslations({
			lang: lang,
			messages: {
				"select language": t("select_language"),
			}
		})
	);

    return (
        <LanguageSelect_base
            id={id}
            supportedLangs={languages}
            lang={lang}
            setLang={setLang}
            fullNameByLang={{
                en: "English",
                fr: "Français"
            }}
        />
    );

}
