const projects = [
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/studenthub.png",
    title: "StudentHub",
    description:
      "Engineered a scalable student social platform using a microservices backend architecture and Docker containers, load-tested to support 1,000+ simulated concurrent users for real-time messaging and threaded discussions. Deployed serverless compute microservices via AWS Lambda, integrating Amazon S3 for media storage and WebSockets for low-latency event delivery and push notifications. Designed asynchronous background processing pipelines using Redis and BullMQ to handle high-throughput job queues, retries, and analytics workloads.",
    hosted: true,
    ghLink: "https://github.com/vin51435/StudentHub",
    demoLink: "https://studenhub-mauve.vercel.app/",
    isLiveEmbed: true,
    embedUrl: "https://studenhub-mauve.vercel.app/login",
    embedContainerStyle: {
      position: "relative",
      width: "100%",
      aspectRatio: "16/9",
      overflow: "hidden",
      borderRadius: "8px",
      border: "1px solid var(--border)",
      background: "#0c0c0d",
    },
    embedIframeStyle: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "142.85%",
      height: "142.85%",
      border: "none",
      transform: "scale(0.7)",
      transformOrigin: "top left",
      background: "#0c0c0d",
    },
  },
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720076856/portfolio%201/ProjectImg/moview.png",
    title: "Moview",
    description:
      "Moview is your ultimate destination for discovering the latest in movies and TV shows. The platform provides details about new releases, including ratings, cast information, and trailers. With sections highlighting popular, trending, and top-rated content, users can easily find what’s hot in the entertainment world.",
    hosted: true,
    ghLink: "https://github.com/vin51435/Moview",
    demoLink: "https://moview-two.vercel.app/",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/foodAlls.png",
    title: "Food Alls",
    description:
      "Food Alls is your go-to platform for discovering and sharing local food stalls. Explore a variety of stalls, read reviews, and contribute by adding your favorites. Whether you're a food enthusiast or a stall owner, Food Alls connects you with the best street food options available. Start your culinary adventure today!",
    hosted: true,
    ghLink: "https://github.com/vin51435/FoodAlls",
    demoLink: "https://food-alls.vercel.app/",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720263249/portfolio%201/ProjectImg/curlyhead.png",
    title: "E-Commerce Platform",
    description:
      "Developed a responsive e-commerce app with secure authentication and payment integration. Designed and implemented modular APIs and UI components with full CRUD support for users, products, and orders.",
    hosted: false,
    name: "curlyHeads",
    ghLink: "",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/dashboard.png",
    title: "Front-end Showcase",
    description:
      "This front-end dashboard showcases my skills in creating dynamic user interfaces with modern web technologies. It includes sections for product management, customer tracking, income analytics, and promotional tools, providing key metrics like earnings, orders, balance, and total sales.",
    hosted: true,
    ghLink: "https://github.com/vin51435/Dashboard-FrontPage-UsingReact",
    demoLink: "https://dashboard-front-page-using-react.vercel.app/",
  },
  {
    imgPath:
      "https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/cmpro.png",
    title: "College Management System (incomplete)",
    description:
      "The College Management System streamlines academic and administrative processes with separate logins for teachers and students, ensuring secure access. It manages attendance, class schedules, and personal profiles, while aiding academic progress tracking through performance analysis.",
    hosted: true,
    ghLink: "https://github.com/vin51435/CollegeManagement",
    demoLink: "https://college-management-psi.vercel.app/",
  },
];

const projectData = [
  {
    name: "curlyHeads",
    title: "E-Commerce Platform",
    subTitle:
      "Developed a responsive e-commerce app with secure authentication and payment integration",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Bootstrap",
    ],
    data: [
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259405/portfolio%201/curlyheadimg/1_jmwwnl.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/2_xi8dnz.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/3_sxkzq5.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259405/portfolio%201/curlyheadimg/4_srhpsj.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/5_yditkw.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/6_bjqpm8.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/7_tiy4zq.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/8_fdhori.png",
      },
      {
        imgSrc:
          "https://res.cloudinary.com/dwutvtryh/image/upload/v1720259404/portfolio%201/curlyheadimg/9_ymehqd.png",
      },
    ],
  },
];

export default projectData;
export { projects };
