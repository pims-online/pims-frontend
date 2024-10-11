import { useState, useRef, useEffect } from 'react';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { Container } from '@/components';

type Props = {
	logoAlt: string;
	logoSrc: string;
	logoWidth: number;
	logoHeight: number;
	buttonTitle: string;
	media: string;
};

export default function AudioPlayer(props: Props) {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

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
		<Container flexboxDirection="column" flexboxAlignment="center">
			<Button priority="tertiary" className="fr-mb-4v" onClick={onClick}>
				<p className="pims-alert-screen__alert-systems-players-button">
					<img
						src={props.logoSrc}
						alt={props.logoAlt}
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
			></audio>
		</Container>
	);
}
