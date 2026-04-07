"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type AnimationLottieProps = {
	animationPath: object;
};

function AnimationLottie({ animationPath }: AnimationLottieProps) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationPath,
		style: {
			width: "95%",
		},
	};

	return <Lottie {...defaultOptions} />;
}

export default AnimationLottie;
