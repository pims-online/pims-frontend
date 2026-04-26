import { useState, useRef, useEffect } from 'react';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { Container } from '@/components';
import { Trans, useTranslation } from 'react-i18next';

type Props = {
	logoSrc: string;
	logoWidth: number;
	logoHeight: number;
	buttonTitle: string;
	media: string;
};

export default function AudioPlayer(props: Props) {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const { t } = useTranslation('alert_screen');

	useEffect(() => {
		if (audioRef?.current) {
			if (isPlaying) {
				audioRef.current?.play();
			} else {
				audioRef.current?.pause();
			}
		}
	}, [isPlaying, audioRef]);

	const onClick = () => {
		setIsPlaying((prev) => !prev);
	};

	return (
		<Container
			flexboxDirection="column"
			flexboxAlignment="center"
			withoutMarginBottom
		>
			<Button priority="tertiary" className="fr-mb-4v" onClick={onClick}>
				<p className="pims-alert-screen__alert-systems-players-button">
					<img
						src={props.logoSrc}
						role="presentation"
						width={props.logoWidth}
						height={props.logoHeight}
						className="fr-mr-1w"
					/>
					{props.buttonTitle}
				</p>
			</Button>
			<audio
				controls
				src={props.media}
				ref={audioRef}
				onPause={() => setIsPlaying(false)}
				onPlay={() => setIsPlaying(true)}
			>
				<p>
					<Trans
						t={t}
						i18nKey="audio_unsupported"
						components={{
							k1: <a href={props.media}>{props.buttonTitle}</a>
						}}
					/>
				</p>
			</audio>
		</Container>
	);
}
