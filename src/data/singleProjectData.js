// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

import StreetWorkoutHelperImage1 from '../images/StreetWorkout/street-workout-helper-1.jpg';
import StreetWorkoutHelperImage2 from '../images/StreetWorkout/street-workout-helper-2.jpg';
import StreetWorkoutHelperImage3 from '../images/StreetWorkout/street-workout-helper-3.jpg';

import GuideMeImage1 from '../images/GuideMe/guide-me-1.jpg';
import GuideMeImage2 from '../images/GuideMe/guide-me-2.jpg';
import GuideMeImage3 from '../images/GuideMe/guide-me-3.jpg';

import MealMateImage1 from '../images/MealMate/meal-mate-1.jpg';
import MealMateImage2 from '../images/MealMate/meal-mate-2.jpg';
import MealMateImage3 from '../images/MealMate/meal-mate-3.jpg';



// Import icons
import {
	// FiFacebook,
	FiGithub,
	FiFileText,
	FiVideo,
	FiGlobe,
	// FiInstagram,
	// FiLinkedin,
	// FiTwitter,
	// FiYoutube,
} from 'react-icons/fi';

const projectDatas = {
	"street-workout-helper": {
		ProjectHeader: {
		title: 'Street Workout Helper',
		publishDate: 'Jun 7, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Street Workout Helper Home Page',
			img: StreetWorkoutHelperImage1,
		},
		{
			id: 2,
			title: 'Street Workout Helper Trainings',
			img: StreetWorkoutHelperImage2,
		},
		{
			id: 3,
			title: 'Street Workout Helper Visual',
			img: StreetWorkoutHelperImage3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About This Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Level',
				details: 'L2 Second Semester',
			},
			{
				id: 2,
				title: 'Class',
				details: 'Web Programming',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The objective of this project was to create a website presenting the Street-Workout and provide a personnal training programm to the user.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Figma',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Street Workout Helper is a web project I developed as part of my Introduction to Web Programming course. The main objective of this project was to create a website that would dynamically generate workout tables using HTML, CSS, and JavaScript. Through the process, I was able to enhance my knowledge of front-end development and design, including the use of flexbox, animations, images, videos, and more. Additionally, I had the opportunity to use Figma, a user interface design tool, to create a mockup of the website.',
			},
			{
				id: 2,
				details:
					'By building this project, I gained valuable experience in front-end web development and design, as well as in using Figma for user interface design. The project allowed me to practice creating dynamic elements with JavaScript, as well as improving my HTML and CSS skills. The ability to generate tables on the fly using JavaScript is a useful skill in web development, and it can be applied in many different contexts.',
			},
			{
				id: 3,
				details:
					'Overall, the Street Workout Helper project allowed me to apply the knowledge and skills I learned in my Introduction to Web Programming course to a real-world web development project. I developed important skills in HTML, CSS, JavaScript, and user interface design, which will serve me well in future web development projects. The experience also helped me to better understand the importance of user-centered design and the need to create websites that are both functional and visually appealing.',
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Github',
				icon: <FiGithub/>,
				url: 'https://github.com/Pernam75/ProjetProgWeb',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Guide Me',
				img: GuideMeImage1,
				projectKey: 'guide-me',
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
	},
	"guide-me": {
		ProjectHeader: {
		title: 'Guide Me',
		publishDate: 'Jan 9, 2022',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Guide Me Home Page',
			img: GuideMeImage1,
		},
		{
			id: 2,
			title: 'Guide Me Mockup',
			img: GuideMeImage2,
		},
		{
			id: 3,
			title: 'Guide Me Travel',
			img: GuideMeImage3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About This Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Level',
				details: 'L3 First Semester',
			},
			{
				id: 2,
				title: 'Class',
				details: 'Transversial Project',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The objective of this project was to create a mobile application that would help the users to plan their trip in a city',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React',
					'React-Native',
					'JavaScript',
					'API REST',
					'Figma',
					'Mathématics',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'GuideMe is a mobile application that allows tourists to create personalized travel itineraries with detailed route information. With GuideMe, users can customize their travel plans by specifying the mode of transportation, travel time, and landmarks they want to visit. This feature allows travelers to easily combine sightseeing with transportation, creating a unique and efficient travel experience.',
			},
			{
				id: 2,
				details:
					"The application uses React, React Native, and JavaScript to create a smooth and intuitive user interface. GuideMe also integrates with an API REST to provide real-time travel information and up-to-date tourist attraction details. Additionally, the application uses mathematical algorithms, such as the Floyd-Warshall algorithm, to optimize and calculate the most efficient route based on the user's travel preferences",
			},
			{
				id: 3,
				details:
					"Developing GuideMe with React and React Native required me to learn and develop important skills in these frameworks. By using React-Native, I was able to create modular and reusable components for the application's user interface, which made it easier to maintain and update the codebase. React Native also allowed me to create a mobile application with a native look and feel, while still being able to use my knowledge of web development technologies.",
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Github',
				icon: <FiGithub/>,
				url: 'https://github.com/Pernam75/GuideMe',
			},
			{
				id: 2,
				name: 'Project Report',
				icon: <FiFileText/>,
				url: 'https://efrei365net-my.sharepoint.com/:b:/g/personal/jules_rubin_efrei_net/EV-5h-mj-9ZEqhGet1LyuyoB1S7--CPkTZs5BiNy3RVhaQ?e=lRuxjJ',
			},
			{
				id: 3,
				name: 'Project Video',
				icon: <FiVideo/>,
				url: 'https://efrei365net-my.sharepoint.com/:v:/g/personal/jules_rubin_efrei_net/EYyas-i650BGtkz333RutHABRFQoWTyETKZAjmB_2-qutw?e=wCRJta',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Street Workout Helper',
				img: StreetWorkoutHelperImage1,
				projectKey: 'street-workout-helper',
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
	},
	"meal-mate": {
		ProjectHeader: {
		title: 'Meal Mate',
		publishDate: 'Jul 15, 2022',
		tags: 'Machine-Learning / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Meal Mate Home Page',
			img: MealMateImage1,
		},
		{
			id: 2,
			title: 'Meal Mate Mockup',
			img: MealMateImage2,
		},
		{
			id: 3,
			title: 'Meal Mate Recipe',
			img: MealMateImage3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About This Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Level',
				details: 'L3 Second Semester',
			},
			{
				id: 2,
				title: 'Class',
				details: 'Data Science and AI Mastercamp',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The aim of MealMate is to create a mobile application that will provide personnalysed recipes recommandation based on the user taste and diet',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Flask',
					'React-Native',
					'JavaScript',
					'API REST',
					'Figma',
					'Machine-Learning (Collaborative Filtering)',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				"MealMate was an ambitious project that allowed me to develop important skills in several areas, including machine learning and full-stack web and mobile development. The application's main objective was to provide personalized recipe recommendations to users based on their dietary preferences, food allergies, and favorite ingredients."
			},
			{
				id: 2,
				details:
				"To accomplish this, I used Python and Flask to build a recommendation engine that utilizes a collaborative filtering algorithm. The algorithm analyzes the user's previous recipe choices and suggests new recipes that are similar to their previous choices. I also integrated the Food.com public database, which allowed the application to provide accurate and reliable recipe recommendations."
			},
			{
				id: 3,
				details:
				"On the front-end, I used React Native and JavaScript to create a mobile application that had a user-friendly and intuitive user interface. The use of Figma allowed me to create and test different designs before implementing them into the application. In addition to learning machine learning and full-stack web and mobile development, MealMate allowed me to improve my skills in API integration and RESTful API design. This was particularly important when integrating the Food.com database into the application and making sure that the application was able to retrieve and display the necessary data."
			},
			{
				id: 4,
				details:
				"Overall, MealMate was an exciting project that allowed me to develop a wide range of skills in machine learning, full-stack web and mobile development, and API integration. These skills will be valuable in future projects, especially those that require complex data analysis and machine learning algorithms."
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Github',
				icon: <FiGithub/>,
				url: 'https://github.com/Pernam75/MealMate'
			},
			{
				id: 2,
				name: 'Project Presentation Website',
				icon: <FiGlobe/>,
				url: 'https://master.ddosj4yb7t9h6.amplifyapp.com/'
			},
			{
				id: 3,
				name: 'Project Video',
				icon: <FiVideo/>,
				url: "https://efrei365net-my.sharepoint.com/:v:/g/personal/jules_rubin_efrei_net/EUtHGwnS8uVNhiP8a8rsUOABdPI5ksn-KQLpMRGW1GY1Ug?e=BnBzIc"
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Street Workout Helper',
				img: StreetWorkoutHelperImage1,
				projectKey: 'street-workout-helper',
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
		}
	}
};

export const getSingleProjectData = ( projectKey ) => {
	return projectDatas[projectKey];
}
