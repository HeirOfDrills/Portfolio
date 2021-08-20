import glass from "../images/glass.png";

function convertToCards(projects) {
  return projects.map(({ title, description, screenshot }, index) => ({
    type: `project${index + 1}`,
    image: { src: screenshot, alt: `Screenshot of Trevor's ${title} app.` },
    body: {
      title,
      text: description,
    },
    flip: !!(index % 2),
  }));
}

export default function getProjects() {
  const projects = [
    {
      title: "Flashcards",
      screenshot: glass,
      repo: "https://github.com/TrevorGlascock/Project_Flashcards",
      deploy: "https://glasscard.vercel.app/",
      description: "This is sample text.",
    },
    {
      title: "Pomodoro Timer",
      screenshot: glass,
      repo: "https://github.com/TrevorGlascock/Project_Pomodoro_Timer",
      deploy: "https://dry-dusk-16081.herokuapp.com/",
      description: [
        "A Productivity Timer that allows a user to set the work and break time intervals.",
        "Designed the structure of each React Component.",
        "Optimized the app to avoid all race conditions and utilize state-controlled variables.",
        "Built using JavaScript, React, HTML, CSS, and Bootstrap.",
      ],
    },
  ];
  return convertToCards(projects);
}
