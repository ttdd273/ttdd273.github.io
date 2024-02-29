const Categories = {
  PersonalProjects: "Personal Projects",
  SchoolProjects: "School Projects",
  WorkExperience: "Work Experience",
};

const personalItems = [
  {
    category: Categories.PersonalProjects,
    projectName: "Handtracking Project",
    description:
      "This project utilizes python packages such as mediapipe to produce a hantracking module. Using the module, we are able to control the volume of the device we are on. Credits to: Murtaza Hassan",
  },
  {
    category: Categories.PersonalProjects,
    projectName: "Pong",
    description:
      "This is a very simple pong game made in python. Built using the pen module in python. Credits to: Christian Thompson",
  },
  {
    category: Categories.PersonalProjects,
    projectName: "Bill Splitter",
    description:
      "This is a very simple web application that splits the bill depending on various inputs.",
  },
];

const schoolItems = [
  {
    category: Categories.SchoolProjects,
    projectName: "Froggit",
    description:
      "This is a replica of the game Frogger we made in CS 1110, which utilizes the model view controller paradigm and include two different game modes including the frog as well as a turtle.",
  },
  {
    category: Categories.SchoolProjects,
    projectName: "What Makes a Successful Video Game?",
    description:
      "Employed machine learning models, including linear regression and time series prediction to identify the most influential features of YouTube videos (Jupyter Notebook, scikit-learn).",
  },
  {
    category: Categories.SchoolProjects,
    projectName: "Emission Analyzer",
    description:
      "This is a full stack application and it is essentially a wrapper around the EPA MOVES to enable policy makers to analyze the effects on emissions after changes in different policies.",
  },
];

const workExp = [
  {
    category: Categories.WorkExperience,
    projectName: "Yext",
    rightDescriptor: "SWE Intern",
    description:
      "Resolved infrastructure security vulnerabilities through use of monitoring tools (Sentry, Airflow, Snowflake). Reactifying products through cross-team communication and development life cycle involving code reviews in a fullstack framework (JIRA, Java, gRPC, Zendesk, Continuous Integration, Golang, Kubernetes).",
  },
  {
    category: Categories.WorkExperience,
    projectName: "Visa Inc.",
    rightDescriptor: "SWE Intern",
    description:
      "Designed and implemented chromium-based extension to improve accessibility for the Bookmarks web app resulting in a 45% increase in user count of Bookmarks (HTML, CSS, JavaScript). Collaborate with the End User Development Team to simplify the process for creating GDLs in WebAssembly, saving 30 work hours on average month for developers (C#, WebAssembly, .NET).",
  },
];

const portfolioItems = schoolItems.concat(workExp, personalItems);

export { portfolioItems, Categories };
