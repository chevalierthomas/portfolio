export type Language = 'fr' | 'en';

export type ProjectCategory = 'academic' | 'personal';

export interface LinkItem {
  label: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  title: string;
  school: string;
  period: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  category: ProjectCategory;
  link?: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    callToAction: string;
  };
  about: {
    title: string;
    highlights: string[];
    birthDateLabel: string;
    locationLabel: string;
    locationValue: string;
  };
  experience: {
    title: string;
    items: Experience[];
  };
  education: {
    title: string;
    items: Education[];
  };
  projects: {
    title: string;
    filterAll: string;
    filterAcademic: string;
    filterPersonal: string;
    linkLabel: string;
    items: Project[];
  };
  languages: {
    title: string;
    items: { label: string; level: string }[];
  };
  interests: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    socialLabel: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    meta: {
      title: 'Thomas Chevalier — Portfolio',
      description:
        'Portfolio bilingue de Thomas Chevalier, développeur web et passionné d’IA. Découvrez ses projets, expériences et compétences.'
    },
    nav: {
      about: 'À propos',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      title: 'Thomas Chevalier',
      subtitle:
        'Développeur web et passionné par l’intelligence artificielle. J’aime concevoir des expériences numériques élégantes et utiles.',
      callToAction: 'Explorer mon travail'
    },
    about: {
      title: 'Profil',
      highlights: [
        'IA & design, main dans la main',
        'Expériences web soignées et humaines',
        'Toujours prêt à explorer de nouvelles idées'
      ],
      birthDateLabel: 'Âge',
      locationLabel: 'Basé à',
      locationValue: 'Reims, France'
    },
    experience: {
      title: 'Expériences professionnelles',
      items: [
        {
          title: 'Développeur',
          company: 'Institut FEMTO-ST',
          location: 'Belfort, France',
          period: 'Janvier — Mai 2025',
          description: [
            'Amélioration d’un simulateur MATLAB de profils énergétiques résidentiels (modèle CREST).',
            'Intégration d’un pas de temps variable pour optimiser les calculs et réduire les coûts de simulation.',
            'Refonte partielle du code et documentation technique sous LaTeX.',
            'Validation statistique approfondie par simulations.'
          ],
          skills: ['MATLAB', 'Git', 'LaTeX', 'Modélisation', 'Simulation énergétique']
        },
        {
          title: 'Développeur web',
          company: 'Groupe Brangeon',
          location: 'Ingrandes-Le Fresne-sur-Loire, France',
          period: 'Avril — Juin 2024',
          description: [
            'Participation à une équipe de développement sur un framework interne PHP.',
            'Application de calcul d’empreinte carbone pour les clients.',
            'Application de gestion de tickets avec interface drag-and-drop.',
            'Gestion et visualisation de données via SQL et JavaScript/jQuery.'
          ],
          skills: ['PHP', 'JavaScript', 'jQuery', 'SQL', 'Développement web']
        }
      ]
    },
    education: {
      title: 'Formation',
      items: [
        {
          title: 'Master — Intelligence Artificielle',
          school: 'Université de Reims Champagne-Ardenne (URCA)',
          period: '2025 — 2027'
        },
        {
          title: 'BUT Informatique',
          school: 'IUT de Belfort-Montbéliard',
          period: '2022 — 2025'
        }
      ]
    },
    projects: {
      title: 'Projets sélectionnés',
      filterAll: 'Tous',
      filterAcademic: 'Universitaires',
      filterPersonal: 'Personnels',
      linkLabel: 'Voir le projet',
      items: [
        {
          title: 'SentiMarket',
          subtitle: 'Plateforme d’analyse financière par sentiments',
          description: [
            'Agrégation de données économiques et d’actualités financières.',
            'Analyse des corrélations entre les nouvelles et les cours boursiers grâce à FinBERT.'
          ],
          technologies: ['Vue.js', 'Node.js', 'Python', 'FinBERT', 'API financières'],
          category: 'personal',
          link: 'https://github.com/chevalierthomas/SentiMarket'
        },
        {
          title: 'Jeux Olympiques — Cérémonie d’ouverture',
          subtitle: 'Application interactive de présentation',
          description: [
            'Expérience utilisateur immersive basée sur des données officielles.',
            'Collaboration agile avec intégration continue et API Node.js.'
          ],
          technologies: ['Vue.js', 'Node.js', 'Axios', 'GitHub', 'Agile'],
          category: 'academic'
        },
        {
          title: 'Application de gestion de course à pied',
          subtitle: 'Analyse de données biométriques',
          description: [
            'Pipeline de préparation de données et de prédiction de performances.',
            'API REST pour exposer les résultats analytiques.'
          ],
          technologies: ['Python', 'Pandas', 'Scikit-learn', 'API REST'],
          category: 'academic'
        },
        {
          title: 'Campus Connect iOS',
          subtitle: 'Application native SwiftUI reliée à une API',
          description: [
            'Parcours mobile complet pour les étudiants : actualités, événements et services.',
            'Intégration d’une API REST sécurisée avec authentification et synchronisation temps réel.',
            'Interface dynamique en SwiftUI avec gestion hors ligne et animations fluides.'
          ],
          technologies: ['Swift', 'SwiftUI', 'REST API', 'Firebase'],
          category: 'academic'
        }
      ]
    },
    languages: {
      title: 'Langues',
      items: [
        { label: 'Français', level: 'Langue maternelle' },
        { label: 'Anglais', level: 'Avancé' }
      ]
    },
    interests: {
      title: 'Centres d’intérêt',
      items: [
        'Photographie',
        'Voyages et découverte du monde',
        'Économie (The Economist)',
        'Musique',
        'Bricolage (électronique, développement, DIY)',
        'Comprendre le monde via les médias et la technologie'
      ]
    },
    contact: {
      title: 'Entrons en contact',
      subtitle:
        'Disponible pour des opportunités en IA, data science ou développement web. Discutons de vos projets !',
      emailLabel: 'Envoyez-moi un e-mail',
      socialLabel: 'Suivez-moi'
    }
  },
  en: {
    meta: {
      title: 'Thomas Chevalier — Portfolio',
      description:
        'Bilingual portfolio of Thomas Chevalier, web developer and AI enthusiast. Explore projects, experience and skills.'
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Thomas Chevalier',
      subtitle:
        'Web developer passionate about artificial intelligence. I craft elegant and meaningful digital experiences.',
      callToAction: 'See my work'
    },
    about: {
      title: 'Profile',
      highlights: [
        'Where AI meets delightful design',
        'Thoughtful web experiences with a human touch',
        'Curious mind, always exploring'
      ],
      birthDateLabel: 'Age',
      locationLabel: 'Based in',
      locationValue: 'Reims, France'
    },
    experience: {
      title: 'Professional experience',
      items: [
        {
          title: 'Developer',
          company: 'Institut FEMTO-ST',
          location: 'Belfort, France',
          period: 'January — May 2025',
          description: [
            'Improved a MATLAB simulator for residential energy profiles (CREST model).',
            'Integrated variable time steps to optimise computation and reduce simulation costs.',
            'Led partial refactor and wrote technical documentation with LaTeX.',
            'Conducted statistical validation through extensive simulations.'
          ],
          skills: ['MATLAB', 'Git', 'LaTeX', 'Modelling', 'Energy simulation']
        },
        {
          title: 'Web developer',
          company: 'Groupe Brangeon',
          location: 'Ingrandes-Le Fresne-sur-Loire, France',
          period: 'April — June 2024',
          description: [
            'Worked within a PHP internal framework as part of a feature squad.',
            'Built a carbon footprint calculator for clients.',
            'Developed a ticket management app with drag-and-drop interface.',
            'Handled SQL data pipelines and dynamic UI using JavaScript/jQuery.'
          ],
          skills: ['PHP', 'JavaScript', 'jQuery', 'SQL', 'Web development']
        }
      ]
    },
    education: {
      title: 'Education',
      items: [
        {
          title: 'Master — Artificial Intelligence',
          school: 'Université de Reims Champagne-Ardenne (URCA)',
          period: '2025 — 2027'
        },
        {
          title: 'B.Eng — Computer Science (BUT Informatique)',
          school: 'IUT de Belfort-Montbéliard',
          period: '2022 — 2025'
        }
      ]
    },
    projects: {
      title: 'Highlighted projects',
      filterAll: 'All',
      filterAcademic: 'Academic',
      filterPersonal: 'Personal',
      linkLabel: 'View project',
      items: [
        {
          title: 'SentiMarket',
          subtitle: 'Market sentiment analytics platform',
          description: [
            'Aggregates economic data and financial news sources.',
            'Correlates breaking news with stock prices using FinBERT.'
          ],
          technologies: ['Vue.js', 'Node.js', 'Python', 'FinBERT', 'Financial APIs'],
          category: 'personal',
          link: 'https://github.com/chevalierthomas/SentiMarket'
        },
        {
          title: 'Olympic Games — Opening Ceremony',
          subtitle: 'Interactive showcase application',
          description: [
            'Immersive experience built around official data storytelling.',
            'Agile collaboration with continuous integration and Node.js APIs.'
          ],
          technologies: ['Vue.js', 'Node.js', 'Axios', 'GitHub', 'Agile'],
          category: 'academic'
        },
        {
          title: 'Running insights app',
          subtitle: 'Biometric data analytics',
          description: [
            'Data preparation and prediction pipeline for race times.',
            'REST API to serve analytical insights.'
          ],
          technologies: ['Python', 'Pandas', 'Scikit-learn', 'REST API'],
          category: 'academic'
        },
        {
          title: 'Campus Connect iOS',
          subtitle: 'Native SwiftUI app powered by an API',
          description: [
            'End-to-end mobile experience for students with news, events and services.',
            'Secured REST API integration with authentication and real-time sync.',
            'SwiftUI interface with offline mode, caching and fluid animations.'
          ],
          technologies: ['Swift', 'SwiftUI', 'REST API', 'Firebase'],
          category: 'academic'
        }
      ]
    },
    languages: {
      title: 'Languages',
      items: [
        { label: 'French', level: 'Native' },
        { label: 'English', level: 'Advanced' }
      ]
    },
    interests: {
      title: 'Interests',
      items: [
        'Photography',
        'Travelling and world discovery',
        'Economics (The Economist)',
        'Music',
        'DIY & tinkering (electronics, coding, making)',
        'Understanding the world through media and technology'
      ]
    },
    contact: {
      title: 'Let’s connect',
      subtitle:
        'Open to opportunities in AI, data science or web development. I would love to hear about your ideas.',
      emailLabel: 'Email me',
      socialLabel: 'Follow me'
    }
  }
};
