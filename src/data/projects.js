// Import images
// import WebImage1 from '../images/web-project-1.jpg';
// import WebImage2 from '../images/web-project-2.jpg';
// import MobileImage1 from '../images/mobile-project-1.jpg';
// import MobileImage2 from '../images/mobile-project-2.jpg';
// import UIImage1 from '../images/ui-project-1.jpg';
// import UIImage2 from '../images/ui-project-2.jpg';
import StreetWorkoutHelperImage1 from '../images/projects/StreetWorkout/street-workout-helper-1.jpg';
import GuideMeImage1 from '../images/projects/GuideMe/guide-me-1.jpg';
import MealMateImage1 from '../images/projects/MealMate/meal-mate-1.jpg';
import GeoCellImage1 from '../images/projects/GeoCell/geo-cell-1.jpg';
import InternshipSportslabImage1 from '../images/projects/InternshipSportslab/internship-sportslab-1.jpg';
import MicrocontrollerImage1 from '../images/projects/Microcontroller/microcontroller-1.jpg';
import FiniteAutomatonImage1 from '../images/projects/FiniteAutomaton/finite-automaton-1.jpg';
import FloydWarshallImage1 from '../images/projects/FloydWarshall/floyd-warshall-1.jpg';
import MLforDDoSImage1 from '../images/projects/MLforDDoS/ml-for-ddos-1.jpg';


const nonOrderedProjectsData = [
	{
		id: 0,
		title: 'Street Workout Helper',
		category: 'Website',
		img: StreetWorkoutHelperImage1,
		projectKey: 'street-workout-helper',
	},
	{
		id: 1,
		title: 'Finite Automaton',
		category: 'Console Application / Mathematics',
		img: FiniteAutomatonImage1,
		projectKey: 'finite-automaton',
	},
	{
		id: 2,
		title: 'Microcontroller',
		category: 'Electronics',
		img: MicrocontrollerImage1,
		projectKey: 'microcontroller',
	},
	{
		id: 3,
		title: "Floyd-Warshall algorithm",
		category: "Console Application / Mathematics",
		img: FloydWarshallImage1,
		projectKey: "floyd-warshall",
	},
	{
		id: 4,
		title: 'GuideMe',
		category: 'Mobile Application',
		img: GuideMeImage1,
		projectKey: 'guide-me',
	},
	{
		id: 5,
		title: 'MealMate',
		category: 'Mobile Application / Machine-Learning',
		img: MealMateImage1,
		projectKey: 'meal-mate',
	},
	{
		id: 6,
		title: 'GeoCell',
		category: 'Website / Machine-Learning',
		img: GeoCellImage1,
		projectKey: 'geo-cell',
	},
	{
		id: 7,
		title: 'Internship at Decathlon Sportslab',
		category: 'Internship / Machine-Learning',
		img: InternshipSportslabImage1,
		projectKey: 'internship-sportslab',
	},
	{
		id: 8,
		title: 'DDoS Attacks Detection',
		category: 'Machine-Learning',
		img: MLforDDoSImage1,
		projectKey: 'ml-for-ddos',
	},
];

// export the array in the inverse order
export const projectsData = nonOrderedProjectsData.reverse();
