import { CircularProgress, Container } from "@/components";
import { AppContext } from "@/providers"
import Alert from "@codegouvfr/react-dsfr/Alert";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { fetchStrimmingObligation } from "./utils";
import { NavigationLock } from "@/layouts/types";



type Props = {
    registerNavLock: (name: string, lock?: NavigationLock) => void;
};

// Anchor used by the navigation lock to scroll to this section
const containerId = 'pims-step-1__strimming-obligation';

export default function StrimmingObligation(props: Props) {
    const { registerNavLock } = props;
    const {position, strimmingObligation, setStrimmingObligation} = useContext(AppContext);
    const { t } = useTranslation('information_screen');
    const [isFetching, setIsFetching] = useState<boolean>(false);

    // strimmingObligation stays undefined on failure, which keeps the navigation lock on
    const loadStrimmingObligation = async (inseeCode: string) => {
        setIsFetching(true);
        setStrimmingObligation(undefined);
        const strimmingObligation = await fetchStrimmingObligation(inseeCode);
        setStrimmingObligation(strimmingObligation);
        setIsFetching(false);
    };

    useEffect(() => {
        setStrimmingObligation(undefined);

        if (position === undefined) {
            return;
        }

        loadStrimmingObligation(position.inseeCode);
    }, [position]);

    // The strimming obligation is required to generate the PIMS: do not let the user
    // move on while it is loading or after it failed to load.
    useEffect(() => {
        const lockName = "strimming_obligation";
        if (position !== undefined && strimmingObligation === undefined) {
            const lock: NavigationLock = {
                // The spinner or the error message below is already visible
                highlight: () => {},
                focusId: containerId,
                scrollId: containerId,
            };
            registerNavLock(lockName, lock);
        } else {
            registerNavLock(lockName, undefined);
        }
    }, [position, strimmingObligation]);

    const loadFailed = position !== undefined && strimmingObligation === undefined && !isFetching;

    const getStrimmingObligationJSXLink = () => {
        if (strimmingObligation === undefined || !strimmingObligation.affected) {
            return <></>;
        } else {
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={strimmingObligation.url}
                    className="fr-mt-2v"
                    aria-label={t('strim_obligation.link_aria_label')}
                >
                    {t('strim_obligation.learn_more')}
                </a>
            );
        }
    }

    if (position === undefined) {
        return <></>;
    }

    if (isFetching) {
        return <Container
                    id={containerId}
                    flexboxAlignment='center'
                    flexboxDirection="column"
                >
                    <CircularProgress color="blue" size="medium" />
                </Container>
    } else if (loadFailed) {
        return (
            <Container id={containerId} flexboxAlignment='start' flexboxDirection="column">
                <div aria-live="polite">
                    <Alert
                        severity="error"
                        small
                        description={t('strim_obligation.fetch_failed')}
                    />
                </div>
                <Button
                    className="fr-mt-2v"
                    priority="secondary"
                    size="small"
                    onClick={() => loadStrimmingObligation(position.inseeCode)}
                >
                    {t('retry')}
                </Button>
            </Container>
        );
    } else if (strimmingObligation !== undefined && strimmingObligation.affected) {
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