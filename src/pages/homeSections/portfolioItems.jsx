const Categories = {
  All: "All",
  PersonalProjects: "Personal Projects",
  SchoolProjects: "School Projects",
  WorkExperience: "Work Experience",
};

const personalItems = [
  {
    category: Categories.PersonalProjects,
    projectName: "Handtracking Project",
    description:
      "Built a Python hand-tracking module with MediaPipe and OpenCV, then used gesture input to control device volume.",
  },
  {
    category: Categories.PersonalProjects,
    projectName: "Pong",
    description:
      "Built a Python Pong game focused on collision handling, score state, and keyboard-driven interaction.",
  },
  {
    category: Categories.PersonalProjects,
    projectName: "Bill Splitter",
    description:
      "Created a web app for splitting bills across people, tips, and shared costs.",
  },
];

const schoolItems = [
  {
    category: Categories.SchoolProjects,
    projectName: "Froggit",
    description:
      "Built a Frogger-inspired game using model-view-controller structure and multiple gameplay modes.",
  },
  {
    category: Categories.SchoolProjects,
    projectName: "What Makes a Successful Video Game?",
    description:
      "Used regression and time-series models in Jupyter and scikit-learn to analyze factors tied to video game performance.",
  },
  {
    category: Categories.SchoolProjects,
    projectName: "Emission Analyzer",
    description:
      "Built a full-stack wrapper around EPA MOVES so policy teams can evaluate emissions impacts from policy changes.",
  },
];

const workExp = [
  {
    category: Categories.WorkExperience,
    projectName: "Yext",
    rightDescriptor: "SWE Intern",
    description:
      "Resolved infrastructure security vulnerabilities with Sentry, Airflow, and Snowflake, and contributed to React migration work across Java, Go, gRPC, and Kubernetes services.",
  },
  {
    category: Categories.WorkExperience,
    projectName: "Visa Inc.",
    rightDescriptor: "SWE Intern",
    description:
      "Designed a Chromium extension that improved accessibility for the Bookmarks web app and collaborated on WebAssembly tooling that reduced developer workflow time.",
  },
];

const portfolioItems = schoolItems.concat(workExp, personalItems);

export { portfolioItems, Categories };
