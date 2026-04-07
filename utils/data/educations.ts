export type EducationItem = {
	id: number;
	title: string;
	duration: string;
	institution: string;
};

export const educations: EducationItem[] = [
	{
		id: 1,
		title: "Bachelor Degree",
		duration: "2022 - 2025",
		institution: "Daffodil International University",
	},
	{
		id: 2,
		title: "Higher Secondary Certificate",
		duration: "2019 - 2020",
		institution: "Jashore Cantonment College",
	},
	{
		id: 3,
		title: "Secondary School Certificate",
		duration: "2011 - 2017",
		institution: "Basantapur Secondary School",
	},
];
