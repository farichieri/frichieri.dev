import { Projects } from "../types";
import { STACKS } from "./stacks";

const { FRONT_END, FULL_STACK, ACADEMIC } = STACKS;

export const myProjects: Projects = [
  {
    name: "Ecommerce w/ NextJs & GraphQL",
    slug: "ecommerce-template",
    image: "/images/projects/ecommerce-template/ecommerce-template.png",
    githubUrl: "",
    websiteUrl: "https://ecomm-template-nextjs.vercel.app/",
    technologies: ["Nextjs", "React", "Tailwindcss", "Typescript", "GraphQL"],
    stack: FRONT_END,
    description:
      "Freelance project for a client. Ecommerce built with NextJs 14, TypeScript, TailwindCSS & connected to a GraphQL API.",
  },
  {
    name: "nutritionplans.co",
    slug: "nutrition-plans",
    image: "/images/projects/nutrition-plans/nutrition-plans.png",
    githubUrl: "",
    websiteUrl: "https://www.nutritionplans.co/",
    technologies: [
      "Firebase",
      "Nextjs",
      "React",
      "Redux",
      "Stripe",
      "Tailwindcss",
      "Typescript",
      "Mdx",
      "Typesense",
      "React Native",
      "NodeJs",
      "NestJs",
      "MongoDB",
      "TypeORM",
      "JWT",
    ],
    stack: FULL_STACK,
    description:
      "A Saas Meal Planner Platform where you can choose the plan that you like (Balanced, Vegetarian, Mediterranean, Low-Carb, Gluten Free, etc.), adapt your diet with your body features, goals and meal settings, and get a personalized diet for your days which will be aiming to guide you to your goal. Feel free to create an account.",
  },
  {
    name: "lucasnazar.com",
    slug: "lucasnazardj",
    image: "/images/projects/lucasnazardj/lucasnazardj.png",
    githubUrl: "",
    websiteUrl: "https://www.lucasnazar.com/",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Firebase",
      "CSS",
    ],
    stack: FRONT_END,
    description: "A Dj personal website.",
  },
  {
    name: "improveme",
    slug: "improveme",
    image: "/images/projects/improveme/improveme.png",
    githubUrl: "https://github.com/farichieri/daily-tracker",
    websiteUrl: "https://improveme.vercel.app/",
    technologies: [
      "Next.js",
      "Typescript",
      "React.js",
      "Redux",
      "Tailwind",
      "CSS",
      "Firebase",
      "Mdx",
    ],
    stack: FULL_STACK,
    description:
      "A Task management app where you can plan your days, track tasks, and follow your progress. Feel free to create an account.",
  },
  {
    name: "almarichnutricion.com",
    slug: "almarich-nutricion",
    image: "/images/projects/almarichnutricion/almarich-nutricion.png",
    githubUrl: "",
    websiteUrl: "https://www.almarichnutricion.com/",
    technologies: ["Next.js", "Typescript", "React.js", "Firebase"],
    stack: FRONT_END,
    description: "A Nutritionist personal website.",
  },
  {
    name: "Computechshop",
    slug: "computechshop",
    image: "/images/projects/computechshop/computechshop.png",
    githubUrl: "https://github.com/FARichieri/CompuTechShop",
    websiteUrl: "https://www.youtube.com/watch?v=0lUWnxA4_tI",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Material-UI",
      "PostgreSQL",
      "Express",
      "Sequelize",
      "Mercadopago",
    ],
    stack: ACADEMIC,
    description:
      "An E-commerce of computer products built as the final project of the #soyHenry Full Stack Development Bootcamp. It has an /admin panel with variety of control of stocks and users. (Backend off).",
  },
  {
    name: "Pokemon PI",
    slug: "pokemon-pi",
    image: "/images/projects/pokemon/pokemon-pi.png",
    githubUrl: "https://github.com/FARichieri/PI-Pokemon",
    websiteUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:6921812562049179649/",
    technologies: [
      "React.js",
      "JavaScript",
      "PostgreSQL",
      "Sequelize",
      "Express",
    ],
    stack: ACADEMIC,
    description:
      "Individual project for the #soyHenry Full Stack Development Bootcamp. Implementing CRUD operations. (Backend off)",
  },
  {
    name: "Marketing Services",
    slug: "marketing-services",
    image: "/images/projects/marketing-services/marketing-services.png",
    githubUrl: "https://github.com/farichieri/simple-marketing-services",
    websiteUrl: "https://marketing-services-test.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    stack: FRONT_END,
    description:
      "Simple website required by a recruitment process. (Not responsive)",
  },
  {
    name: "Random Quote Machine",
    slug: "random-quote-machine",
    image: "/images/projects/random-quote-machine/random-quote-machine.png",
    githubUrl: "https://github.com/farichieri/Random-Quote-Machine",
    websiteUrl: "https://random-quote-machine-xi.vercel.app/",
    technologies: ["JavaScript", "React", "Css"],
    stack: ACADEMIC,
    description:
      "Random Quote Machine made for the freeCodeCamp Front End Development Libraries certification.",
  },
  {
    name: "Pomodoro Clock",
    slug: "pomodoro-clock",
    image: "/images/projects/pomodoro-clock/pomodoro-clock.png",
    githubUrl: "https://github.com/farichieri/pomodoro-clock",
    websiteUrl: "https://frichieri-pomodoro-clock.vercel.app/",
    technologies: ["JavaScript", "React", "Css"],
    stack: ACADEMIC,
    description:
      "Pomodoro clock made for the freeCodeCamp Front End Development Libraries certification.",
  },
  {
    name: "JavaScript Calculator",
    slug: "javascript-calculator",
    image: "/images/projects/javascript-calculator/javascript-calculator.png",
    githubUrl: "https://github.com/farichieri/javascript-calculator",
    websiteUrl: "https://frichieri-javascript-calculator.vercel.app/",
    technologies: ["JavaScript", "React", "Css"],
    stack: ACADEMIC,
    description:
      "JavaScript Calculator made for the freeCodeCamp Front End Development Libraries certification.",
  },
  {
    name: "Drum Machine",
    slug: "drum-machine",
    image: "/images/projects/drum-machine/drum-machine.png",
    githubUrl: "https://github.com/farichieri/drum-machine",
    websiteUrl: "https://drum-machine-frichieri.vercel.app/",
    technologies: ["JavaScript", "React", "Css"],
    stack: ACADEMIC,
    description:
      "Drum Machine made for the freeCodeCamp Front End Development Libraries certification.",
  },
  {
    name: "Markdown Previewer",
    slug: "markdown-previewer",
    image: "/images/projects/markdown-previewer/markdown-previewer.png",
    githubUrl: "https://github.com/farichieri/markdown-previewer",
    websiteUrl: "https://frichieri-markdown-previewer.vercel.app/",
    technologies: ["JavaScript", "React", "Css"],
    stack: ACADEMIC,
    description:
      "Markdown Previewer made for the freeCodeCamp Front End Development Libraries certification.",
  },
  {
    name: "Bar Chart Graph",
    slug: "bar-chart",
    image: "/images/projects/bar-chart/bar-chart.png",
    githubUrl: "https://github.com/farichieri/data-visualization__bar-chart",
    websiteUrl: "https://data-visualization-bar-chart.vercel.app/",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    stack: ACADEMIC,
    description:
      "Bar Chart Graph project made for the Data Visualization freeCodeCamp certification.",
  },
  {
    name: "Scatter Plot Graph",
    slug: "scatter-plot",
    image: "/images/projects/scatterplot/scatter-plot.png",
    githubUrl:
      "https://github.com/farichieri/data-visualization__scatterplot-graph",
    websiteUrl: "https://data-visualization-scatterplot-graph.vercel.app/",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    stack: ACADEMIC,
    description:
      "Scatter Plot Graph project made for the Data Visualization freeCodeCamp certification.",
  },
  {
    name: "Heat Map Graph",
    slug: "heat-map",
    image: "/images/projects/heat-map/heat-map.png",
    githubUrl: "https://github.com/farichieri/data-visualization__heat-map",
    websiteUrl: "https://data-visualization-heat-map.vercel.app/",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    stack: ACADEMIC,
    description:
      "Heat Map Graph project made for the Data Visualization freeCodeCamp certification.",
  },
  {
    name: "Tree map Graph",
    slug: "tree-map",
    image: "/images/projects/tree-map/tree-map.png",
    githubUrl:
      "https://github.com/farichieri/data-visualization__treemap-diagram",
    websiteUrl: "https://data-visualization-treemap-diagram.vercel.app/",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    stack: ACADEMIC,
    description:
      "Tree Map Graph project made for the Data Visualization freeCodeCamp certification.",
  },
  {
    name: "Choropleth Map Graph",
    slug: "choropleth-map",
    image: "/images/projects/choropleth-map/choropleth-map.png",
    githubUrl:
      "https://github.com/farichieri/data-visualization__choropleth-map",
    websiteUrl: "https://data-visualization-choropleth-map.vercel.app/",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    stack: ACADEMIC,
    description:
      "Choropleth Map Graph project made for the Data Visualization freeCodeCamp certification.",
  },
  {
    name: "Timestamp Microservice",
    slug: "timestamp-microservice",
    image: "/images/projects/timestamp-microservice/timestamp-microservice.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-timestamp",
    websiteUrl: "https://data-visualization-choropleth-map.vercel.app/",
    technologies: ["Node.js", "Express"],
    stack: ACADEMIC,
    description:
      "Timestamp Microservice project made for the Back End Development and APIs freeCodeCamp certification.",
  },
  {
    name: "Url Shortener",
    slug: "url-shortener",
    image: "/images/projects/url-shortener/url-shortener.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-urlshortener",
    websiteUrl: "https://boilerplate-project-urlshortener.farichieri.repl.co/",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    stack: ACADEMIC,
    description:
      "Url Shortener project made for the Back End Development and APIs freeCodeCamp certification.",
  },
  {
    name: "Header Parser",
    slug: "header-parser",
    image: "/images/projects/header-parser/header-parser.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-headerparser",
    websiteUrl: "https://boilerplate-project-headerparser.farichieri.repl.co/",
    technologies: ["Node.js", "Express"],
    stack: ACADEMIC,
    description:
      "Header Parser project made for the Back End Development and APIs freeCodeCamp certification.",
  },
  {
    name: "Exercise Tracker",
    slug: "exercise-tracker",
    image: "/images/projects/exercise-tracker/exercise-tracker.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-filemetadata",
    websiteUrl:
      "https://boilerplate-project-exercisetracker.farichieri.repl.co/",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    stack: ACADEMIC,
    description:
      "Exercise Tracker project made for the Back End Development and APIs freeCodeCamp certification.",
  },
  {
    name: "File Metadata",
    slug: "file-metadata",
    image: "/images/projects/file-metadata/file-metadata.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-filemetadata",
    websiteUrl: "https://boilerplate-project-filemetadata.farichieri.repl.co/",
    technologies: ["Node.js", "Express"],
    stack: ACADEMIC,
    description:
      "File Metadata project made for the Back End Development and APIs freeCodeCamp certification.",
  },
  {
    name: "Metric/Imperial Converter",
    slug: "metric-imperial-converter",
    image:
      "/images/projects/metric-imperial-converter/metric-imperial-converter.png",
    githubUrl: "https://github.com/farichieri/boilerplate-metricimpconverter",
    websiteUrl: "https://boilerplate-metricimpconverter.farichieri.repl.co/",
    technologies: ["Node.js", "Express", "Chai"],
    stack: ACADEMIC,
    description:
      "Metric Imperial Converter project made for the Quality Assurance freeCodeCamp certification.",
  },
  {
    name: "Issue Tracker",
    slug: "issue-tracker",
    image: "/images/projects/issue-tracker/issue-tracker.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-issuetracker",
    websiteUrl: "https://boilerplate-project-issuetracker.farichieri.repl.co/",
    technologies: ["Node.js", "Express", "MongoDB", "mongoose", "Chai"],
    stack: ACADEMIC,
    description:
      "Issue Tracker project made for the Quality Assurance freeCodeCamp certification.",
  },
  {
    name: "Sudoku Solver",
    slug: "sudoku-solver",
    image: "/images/projects/sudoku-solver/sudoku-solver.png",
    githubUrl:
      "https://github.com/farichieri/boilerplate-project-sudoku-solver",
    websiteUrl: "https://boilerplate-project-sudoku-solver.farichieri.repl.co/",
    technologies: ["Node.js", "Express", "Chai"],
    stack: ACADEMIC,
    description:
      "Sudoku Solver project made for the Quality Assurance freeCodeCamp certification.",
  },
  {
    name: "American British English Translator",
    slug: "american-british-english-translator",
    image:
      "/images/projects/american-british-english-translator/american-british-english-translator.png",
    githubUrl:
      "https://github.com/farichieri/boilerplate-project-american-british-english-translator",
    websiteUrl:
      "https://boilerplate-project-american-british-english-translator.farichieri.repl.co",
    technologies: ["Node.js", "Express", "Chai"],
    stack: ACADEMIC,
    description:
      "American British English Translator project made for the Quality Assurance freeCodeCamp certification.",
  },
  {
    name: "Stock-checker",
    slug: "stock-checker",
    image: "/images/projects/stock-checker/stock-checker.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-stockchecker",
    websiteUrl: "https://boilerplate-project-stockchecker.farichieri.repl.co",
    technologies: ["Node.js", "Express", "Chai"],
    stack: ACADEMIC,
    description:
      "Stock checker project made for the Quality Assurance freeCodeCamp certification.",
  },
  {
    name: "Anonymous Message Board",
    slug: "anonymous-message-board",
    image:
      "/images/projects/anonymous-message-board/anonymous-message-board.png",
    githubUrl: "https://github.com/farichieri/boilerplate-project-messageboard",
    websiteUrl: "https://boilerplate-project-messageboard.farichieri.repl.co",
    technologies: ["Node.js", "Express", "Chai"],
    stack: ACADEMIC,
    description:
      "Anonymous Message Board project made for the Quality Assurance freeCodeCamp certification.",
  },
];
