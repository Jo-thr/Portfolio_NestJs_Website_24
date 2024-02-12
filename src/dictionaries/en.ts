import { Media } from './media'

const EN = {
  home: {
    heroBanner: {
      me: "I'm a",
      dev: 'developper',
      autodidacte: 'Self taught',
    },
    aboutSection: {
      subtitle: 'About',
      title: 'How can I help you?',
      text: `I'm a Front-End web developer specialising in the React programming language - a language that will allow your project to be extremely fast, and easily maintainable, the perfect recipe for making a difference these days, in every way.
      I learn and integrate the latest technologies and techniques to reduce web page load times. I use my knowledge and tools to save development time, in particular through pre-processors and with the help of custom front-end frameworks that I use for each new project.
      In very general terms, I'm the right partner to create all types of web projects, from the simple creation of a website to a web application. However, my area of expertise encompasses projects that are "tailor-made", "connected to other services (API)" and above all "at the cutting edge of technology"`,
    },
    skillSection: {
      subtitle: 'Skills',
      title: 'Learning is about curiosity and passion',
      tags: [
        { id: '01', name: 'All' },
        { id: '02', name: 'Back' },
        { id: '03', name: 'CMS' },
        { id: '04', name: 'Data' },
        { id: '05', name: 'Design' },
        { id: '06', name: 'Devops - CI/CD' },
        { id: '07', name: 'Front' },
        { id: '08', name: 'Tool' },
      ],
      skills: [
        { id: '01', name: 'Axeptio', domain: 'Data', fav: false },
        { id: '02', name: 'Contentful', domain: 'CMS', fav: true },
        {
          id: '03',
          name: 'Docker',
          domain: 'Devops - CI/CD',
          fav: true,
        },
        { id: '04', name: 'Figma', domain: 'Design', fav: true },
        {
          id: '05',
          name: 'GitHub GitLab',
          domain: 'Devops - CI/CD',
          fav: true,
        },
        {
          id: '06',
          name: 'Google Tag Manager',
          domain: 'Data',
          fav: false,
        },
        { id: '07', name: 'GraphQL', domain: 'Data', fav: false },
        { id: '08', name: 'Gsap', domain: 'Front', fav: false },
        { id: '09', name: 'Hubspot', domain: 'Data', fav: false },
        { id: '10', name: 'Jira', domain: 'Tool', fav: false },
        { id: '11', name: 'Laravel', domain: 'Back', fav: false },
        { id: '12', name: 'Miro', domain: 'Tool', fav: false },
        { id: '13', name: 'Node.js', domain: 'Back', fav: false },
        {
          id: '14',
          name: 'Netlify',
          domain: 'Devops - CI/CD',
          fav: true,
        },
        { id: '15', name: 'Next.js', domain: 'Front', fav: true },
        { id: '16', name: 'Notion', domain: 'Tool', fav: false },
        { id: '17', name: 'Nuxt.js', domain: 'Front', fav: false },
        { id: '18', name: 'Payload', domain: 'CMS', fav: true },
        { id: '19', name: 'React.js', domain: 'Front', fav: true },
        { id: '20', name: 'Sass', domain: 'Front', fav: false },
        { id: '21', name: 'Slack', domain: 'Tool', fav: false },
        { id: '22', name: 'SQL', domain: 'Data', fav: true },
        { id: '23', name: 'Storyblok', domain: 'CMS', fav: false },
        { id: '24', name: 'Storybook', domain: 'Front', fav: false },
        { id: '25', name: 'Strapi', domain: 'CMS', fav: true },
        { id: '26', name: 'Suite Adobe', domain: 'Design', fav: true },
        { id: '27', name: 'Tailwind', domain: 'Front', fav: true },
        { id: '28', name: 'Teams', domain: 'Tool', fav: false },
        { id: '29', name: 'Trello', domain: 'Tool', fav: false },
        { id: '30', name: 'Typescript', domain: 'Front', fav: true },
        {
          id: '31',
          name: 'Vercel',
          domain: 'Devops - CI/CD',
          fav: false,
        },
        { id: '32', name: 'Vue.js', domain: 'Front', fav: true },
      ],
    },
    projectSection: {
      subtitle: 'Selected works',
      title: "There's nothing like an overview",
    },
  },
  summary: [
    {
      id: '01',
      title: 'About',
      link: '/about',
    },
    {
      id: '02',
      title: 'Skills',
      link: '/skills',
    },
    {
      id: '03',
      title: 'CV',
      link: '/cv',
    },
    {
      id: '04',
      title: 'Selected works',
      link: '/works',
    },
    {
      id: '05',
      title: 'Contact',
      link: 'Portfolio | Contact us | [Your subject here]',
    },
  ],

  footer: {
    adressTitle: 'Address',
    adress: {
      area: 'Haute-Savoie',
      city: 'Bonneville, FR',
    },
    linksTitle: 'Liens',
    links: [
      {
        id: '01',
        title: 'About',
        link: '/#aboutSection',
      },
      {
        id: '02',
        title: 'CV',
        link: '/cv',
      },
      {
        id: '03',
        title: 'Skills',
        link: '/#skillSection',
      },
      {
        id: '04',
        title: 'Selected works',
        link: '/#projectSection',
      },
    ],
    socialsTitle: 'Social networks',
    socials: [
      {
        id: '01',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jonathan-thuayre-374739b0/',
      },
      {
        id: '02',
        title: 'GitHub',
        link: 'https://github.com/Jo-thr',
      },
      {
        id: '03',
        title: 'Instagram',
        link: 'https://www.instagram.com/jonathan.thr/',
      },
      {
        id: '04',
        title: 'Twitter / X',
        link: 'https://twitter.com/john_thr',
      },
    ],
    contactTitle: 'Contact',
    contact: {
      title: 'Contact me',
      contactForm: 'Portfolio | Contact us | [Your subject here]',
    },
    copyright: '2023 @ JOTHR. ALL RIGHT RESERVED',
  },
  projects: [
    // FTV
    {
      id: 1,
      slug: 'francetv',
      name: 'France TV Lab',

      poste: 'FrontEnd Developper',
      year: '2021-2022',
      site: 'https://www.francetvlab.fr',
      repo: 'https://github.com/Jo-thr/francetv',
      techno: {
        front: 'Nuxt.Js, TailwindCss',
        back: 'Laravel 7, Laravel Nova',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Miro, Jira',
      },

      mission:
        'Redesigning the France TV Lab website to be more intuitive, to meet many criteria of accessibility and interactive videos (their domain). Use of the Vue.js framework with tailwinds for the front and Laravel Nova for the back.',
      short_description: "Everyone knows France TV, but what's France Tv Lab?",
      description:
        "The FTV Lab is the blog dedicated to the innovation of France Television. It's a collaborative platform, with a simplified administration, developed and deployed in 3 months. To serve its strategic positioning in the context of the merger of France Télévisions and Radio France, France TV wanted to redesign its innovation platform.\nThe project was conducted in agile mode in a context of mature business needs and a strong commitment in terms of scope/timing.\n The success of this project led FTV info to entrust two other projects of bigger scale to Wizards Technologies teams. Thus, we have renovated the application in order to make it lighter, more dynamic and powerful.",
      contribution: `Implementation of a frontend stack in Nuxt.Js and TailwindCss, covering all the Ui requirements of the project. Creation of dynamic pages with a common structure, so as to be able to administer as many articles as possible without requiring the intervention of a developer. Emphasis on accessibility, a key issue for the client. Restructured the backend for the creation of new content based on content supplied by the customer in Miro. Defined page types and structures for efficient content deployment.
      Daily discussions with the team and the customer to monitor what was being achieved, what was blocking or progressing.`,

      img: {
        color: '#0123FF',
        logo: Media.FTV.logo,
        cover: Media.FTV.IF,
      },

      projet: [
        { img: Media.FTV.proj[0], title: 'Topics Page' },
        { img: Media.FTV.proj[1], title: 'Article Page' },
      ],
    },
    // LSDA
    {
      id: 2,
      slug: 'lesitedelauto',
      name: "Le Site de l'Auto",

      poste: 'Développeur FullStack',
      site: 'https://www.lesitedelauto.fr/',
      repo: 'https://github.com/Jo-thr/LeSiteDeLAuto',
      year: '2023',
      techno: {
        front: 'Next.Js, TailwindCss, TypeScript',
        back: 'PayloadCMS',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Notion, GoogleTag Manager',
      },

      mission: `
      • Creation of a front-end to display dynamic website content without the need for developer intervention (NextJs / TailwindCss / TypeScript).
      • Creation and administration of a backend and turnkey resources for the customer (PayloadCms / GraphQL / AutoScout24 API)
      • Integration of a cookie manager to obtain the most accurate data for each user. (GoogleTagManager / Lemon pie / Hotjar )
  `,
      short_description:
        'Le e-shop qui référence uniquement\nles boutiques parisiennes indépendantes.',
      description: `Le Site de l'Auto is a French group active in European car brokerage since 2014.
        Wanting to offer a more modern identity to the brand, presenting a new way of approaching a car broker by making their site a showcase innovations. Le Site de l'Auto's need was to reinvent their approach through their showcase site, offering a multitude of vehicles, of all types, available to the customer.`,
      contribution: `I set up a complete technical stack built around a structured backend and API management. I created content to enrich their various pages. I also integrated tracking tools, cookie management and forms.
        As for the frontend, I integrated all the ecommerce-oriented content to effectively share their vehicle ads, knowledge and brokers, all articulated around figma models. Daily discussions with the team to ensure compliance with UI guidelines and integration monitoring.`,

      img: {
        color: '#E0FC52',
        logo: Media.LSDA.logo,
        cover: Media.LSDA.IF,
      },

      projet: [
        { img: Media.LSDA.proj[0], title: 'Home Page' },
        { img: Media.LSDA.proj[3], title: 'About Page' },
        { img: Media.LSDA.proj[4], title: 'Controls Page' },
        { img: Media.LSDA.proj[1], title: 'Search Page' },
        { img: Media.LSDA.proj[2], title: 'Product Page' },
        { img: Media.LSDA.proj[5], title: 'Team Page' },
        { img: Media.LSDA.proj[6], title: 'Clients Page' },
      ],
    },
    // PPS
    {
      id: 3,
      slug: 'parisshopping',
      name: 'Paris Shopping',

      poste: 'Art Director',
      year: '2016-2018',
      techno: {
        back: 'Magento 2, Wordpress',
        tools: 'Slack, Trello, Suite Adobe',
      },

      mission:
        'Creation of the whole visual identity of Paris.shopping, elaboration of a graphic charter to then create all the necessary supports. Creation of print supports (business cards, commercial presentations, packaging, ..) and web supports (models and development of the e-commerce site, emailing, contact support, video, social networks).',
      short_description:
        'The e-shop that references only independent Parisian stores.',
      description:
        "Paris.Shopping showcases the best Parisian boutiques and brands, and each week offers THE selection of Parisians' favorite products: the most stylish, the most trendy, the most so chic, in short... the most Parisian. So that everyone, whether they come as a neighbor or from the other side of the world, can access the best shopping addresses. And to the spirit of Paris.",
      contribution: `Give creative impetus to the various projects, while organizing production, its urgencies and unforeseen events. I was responsible for the high quality of the graphic work, as well as the finished products, development and creation. `,

      img: {
        color: '#F04249',
        logo: Media.PPS.logo,
        cover: Media.PPS.IF,
      },
      projet: [
        { img: Media.PPS.proj[0], title: 'Home Page' },
        { img: Media.PPS.proj[1], title: 'Article Page' },
        { img: Media.PPS.proj[2], title: 'Shop Page' },
        { img: Media.PPS.proj[3], title: 'Product Page' },
        { img: Media.PPS.proj[4], title: 'About Page' },
      ],
    },
    // REXEL
    {
      id: 4,
      slug: 'rexel',
      name: 'Rexel Expo',

      poste: 'FullStack Developer',
      year: '2022',
      repo: 'https://github.com/Jo-thr/RexelExpo',
      techno: {
        front: 'Next.Js, TailwindCss, TypeScript',
        devops: 'Gitlab CI, Vercel',
        tools: 'GitLab, Figma, Notion',
      },

      mission:
        'Atypical request, the client wanted for his next showroom, a website with a western decor, and moreover, with the look of a website but presented on a mobile terminal... challenge! So I started to initialize the project with Next.js and tailwindCss, then I scrapped some product categories directly on their e-commerce, and simulated a purchase tunnel with confirmation.',
      short_description:
        'Expert in multi-channel distribution for the energy world',
      description:
        "World expert in multi-channel professional distribution of products and services for the energy sector. The Group's offer covers a wide range of sustainable and innovative products, solutions and services in the fields of technical equipment, automation and energy management for construction, renovation, maintenance and production.",
      contribution: `Creation of a graphic charter and a complete Ui kit, taking into account customer feedback on needs, aesthetics and page layout. I also carried out the entire integration of the e-commerce site, including catalog, shopping tunnel and Rexel-specific pages. I also scraped all their products and product categories to obtain a catalog rich in proposals.
      In this way, we organized daily discussions with the team and the customer to keep an eye on what was being achieved, blocked or progressing`,

      img: {
        color: '#00448c',
        logo: Media.REXEL.logo,
        cover: Media.REXEL.IF,
      },

      projet: [
        { img: Media.REXEL.proj[0], title: 'Home Page' },
        { img: Media.REXEL.proj[1], title: 'Tools Page' },
        { img: Media.REXEL.proj[2], title: 'Product Page' },
        { img: Media.REXEL.proj[3], title: 'Cart Page' },
        { img: Media.REXEL.proj[4], title: 'Confirmation Cart Page' },
      ],
    },
    // ONE4YOU
    {
      id: 5,
      slug: 'one4you',
      name: 'One4You',

      poste: 'Artistic Manager',
      year: '2018-2021',
      site: 'https://www.one4you.com',
      techno: {
        front: 'Bootstrap',
        back: 'Prestashop',
        tools: 'Trello, Figma, Slack, AB Tasty',
      },

      mission:
        'Creation of the whole visual identity of One4You, elaboration of a graphic charter to then create all the necessary supports. Creation of print media (business cards, commercial presentations, packaging, ..) and web media (models and development of the e-commerce site, emailing, contact support, video, social networks).',
      short_description:
        'Make your purchases online,\nand receive some cashback, easy no?',
      description:
        "In charge of the global management of the visual identity of One4You. I ensure the coherence and construction of One4You's image, making it evolve in accordance with the economic constraints and the strategic and commercial objectives defined by the general management. I design and coordinate all the media that convey the visual identity of One4You, as well as the brands, signs and young talents that are attached to it.",
      contribution: ``,

      img: {
        color: '#00e6c2',
        logo: Media.O4Y.logo,
        cover: Media.O4Y.IF,
      },

      projet: [
        { img: Media.O4Y.proj[0], title: 'Home Page' },
        { img: Media.O4Y.proj[1], title: 'Shopping Page' },
        { img: Media.O4Y.proj[2], title: 'Product Page' },
        { img: Media.O4Y.proj[3], title: 'Account Page' },
        { img: Media.O4Y.proj[4], title: 'Order Page' },
      ],
    },
    // WDG
    {
      id: 6,
      slug: 'wedigitalgarden',
      name: 'WeDigital Garden',

      poste: 'FullStack Developer',
      year: '2021',
      site: 'https://wedigital.garden',
      repo: 'https://github.com/Jo-thr/WeDigitalGarden-Front',
      techno: {
        front: 'Nuxt.Js, TailwindCss, Vue.Js',
        back: 'Laravel Nova',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Axeptio, Hubspot GoogleTag Manager',
      },

      mission:
        'Redesign of the WeDigital.Garden website with the use of the Vue.js framework accompanied by tailwinds for the front end and Laravel Nova for the back end to add new features, create new pages for the website and manage the language change.',
      short_description:
        'A green and responsible production\nstudio is committed to its clients.',
      description:
        'A production studio that commits to its clients to create a business impact, to improve their relevance by reinventing their offers or core business model, and to deliver value more quickly through the implementation of cross-disciplinary teams and methods.',
      contribution: `I set up a complete technical stack based around a structured backend and API management. I created content to publish their projects and put their customers online. I also integrated tracking tools, cookie management and forms.
      As for the frontend, I integrated all blog-oriented content to effectively share their projects, knowledge and profiles, all articulated around figma models. Daily discussions with the team to ensure compliance with UI guidelines and integration monitoring.`,

      img: {
        color: '#36A364',
        logo: Media.WDG.logo,
        cover: Media.WDG.IF,
      },

      projet: [
        { img: Media.WDG.proj[0], title: 'Home Page' },
        { img: Media.WDG.proj[1], title: 'Methods Page' },
        { img: Media.WDG.proj[2], title: 'Team Page' },
        { img: Media.WDG.proj[3], title: 'Culture Page' },
        { img: Media.WDG.proj[4], title: 'Projects Page' },
        { img: Media.WDG.proj[5], title: 'Project Page' },
        { img: Media.WDG.proj[6], title: 'Mentions Page' },
      ],
    },

    // AXA
    // {
    //   id: 7,
    //   slug: 'axagogreen',
    //   name: 'Axa GoGreen',
    //   categorie: 'Full-Stack Project',

    //   short_description:
    //     'GoGreen help you make informed choices\nabout improving the energy efficiency of your home.',
    //   description:
    //     'GoGreen has been created to help you make informed choices about improving the energy efficiency of your home. There are lots of options open to you and this website explains them all – from solar power and insulation, to heat pumps and deep retrofits. They can all bring you significant energy savings, while adding to the value of your property.\nWe also show you how to fund your home improvements, both through grants provided by the Irish Government, and low-interest green loans. And importantly, we provide a directory of trusted partners that can carry out the work for you.\nGo Green has been created by AXA, one of Ireland’s leading insurance companies. When you feel protected by AXA, you can go further.',

    //   imgBgColor: 'bg-AGG.jpg',
    //   imgFirst: 'AGG-MOCKUP.png',

    //   poste: 'Full-Stack Developer',
    //   techno:
    //     'Next.js, Tailwind, Contentful, Netlify, Hubspot, SonarQube, Axeptio',
    //   color: '#A3DFC6',

    //   mission:
    //     'Create a site from scratch, I initiated the project in Next.Js, implemented all desired libraries. The client chose Axeptio for the cookie management, Hubspot for the forms. In close collaboration with the Ui designers, I quickly integrated all the pages to then leave room for the connection with Contentful for a dynamic content created by the client. Project still in progress.',

    //   projet: [
    //     { img: '01-AGG.png', title: 'Home Page' },
    //     { img: '02-AGG.png', title: 'Build Your Knowledge Page' },
    //     { img: '03-AGG.png', title: 'Discover Your Options Page' },
    //     { img: '04-AGG.png', title: 'Fund & Protect Page' },
    //     { img: '05-AGG.png', title: 'Find Your Partner Page' },
    //     { img: '06-AGG.png', title: 'FAQs Page' },
    //     { img: '07-AGG.png', title: 'FAQ Page' },
    //   ],
    // },

    // FOXYLIB
    {
      id: 8,
      slug: 'foxylib',
      name: 'Foxylib',

      poste: 'FullStack Developper ',
      year: 'In progress',
      site: 'https://foxylib.netlify.app',
      repo: 'https://github.com/Jo-thr/foxylib',
      techno: {
        front: 'Next.Js, TailwindCss',
        tools: 'GitHub, Figma',
      },

      short_description:
        'Foxylib is an open-source library of UI components based on Next.Js & Tailwind CSS framework',
      description: `Foxylib is an open-source library of UI components based on Next.Js & Tailwind CSS framework.
      It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but also some more advanced interactive elements such as datepickers.
      All of the elements are built using the utility classes from Tailwind CSS and Next.Js.`,

      img: {
        color: '#0123FF',
        logo: Media.FOX.logo,
        cover: Media.FOX.IF,
      },

      projet: [
        { img: Media.FOX.proj[0], title: 'Category Page' },
        { img: Media.FOX.proj[1], title: 'Component Page' },
        { img: Media.FOX.proj[2], title: 'Component Page' },
      ],
    },
  ],
  extraContent: {
    menu: 'Menu',
    close: 'Close',
    projects: 'Projects',
    seeProject: 'See project',
  },
}

export default EN
