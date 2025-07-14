import { CircularProgress, Container } from "@/components";
import { AppContext } from "@/providers"
import Alert from "@codegouvfr/react-dsfr/Alert";
import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { fetchStrimmingObligation } from "./utils";



export default function StrimmingObligation() {
    const {inseeCode, strimmingObligation, setStrimmingObligation} = useContext(AppContext);
    const { t } = useTranslation('information_screen');
    const [isFetching, setIsFetching] = useState<boolean>(false);
    
    useEffect(() => {
        if (inseeCode === undefined) {
            setStrimmingObligation(undefined);
            return;
        }

        const fetchAsync = async () => {
            setIsFetching(true);
            const strimmingObligation = await fetchStrimmingObligation(inseeCode);
            setStrimmingObligation(strimmingObligation);
            setIsFetching(false);
        };
        fetchAsync();
    }, [inseeCode]);

    const getStrimmingObligationJSXLink = () => {
        if (strimmingObligation === undefined) {
            return <></>;
        } else if (strimmingObligation.url === undefined) {
            return <></>
        } else {
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={strimmingObligation.url}
                    className="fr-mt-2v"
                >
                    {t('strim_obligation.learn_more')}
                </a>
            );
        }
    }

    if (inseeCode === undefined) {
        return <></>;
    }

    if (isFetching) {
        return <Container
                    flexboxAlignment='center'
                    flexboxDirection="column"
                >
                    <CircularProgress color="blue" size="medium" />
                </Container>
    } else if (strimmingObligation !== undefined) {
        return (
            <Container
                    flexboxAlignment='start'
                    flexboxDirection="column"
                >
                <Alert
                    severity="info"
                    title={t('strim_obligation.title')}
                    description={t('strim_obligation.description')}
                    
                />
                {getStrimmingObligationJSXLink()}
            </Container>)
    } else {
        return <></>;
    }
}