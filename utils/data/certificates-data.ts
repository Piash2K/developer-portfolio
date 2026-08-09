export type CertificateItem = {
	id: number;
	title: string;
	image: string;
	institution: string;
	link: string;
};

export const certificatesData: CertificateItem[] = [
	{
		id: 1,
		title: "Complete Web Development",
		image: "/Complete Web Development.png",
		institution: "Programming Hero",
		link: "https://drive.google.com/file/d/1atweSFMpKIXN5CR10v0F15csWBTvfaC4/view?usp=sharing",
	},
	{
		id: 2,
		title: "Next Level Web Development",
		image: "/Next Level Web development.png",
		institution: "Programming Hero",
		link: "https://web.programming-hero.com/verification?validationNumber=PHL2B6WEB10-23081133",
	},
];
