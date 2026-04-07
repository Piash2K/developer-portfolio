export type EducationItem = {
	id: number;
	title: string;
	duration: string;
	institution: string;
};

export const educations: EducationItem[] = [
	{
		id: 1,
		title: "BSc in Information and Communication Engineering",
		duration: "2022 - 2025",
		institution: "Daffodil International University, Dhaka",
	},
	{
		id: 2,
		title: "Higher Secondary Certificate(Science)",
		duration: "2017 - 2020",
		institution: "Jashore Cantonment College, Jashore",
	},
	{
		id: 3,
		title: "Secondary School Certificate(Science)",
		duration: "2011 - 2017",
		institution: "Basantapur Secondary School, Jhenaidah",
	},
];
