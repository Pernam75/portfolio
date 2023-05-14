// Import images
import Image3 from '../images/mobile-project-2.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

import StreetWorkoutHelperImage1 from '../images/projects/StreetWorkout/street-workout-helper-1.jpg';
import StreetWorkoutHelperImage2 from '../images/projects/StreetWorkout/street-workout-helper-2.jpg';
import StreetWorkoutHelperImage3 from '../images/projects/StreetWorkout/street-workout-helper-3.jpg';

import GuideMeImage1 from '../images/projects/GuideMe/guide-me-1.jpg';
import GuideMeImage2 from '../images/projects/GuideMe/guide-me-2.jpg';
import GuideMeImage3 from '../images/projects/GuideMe/guide-me-3.jpg';

import MealMateImage1 from '../images/projects/MealMate/meal-mate-1.jpg';
import MealMateImage2 from '../images/projects/MealMate/meal-mate-2.jpg';
import MealMateImage3 from '../images/projects/MealMate/meal-mate-3.jpg';

import GeoCellImage1 from '../images/projects/GeoCell/geo-cell-1.jpg';
import GeoCellImage2 from '../images/projects/GeoCell/geo-cell-2.jpg';
import GeoCellImage3 from '../images/projects/GeoCell/geo-cell-3.jpg';

import InternshipSportslabImage1 from '../images/projects/InternshipSportslab/internship-sportslab-1.jpg';
import InternshipSportslabImage2 from '../images/projects/InternshipSportslab/internship-sportslab-2.jpg';
import InternshipSportslabImage3 from '../images/projects/InternshipSportslab/internship-sportslab-3.jpg';

import MicrocontrollerImage1 from '../images/projects/Microcontroller/microcontroller-1.jpg';
import MicrocontrollerImage2 from '../images/projects/Microcontroller/microcontroller-2.jpg';
import MicrocontrollerImage3 from '../images/projects/Microcontroller/microcontroller-3.jpg';

import FiniteAutomatonImage1 from '../images/projects/FiniteAutomaton/finite-automaton-1.jpg';
import FiniteAutomatonImage2 from '../images/projects/FiniteAutomaton/finite-automaton-2.jpg';
import FiniteAutomatonImage3 from '../images/projects/FiniteAutomaton/finite-automaton-3.jpg';

import FloydWarshallImage1 from '../images/projects/FloydWarshall/floyd-warshall-1.jpg';
import FloydWarshallImage2 from '../images/projects/FloydWarshall/floyd-warshall-2.jpg';
import FloydWarshallImage3 from '../images/projects/FloydWarshall/floyd-warshall-3.jpg';

// Import icons
import {
	// FiFacebook,
	FiGithub,
	FiFileText,
	FiVideo,
	FiGlobe,
	// FiInstagram,
	FiLinkedin,
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
	},
	"geo-cell": {
		ProjectHeader: {
		title: 'GeoCell',
		publishDate: 'Oct 23, 2022',
		tags: 'Machine-Learning / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'GeoCell Home Page',
			img: GeoCellImage1,
		},
		{
			id: 2,
			title: 'GeoCell Mobile Mockup',
			img: GeoCellImage2,
		},
		{
			id: 3,
			title: 'GeoCell Traffic',
			img: GeoCellImage3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About This Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Level',
				details: 'M1 First Semester',
			},
			{
				id: 2,
				title: 'Class',
				details: 'Data Science and AI Datacamp',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
		"The aim of GeoCell is to provide a real-time traffic prediction in Beijing based on the user's location and the time of day.",
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Flask',
					'React',
					'Amazon Web Services (Amplify & Elastic Beanstalk)',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				"GeoCell is a project that aimed to provide real-time traffic information and personalized recommendations for the best routes to take in the city of Beijing. The project involved developing a machine learning algorithm that utilizes geospatial data from Beijing taxis in 2013 to predict the congestion zones in the city (KNN algorithm) and then compute the travel time to go from a point A to a point B. This algorithm helps to anticipate congestion and provides personalized route recommendations for users. In addition, the project required hosting the solution, which provided an opportunity to gain experience with AWS cloud technologies."
			},
			{
				id: 2,
				details:
				"The project involved a full-stack development approach, from developing the machine learning model to designing and implementing the frontend and backend. The backend was developed using Python and Flask, and the frontend was implemented using React. The hosting and deployment of the solution were handled using Amazon Web Services (AWS) Amplify and Elastic Beanstalk. This project provided an excellent opportunity to develop skills in developing and deploying a complete solution using cloud technologies."
			},
			{
				id: 3,
				details:
				"Overall, the GeoCell project was a valuable learning experience in developing a complete solution, from designing and implementing the algorithm to creating the frontend and backend and deploying the application to the cloud. The project allowed for the development of skills in machine learning, cloud technologies, and full-stack development, making it an excellent addition to my portfolio."
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Github',
				icon: <FiGithub/>,
				url: "https://github.com/Pernam75/traffic_congestion"
			},
			{
				id: 2,
				name: 'Project Website',
				icon: <FiGlobe/>,
				url: "https://www.geocell.one"
			},
			{
				id: 3,
				name: 'Project Report',
				icon: <FiFileText/>,
				url: "https://efrei365net-my.sharepoint.com/:b:/g/personal/jules_rubin_efrei_net/EZD7zP4BNNdMseDGncSwo2kBXfeLcVpNORYtZ6_p0RuBaA?e=hbCagM"
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
	},
	"internship-sportslab": {
		ProjectHeader: {
		title: 'Internship at Decathlon SportsLab',
		publishDate: 'Mar 31, 2023',
		tags: 'Internship / Machine-Learning',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Decathlon SportsLab',
			img: InternshipSportslabImage1,
		},
		{
			id: 2,
			title: 'Decathlon SportsLab',
			img: InternshipSportslabImage2,
		},
		{
			id: 3,
			title: 'Decathlon SportsLab',
			img: InternshipSportslabImage3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About This Internship',
		CompanyInfo: [
			{
				id: 1,
				title: 'Level',
				details: 'M1 First Semester',
			},
			{
				id: 2,
				title: 'Class',
				details: 'Data Science and AI 4th Year Internship',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
		"During my internship at Decathlon SportsLab, I worked on a project that aimed to develop a machine learning algorithm to predict the clothing size of a customer based on a picture of the customer. The project involved developing a machine learning algorithm that utilizes computer vision to extract the customer's measurements from a picture and then use these measurements to predict the customer's clothing size.",
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'Numpy',
					'OpenCV',
					'Keras',
					'Tensorflow',
					'XGBoost',
					'Meshlab',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				"During my 5-month internship at Decathlon Sportslab, I had the opportunity to work on an exciting project, size recommendation. The objective of this project was to recommend a size to a user in a given garment based on their photo. I worked in various fields related to data, including Data Analysis, Machine-Learning, Data Engineering, and Computer Vision."
			},
			{
				id: 2,
				details:
				"One of the main advantages of this project was its practicality. The size recommendation system has the potential to save time for customers and retailers alike by reducing the number of returns and exchanges due to sizing issues. Additionally, it provided me with a valuable experience in working with real-world data and developing practical solutions to problems faced by businesses."
			},
			{
				id: 3,
				details:
				"Through this project, I was able to develop my skills in Python programming, Machine-Learning, Feature-Engineering, Meshlab, and Computer Vision. I gained experience in working with large datasets and developing models that can be used to make accurate predictions. This internship provided me with a unique opportunity to learn about how research is conducted in a large French company, and to work on a project that has the potential to make a real impact on the retail industry."
			},
			{
				id: 4,
				details:
				"Overall, my experience working on Smartsize was both challenging and rewarding. I gained valuable skills that I will carry with me throughout my career, and I was able to work on a project that has the potential to make a positive impact on the retail industry."
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Linkedin',
				icon: <FiLinkedin/>,
				url: "https://www.linkedin.com/posts/jules-rubin_decathlon-datascience-stage-activity-7051549236835819521-QroA?utm_source=share&utm_medium=member_desktop"
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
	},
	"microcontroller": {
		ProjectHeader: {
				title: 'Microcontroller',
				publishDate: 'Dec, 6 2021',
				tags: 'Electronic',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Microcontroller',
				img: MicrocontrollerImage1,
			},
			{
				id: 2,
				title: 'Microcontroller FGPA',
				img: MicrocontrollerImage2,
			},
			{
				id: 3,
				title: 'Microcontroller Abstract',
				img: MicrocontrollerImage3,
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
					details: 'Digital Circuit Design',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
			'The aim of this project is to design and analyze a logical circuit (sequential and combinational) and a state diagram, and then perform simulations and synthesis on a programmable component.',
      		Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'VHDL',
						'Xilinx Vivado',
						'Artix-35T FPGA',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
					'The Microcontroller project involved designing and analyzing a logic circuit (sequential and combinational) and state graph, followed by simulations and synthesis on a programmable component. The project aimed to distinguish the use cases of programmable components in comparison to CPUs, GPUs, ASICs, and MCUs.',
        		},
				{
					id: 2,
					details:
						'The project provided an opportunity to configure a Field-Programmable Gate Array (FPGA) and understand the various stages of an Electronic Design Automation (EDA) tool. Additionally, it involved describing, simulating, and synthesizing a combinational and sequential system using the VHDL (VHSIC Hardware Description Language) programming language.',
				},
				{
					id: 3,
					details:
					'The project focused on applying essential design rules for logical circuits and mastering optimization techniques for programmable components. By working on the Microcontroller project, I gained practical experience in VHDL and electronics, further strengthening my understanding of digital logic and programmable devices.',
				},
				{
					id: 4,
					details:
					'Overall, this project allowed me to develop skills in circuit design, VHDL programming, and the optimization of programmable components. It provided a solid foundation in understanding the inner workings of microcontrollers and their applications in various electronic systems.',
				},
			],
			SocialSharingHeading: 'See More',
			SocialSharing: [
				{
					id: 1,
					name: 'Github',
					icon: <FiGithub/>,
					url: 'https://github.com/Pernam75/Microcontroleur-VHDL',
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
	"finite-automaton": {
		ProjectHeader: {
		title: 'Finite Automaton and Regular Expression',
		publishDate: 'May 8, 2021',
		tags: 'Console Application / Mathematics',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Finite Automaton',
			img: FiniteAutomatonImage1,
		},
		{
			id: 2,
			title: 'Finite Automaton',
			img: FiniteAutomatonImage2,
		},
		{
			id: 3,
			title: 'Finite Automaton',
			img: FiniteAutomatonImage3,
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
				details: 'Mathematics for Informatics',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails: "",
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Java',
					'IntelliJ IDEA',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				"The Finite Automaton and Regular Expression project involved developing a program that performs several steps related to finite automata and regular expressions. The program allows for reading an automaton from a file, storing it in memory, and displaying it on the screen. One of the key functionalities is to test the presence of epsilon transitions in the automaton, indicating an asynchronous automaton. If the automaton is not a complete deterministic one, the program can generate an equivalent complete deterministic automaton."
			},
			{
				id: 2,
				details:
				"Another important aspect of the project is the calculation of the minimal equivalent automaton. This involves reducing the automaton to its smallest form while preserving its language recognition capabilities. The program also allows for testing word recognition within the automaton. Additionally, it enables the creation of an automaton that recognizes the complement language and testing word recognition within that language as well.",
			},
			{
				id: 3,
				details:
				"By implementing this project, I further developed my skills in Java programming and object-oriented programming (OOP). The use of OOP principles allowed for the modular design and organization of the program, making it easier to manage and maintain. Working on this project enhanced my understanding of finite automata, regular expressions, and the algorithms involved in automaton transformation and language recognition.",
			},
			{
				id: 4,
				details:
				"Overall, the Finite Automaton and Regular Expression project provided a hands-on learning experience in implementing fundamental concepts of automata theory and gave me practical exposure to Java programming and OOP. It strengthened my problem-solving abilities and deepened my understanding of automaton operations, all of which will be valuable assets in future software development projects.",
			},
		],
		SocialSharingHeading: 'See More',
		SocialSharing: [
			{
				id: 1,
				name: 'Github',
				icon: <FiGithub/>,
				url: "https://github.com/Pernam75/finite-automatons",
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
	},
    "floyd-warshall": {
        ProjectHeader: {
            title: 'Floyd-Warshall algorithm',
            publishDate: 'Nov 8, 2021',
            tags: 'Console Application / Mathematics',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Floyd-Warshall algorithm',
                img: FloydWarshallImage1,
            },
            {
                id: 2,
                title: 'Floyd-Warshall algorithm',
                img: FloydWarshallImage2,
            },
            {
                id: 3,
                title: 'Floyd-Warshall algorithm',
                img: FloydWarshallImage3,
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
                    details: 'Graph Theory',
                },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: "",
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        "Python",
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                {
                    id: 1,
                    details:
                    "This implementation of the Floyd-Warshall algorithm is based on the Roy-Warshall algorithm, which is used to compute the transitive closure of a graph. However, in this case, the algorithm is modified to keep track of the shortest paths among all possible paths between two vertices, ensuring that only the paths with the lowest values are preserved.",
                },
                {
                    id: 2,
                    details:
                    "The project includes several features such as the ability to read a graph from a file, print the graph, implement the Floyd-Warshall algorithm itself, detect absorbing circuits within the graph, and carry out the main processing steps.",
                },
                {
                    id: 3,
                    details:
                    "The implementation is done using Python and follows the principles of object-oriented programming (OOP). This allows for a modular and organized code structure, making it easier to understand and maintain. By working on this project, I gained a deeper understanding of graph theory, graph algorithms, and the concept of shortest paths. It also honed my skills in Python programming and OOP.",
                },
                {
                    id: 4,
                    details:
                    "Overall, the Floyd Warshall Implementation project showcases my ability to implement complex algorithms and solve graph-related problems. It demonstrates my proficiency in Python programming and my understanding of OOP principles. This project will be a valuable addition to my portfolio, highlighting my expertise in algorithmic problem-solving and graph analysis."
                },
            ],
            SocialSharingHeading: 'See More',
            SocialSharing: [
                {
                    id: 1,
                    name: 'Github',
                    icon: <FiGithub/>,
                    url: "https://github.com/Pernam75/floyd_warshall_implementation",
                },
                {
                    id: 2,
                    name: 'Project Report',
                    icon: <FiFileText/>,
                    url: "https://efrei365net-my.sharepoint.com/:p:/g/personal/jules_rubin_efrei_net/EfFzCTyPdgVJk0u82ue2zdgBnQGl6DItp9bqWl4dyzBlnQ?e=tdaGIZ",
                }
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
    },	
};

export const getSingleProjectData = ( projectKey ) => {
	return projectDatas[projectKey];
}
