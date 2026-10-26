import { useTranslation } from "react-i18next";

import { UsefulNumbers } from "@/providers/AppContextConfig";
import HighlightRaw from "@/components/HighlightRaw";



type Props = {
    numbers: UsefulNumbers;
};

export default function PhoneNumbersSection(props: Props) {
    const { numbers } = props;
    const hasPersonalNumbers = !!(numbers.townHall || numbers.insurance || numbers.relatives);

    const { t } = useTranslation("pdf", { keyPrefix: "phone_numbers_section" });

    return <>
        <HighlightRaw>
            {/* h2: a top-level section of the document, like the four PimsTitle ones.
                fr-h3 keeps its former look. */}
            <h2 id="pims-pdf-section-numbers" className="fr-h3">{t("section_title")}</h2>
            {/* Two lists rather than one list split by a <br/>: a <ul> may only
                contain <li>, and the two groups (emergency / personal numbers) are
                distinct anyway. */}
            <ul>
                <li>{t("112")}<b>112</b></li>
                <li>{t("114")}<b>114</b></li>
            </ul>
            {hasPersonalNumbers &&
                // fr-mt-6v restores the blank line the old <br/> put between the groups
                <ul className="fr-mt-6v">
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
            }
        </HighlightRaw>
    </>
}