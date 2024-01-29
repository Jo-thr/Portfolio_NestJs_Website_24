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
      subtitle: 'Selection of works',
      title: "There's nothing like an overview",
    },
  },
  summary: [
    {
      id: '01',
      title: 'About',
      link: '/about',
      logo: true,
      switch: false,
    },
    {
      id: '02',
      title: 'Skills',
      link: '/skills',
      logo: false,
      switch: false,
    },
    {
      id: '03',
      title: 'CV',
      link: '/cv',
      logo: false,
      switch: false,
    },
    {
      id: '04',
      title: 'Selected works',
      link: '/works',
      logo: false,
      switch: false,
    },
    {
      id: '05',
      title: 'Socials network',
      link: '/socials',
      logo: false,
      switch: false,
    },
    {
      id: '06',
      title: 'Contact',
      link: '/contact',
      logo: false,
      switch: true,
    },
  ],

  footer: {
    adressTitle: 'Address',
    adress: {
      area: 'Haute-Savoie',
      city: 'Bonneville, FR',
    },
    linksTitle: 'Links',
    links: [
      {
        id: '01',
        title: 'About',
        link: '/about',
      },
      {
        id: '04',
        title: 'Selected works',
        link: '/works',
      },
      {
        id: '06',
        title: 'Contact',
        link: '/contact',
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
        id: '05',
        title: 'Socials network',
        link: '/socials',
      },
    ],
    socialsTitle: 'Socials',
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
      url: '/contact',
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
      contribution: ``,

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
      year: '2023',
      techno: {
        front: 'Next.Js, TailwindCss, TypeScript',
        back: 'PayloadCMS',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Notion, GoogleTag Manager',
      },

      mission: `
      • Réalisation d'un front-end afin d'afficher un contenu de site vitrine dynamique sans nécessité une interventions d'un développeur. (NextJs / TailwindCss / TypeScript)
      • Créatoin et administration d'un backend et de ressources clé en main pour le client (PayloadCms / GraphQL / API AutoScout24)
      • Intégration d'un gestionnaire de cookies afin d'obtenir une data au plus juste pour chaque utilisateur. (GoogleTagManager / Tarte au citron / Hotjar )
      `,
      short_description:
        'Le e-shop qui référence uniquement\nles boutiques parisiennes indépendantes.',
      description:
        'Paris.Shopping met à l’honneur les meilleures boutiques et marques parisiennes, et propose chaque semaine LA sélection des produits préférés des Parisiens : les plus stylés, les plus tendances, les plus so chic, bref… les plus parisiens. Pour que chacun, qu’ils viennent en voisin ou depuis l’autre bout du monde, puisse accéder aux meilleures adresses de shopping. Et à l’esprit de Paris.',
      contribution:
        "J'ai mis en place une stack technique intégrale s'articulant autour d'un backend structuré et une gestion d'API. J'y ai créé des contenus afin d'enrichir leurs différentes pages. J'ai aussi intégré des outils de tracking, gestion de cookies et des formulaires. Concernant le frontend, j'ai intégré l'intégralité des contenus très orienté ecommerce afin de partager efficacement leurs annonces véhicules, leurs connaissances et leurs courtiers, le tout articulé autour de maquettes figma. Discussions quotidiennes avec l'équipe pour respecter les guidelines UI et le suivi d'intégration.",

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
      contribution: ``,

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
      contribution: ``,

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
  ],
  extraContent: {
    menu: 'Menu',
    close: 'Close',
    projects: 'Projects',
    seeProject: 'See project',
  },
}

export default EN
