import FaceBuck from "./ProjectImages/facebuck-screenshot.jpg";
import PubAdventure from "./ProjectImages/text-adventure-screenshot.jpg";
import WhitchurchQuiz from "./ProjectImages/whitchurch-quiz-screenshot.jpg";
import Calculator from "./ProjectImages/calculator-screenshot.jpg";
import Cats from "./ProjectImages/foster-cats-screenshot.jpg";
import Cipher from "./ProjectImages/cipher-screenshot.jpg";
import ToDontList from "./ProjectImages/todontlist-screenshot.JPG";
import Portfolio from "./ProjectImages/portfolio-screenshot.JPG";
import Weather from "./ProjectImages/weather-screenshot.JPG";
import Books from "./ProjectImages/jason-leung-D4YrzSwyIEc-unsplash.jpg";

const projects = [
  {
    title: "Portfolio",
    link: "https://www.matthewcotton.dev/#/",
    img: Portfolio,
    imgAlt: "Portfolio  screenshot",
    description:
      "This Site! Designed to demonstrate my web development skills and projects. Built using React.",
    repo: "https://github.com/matthewcotton/portfolio-2",
  },
  {
    title: "7-Day Weather Forecast App",
    link: "https://weather.matthewcotton.dev/",
    img: Weather,
    imgAlt: "Weather app screenshot",
    description:
      "A 7-day weather application which uses OpenWeatherMap and OpenCage Geocoding data. Built using the React framework.",
    repo: "https://github.com/matthewcotton/weather-app",
  },
  {
    title: "Book List API",
    link: "https://book-list-api-mcotton.herokuapp.com/",
    img: Books,
    imgAlt: "Image of books - Photo by Jason Leung on Unsplash",
    description:
      "An API which is designed to store a list of books and if you have read them or not. Built using Express and hosted by Heroku. Instructions on how to interact with the API can be found in the GitHub Readme file.",
    repo: "https://github.com/matthewcotton/book-list-api",
  },
  {
    title: "FaceBuck",
    link: "https://facebuck.matthewcotton.dev/#/",
    img: FaceBuck,
    imgAlt: "FaceBuck screenshot",
    description: "A spoof social media site. Built using React.",
    repo: "https://github.com/matthewcotton/social-site",
  },
  {
    title: "React Calculator",
    link: "https://calc.matthewcotton.dev/",
    img: Calculator,
    imgAlt: "React calculator screenshot",
    description: "A calculator built using React.",
    repo: "https://github.com/matthewcotton/react-calculator",
  },
  {
    title: "Redux To Don't List",
    link: "https://todontlist.matthewcotton.dev/",
    img: ToDontList,
    imgAlt: "Redux to don't list screenshot",
    description:
      "A 'To Don't List' built using Redux including local storage of tasks.",
    repo: "https://github.com/matthewcotton/redux-todo-list",
  },
  {
    title: "Any Excuse for a Pub Adventure",
    link: "https://pub.matthewcotton.dev/",
    img: PubAdventure,
    imgAlt: "Any excuse for a pub adventure screenshot",
    description:
      "A text-based adventure game based on exploring a pub based in Sheffield. Built using JavaScript.",
    repo: "https://github.com/matthewcotton/oop-text-adventure",
  },
  {
    title: "Whitchurch Quiz",
    link: "https://quiz.matthewcotton.dev/",
    img: WhitchurchQuiz,
    imgAlt: "Whitchurch quiz screenshot",
    description:
      "A quiz about my hometown (Whitchurch, Shropshire). Built using JavaScript.",
    repo: "https://github.com/matthewcotton/js-quiz",
  },
  {
    title: "Jenny & Matt's Foster Cats",
    link: "https://cats.matthewcotton.dev/index.html",
    img: Cats,
    imgAlt: "Jenny & Matt's foster cats' screenshot",
    description:
      "Over the last 3 years Jenny and I have been a foster home for eight of Toronto Cat Rescue's cats. This site includes a brief description of each cat and a selection of photos.",
    repo: "https://github.com/matthewcotton/hobby-site",
  },
  {
    title: "Caesar Cipher",
    link: "https://cipher.matthewcotton.dev/",
    img: Cipher,
    imgAlt: "Caesar cipher screenshot",
    description:
      "A site that will encode and decode a string of text with the given keys.",
    repo: "https://github.com/matthewcotton/ceaser-cipher",
  },
];

// eslint-disable-next-line
export default { projects };
