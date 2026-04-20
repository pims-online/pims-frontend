import { useTranslation } from "react-i18next";
import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { UsefulNumbers } from "@/providers/AppContextConfig";



type Props = {
    numbers: UsefulNumbers;
};

export default function PhoneNumbersSection(props: Props) {
    const { numbers } = props;

    const { t } = useTranslation("pdf", { keyPrefix: "phone_numbers_section" });

    return <>
        <Highlight>
            <h3>{t("section_title")}</h3>
            <ul>
                <li>{t("112")}<b>112</b></li>
                <li>{t("114")}<b>114</b></li>
                <br/>
                {numbers.townHall && 
                    <li>{t("town_hall")}<b>{numbers.townHall}</b></li>
                }
                {numbers.insurance && 
                    <li>{t("insurance")}<b>{numbers.insurance}</b></li>
                }
                {numbers.relatives && 
                    <li>{t("relatives")}<b>{numbers.relatives}</b></li>
                }
            </ul>
        </Highlight>
    </>
}