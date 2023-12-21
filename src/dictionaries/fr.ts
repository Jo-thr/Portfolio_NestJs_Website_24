import FTVImageFirst from '@public/projects/FTV-MOCKUP.png'
import PPSImageFirst from '@public/projects/PARIS-SHOPPING-MOCKUP.png'
import REXELImageFirst from '@public/projects/REXEL-MOCKUP.png'
import WDGImageFirst from '@public/projects/WDG-MOCKUP.png'
import O4YImageFirst from '@public/projects/ONE4YOU-MOCKUP.png'

const FR = {
  summary: [
    {
      id: '01',
      title: 'À Propos',
      link: '/about',
      logo: true,
      switch: false,
    },
    {
      id: '02',
      title: 'Compétences',
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
      title: 'Selection de travaux',
      link: '/works',
      logo: false,
      switch: false,
    },
    {
      id: '05',
      title: 'Réseaux sociaux',
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
    mainTitle: 'À propos',
    mainDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio eaque perferendis accusamus aliquam facilis sapiente, dolores id ratione deserunt qui nulla ea obcaecati inventore exercitationem modi quidem, doloremque alias.',
  },
  skillPage: {
    mainTitle: 'Compétences',
    mainDesc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facilis odit culpa voluptatem, maxime hic libero rerum quam autem quis voluptatum! Quas quasi, voluptas ducimus quo impedit expedita temporibus suscipit accusantium aperiam repellat quod praesentium voluptatem sit velit, atque neque blanditiis, harum eaque repudiandae numquam perferendis esse? Deserunt aliquid laboriosam et minus, sequi doloribus numquam consequatur quis, exercitationem sunt eius magnam sit impedit tempore placeat!',
    listing: [
      {
        id: '01',
        title: 'Frontend addict',
        phrase:
          "L'addiction est tout ce qui vide la vie de son sens, tout en la faisant paraître meilleure.",
      },
      {
        id: '02',
        title: 'Pixel parfait',
        phrase:
          "La perfection est atteinte non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à enlever.",
      },
      {
        id: '03',
        title: 'Responsive',
        phrase: "Ce qui fait l'homme, c'est sa grande capacité d'adaptation.",
      },
      {
        id: '04',
        title: 'Gsap',
        phrase: "Un artiste ne se plie pas à la réalité, il l'invente.",
      },
      {
        id: '05',
        title: 'Codeur créatif',
        phrase: "La créativité sans stratégie s'appelle de l'art.",
      },
      {
        id: '06',
        title: 'Aimer découvrir un nouveau monde créatif',
        phrase:
          "C'est le rôle de l'artiste de s'inquiéter de la direction que prend le monde.",
      },
      {
        id: '07',
        title: 'Accessibilité',
        phrase: "C'est en forgeant qu'on devient forgeron.",
      },
      {
        id: '08',
        title: 'Seo',
        phrase:
          'Le meilleur endroit pour cacher un cadavre est la page 2 des résultats de recherche de Google.',
      },
    ],
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
  cvPage: {
    mainTitle: 'CV',
    mainDesc:
      "La mode à toujours été un vrai sujet pour toutes les époques, alors pourquoi se contenter d'une seule casquette ?",
    descirption:
      "Je suis un developpeur full-stack autodidacte de France, principalement tourné vers le frontend, qui se concentre sur la création de beaux sites web et d’interfaces. Tout en collaborant avec des startups, des fondateurs et des entreprises en phase de démarrage afin de prospérer ensemble tout en apprenant constamment. Je recherche de nouvelles expériences pour grandir à la fois en tant que professionnel et en tant qu'être humain.",
  },
  worksPage: {
    mainTitle: 'Sélection de travaux',
    mainDesc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facilis odit culpa voluptatem, maxime hic libero rerum quam autem quis voluptatum! Quas quasi, voluptas ducimus quo impedit expedita temporibus suscipit accusantium aperiam repellat quod praesentium voluptatem sit velit, atque neque blanditiis, harum eaque repudiandae numquam perferendis esse? Deserunt aliquid laboriosam et minus, sequi doloribus numquam consequatur quis, exercitationem sunt eius magnam sit impedit tempore placeat!',
    tabs: {
      visual: 'Visuel',
      text: 'Description',
    },
    urlPublicImage: '/projects/',
    projects: [
      {
        id: 1,
        slug: 'francetv',
        name: 'France TV Lab',
        categorie: 'Projet Front-End',

        short_description:
          "Tout le monde connais France TV,\nmais qu'est-ce France TV Lab ?",
        description:
          "Le Lab de FTV est le blog dédié à l’innovation de France Télévision. C’est une plateforme collaborative, avec une administration simplifiée, développée et déployée en 3 mois. Pour servir son positionnement stratégique dans un contexte de fusion de France Télévisions et de Radio France, France TV a souhaité refondre sa plateforme d’innovation.\nLe projet a été mené en mode agile dans un contexte de besoin métier mature et un engagement fort en termes de périmètre/timing.\nLa réussite de ce projet a conduit FTV info à confier deux autres projets de plus grandes ampleur à des équipes Wizards Technologies. Ainsi, nous avons rénové l'application dans le but de la rendre plus légère, dynamique et performante.",

        imgBgColor: 'bg-FTV.jpg',
        imgFirst: FTVImageFirst,

        poste: 'Developpeur Front-end',
        techno: 'Nuxt.js, Tailwind, Laravel 7, Docker',
        color: '#0123FF',
        site: 'https://www.francetvlab.fr',

        mission:
          "Refondre le site de France TV Lab plus intuitive, correspondant à de nombreux critères d'accessibilités et de vidéos interactives (leur domaine). Utilisation du framework Vue.js accompagné de tailwinds pour le front et de Laravel Nova pour le back.",

        projet: [
          { img: '01-FTV.png', title: 'Page catégories' },
          { img: '02-FTV.png', title: 'Page article' },
        ],
      },
      {
        id: 2,
        slug: 'parisshopping',
        name: 'Paris Shopping',
        categorie: 'Projet Webdesign / Ui',

        short_description:
          'Le e-shop qui référence uniquement\nles boutiques parisiennes indépendantes.',
        description:
          'Paris.Shopping met à l’honneur les meilleures boutiques et marques parisiennes, et propose chaque semaine LA sélection des produits préférés des Parisiens : les plus stylés, les plus tendances, les plus so chic, bref… les plus parisiens. Pour que chacun, qu’ils viennent en voisin ou depuis l’autre bout du monde, puisse accéder aux meilleures adresses de shopping. Et à l’esprit de Paris.',

        imgBgColor: 'bg-PPS.jpg',
        imgFirst: PPSImageFirst,

        poste: 'Directeur Artistique',
        techno: 'Magento II, Suite Adobe',
        color: '#F04249',

        mission:
          'Création de toute l’identité visuelle de Paris.shopping, élaboration d’une charte graphique pour ensuite créer tous les supports nécessaires. Création de supports print (carte de visite, présentations commerciales, packaging d’envoi, ..) et de supports web (maquettes et développement du site e-commerce, emailing, support de contact, vidéo, réseaux sociaux).',

        projet: [
          { img: '01-PPS.png', title: "Page d'accueil" },
          { img: '02-PPS.png', title: 'Page article et boutique' },
          { img: '03-PPS.png', title: 'Page produit' },
          { img: '04-PPS.png', title: 'Page à propos et panier' },
          { img: '05-PPS.png', title: 'Mail de commande' },
        ],
      },
      {
        id: 3,
        slug: 'rexel',
        name: 'Rexel Expo',
        categorie: 'Projet Full-Stack',

        short_description:
          "Expert de la distribution multicanale pour le monde de l'énergie.",
        description:
          'Expert mondial de la distribution professionnelle multicanale de produits et services pour le monde de l’énergie. L’offre du Groupe recouvre une large gamme de produits, de solutions et de services durables et innovants dans les domaines des équipements techniques, des automatismes et de la gestion de l’énergie pour la construction, la rénovation, la maintenance et la production.',

        imgBgColor: 'bg-REXEL.jpg',
        imgFirst: REXELImageFirst,

        poste: 'Développeur Full-Stack',
        techno: 'Next.js, Tailwind, Netlify',
        color: '#00448c',

        mission:
          "Demande atypique, le client souhaitait pour son prochain salon d'exposition, un site au décor de western, qui plus est, à l'alure d'un site web mais sur présenté sur une borne format mobile... challenge ! J'ai donc commencé à initialiser le projet avec du Next.js et du tailwindCss, puis j'ai scrappé certaines catégories produits directement sur leur e-commerce, et simulé un tunnel d'achat avec confirmation de celle-ci.",

        projet: [
          { img: '01-REXEL.png', title: "Page d'accueil" },
          { img: '02-REXEL.png', title: 'Page Outils' },
          { img: '03-REXEL.png', title: 'Page Catalogue' },
          { img: '04-REXEL.png', title: 'Page Produit' },
          { img: '05-REXEL.png', title: 'Page Panier' },
          { img: '06-REXEL.png', title: 'Page Confirmation panier' },
        ],
      },
      {
        id: 4,
        slug: 'wedigitalgarden',
        name: 'WeDigital Garden',
        categorie: 'Projet Full-Stack',

        short_description:
          "Un studio de réalisation green et responsable\nqui s'engage auprès de ses clients.",
        description:
          "Studio de réalisation qui s'engage auprès de ses clients à créer un impact business, à améliorer leur pertinence en réinventant leurs offres ou core business model et à délivrer plus rapidement de la valeur par la mise en place d’équipes et de méthodes cross-disciplinaires.",

        imgBgColor: 'bg-WDG.jpg',
        imgFirst: WDGImageFirst,

        poste: 'Developpeur Full-Stack',
        techno: 'Nuxt.js, Tailwind, Laravel 7',
        site: 'https://wedigital.garden',
        color: '#36A364',

        mission:
          'Refondre le site de WeDigital.Garden avec l’utilisation du framework Vue.js accompagné de tailwinds pour le front et de Laravel Nova pour le back-office pour l’ajout de nouvelles fonctionnalités, création de nouvelles pages du site ainsi que la gestion du changement de langue.',

        projet: [
          { img: '01-WDG.png', title: "Page d'Acceuil" },
          { img: '02-WDG.png', title: 'Page Méthodes' },
          { img: '03-WDG.png', title: 'Page Équipe' },
          { img: '04-WDG.png', title: 'Page Culture' },
          { img: '05-WDG.png', title: 'Page Projets' },
          { img: '06-WDG.png', title: 'Page Projet Détaillé' },
          { img: '07-WDG.png', title: 'Page Mentions Légales' },
        ],
      },
      {
        id: 5,
        slug: 'one4you',
        name: 'One4You',
        categorie: 'Projet Webdesign / Ui',

        short_description:
          'Faites vos achats en ligne, et recevez \nune partie en cashback, facile non ?',
        description:
          "En charge de la gestion globale de l’identité visuelle de One4You. J'assure la cohérence et construis l’image de One4You, la fait évoluer dans le respect des contraintes économiques et des objectifs stratégiques et commerciaux définis par la direction générale. Je conçois et coordonne l’ensemble des supports qui véhiculent l’identité visuelle de One4You, ainsi que des marques, enseignes et jeunes talents qui lui sont rattachés.",

        imgBgColor: 'bg-O4Y.jpg',
        imgFirst: O4YImageFirst,

        poste: 'Responsable Artistique',
        techno: 'Prestashop, Adobe Suite, AB Tasty',
        site: 'https://www.one4you.com',
        color: '#50E1C3',

        mission:
          'Création de toute l’identité visuelle de One4You, élaboration d’une charte graphique pour ensuite créer tous les supports nécessaires. Création de supports print (carte de visite, présentations commerciales, packaging, ..) et de supports web (maquettes et développement du site e-commerce, emailing, support de contact, vidéo, réseaux sociaux).',

        projet: [
          { img: '01-O4Y.png', title: "Page d'accueil" },
          { img: '02-O4Y.png', title: 'Page catalogue' },
          { img: '03-O4Y.png', title: 'Page produit' },
          { img: '04-O4Y.png', title: 'Page compte' },
          { img: '05-O4Y.png', title: 'Page commande' },
        ],
      },
    ],
  },
  rsPage: {
    mainTitle: 'Réseaux sociaux',
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
        link: '/about',
      },
      {
        id: '03',
        title: 'CV',
        link: '/cv',
      },
      {
        id: '02',
        title: 'Compétences',
        link: '/skills',
      },
      {
        id: '05',
        title: 'Réseaux sociaux',
        link: '/socials',
      },
      {
        id: '06',
        title: 'Contact',
        link: '/contact',
      },
      {
        id: '04',
        title: 'Selection de travaux',
        link: '/works',
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
      url: '/contact',
    },
    copyright: '2023 @ JOTHR. ALL RIGHT RESERVED',
  },
}

export default FR
