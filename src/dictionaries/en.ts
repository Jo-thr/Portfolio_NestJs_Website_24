import FTVImageFirst from '@public/projects/FTV-MOCKUP.png'
import PPSImageFirst from '@public/projects/PARIS-SHOPPING-MOCKUP.png'
import REXELImageFirst from '@public/projects/REXEL-MOCKUP.png'
import WDGImageFirst from '@public/projects/WDG-MOCKUP.png'
import O4YImageFirst from '@public/projects/ONE4YOU-MOCKUP.png'

const EN = {
  home: {
    aboutSection: {
      about: {
        subtitle: 'À propos',
        title: 'Comment puis-je vous aider ?',
        text: `Je suis développeur web Front-End spécialisé sur le langage de programmation React un langage qui permettra à votre projet d'être extrêmement rapide, et facilement maintenable, la recette idéale pour faire la différence de nos jours, sur tous les points de vue.
      J'apprends et j'intègre les dernières technologies et techniques pour réduire le temps de chargement des pages web. J'utilise mes connaissances et mes outils pour gagner du temps de développement, notamment grâce à des pré-processeurs et avec l'aide de framework front-end personnalisé que j'utilise pour chaque nouveau projet.
      De manière très générale, je suis le bon partenaire pour créer tous types de projets web, que ce soit la simple création d'un site internet à l'application web, cependant mon domaine de compétence encadre des projets se voulant "sur mesure" "connectés a d'autres services (API)" mais surtout "a la pointe de la technologie".`,
      },
      missions: [
        {
          title: 'Intégration web sur mesure',
          text: 'Intégration web & mobile sur base de vos fichiers Figma, Sketch, InVison ou autres.',
        },
        {
          title: 'Expérience utilisateur',
          text: "Création de petites animations qui ajoutent de l'interactivité sur votre site.",
        },
        {
          title: 'Architecture & composants',
          text: "Utilisation d'une architecture moderne et modulable aux besoins de votre projet.",
        },
        {
          title: 'Performances',
          text: 'Test de la rapidité de votre site grâce à des outils comme Google PageSpeed.',
        },
        {
          title: 'Accessibilité',
          text: "Mise en place d'une série de bonnes pratiques définies par le label AnySurfer.",
        },
        {
          title: 'Sémantique',
          text: "Sémantique HTML aux normes du W3C et prévue pour l'optimisiation de votre SEO.",
        },
      ],
      catchphrase:
        "Mon travail est d'arriver à capter l'attention grâce à uneexpérience de navigationefficace et agréable !",
    },
    skillSection: {
      subtitle: 'Compétences',
      title: 'L’apprentissage s’effectue avec la curiosité et la passion',
      tags: [
        { id: '01', name: 'Tous' },
        { id: '02', name: 'Back' },
        { id: '03', name: 'CMS' },
        { id: '04', name: 'Data' },
        { id: '05', name: 'Design' },
        { id: '06', name: 'Devops - CI/CD' },
        { id: '07', name: 'Front' },
        { id: '08', name: 'Outil' },
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
        { id: '10', name: 'Jira', domain: 'Outil', fav: false },
        { id: '11', name: 'Laravel', domain: 'Back', fav: false },
        { id: '12', name: 'Miro', domain: 'Outil', fav: false },
        { id: '13', name: 'Node.js', domain: 'Back', fav: false },
        {
          id: '14',
          name: 'Netlify',
          domain: 'Devops - CI/CD',
          fav: true,
        },
        { id: '15', name: 'Next.js', domain: 'Front', fav: true },
        { id: '16', name: 'Notion', domain: 'Outil', fav: false },
        { id: '17', name: 'Nuxt.js', domain: 'Front', fav: false },
        { id: '18', name: 'Payload', domain: 'CMS', fav: true },
        { id: '19', name: 'React.js', domain: 'Front', fav: true },
        { id: '20', name: 'Sass', domain: 'Front', fav: false },
        { id: '21', name: 'Slack', domain: 'Outil', fav: false },
        { id: '22', name: 'SQL', domain: 'Data', fav: true },
        { id: '23', name: 'Storyblok', domain: 'CMS', fav: false },
        { id: '24', name: 'Storybook', domain: 'Front', fav: false },
        { id: '25', name: 'Strapi', domain: 'CMS', fav: true },
        { id: '26', name: 'Suite Adobe', domain: 'Design', fav: true },
        { id: '27', name: 'Tailwind', domain: 'Front', fav: true },
        { id: '28', name: 'Teams', domain: 'Outil', fav: false },
        { id: '29', name: 'Trello', domain: 'Outil', fav: false },
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
      subtitle: 'Selection de travaux',
      title: "Rien de mieux qu'un tour d'horizon",
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

  aboutPage: {
    mainTitle: 'About',
    mainDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio eaque perferendis accusamus aliquam facilis sapiente, dolores id ratione deserunt qui nulla ea obcaecati inventore exercitationem modi quidem, doloremque alias.',
  },
  skillPage: {
    mainTitle: 'Skills',
    mainDesc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facilis odit culpa voluptatem, maxime hic libero rerum quam autem quis voluptatum! Quas quasi, voluptas ducimus quo impedit expedita temporibus suscipit accusantium aperiam repellat quod praesentium voluptatem sit velit, atque neque blanditiis, harum eaque repudiandae numquam perferendis esse? Deserunt aliquid laboriosam et minus, sequi doloribus numquam consequatur quis, exercitationem sunt eius magnam sit impedit tempore placeat!',
    listing: [
      {
        id: '01',
        title: 'Frontend addict',
        phrase:
          'Addiction is anything that drains life of meaning while making it seem better.',
      },
      {
        id: '02',
        title: 'Pixel perfect',
        phrase:
          'Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away.',
      },
      {
        id: '03',
        title: 'Responsive',
        phrase: 'What makes man is his great adaptability.',
      },
      {
        id: '04',
        title: 'Gsap',
        phrase: "An artist doesn't bend to reality, he invents it.",
      },
      {
        id: '05',
        title: 'Creative coder',
        phrase: 'Creativity without strategy is called art.',
      },
      {
        id: '06',
        title: 'Love discovering new creative world',
        phrase:
          "It's the artist's role to worry about where the world is going.",
      },
      {
        id: '07',
        title: 'Accessibility',
        phrase: 'Practice makes perfect.',
      },
      {
        id: '08',
        title: 'Seo',
        phrase:
          'The best place to hide a dead body is page 2 of Google search results.',
      },
    ],
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
  cvPage: {
    mainTitle: 'CV',
    mainDesc:
      'Fashion has always been a real subject for all eras, so why settle for just one cap?',
    descirption:
      "I'm a self-taught full-stack developer from France, primarily frontend focused on creating beautiful websites and interfaces. Whilst collaborating with startups, founders and early stage companies to thrive together whilst constantly learning. I'm looking for new experiences to grow both as a professional and as a human being.",
  },
  worksPage: {
    mainTitle: 'Selected works',
    mainDesc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facilis odit culpa voluptatem, maxime hic libero rerum quam autem quis voluptatum! Quas quasi, voluptas ducimus quo impedit expedita temporibus suscipit accusantium aperiam repellat quod praesentium voluptatem sit velit, atque neque blanditiis, harum eaque repudiandae numquam perferendis esse? Deserunt aliquid laboriosam et minus, sequi doloribus numquam consequatur quis, exercitationem sunt eius magnam sit impedit tempore placeat!',
    tabs: {
      visual: 'Visual',
      text: 'Description',
    },
    projects: [
      {
        id: 1,
        slug: 'francetv',
        name: 'France TV Lab',
        categorie: 'Front-End Project',

        short_description:
          "Everyone knows France TV, but what's France Tv Lab?",
        description:
          "The FTV Lab is the blog dedicated to the innovation of France Television. It's a collaborative platform, with a simplified administration, developed and deployed in 3 months. To serve its strategic positioning in the context of the merger of France Télévisions and Radio France, France TV wanted to redesign its innovation platform.\nThe project was conducted in agile mode in a context of mature business needs and a strong commitment in terms of scope/timing.\n The success of this project led FTV info to entrust two other projects of bigger scale to Wizards Technologies teams. Thus, we have renovated the application in order to make it lighter, more dynamic and powerful.",

        imgBgColor: 'bg-FTV.jpg',
        imgFirst: FTVImageFirst,

        poste: 'Front-End Developer',
        techno: 'Nuxt.js, Tailwind, Laravel 7, Docker',
        color: '#0123FF',
        site: 'https://www.francetvlab.fr',

        mission:
          'Redesigning the France TV Lab website to be more intuitive, to meet many criteria of accessibility and interactive videos (their domain). Use of the Vue.js framework with tailwinds for the front and Laravel Nova for the back.',

        projet: [
          { img: '01-FTV.png', title: 'Topics Page' },
          { img: '02-FTV.png', title: 'Article Page' },
        ],
      },
      {
        id: 2,
        slug: 'parisshopping',
        name: 'Paris Shopping',
        categorie: 'Webdesign / Ui Project',

        short_description:
          'The e-shop that references only independent Parisian stores.',
        description:
          "Paris.Shopping showcases the best Parisian boutiques and brands, and each week offers THE selection of Parisians' favorite products: the most stylish, the most trendy, the most so chic, in short... the most Parisian. So that everyone, whether they come as a neighbor or from the other side of the world, can access the best shopping addresses. And to the spirit of Paris.",

        imgBgColor: 'bg-PPS.jpg',
        imgFirst: PPSImageFirst,

        poste: 'Art Director',
        techno: 'Magento II, Adobe suite',
        color: '#F04249',

        mission:
          'Creation of the whole visual identity of Paris.shopping, elaboration of a graphic charter to then create all the necessary supports. Creation of print supports (business cards, commercial presentations, packaging, ..) and web supports (models and development of the e-commerce site, emailing, contact support, video, social networks).',

        projet: [
          { img: '01-PPS.png', title: 'Home Page' },
          { img: '02-PPS.png', title: 'Article & Shop Page' },
          { img: '03-PPS.png', title: 'Product Page' },
          { img: '04-PPS.png', title: 'About & Cart Page' },
          { img: '05-PPS.png', title: 'Order Mail' },
        ],
      },
      // {
      //   id: 3,
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
      {
        id: 4,
        slug: 'rexel',
        name: 'Rexel Expo',
        categorie: 'Full-Stack Project',

        short_description:
          'Expert in multi-channel distribution for the energy world',
        description:
          "World expert in multi-channel professional distribution of products and services for the energy sector. The Group's offer covers a wide range of sustainable and innovative products, solutions and services in the fields of technical equipment, automation and energy management for construction, renovation, maintenance and production.",

        imgBgColor: 'bg-REXEL.jpg',
        imgFirst: REXELImageFirst,

        poste: 'Full-Stack Developer',
        techno: 'Next.js, Tailwind, Netlify',
        color: '#00448c',

        mission:
          'Atypical request, the client wanted for his next showroom, a website with a western decor, and moreover, with the look of a website but presented on a mobile terminal... challenge! So I started to initialize the project with Next.js and tailwindCss, then I scrapped some product categories directly on their e-commerce, and simulated a purchase tunnel with confirmation.',

        projet: [
          { img: '01-REXEL.png', title: 'Home Page' },
          { img: '02-REXEL.png', title: 'Tools Page' },
          { img: '03-REXEL.png', title: 'Catalog Page' },
          { img: '04-REXEL.png', title: 'Product Page' },
          { img: '05-REXEL.png', title: 'Cart Page' },
          { img: '06-REXEL.png', title: 'Confirmation Cart Page' },
        ],
      },
      {
        id: 5,
        slug: 'wedigitalgarden',
        name: 'WeDigital Garden',
        categorie: 'Full-Stack Project',

        short_description:
          'A green and responsible production\nstudio is committed to its clients.',
        description:
          'A production studio that commits to its clients to create a business impact, to improve their relevance by reinventing their offers or core business model, and to deliver value more quickly through the implementation of cross-disciplinary teams and methods.',

        imgBgColor: 'bg-WDG.jpg',
        imgFirst: WDGImageFirst,

        poste: 'Full-Stack Developer',
        techno: 'Nuxt.js, Tailwind, Laravel 7',
        site: 'https://wedigital.garden',
        color: '#36A364',

        mission:
          'Redesign of the WeDigital.Garden website with the use of the Vue.js framework accompanied by tailwinds for the front end and Laravel Nova for the back end to add new features, create new pages for the website and manage the language change.',

        projet: [
          { img: '01-WDG.png', title: 'Home Page' },
          { img: '02-WDG.png', title: 'Methods Page' },
          { img: '03-WDG.png', title: 'Team Page' },
          { img: '04-WDG.png', title: 'Culture Page' },
          { img: '05-WDG.png', title: 'Projects Page' },
          { img: '06-WDG.png', title: 'Project Page' },
          { img: '07-WDG.png', title: 'Mentions Page' },
        ],
      },
      {
        id: 6,
        slug: 'one4you',
        name: 'One4You',
        categorie: 'Webdesign / Ui Project',

        short_description:
          'Make your purchases online,\nand receive some cashback, easy no?',
        description:
          "In charge of the global management of the visual identity of One4You. I ensure the coherence and construction of One4You's image, making it evolve in accordance with the economic constraints and the strategic and commercial objectives defined by the general management. I design and coordinate all the media that convey the visual identity of One4You, as well as the brands, signs and young talents that are attached to it.",

        imgBgColor: 'bg-O4Y.jpg',
        imgFirst: O4YImageFirst,

        poste: 'Artistic Manager',
        techno: 'Prestashop, Adobe Suite, AB Tasty',
        site: 'https://www.one4you.com',
        color: '#50E1C3',

        mission:
          'Creation of the whole visual identity of One4You, elaboration of a graphic charter to then create all the necessary supports. Creation of print media (business cards, commercial presentations, packaging, ..) and web media (models and development of the e-commerce site, emailing, contact support, video, social networks).',

        projet: [
          { img: '01-O4Y.png', title: 'Home Page' },
          { img: '02-O4Y.png', title: 'Shopping Page' },
          { img: '03-O4Y.png', title: 'Product Page' },
          { img: '04-O4Y.png', title: 'Account Page' },
          { img: '05-O4Y.png', title: 'Order Page' },
        ],
      },
    ],
  },
  rsPage: {
    mainTitle: 'Socials network',
    mainDesc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facilis odit culpa voluptatem, maxime hic libero rerum quam autem quis voluptatum! Quas quasi, voluptas ducimus quo impedit expedita temporibus suscipit accusantium aperiam repellat quod praesentium voluptatem sit velit, atque neque blanditiis, harum eaque repudiandae numquam perferendis esse? Deserunt aliquid laboriosam et minus, sequi doloribus numquam consequatur quis, exercitationem sunt eius magnam sit impedit tempore placeat!',
  },
  contactPage: {
    mainTitle: 'Contact',
    mainDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio eaque perferendis accusamus aliquam facilis sapiente, dolores id ratione deserunt qui nulla ea obcaecati inventore exercitationem modi quidem, doloremque alias.',
  },
  menu: 'Menu',
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
}

export default EN
