const snackCSS = {
  title: "CSS Frameworks",
  category: "CSS",
  snacks: [
    {
      imageUrl: "https://thumbs4.imagebam.com/e5/f5/aa/ME8JL7A_t.png",
      subtitle: "Bootstrap",
      description:
        " Twitter introduced the framework in 2011 to make responsive web design easily accessible to developers.",
    },
    {
      imageUrl: "https://thumbs4.imagebam.com/a8/64/46/ME8JL7C_t.png",
      subtitle: "Bulma",
      description:
        "Bulma is a great alternative to Bootstrap, as it features modern code and a unique aesthetic. It’s easy to use and import into your projects and comes with various pre-made components.",
    },
    {
      imageUrl:
        "https://seeklogo.com/images/F/foundation-logo-AA9B725281-seeklogo.com.png",
      subtitle: "Foundation",
      description:
        "Foundation is recommended for experienced developers who enjoy freedom but want the power of a fully-featured framework.",
    },
  ],
};

const snackTest = {
  title: "Em vs Rem",
  category: "Responsive design",
  snacks: [
    {
      subtitle: "Em",
      description:
        "The size is relative to the font size of the parent element.",
    },
    {
      subtitle: "Rem",
      description:
        "The size is relative to the font size of the root <html> element.",
    },
  ],
};

const snackTechPlatforms = {
  title: "Platforms to learn coding",
  category: "General",
  snacks: [
    {
      imageUrl:
        "https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/PS_logo_F-01.png",
      subtitle: "Pluralsight",
      description:
        "Technology learning platform for software developers, IT admins, and creative professionals. \
        With 3,000+ courses and new ones added daily.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Codecademy.svg/1200px-Codecademy.svg.png",
      subtitle: "Codeacademy",
      description:
        "Web and mobile-based platform that teaches employable digital skills to millions of users worldwide.",
    },
    {
      imageUrl:
        "https://seeklogo.com/images/L/lynda_com-logo-9336EB3940-seeklogo.com.png",
      subtitle: "LinkedIn Learning",
      description:
        "LinkedIn Learning was founded in 2015 as the successor of Lynda.com, an e-learning platform \
        by LinkedIn 20 years after its inception..",
    },
  ],
};
const snackWCAG = {
  title: "4 Principles of Accesibility (WCAG)",
  category: "Accesibility",
  snacks: [
    {
      subtitle: "Perceivable",
      description:
        "Content must be consumable by screen readers and other assistive technologies.",
    },
    {
      subtitle: "Operable",
      description:
        "Keyboard accesible. Control animations, and provide enought time limits for completing actions like submitting forms.",
    },
    {
      subtitle: "Understandable",
      description:
        "Use clear and concise language. Provide clear labels and understandable flows",
    },
    {
      subtitle: "Robust",
      description: "Clean code consumable across different platforms",
    },
  ],
};

const snackJSFrameworks = {
  title: "JS Frameworks Learning Curve",
  category: "JavaScript",
  snacks: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
      subtitle: "Vue",
      description:
        "Vue.js syntax is similar to JavaScript basics and HTML. Then, it has the learning Curve. ",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      subtitle: "React",
      description:
        "The learning curve is considered intermediate. The React strategy is: 'everything is JavaScript'.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      subtitle: "Angular",
      description:
        "The ussage of TypeScript makes Angular the more difficult among these three frameworks.",
    },
  ],
};

const snackJSDate = {
  title: "JS Date Libraries",
  category: "JavaScript",
  snacks: [
    {
      imageUrl: "https://www.drupal.org/files/project-images/moment.png",
      subtitle: "Moment",
      description:
        "Popular Library used by many developers for more than 9 years.",
    },
    {
      imageUrl:
        "https://www.bypeople.com/wp-content/uploads/2018/10/date-fns-js-featured-4.png",
      subtitle: "Date-fns",
      description:
        "A simple and consisten set of tools for manupulating tools.",
    },
    {
      imageUrl:
        "https://moment.github.io/luxon/docs/_media/Luxon_icon_64x64.png",
      subtitle: "Luxon",
      description:
        "A powerful, modern, and friendly wrapper for JavaScript dates and times.",
    },
  ],
};

const snackContrastChecker = {
  title: "Check your website color contrast ratio",
  category: "Accesibility",
  snacks: [
    {
      imageUrl: "https://webaim.org/media/logo.png",
      subtitle: "webaim.org",
      description:
        "Type in the RGB hexadecimal codes for both the foreground and background colors.",
    },
    {
      imageUrl: "https://userway.org/brand/userway_logo.png",
      subtitle: "userway.org",
      description:
        "Type in the RGB hexadecimal codes for both the foreground and background colors.",
    },
    {
      imageUrl:
        "https://1000marcas.net/wp-content/uploads/2020/01/logo-Mozilla-Firefox.png",
      subtitle: "Plugin for Firefox",
      description:
        "Checks for compliance with the contrast levels, brightness and shine in the color combination of foreground and background ",
    },
  ],
};

const reactHooks = {
  title: "React hooks",
  category: "React",
  snacks: [
    {
      subtitle: "useRef()",
      description:
        "We need useRef() when we want to keep a live referene to a DOM Element or when we need \
        to store state values and not trigger re-renders.",
    },
    {
      subtitle: "useContext()",
      description:
        "useContext() lets you subscribe to React context without introducing nesting.",
    },
    {
      subtitle: "useEffect()",
      description:
        "useEffect() adds the ability to perform side effects from a function component. ",
    },
  ],
};

const jsVariablesScope = {
  title: "JavaScript Variable Scope",
  category: "JavaScript",
  snacks: [
    {
      subtitle: "Global Scope",
      description:
        "A variable declared at the top of a program or outside of a function.",
    },
    {
      subtitle: "Local Scope",
      description: "A variable declared and accessed within a function.",
    },
    {
      subtitle: "Block Scope",
      description:
        "Variables that are accesed only in the inmediate block \
        The keywords 'let' and ''const' provide Block Scope in JavaScript.",
    },
  ],
};

const reactEvents = {
  title: "Synthetic Events vs Native Events",
  category: "React",
  snacks: [
    {
      subtitle: "Synthetic React Events",
      description:
        "A synthetic event is a cross-browser wrapper around the browser's native event.\
      It has the same interface as the browser's native event, including stopPropagation() and preventDefault(), \
      except the events work identically across all browsers.",
    },
    {
      subtitle: "Browser Native Events",
      description:
        "Native events are the ones that the browser generates, such as click mouseover , mouseup etc. \
        The full list of those can be found on the MDN Event reference page.",
    },
  ],
};

const reactTrends1 = {
  title: "React Trends (Part I)",
  category: "React, Trends",
  snacks: [
    {
      subtitle: "React Server Side Rendering",
      description:
        "React server-side rendering is set to gain more market acceptance in the coming years. ",
    },
    {
      subtitle: "Single-Page Applications (SPA) in a vast number of business",
      description:
        "SPAs allow users to consume information quickly without constantly loading new pages. \
        Thus, it ensures a smooth user experience. ",
    },
    {
      subtitle: "Machine Learning Web Applications Using ReactJs",
      description:
        "With this technology, you can build high-performing web applications that predict\
         outcomes and find solutions to problems.",
    },
  ],
};

const infoSnacks = [
  snackCSS,
  snackTest,
  snackTechPlatforms,
  snackWCAG,
  snackJSFrameworks,
  snackJSDate,
  snackContrastChecker,
  reactHooks,
  jsVariablesScope,
  reactEvents,
];

export default infoSnacks;
