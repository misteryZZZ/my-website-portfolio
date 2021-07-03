/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hendriawan Yudhistira",
  title: "Hi world! I'm Hendri",
  subTitle: emoji(
    "a grown up boy who passionate about Frontend Programming. Having experience with PHP, Javasript, HTML, and CSS. So yeah, welcome to my portofolio website!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1d7aK3Ee50LmJO7DywW3TQ5zibZ4OLdxh/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/misteryZZZ",
  linkedin: "https://www.linkedin.com/in/hendriawan13",
  gmail: "hendriawany@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  instagram: 'https://www.instagram.com/hendriyudhis/',
  twitter: 'https://twitter.com/hendriyudhis',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Right now i just keep pushing myself to the limits about coding",
  skills: [
    emoji(
      "⚡ Develop website using Codeigniter Framework"
    ),
    emoji("⚡ Create an app with React JS and React Native"),
    emoji(
      "⚡ Make a frontend of the website like this!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Gunadarma",
      logo: require("./assets/images/gunadarmaLogo.png"),
      subHeader: "Bachelor Degree in Computer System",
      duration: "2017 - Now",
      desc: "Doin a lot of stuff at campus. Which is join campus organization, be a freelancer, and just keep learning some programming",
      descBullets: [
        "My Current GPA : 3.09"
      ]
    },
    {
      schoolName: "SMKN 1 Cibinong",
      logo: require("./assets/images/kampakLogo.png"),
      subHeader: "Major in Sofrware Enggineering",
      duration: "2014 - 2017",
      desc:
        "Doing average at high school. Having experience in internship for 3 months period at BKKBN (Badan Koordinasi Keluarga Berencana Nasional). ",
      descBullets: ["My Total Grade : 84.25/100"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Staff in Department of Sports",
      company: "BEM FIKTI University of Gunadarma",
      companylogo: require("./assets/images/olahragaLogo.png"),
      date: "2018 - 2019",
      desc:
        "Creating sport's program for the better health to student's",
      descBullets: [
        "Develop Futsal FIKTI Program",
        "Committee of Fikti Open Sport Competition",
        "Committee of Gunadarma Olympic"
      ]
    },
    {
      role: "Deputy in Department of Sports",
      company: "BEM FIKTI University of Gunadarma",
      companylogo: require("./assets/images/olahragaLogo.png"),
      date: "2019 - 2020",
      desc:
        "Vice leader's in sports department. Helping the leader to manage all of the staff in Sports Department"
    },
    {
      role: "Chief of Interest & Talents Field",
      company: "BEM FIKTI University of Gunadarma",
      companylogo: require("./assets/images/akademikLogo.png"),
      date: "2020 - 2021",
      desc:
        "I've manage 3 department's which is Department of Sports, Department of Academic, and Department of Culture"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};



// Some big projects you have worked on

const bigProjects = {
  title: "Recent Portofolio",
  subtitle: "During my study i was created some portofolio, and i will upload more very soon. Incase you might wanna peek it some of my portofolio's :",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "Library Administration",
      projectDesc: "Administration system for librarian to manage transaction of the borrower. But this is just hardcode, feel free to checkout my GitHub. Thank you!",
      footerLink: [
        {
          name: "Visit Source Code",
          url: "https://github.com/misteryZZZ/Perpus-Master"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "Covid - 19 Tracker",
      projectDesc: "This website is have a simple function. Just track the activity for Covid - 19 cases in all over the world. For the data i use API that i pull out from disease.sh",
      footerLink: [
        {
          name: "Visit Source Code",
          url: "https://github.com/misteryZZZ/covid-19-tracker-reactjs"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Spotify Page Clone",
      projectDesc: "This is just the clone of the spotify playlist front page. I make it with React JS.",
      footerLink: [
        {
          name: "Visit Source Code",
          url: "https://github.com/misteryZZZ/spotify-clone-temp"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Not only interested in coding, it was fun to blogging and writing stuff that you like",

  blogs: [
    {
      url:
        "https://gakepikir.wordpress.com/2018/02/20/funfact-apa-saja-keuntungan-dari-belajar-coding/",
      title: "Apa Saja Keuntungan Dari Belajar Coding?",
      description:
        " Pada artikel ini kita akan membahas, apa saja ‘benefits’ atau keuntungan dengan mempelajari coding? Let’s check it out!"
    },
    {
      url: "https://gakepikir.wordpress.com/2018/03/11/spesial-technofair-apa-yang-akan-terjadi-jika-dunia-ini-di-kuasai-oleh-ai/",
      title: "Apa Yang Akan Terjadi Jika Dunia Ini Di Kuasai Oleh AI?",
      description:
        "Apa yang akan terjadi jika para robot hidup berdampingan dengan manusia? Hal itu masih diperdebatkan oleh para ahli dan juga beberapa orang di seluruh dunia sampai sekarang."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to offer some work or just want to say hi? My Inbox is open for all.",
  number: "+62 8515 6143 051",
  email_address: "hendriawany@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "hendriyudhis", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
