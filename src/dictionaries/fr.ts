import { Media } from './media'

const FR = {
  home: {
    heroBanner: {
      me: 'Je suis un',
      dev: 'Développeur',
      autodidacte: 'autodidacte',
    },
    aboutSection: {
      subtitle: 'À propos',
      title: 'Comment puis-je vous aider ?',
      text: `Je suis développeur web Front-End spécialisé sur le langage de programmation React un langage qui permettra à votre projet d'être extrêmement rapide, et facilement maintenable, la recette idéale pour faire la différence de nos jours, sur tous les points de vue.
      J'apprends et j'intègre les dernières technologies et techniques pour réduire le temps de chargement des pages web. J'utilise mes connaissances et mes outils pour gagner du temps de développement, notamment grâce à des pré-processeurs et avec l'aide de framework front-end personnalisé que j'utilise pour chaque nouveau projet.
      De manière très générale, je suis le bon partenaire pour créer tous types de projets web, que ce soit la simple création d'un site internet à l'application web, cependant mon domaine de compétence encadre des projets se voulant "sur mesure" "connectés a d'autres services (API)" mais surtout "a la pointe de la technologie".`,
    },
    projectSection: {
      subtitle: 'Selection de travaux',
      title: "Rien de mieux qu'un tour d'horizon.",
    },
    skillSection: {
      subtitle: 'Compétences',
      title: 'L’apprentissage s’effectue avec la curiosité et la passion.',
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
  },
  summary: [
    {
      id: '01',
      title: 'À Propos',
      link: '/#aboutSection',
    },
    {
      id: '02',
      title: 'CV',
      link: '/cv',
    },
    {
      id: '03',
      title: 'Compétences',
      link: '/#skillSection',
    },
    {
      id: '04',
      title: 'Selection de travaux',
      link: '/#projectSection',
    },
    {
      id: '05',
      title: 'Contact',
      link: 'Portfolio | Prise de contact | [Votre sujet ici]',
    },
  ],
  footer: {
    adressTitle: 'Adresse',
    adress: {
      area: 'Haute-Savoie',
      city: 'Bonneville, FR',
    },
    linksTitle: 'Liens',
    links: [
      {
        id: '01',
        title: 'À Propos',
        link: '/#aboutSection',
      },
      {
        id: '02',
        title: 'CV',
        link: '/cv',
      },
      {
        id: '03',
        title: 'Compétences',
        link: '/#skillSection',
      },
      {
        id: '04',
        title: 'Selection de travaux',
        link: '/#projectSection',
      },
    ],
    socialsTitle: 'Reseaux sociaux',
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
      title: 'Contacter-moi',
      contactForm: 'Portfolio | Prise de contact | [Votre sujet ici]',
    },
    copyright: '2023 @ JOTHR. ALL RIGHT RESERVED',
  },
  projects: [
    // FTV
    {
      id: 1,
      slug: 'francetv',
      name: 'France TV Lab',

      poste: 'Developpeur Front-end',
      year: '2021-2022',
      site: 'https://www.francetvlab.fr',
      techno: {
        front: 'Nuxt.Js, TailwindCss',
        back: 'Laravel 7, Laravel Nova',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Miro, Jira',
      },

      mission: `
      • Réalisation d'un front-end afin d'afficher un contenu de blog dynamiquement. (Nuxt.Js / TailwindCss)
      • Restructuration et administration d'un backend et de ressources clé en main pour le client. (Laravel Nova)
      • Intégration entière comprenant un critère d'accessibilité très élevé.
  `,
      short_description:
        "Tout le monde connais France TV,\nmais qu'est-ce France TV Lab ?",
      description: `France Télévisions est une société nationale de programme qui gère les activités de la télévision publique en France, de la production à la diffusion. Le Lab est une entité de France Télévisions Publicité qui regroupe depuis 3 ans plusieurs expertises : Le parrainage & programmes courts, les opérations spéciales. Ce département permet aux partenaires agences et annonceurs de prendre la parole différemment autour des piliers fondateurs de la marque que sont la télévision et le digital.
        Leur besoin de créer un site web pour y partager leurs prises de parole, de partager d'articles, etc... est donc devenu notre mission !`,
      contribution: `Mise en place d'une stack frontend en Nuxt.Js et TailwindCss, couvrant toutes les exigences Ui du projet. Création de pages dynamique avec une structure commune afin de pouvoir administrer des articles que possible sans avoir à solliciter l'intervention d'un développeur. Accent mis sur l'accessibilité qui était un enjeux clé du client. Restructuration du backend pour la création de nouveaux contenus basé sur un contenu fourni par le client dans Miro. J'ai défini des types et structures de pages pour un déploiement efficace des contenus.
      Discussions quotidiennes avec l'équipe et le client pour suivre ce qui est réaliser, bloquants ou en progression. `,

      img: {
        color: '#0123FF',
        logo: Media.FTV.logo,
        cover: Media.FTV.IF,
      },

      projet: [
        { img: Media.FTV.proj[0], title: 'Page catégories' },
        { img: Media.FTV.proj[1], title: 'Page article' },
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
      • Intégration d'un gestionnaire de cookies afin d'obtenir une data au plus juste pour chaque utilisateur. (GoogleTagManager / Tarte au citron / Hotjar )`,
      short_description:
        'Le e-shop qui référence uniquement\nles boutiques parisiennes indépendantes.',
      description: `Le Site de l'Auto est un groupe français actif dans la le courtage automobile européen depuis 2014.
        Voulant offrir une identité plus moderne à la marque, en présentant de nouvelle façon d'aborder un courtier automobile en faisant de leur site une innovations de vitrine. Le besoin de Le Site de l'Auto était de réinventer leur approche au travers leur site vitrine, proposant une multitude de véhicules, de tout types, à disposition du client.`,
      contribution: `J'ai mis en place une stack technique intégrale s'articulant autour d'un backend structuré et une gestion d'API. J'y ai créé des contenus afin d'enrichir leurs différentes pages. J'ai aussi intégré des outils de tracking, gestion de cookies et des formulaires.
        Concernant le frontend, j'ai intégré l'intégralité des contenus très orienté ecommerce afin de partager efficacement leurs annonces véhicules, leurs connaissances et leurs courtiers, le tout articulé autour de maquettes figma. Discussions quotidiennes avec l'équipe pour respecter les guidelines UI et le suivi d'intégration.`,

      img: {
        color: '#E0FC52',
        logo: Media.LSDA.logo,
        cover: Media.LSDA.IF,
      },

      projet: [
        { id: '1', img: Media.LSDA.proj[0], title: "Page d'accueil" },
        { id: '2', img: Media.LSDA.proj[3], title: 'Page à propos' },
        { id: '3', img: Media.LSDA.proj[4], title: 'Page contrôle' },
        { id: '4', img: Media.LSDA.proj[1], title: 'Page recherche' },
        { id: '5', img: Media.LSDA.proj[2], title: 'Page produit' },
        { id: '6', img: Media.LSDA.proj[5], title: 'Page équipe' },
        { id: '7', img: Media.LSDA.proj[6], title: 'Page clients livrés' },
      ],
    },
    // PPS
    {
      id: 3,
      slug: 'parisshopping',
      name: 'Paris Shopping',

      poste: 'Directeur Artistique',
      year: '2016-2018',
      techno: {
        back: 'Magento 2, Wordpress',
        tools: 'Slack, Trello, Suite Adobe',
      },

      mission: `
      • Supports de communication print et web | Animation du site vitrine, Application mobile, Affiches, Brochures, Photographies, PLV, Newsletters, Blog.
      • Univers graphiques | Charte graphique, typographies, photographies, cahiers de tendances de l’agence (Couleurs, Femme, Homme, Déco, Lifestyle, . . .)
  `,
      short_description:
        'Le e-shop qui référence uniquement\nles boutiques parisiennes indépendantes.',
      description: `Paris.Shopping met à l’honneur les meilleures boutiques et marques parisiennes, et propose chaque semaine LA sélection des produits préférés des Parisiens : les plus stylés, les plus tendances, les plus so chic, bref… les plus parisiens. Pour que chacun, qu’ils viennent en voisin ou depuis l’autre bout du monde, puisse accéder aux meilleures adresses de shopping. Et à l’esprit de Paris. La marque offrait une visibilité et un accès au monde du e-commerce sans que le commençant n'est à le gérer. Paris.Shopping gère le contenu et la transaction, le marchant lui s'occupe du stock et de la livraison des produits.`,
      contribution: `Donner l’impulsion créative aux différents projets, tout en organisant la production, ses urgences et ses imprévus. Je veillais à la grande qualité du travail graphique ainsi qu’aux produits finis, à l’élaboration et à la création. `,

      img: {
        color: '#F04249',
        logo: Media.PPS.logo,
        cover: Media.PPS.IF,
      },

      projet: [
        { img: Media.PPS.proj[0], title: "Page d'accueil" },
        { img: Media.PPS.proj[1], title: 'Page article' },
        { img: Media.PPS.proj[2], title: 'Page boutique' },
        { img: Media.PPS.proj[3], title: 'Page produit' },
        { img: Media.PPS.proj[4], title: 'Page à propos' },
      ],
    },
    // REXEL
    {
      id: 4,
      slug: 'rexel',
      name: 'Rexel Expo',

      poste: 'Développeur FullStack',
      year: '2022',
      techno: {
        front: 'Next.Js, TailwindCss, TypeScript',
        devops: 'Gitlab CI, Vercel',
        tools: 'GitLab, Figma, Notion',
      },

      mission: `
      • Réalisation d'un front-end afin de mettre en avant tous le processus d'achat, le catalogue produits et mise en avant produits (Next.Js, TailwindCss)
      • Création de maquettes et d'un kit Ui complet qui correspond aux besoins visuels du client et au bon développement de l'application web (Figma / Notion)
  `,
      short_description:
        "Expert de la distribution multicanale pour le monde de l'énergie.",
      description: `Rexel est un groupe français actif dans la distribution de matériel électrique, de chauffage, d'éclairage mais aussi dans les énergies renouvelables et les produits et services d'efficacité énergétique, l'habitat connecté, et les services comme la location d'outillage portatif ou des suites logicielles à destination des professionnels.
        Voulant présenter leurs innovations de e-shopping, Rexel nous à commandité le développement de leur site e-commerce qui mettrons en avant pour leurs clients BtoB et BtoC sur la gestion de produits, interface de commandes, recherches produits, processus d'achat, etc... sur leur site internet.`,
      contribution: `Création d'une charte graphique et d'un kit Ui complet prenant en considération les retours clients sur le besoins, l'esthétique et l'articulation des pages. J'ai aussi réalisé la totalité de l'intégration du site e-commerce avec catalogue, tunnel d'achat et pages spécifiques à Rexel. J'ai par ailleurs scrapé tous leurs produits et catégories de produits afin d'obtenir un catalogue riche de propositions.
      Ainsi, quotidiennement nous organisions des discussions avec l'équipe et le client pour garder un oeil sur ce qui est réaliser, bloquants ou en progression.`,

      img: {
        color: '#00448c',
        logo: Media.REXEL.logo,
        cover: Media.REXEL.IF,
      },

      projet: [
        { img: Media.REXEL.proj[0], title: "Page d'accueil" },
        { img: Media.REXEL.proj[1], title: 'Page Outils' },
        { img: Media.REXEL.proj[2], title: 'Page Produit' },
        { img: Media.REXEL.proj[3], title: 'Page Panier' },
        { img: Media.REXEL.proj[4], title: 'Page Confirmation panier' },
      ],
    },
    // ONE4YOU
    {
      id: 5,
      slug: 'one4you',
      name: 'One4You',

      poste: 'Responsable Artistique',
      year: '2018-2021',
      site: 'https://www.one4you.com',
      techno: {
        front: 'Bootstrap',
        back: 'Prestashop',
        tools: 'Trello, Figma, Slack, AB Tasty',
      },

      mission: `
        • Développement de modules, mise en production, création de composants frontend et gestion du backoffice sur Prestashop
        • Univers graphiques | Charte graphique, Web design, Ux/Ui, visuels produits, photographies, . . .
        • Supports de communication print et web | Animation site e-commerce, affiches, packaging, newsletters, stocks produits, gestion clients, transactions, catalogue produits, AB Tasty, . . .)
    `,
      short_description:
        'Faites vos achats en ligne, et recevez \nune partie en cashback, facile non ?',
      description: `One4You est un site ecommerce référençant un large panel de marques, sauf que sur ce site, on n'achète pas en euros, mais en Ones. Se basant sur la fidélité des clients, à chaque achat, ils reversent sous forme de "ones" du cashback pour récompenser le client. Qu'il peux ensuite réutiliser sur n'importe quelle autre marque partenaire. `,
      contribution: `En charge de l’identité visuelle de One4You, j’assure la cohérence et construis son image de marque, la fait évoluer dans le respect des contraintes économiques, des objectifs stratégiques et commerciaux définit par la direction.
      Je conçois et coordonne les différents supports qui véhiculent cette identité et enrichis son catalogue marques. `,

      img: {
        color: '#00e6c2',
        logo: Media.O4Y.logo,
        cover: Media.O4Y.IF,
      },

      projet: [
        { img: Media.O4Y.proj[0], title: "Page d'accueil" },
        { img: Media.O4Y.proj[1], title: 'Page catalogue' },
        { img: Media.O4Y.proj[2], title: 'Page produit' },
        { img: Media.O4Y.proj[3], title: 'Page compte' },
        { img: Media.O4Y.proj[4], title: 'Page commande' },
      ],
    },
    // WDG
    {
      id: 6,
      slug: 'wedigitalgarden',
      name: 'WeDigital Garden',

      poste: 'Developpeur FullStack',
      year: '2021',
      site: 'https://wedigital.garden',
      techno: {
        front: 'Nuxt.Js, TailwindCss, Vue.Js',
        back: 'Laravel Nova',
        data: 'GraphQL',
        devops: 'Gitlab CI, Docker',
        tools: 'GitLab, Figma, Axeptio, Hubspot GoogleTag Manager',
      },

      mission: `
        • Réalisation d'un front-end afin d'afficher un contenu de site vitrine dynamiquement sans nécessite une interventions d'un développeur. (Next.Js / TailwindCss / TypeScript)
        • Création et administration d'un backend et de ressources clé en main pour le client. (Laravel Nova)
        • Intégration d'un CRM ainsi qu'un tracking plan complexe pour surveiller les besoins utilisateurs et y répondre le plus juste possible. (Hubspot/ Axeptio / GooleTag Manager)
    `,
      short_description:
        "Un studio de réalisation green et responsable\nqui s'engage auprès de ses clients.",
      description: `WeDigitalGarden, studio de réalisation qui s'engage auprès de ses clients à créer un impact business et utilisateur mesurable. Aider leurs clients à améliorer leur pertinence en réinventant leurs offres ou core business model et à délivrer plus rapidement de la valeur par la mise en place d’équipes et de méthodes cross-disciplinaires.
        Le besoin de WeDigitalGarden était de réinventer leur approche au travers leur site vitrine, c'est pourquoi ils ont voulu refondre la totalité de leur site vitrine. `,
      contribution: `J'ai mis en place une stack technique intégrale s'articulant autour d'un backend structuré et une gestion d'API. J'y ai créé des content afin de publier leurs projets, mettre en ligne leurs clients. J'ai aussi intégré des outils de tracking, gestion de cookieset des formulaires.
      Concernant le frontend, j'ai intégré l'intégralité des contenus très orienté blog afin de partager efficacement leurs projets, leurs connaissances et leurs profils, le tout articulé autour de maquettes figma. Discussions quotidiennes avec l'équipe pour respecter les guidelines UI et le suivi d'intégration.`,

      img: {
        color: '#36A364',
        logo: Media.WDG.logo,
        cover: Media.WDG.IF,
      },

      projet: [
        { img: Media.WDG.proj[0], title: "Page d'Acceuil" },
        { img: Media.WDG.proj[1], title: 'Page Méthodes' },
        { img: Media.WDG.proj[2], title: 'Page Équipe' },
        { img: Media.WDG.proj[4], title: 'Page Projets' },
        { img: Media.WDG.proj[5], title: 'Page Projet Détaillé' },
        { img: Media.WDG.proj[3], title: 'Page Culture' },
        { img: Media.WDG.proj[6], title: 'Page Mentions Légales' },
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
    close: 'Fermer',
    projects: 'Projets',
    seeProject: 'Voir le projet',
  },
}

export default FR
