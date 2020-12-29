import FaceBuck from "./resources/facebuck-screenshot.jpg";
import PubAdventure from "./resources/text-adventure-screenshot.jpg";
import WhitchurchQuiz from "./resources/whitchurch-quiz-screenshot.jpg";
import Calculator from "./resources/calculator-screenshot.jpg";
import Cats from "./resources/foster-cats-screenshot.jpg";
import Cipher from "./resources/cipher-screenshot.jpg";
import ToDontList from "./resources/todontlist-screenshot.JPG";

const projects = [
    {
      title: "FaceBuck",
      link: "https://facebuck.matthewcotton.dev/#/",
      img: FaceBuck,
      imgAlt: "FaceBuck screenshot",
      description: "A spoof social media site. Built using React.",
    },
    {
      title: "React Calculator",
      link: "https://calc.matthewcotton.dev/",
      img: Calculator,
      imgAlt: "React calculator screenshot",
      description: "A calculator built using React.",
    },
    {
      title: "Redux To Don't List",
      link: "https://todontlist.matthewcotton.dev/",
      img: ToDontList,
      imgAlt: "Redux to don't list screenshot",
      description: "A 'To Don't List' built using Redux including local storage of tasks.",
    },
    {
      title: "Any Excuse for a Pub Adventure",
      link: "https://pub.matthewcotton.dev/",
      img: PubAdventure,
      imgAlt: "Any excuse for a pub adventure screenshot",
      description:
        "A text-based adventure game based on exploring a pub based in Sheffield. Built using JavaScript.",
    },
    {
      title: "Whitchurch Quiz",
      link: "https://quiz.matthewcotton.dev/",
      img: WhitchurchQuiz,
      imgAlt: "Whitchurch quiz screenshot",
      description:
        "A quiz about my hometown (Whitchurch, Shropshire). Built using JavaScript.",
    },
    {
      title: "Jenny & Matt's Foster Cats",
      link: "https://cats.matthewcotton.dev/index.html",
      img: Cats,
      imgAlt: "Jenny & Matt's foster cats' screenshot",
      description:
        "Over the last 3 years Jenny and I have been a foster home for eight of Toronto Cat Rescue's cats. This site includes a brief description of each cat and a selection of photos.",
    },
    {
      title: "Caesar Cipher",
      link: "https://cipher.matthewcotton.dev/",
      img: Cipher,
      imgAlt: "Caesar cipher screenshot",
      description:
        "A site that will encode and decode a string of text with the given keys.",
    },
  ];

// eslint-disable-next-line
export default { projects };
