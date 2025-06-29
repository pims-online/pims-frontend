import { useTranslation, Trans } from "react-i18next";


type Props = {
	i: number,
    url: string | undefined,
};

export default function ParticipationItem(props: Props) {
    const { i, url } = props;
    const { t } = useTranslation('involvement_screen');

    if (url === undefined) {
        return (
            <Trans 
                t={t}
                i18nKey={`participation.items.item_${i}`}
            />
        );
    } else {
        return (
            <Trans
                t={t}
                i18nKey={`participation.items.item_${i}`}
                components={{
                    k1: (
                        <a
                            href={`https://${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pims-components__text-color-orange"
                        />
                    ),
                }}
                values={{ url: url }}
            />
        );
    }
}