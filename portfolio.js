/**
 * ElyDev Portfolio - Pure Native JavaScript Core
 * Portafolio Creativo y Desarrollador (Eliezer Terrero)
 * 100% Vanilla JS - Sin dependencias de Node.js en tiempo de ejecución
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_projects_elydev_v8';
  const EXPERIENCES_STORAGE_KEY = 'portfolio_experiences_v2';
  const ASSETS_STORAGE_KEY = 'portfolio_community_assets_v1';
  const ASSET_LIKES_KEY = 'portfolio_community_asset_likes_v1';
  const ASSET_COMMENTS_KEY = 'portfolio_community_asset_comments_v1';
  const ASSET_DOWNLOAD_DAYS_KEY = 'portfolio_community_asset_download_days_v1';
  const AUTH_STORAGE_KEY = 'portfolio_auth_user_v2';
  const THEME_STORAGE_KEY = 'portfolio_theme_elydev';
  const GITHUB_OWNER = 'EliezerYT';
  const GITHUB_REPOSITORY = 'eliezeryt.github.io';
  const GITHUB_BRANCH = 'main';
  const GITHUB_API_BASE = 'https://api.github.com';
  const GITHUB_IMAGE_PATH = 'assets/images/moderator';
  const GITHUB_TOKEN_STORAGE_KEY = 'elydev_github_token';

  // 1. Datos iniciales del perfil y proyectos
  const initialProfile = {
    name: 'Eliezer Terrero',
    brandName: 'ElyDev',
    title: 'Game Developer & Unity Specialist',
    avatar: './assets/images/ely/my-avatar.png',
    bio: 'Desarrollador apasionado de videojuegos enfocado en aprovechar el máximo potencial de tecnologías avanzadas como Unity, Photon Network y desarrollo full-stack para crear proyectos innovadores y experiencias inmersivas.',
    summaryParagraphs: [
      'Mi compromiso es consolidarme como un desarrollador vanguardista, ampliando constantemente los límites de lo posible y construyendo una sólida reputación en la industria de los videojuegos.',
      'Mi meta principal es fundar y liderar mi propia compañía de videojuegos en República Dominicana, contribuyendo activamente al crecimiento del ecosistema de desarrollo local y generando oportunidades e innovación en este mercado emergente.'
    ],
    location: 'República Dominicana (Disponible Remoto)',
    availableForWork: true,
    email: 'eliezerterrero275@gmail.com',
    linktree: 'https://linktr.ee/elydev',
    youtube: 'https://www.youtube.com/channel/UCuiY3lZrlrbXsX-RR9v3Kbg',
    instagram: 'https://www.instagram.com/_elydev',
    github: 'https://github.com/eliezeryt',
    linkedin: 'https://www.linkedin.com',
  };

  const initialProjects = [
    {
      id: 'overdrivers',
      title: 'OverDrivers: Racing Game',
      tagline: 'Juego de carreras y velocidad de alta adrenalina con banda sonora original',
      description: 'Proyecto de carreras en 3D desarrollado por ElyDev, con físicas dinámicas de derrape, personalización de vehículos y colaboración musical con artistas urbanos en el soundtrack oficial.',
      fullStory: 'OverDrivers representa mi proyecto insignia de carreras y acción. Diseñado con modelos de alta fidelidad, sistema de cámaras dinámicas de seguimiento y un pipeline de audio integrado que incluye colaboraciones oficiales con artistas musicales (canción "Quieren Quitarme" de Cifra Slimk). Cuenta con teasers oficiales en YouTube y optimización continua de rendimiento.',
      category: 'juegos',
      origin: 'propio',
      year: '2024 - 2025',
      role: 'Lead Game Designer & Programador Principal',
      featured: true,
      coverImage: './assets/images/ely/Proyectos/Overdrivers/od1.jpg',
      galleryImages: [
        './assets/images/ely/Proyectos/Overdrivers/od1.jpg',
        './assets/images/ely/my-avatar.png'
      ],
      youtubeVideo: 'https://www.youtube.com/watch?v=PH6cK45nkto',
      technologies: ['Unity 3D', 'C#', 'Vehicle Physics', 'FMOD Audio', 'Cinemachine', 'Custom Shaders'],
      metrics: [
        { label: 'Estado', value: 'En Desarrollo Activo' },
        { label: 'Teasers Oficiales', value: '#1 y #2 en YouTube' },
        { label: 'Colaboración', value: 'Soundtrack Original' }
      ],
      keyContributions: [
        'Implementación del modelo de físicas de vehículos con tracción en las cuatro ruedas y derrape asistido.',
        'Sistema de sonido adaptativo con motores reactivos a RPM y cambios de marcha.',
        'Dirección y edición de los teasers cinematográficos oficiales publicados en el canal de YouTube.',
        'Diseño de circuitos urbanos nocturnos con iluminación optimizada para tasas de cuadros estables.'
      ],
      links: [
        { label: 'Ver Teaser #2 en YouTube', url: 'https://www.youtube.com/watch?v=PH6cK45nkto', type: 'video' },
        { label: 'Colaboración Musical Cifra Slimk', url: 'https://www.youtube.com/watch?v=jA9kxcgnPmw', type: 'video' }
      ]
    },
    {
      id: 'en-una-goma',
      title: 'MotoLoco | En Una Goma',
      tagline: 'Desarrollo completo de videojuego y portal web para CapricornioTV',
      description: 'Videojuego oficial desarrollado para el reconocido influencer CapricornioTV, recreando la cultura de acrobacias y motocicletas con portal web promocional, backend en PHP y base de datos propia.',
      fullStory: 'Desarrollé el juego "En una goma" de principio a fin, creando tanto la experiencia interactiva como su portal web promocional. Gestioné el frontend y backend en PHP junto a una base de datos personalizada para rankings y estadísticas de jugadores. El proyecto fusionó creatividad con rigor técnico para una comunidad masiva de seguidores.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'Capricornio Games & CapricornioTV',
      year: '2024 - 2025',
      role: 'Freelance Lead Game Developer & Web Full-Stack',
      featured: true,
      coverImage: './assets/images/ely/icon-enunagoma.png',
      galleryImages: [
        './assets/images/ely/icon-enunagoma.png',
        './assets/images/ely/overdrivers-teaser.jpg'
      ],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'PHP', 'MySQL', 'Web Development', 'Physics Tuning'],
      metrics: [
        { label: 'Cliente', value: 'CapricornioTV' },
        { label: 'Alcance', value: 'Audiencia Masiva' },
        { label: 'Sistemas', value: 'Juego + Web + Backend' }
      ],
      keyContributions: [
        'Diseño y programación de las mecánicas de balance, caballitos ("en una goma") y control de aceleración.',
        'Construcción de la web promocional responsiva para descarga e interacción con los fanáticos.',
        'Arquitectura de base de datos MySQL y endpoints PHP para sincronización de puntuaciones.',
        'Optimización de texturas y consumo de memoria para compatibilidad en dispositivos Android gama media y baja.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCkhIcWiA/6wdEoS2nzQ9AS30-C88Rqw/view', type: 'external' }
      ]
    },
    {
      id: 'dominican-power',
      title: 'Dominican Power',
      tagline: 'Remake integral de UI, economía in-game y multijugador online con Photon',
      description: 'Renovación técnica integral del título: cambio de orientación de pantalla, reconstrucción visual de interfaz, integración de multijugador online mediante Photon y personalización completa de personajes.',
      fullStory: 'Contratado por DoGame para revitalizar y estabilizar Dominican Power. Asumí la corrección de errores críticos, lideré un rediseño completo de interfaz de usuario con navegación más intuitiva, implementé la orientación de pantalla más cómoda e integré Photon PUN 2 para habilitar partidas multijugador con personalización y tienda dentro del juego.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'DoGame (Estudio / Empresa)',
      year: '2021 - 2022',
      role: 'Freelance Game Developer (UI, Red & Gameplay)',
      featured: true,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      galleryImages: [
        './assets/images/ely/icon-dominicanpower.png',
        './assets/images/ely/icon-yunonline.png'
      ],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Photon Network', 'Photon PUN 2', 'UI/UX Redesign', 'In-Game Economy'],
      metrics: [
        { label: 'Multijugador', value: 'Photon Online' },
        { label: 'Rediseño UI', value: '100% Remake' },
        { label: 'Personalización', value: 'Inventario & Tienda' }
      ],
      keyContributions: [
        'Reemplazo y modernización de todo el pipeline de interfaz de usuario con flujo optimizado de navegación.',
        'Sincronización de salas, emparejamiento de jugadores y replicación de estados vía Photon PUN 2.',
        'Implementación del sistema de cambio de orientación de juego fluida sin pérdida de contexto.',
        'Desarrollo del catálogo de customización de personajes y balance de economía virtual.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'external' }
      ]
    },
    {
      id: 'telesancris',
      title: 'Telesancris Mobile App',
      tagline: 'Aplicación para transmisiones en vivo y contenido de canal televisivo',
      description: 'Desarrollo integral de la aplicación para el canal Telesancris, permitiendo a los televidentes disfrutar de transmisiones en streaming directo, programación y noticias desde sus smartphones.',
      fullStory: 'Creación completa de la aplicación móvil para el canal Telesancris. Diseñada para garantizar una reproducción fluida de vídeo en streaming, arquitectura de interfaz moderna y compatibilidad multiplataforma para maximizar la audiencia del canal.',
      category: 'aplicaciones',
      origin: 'trabajado',
      clientOrTeam: 'Canal Telesancris (Cliente Comercial)',
      year: '2023',
      role: 'Desarrollador de Aplicación Móvil',
      featured: true,
      coverImage: './assets/images/ely/icon-telesancris.png',
      galleryImages: ['./assets/images/ely/icon-telesancris.png'],
      youtubeVideo: '',
      technologies: ['C# / Unity Mobile Tools', 'HLS Video Streaming', 'UI/UX Design', 'Android Deployment'],
      metrics: [
        { label: 'Plataforma', value: 'Mobile Android' },
        { label: 'Streaming', value: 'Transmisión en Vivo' },
        { label: 'Desarrollo', value: 'Proyecto Completo' }
      ],
      keyContributions: [
        'Integración del reproductor de vídeo HLS con auto-reconexión ante pérdidas de señal.',
        'Diseño de interfaces intuitivas y adaptables a diferentes tamaños de pantalla y tabletas.',
        'Optimización de consumo de datos móviles y batería durante reproducciones prolongadas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MVzjW94/j7VFCuqrg5BSzVhgUEqyTA/view', type: 'external' }
      ]
    },
    {
      id: 'yun-online',
      title: 'Yun Online',
      tagline: 'Reskin y adaptación multijugador competitiva de minijuego',
      description: 'Adaptación y reskin completo del popular minijuego extraído de Dominican Power, optimizado para partidas rápidas multijugador y competición en línea.',
      fullStory: 'Proyecto colaborativo derivado de Dominican Power. Se reconstruyó la presentación artística, el bucle de juego y las mecánicas competitivas para convertirlo en un título independiente rápido y altamente rejugable.',
      category: 'collab',
      origin: 'trabajado',
      clientOrTeam: 'DoGame / Colaboración',
      year: '2022',
      role: 'Programador de Juego & Reskin',
      featured: false,
      coverImage: './assets/images/ely/icon-yunonline.png',
      galleryImages: ['./assets/images/ely/icon-yunonline.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Photon Network', 'Sprite Pipeline', 'Mobile Controls'],
      metrics: [
        { label: 'Tipo', value: 'Colaboración / Spin-off' },
        { label: 'Modo', value: 'Multijugador Rápido' }
      ],
      keyContributions: [
        'Desacople del minijuego como aplicación autónoma con arquitectura limpia.',
        'Integración del nuevo paquete artístico 2D y adaptación a controles táctiles.',
        'Sincronización de eventos de red y detección de ganador en partidas multijugador.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0NNsRCC0/gjlQJP0_Fy8q-d42zMkRZA/view', type: 'external' }
      ]
    },
    {
      id: 'retopolis',
      title: 'Retopolis',
      tagline: 'Hub completo de desafíos interactivos y minijuegos arcade',
      description: 'Creación integral del juego Retopolis, concebido como una plataforma de retos y minijuegos con mecánicas variadas y enfoque en la diversión inmediata.',
      fullStory: 'Desarrollé la arquitectura completa del videojuego Retopolis, implementando un sistema modular que permite seleccionar y desbloquear diferentes tipos de desafíos, acumulando puntuaciones globales.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'Cliente Comercial',
      year: '2023',
      role: 'Desarrollador Integral de Juego',
      featured: false,
      coverImage: './assets/images/ely/icon-retopolis.jpg',
      galleryImages: ['./assets/images/ely/icon-retopolis.jpg'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Modular Gameplay Architecture', 'Mobile UI', 'Audio Manager'],
      metrics: [
        { label: 'Estructura', value: 'Hub Multi-Juego' },
        { label: 'Desarrollo', value: 'Integral (100%)' }
      ],
      keyContributions: [
        'Diseño modular de minijuegos para carga dinámica sin saturar la memoria RAM.',
        'Sistema de recompensas, trofeos y desbloqueo progresivo.',
        'Efectos visuales y respuesta táctil para maximizar la satisfacción del jugador.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCkkao1s4/zyVN3YLet4Bukyi6TTFucg/view', type: 'external' }
      ]
    },
    {
      id: 'helptuber',
      title: 'HELPTUBER',
      tagline: 'Suite de productividad y herramientas para creadores de YouTube',
      description: 'Aplicación propia creada para asistir a YouTubers y streamers en la generación de títulos atractivos, análisis de palabras clave, cálculo de metas y organización de publicaciones.',
      fullStory: 'Desarrollada como proyecto propio para potenciar la presencia digital de creadores. Proporciona herramientas de cálculo de engagement, ideas de títulos y un flujo de trabajo ágil para canales en crecimiento.',
      category: 'aplicaciones',
      origin: 'propio',
      year: '2023',
      role: 'Creador & Desarrollador Principal',
      featured: false,
      coverImage: './assets/images/ely/icon-helptuber.jpg',
      galleryImages: ['./assets/images/ely/icon-helptuber.jpg'],
      youtubeVideo: '',
      technologies: ['Unity UI / C#', 'REST API Integration', 'Data Serialization', 'Productivity UX'],
      metrics: [
        { label: 'Objetivo', value: 'Asistente para YouTubers' },
        { label: 'Tipo', value: 'Proyecto Propio' }
      ],
      keyContributions: [
        'Algoritmos de puntuación de títulos basados en longitud, palabras gancho y mayúsculas.',
        'Calculadora de proyecciones de visualizaciones y suscriptores.',
        'Interfaz oscura y limpia diseñada para sesiones prolongadas de planificación.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk7lYFWk/tiI_f0hndpYcUp3XCdBKVg/view', type: 'external' }
      ]
    },
    {
      id: 'dominoes-republic',
      title: 'Dominoes Republic',
      tagline: 'Soporte técnico, reglas internacionales y corrección de geolocalización',
      description: 'Intervención especializada para resolver errores críticos en las reglas de juego y solucionar interferencias con separadores de geolocalización en partidas competitivas.',
      fullStory: 'Contratado por SHL para un diagnóstico urgente de errores y estabilización del juego Dominoes Republic. Identifiqué y corregí la interferencia en la lógica de geolocalización que afectaba el emparejamiento entre regiones y pulí las reglas de puntuación.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'SHL (Cliente Comercial)',
      year: '2022',
      role: 'Freelance Game Developer (Bug Fixer & Optimization)',
      featured: false,
      coverImage: './assets/images/ely/icon-dominoesrepublic.png',
      galleryImages: ['./assets/images/ely/icon-dominoesrepublic.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Geolocation Services', 'Board Game Logic', 'Profiling'],
      metrics: [
        { label: 'Resolución', value: 'Bugs Críticos Solucionados' },
        { label: 'Área', value: 'Geolocalización & Reglas' }
      ],
      keyContributions: [
        'Depuración a fondo de la capa de geolocalización eliminando conflictos de red.',
        'Refactorización del cálculo de puntos y validación de fichas jugables en tiempo real.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0NBKnGd8/vFlbYTjjWVnj48E-iLjBiA/view', type: 'external' }
      ]
    },
    {
      id: 'adventure-world',
      title: 'Adventure World',
      tagline: 'Plataformas clásico con niveles desafiantes y físicas precisas',
      description: 'Videojuego propio de plataformas en 2D con salto cinemático, enemigos móviles, coleccionables y trampas dinámicas.',
      fullStory: 'Proyecto personal enfocado en pulir al máximo la sensación del salto y la respuesta inmediata del jugador en plataformas. Cuenta con diseño de niveles artesanal y transiciones fluidas.',
      category: 'juegos',
      origin: 'propio',
      year: '2022',
      role: 'Desarrollador & Diseñador de Niveles',
      featured: false,
      coverImage: './assets/images/ely/picon-aworld.png',
      galleryImages: ['./assets/images/ely/picon-aworld.png'],
      youtubeVideo: '',
      technologies: ['Unity 2D', 'C#', '2D Tilemaps', 'Player Controller', 'Sound Effects'],
      metrics: [
        { label: 'Género', value: 'Plataformas 2D' },
        { label: 'Control', value: 'Físicas Ajustadas al Milímetro' }
      ],
      keyContributions: [
        'Controlador de personaje 2D con coyote time, jump buffering y aceleración variable.',
        'Implementación de cámaras Cinemachine con zonas de confinamiento por nivel.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MF1rMQw/2JTfqiurWyJgWguk06b7UA/view', type: 'external' }
      ]
    },
    {
      id: 'hellish-flash',
      title: 'Hellish Flash',
      tagline: 'Acción vertiginosa, reflejos y esquivas en entornos incandescentes',
      description: 'Juego arcade de supervivencia rápida donde el jugador debe sortear proyectiles incandescentes y trampas con reflejos de milisegundos.',
      fullStory: 'Una experiencia diseñada para poner a prueba los reflejos y la coordinación visomotriz. Utiliza sistemas de partículas intensos y una curva de dificultad progresiva que engancha desde el primer intento.',
      category: 'juegos',
      origin: 'propio',
      year: '2022',
      role: 'Creador & Programador de Jugabilidad',
      featured: false,
      coverImage: './assets/images/ely/picon-hellishF.png',
      galleryImages: ['./assets/images/ely/picon-hellishF.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Particle Systems', 'Score Management', 'Arcade Loop'],
      metrics: [
        { label: 'Estilo', value: 'Arcade de Reflejos' },
        { label: 'Velocidad', value: 'Ritmo Dinámico Creciente' }
      ],
      keyContributions: [
        'Generador procedural de oleadas de proyectiles con patrones geométricos.',
        'Efectos de pantalla (screen shake, destellos) para un impacto sensorial contundente.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MBfNzv0/V_wjWT_qnxDu_W-t39kSHg/view', type: 'external' }
      ]
    },
    {
      id: 'la-aranita-online',
      title: 'La Arañita Online',
      tagline: 'Juego multijugador online casual con interacción en tiempo real',
      description: 'Experiencia multijugador en red conectando jugadores en tiempo real para partidas dinámicas y divertidas.',
      fullStory: 'Desarrollado para experimentar con el manejo de salas y sincronización rápida en Unity con Photon PUN. Permite a múltiples usuarios interactuar simultáneamente en la misma sesión.',
      category: 'collab',
      origin: 'propio',
      clientOrTeam: 'ElyDev & Comunidad',
      year: '2022',
      role: 'Creador & Desarrollador de Red',
      featured: false,
      coverImage: './assets/images/ely/picon-thespider.png',
      galleryImages: ['./assets/images/ely/picon-thespider.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'Photon PUN 2', 'C#', 'Multiplayer Sync', 'Lobby System'],
      metrics: [
        { label: 'Modo', value: 'Multijugador en Línea' },
        { label: 'Red', value: 'Photon Network' }
      ],
      keyContributions: [
        'Sistema de creación de salas y emparejamiento automático por código.',
        'Sincronización suave de posiciones con interpolación y predicción de retardo.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MCJd1U0/qY3RQ3ugWYEIVYuZOHauJg/view', type: 'external' }
      ]
    },
    {
      id: 'rolling-ball',
      title: 'Rolling Ball',
      tagline: 'Físicas 3D, equilibrio e inercia a través de pistas complejas',
      description: 'Juego de precisión física donde controlas una esfera superando rampas estrechas, plataformas móviles y obstáculos gravitacionales.',
      fullStory: 'Centrado en la simulación de rozamiento y dinámica de cuerpos rígidos en 3D. Cada nivel presenta retos de equilibrio con física realista y escenarios suspendidos en el vacío.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Diseñador de Físicas & Programador',
      featured: false,
      coverImage: './assets/images/ely/picon-Rball.png',
      galleryImages: ['./assets/images/ely/picon-Rball.png'],
      youtubeVideo: '',
      technologies: ['Unity 3D', 'C#', 'Rigidbody & Physics Materials', 'Dynamic Camera'],
      metrics: [
        { label: 'Motor de Físicas', value: 'Unity 3D PhysX' },
        { label: 'Reto', value: 'Precisión & Equilibrio' }
      ],
      keyContributions: [
        'Ajuste fino de aceleración, inercia angular y fricción para un control satisfactorio.',
        'Cámara orbital que acompaña fluidamente giros y caídas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MKEi_ZM/xu3nXL1jueAwZXqBjPZQ-Q/view', type: 'external' }
      ]
    },
    {
      id: 'maddys-adventures',
      title: 'Maddys Adventures',
      tagline: 'Aventura 2D con exploración de mundos y acertijos',
      description: 'Juego de aventura y exploración protagonizado por Maddy, combinando acción ligera, saltos y desafíos de exploración.',
      fullStory: 'Un proyecto lleno de encanto visual donde se implementaron animaciones por cuadros, estados de movimiento del personaje y diseño de ambientes variados.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Desarrollador Integral',
      featured: false,
      coverImage: './assets/images/ely/picon-maddys.png',
      galleryImages: ['./assets/images/ely/picon-maddys.png'],
      youtubeVideo: '',
      technologies: ['Unity 2D', 'C#', 'Animation Controllers', 'Tilemap Design'],
      metrics: [
        { label: 'Tipo', value: 'Aventura 2D' },
        { label: 'Arte', value: 'Animación Tradicional Integrada' }
      ],
      keyContributions: [
        'Implementación del sistema de vida, daño y checkpoints.',
        'Diseño de mecánicas interactivas con el entorno (llaves, puertas, resortes).'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0IFpYdNI/nNmvLL1L61rDTfBl8RWKuQ/view', type: 'external' }
      ]
    },
    {
      id: 'snakes-battles',
      title: 'Snakes Battles',
      tagline: 'Duelos de serpientes con arenas competitivas y power-ups',
      description: 'Reinvención del clásico juego de la serpiente con arenas de batalla, potenciadores tácticos e inteligencia artificial reactiva.',
      fullStory: 'Desarrollo de mecánicas competitivas en cuadrícula donde múltiples serpientes compiten por territorio y coleccionables con trampas y power-ups de aceleración.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Programador & Diseñador',
      featured: false,
      coverImage: './assets/images/ely/picon-snakes.png',
      galleryImages: ['./assets/images/ely/picon-snakes.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Grid Logic', 'AI Pathfinding', 'Power-ups'],
      metrics: [
        { label: 'IA', value: 'Enemigos Autónomos' },
        { label: 'Estilo', value: 'Snake Battle Arena' }
      ],
      keyContributions: [
        'Lógica de detección de colisiones corporales por segmentos sin fallos de precisión.',
        'Sistema de IA que calcula rutas de intercepción hacia los alimentos más cercanos.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0IadlXmc/HB7dfaGUkaMH-D7-kC5fDA/view', type: 'external' }
      ]
    },
    {
      id: 'peace-in-the-forest',
      title: 'Peace In The Forest & Wall Ball',
      tagline: 'Colección de minijuegos arcade y experiencias visuales',
      description: 'Experiencias interactivas complementarias centradas en estética ambiental tranquila y destreza de reflejos en pantalla táctil.',
      fullStory: 'Títulos diseñados para experimentar con paletas de color calmantes, efectos atmosféricos y mecánicas de rebote en Wall Ball.',
      category: 'juegos',
      origin: 'propio',
      year: '2020',
      role: 'Desarrollador',
      featured: false,
      coverImage: './assets/images/ely/picon-peace.png',
      galleryImages: ['./assets/images/ely/picon-peace.png'],
      youtubeVideo: '',
      technologies: ['Unity', 'C#', 'Atmospheric Lighting', 'Touch Controls'],
      metrics: [
        { label: 'Enfoque', value: 'Casual & Relax' }
      ],
      keyContributions: [
        'Optimización de draw calls para ejecución ultrarrápida.',
        'Sistemas de sonido ambiental estéreo inmersivo.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MJdu2og/XTAwznoKYCso9oa_41NnHg/view', type: 'external' }
      ]
    },
    {
      id: 'service-ads-monetization',
      title: 'Ads Monetization System | $80',
      tagline: 'Implementación de Banner, Intersticial y Rewarded Ads en tu juego o app',
      description: 'Implementa sistemas de monetización publicitaria completos para maximizar los ingresos y engagement de tu juego o aplicación en Android e iOS sin perjudicar el rendimiento.',
      fullStory: 'Servicio técnico especializado para desarrolladores y estudios que desean monetizar sus títulos. Integro Google AdMob o Unity Ads con arquitectura de eventos limpia, pruebas exhaustivas en dispositivos físicos y configuración de anuncios recompensados (Rewarded) que incentivan al jugador a continuar jugando.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$80 USD',
      deliveryTime: '2 - 4 días hábiles',
      role: 'Especialista en Monetización & SDKs',
      featured: true,
      coverImage: './assets/images/ely/icon-appads.png',
      galleryImages: ['./assets/images/ely/icon-appads.png'],
      youtubeVideo: '',
      technologies: ['Google AdMob', 'Unity Ads', 'Mediation SDKs', 'C# Event Callbacks', 'Google Play Policy'],
      metrics: [
        { label: 'Precio Fijo', value: '$80 USD' },
        { label: 'Formatos', value: 'Banner, Interstitial & Rewarded' },
        { label: 'Plataformas', value: 'Android / iOS / Unity' }
      ],
      keyContributions: [
        'Configuración completa de IDs de anuncios y modo de pruebas (Test Ads) para evitar sanciones de Google.',
        'Controladores modulares en C# con eventos onAdLoaded, onAdFailed y onUserEarnedReward.',
        'Optimización de carga en segundo plano para no generar tirones ni caídas de fotogramas.',
        'Documentación paso a paso de uso y soporte post-entrega.'
      ],
      requirements: [
        'Cuenta activa de Google AdMob o Unity Ads con App ID generado.',
        'Proyecto de Unity (versión 2020.3 LTS o superior) listo y sin errores de consola.',
        'Botones o pantallas de UI definidos donde el usuario verá los anuncios recompensados o intersticiales.',
        'Acceso al proyecto vía repositorio de GitHub o paquete .unitypackage.'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'service-in-app-purchases',
      title: 'In App Purchases System | $80',
      tagline: 'Sistema de compras integradas seguro para Android e iOS',
      description: 'Integración completa de compras dentro de la aplicación para videojuegos o apps: monedas virtuales, gemas, remoción de anuncios y desbloqueo de skins.',
      fullStory: 'Implementación profesional del subsistema de compras integradas (IAP). Manejo seguro de recibos, catálogo de productos consumibles (como monedas o vidas) y no consumibles (como "Quitar Anuncios" permanente), con guardado encriptado de compras restaurables.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$80 USD',
      deliveryTime: '2 - 3 días hábiles',
      role: 'Ingeniero de Integración IAP & Billing',
      featured: true,
      coverImage: './assets/images/ely/icon-inapppurchase.png',
      galleryImages: ['./assets/images/ely/icon-inapppurchase.png'],
      youtubeVideo: '',
      technologies: ['Unity IAP', 'Google Play Billing', 'Apple StoreKit', 'C# State Manager', 'Data Encryption'],
      metrics: [
        { label: 'Precio Fijo', value: '$80 USD' },
        { label: 'Seguridad', value: 'Receipt Validation' },
        { label: 'Compatibilidad', value: 'Google Play & App Store' }
      ],
      keyContributions: [
        'Configuración de catálogo de productos en Google Play Console / App Store Connect.',
        'Lógica de compra, fallo y restauración automática de compras previas.',
        'Persistencia de balance de divisas del jugador protegida contra modificaciones locales.',
        'Interfaz de tienda in-game limpia y responsiva adaptada a tu diseño.'
      ],
      requirements: [
        'Cuenta de desarrollador en Google Play Console o Apple Developer activa.',
        'Lista de productos con Product IDs exactos, nombres descriptivos y precios en cada moneda.',
        'Proyecto de Unity funcional sin errores de compilación previos.',
        'Keystore de producción (en caso de que el juego ya esté publicado en la tienda).'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAHCkjRi0ls/YmC7BlfJ8XV_C34xoBTw3g/view', type: 'canva' }
      ]
    },
    {
      id: 'service-sounds-fx',
      title: 'Sounds FX & Music System | $50',
      tagline: 'Gestor completo de audio, efectos y música interactiva',
      description: 'Implementación de sistema de música y efectos sonoros (SFX) para videojuegos o apps: mezcladores, volumen por canales, persistencia y eventos dinámicos.',
      fullStory: 'El sonido es el 50% de la experiencia en cualquier juego o aplicación. Este sistema proporciona un Sound Manager centralizado en Unity, permitiendo disparar efectos sonoros espaciales o estéreo con una sola línea de código, controlar música de fondo con transiciones suaves y guardar preferencias de volumen del usuario.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$50 USD',
      deliveryTime: '1 - 2 días hábiles',
      role: 'Arquitecto de Audio & Sound Design',
      featured: false,
      coverImage: './assets/images/ely/icon-soundsystempng.png',
      galleryImages: ['./assets/images/ely/icon-soundsystempng.png'],
      youtubeVideo: '',
      technologies: ['Unity AudioSource', 'AudioMixer', 'FMOD Integration', 'PlayerPrefs Sound Persistence', 'C#'],
      metrics: [
        { label: 'Precio Fijo', value: '$50 USD' },
        { label: 'Entrega Rápida', value: '24 a 48 Horas' },
        { label: 'Canales', value: 'Master, Music & SFX' }
      ],
      keyContributions: [
        'Sound Manager Singleton con métodos PlaySFX(clip) y PlayMusic(clip, fadeDuration).',
        'Configuración de AudioMixer con sliders de volumen en decibelios logarítmicos naturales.',
        'Audio 3D espacializado para fuentes puntuales en videojuegos 3D.',
        'Optimización de importación de clips de audio para reducir drásticamente el peso del build.'
      ],
      requirements: [
        'Archivos de sonido y pistas musicales en formatos .wav, .mp3 o .ogg.',
        'Lista o guion de eventos donde debe sonar cada efecto.',
        'Proyecto de Unity donde se importará y configurará el Sound Manager.'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAG0eNukPlg/6Rbu0zCNNBiQZp2IjRZzyQ/view', type: 'canva' }
      ]
    },
    {
      id: 'service-multiplayer-pun',
      title: 'Multiplayer Photon Network | $120',
      tagline: 'Arquitectura multijugador online, lobbies y sincronización en tiempo real',
      description: 'Configuración y programación de juego multijugador en línea usando Photon PUN 2: salas por código, emparejamiento, sincronización de transformadas y eventos.',
      fullStory: 'Convierte tu juego single-player en una experiencia multijugador competitiva o cooperativa. Implemento la infraestructura de red con Photon PUN 2, gestionando salas, lobby, sincronización de animaciones y RPCs con manejo suave de latencia.',
      category: 'juegos',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$120 USD',
      deliveryTime: '4 - 7 días hábiles',
      role: 'Ingeniero de Redes & Multijugador',
      featured: false,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      galleryImages: ['./assets/images/ely/icon-dominicanpower.png'],
      youtubeVideo: '',
      technologies: ['Photon PUN 2', 'Photon Voice', 'C# Network Streams', 'Multiplayer Interpolation', 'Lobby System'],
      metrics: [
        { label: 'Precio', value: '$120 USD' },
        { label: 'Capacidad', value: 'Salas & Matchmaking' },
        { label: 'Latencia', value: 'Interpolación Suave' }
      ],
      keyContributions: [
        'Sistema de creación y unión a salas públicas o privadas por código.',
        'Replicación de movimientos y variables sincronizadas vía PhotonView y PhotonTransformView.',
        'Manejo de desconexiones imprevistas y transferencia de Master Client sin caídas.',
        'UI de sala de espera con selector de personaje y estado "Listo".'
      ],
      requirements: [
        'Cuenta gratuita de Photon Engine (photonengine.com) con App ID de PUN 2 listo.',
        'Prefabs de personajes con scripts básicos de movimiento y animaciones ya creados.',
        'Mecánicas centrales del juego definidas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-unity-csharp',
      title: 'Clases Impartidas Mentorías 1 a 1',
      tagline: 'Sesiones personalizadas 1 a 1 para aprender programación y diseño de videojuegos',
      description: 'Aprende a programar videojuegos desde cero o sube de nivel con proyectos reales. Clases prácticas uno a uno enfocadas en lo que tú quieras aprender.',
      fullStory: 'Clases particulares personalizadas impartidas por ElyDev a través de Discord o Google Meet con pantalla compartida. Adaptadas a tu ritmo, desde los fundamentos de programación en C# y físicas en Unity hasta mecánicas complejas, inteligencia artificial y arquitectura de código limpio.',
      category: 'juegos',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$20 USD / hora',
      deliveryTime: 'Horarios Flexibles a Convenir',
      role: 'Tutor & Desarrollador Senior',
      featured: true,
      coverImage: './assets/images/ely/my-avatar.png',
      galleryImages: ['./assets/images/ely/my-avatar.png'],
      youtubeVideo: '',
      technologies: ['Unity 2D & 3D', 'C# Programming', 'Game Architecture', 'Debugging', 'Live Screen Share'],
      metrics: [
        { label: 'Tarifa', value: '$20 USD / hora' },
        { label: 'Modalidad', value: '1 a 1 en Vivo' },
        { label: 'Nivel', value: 'Principiante a Intermedio' }
      ],
      keyContributions: [
        'Clases prácticas con código real y resolución de dudas en vivo.',
        'Material de apoyo, scripts comentados y ejercicios para practicar entre sesiones.',
        'Orientación para el diseño de tu propio videojuego personal.',
        'Revisión y optimización del código de tus propios proyectos.'
      ],
      requirements: [
        'Computadora con Unity Hub y versión reciente de Unity instalada.',
        'Visual Studio o VS Code configurado con soporte para C#.',
        'Discord instalado con micrófono funcional para audio y compartir pantalla.',
        'Lista de dudas o proyecto personal sobre el cual quieras avanzar en clase.'
      ],
      links: [
        { label: 'Ver Información en Canva', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-monetizacion-publicacion',
      title: 'Clase Privada: Monetización & Lanzamiento Play Store',
      tagline: 'Aprende a monetizar y publicar tu juego en Google Play Store con éxito',
      description: 'Sesión práctica guiada donde aprenderás a compilar APK/AAB, configurar Google Play Console, integrar anuncios AdMob/Unity Ads e implementar compras integradas IAP.',
      fullStory: 'Tutoría especializada donde te guío en todo el proceso para transformar tu proyecto de Unity en un producto comercial listo para el público. Cubrimos desde la generación de Keystores y paquetes AAB hasta la integración de anuncios, compras in-app y políticas de privacidad obligatorias.',
      category: 'aplicaciones',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$25 USD / hora',
      deliveryTime: 'Sesión en Vivo con Pantalla Compartida',
      role: 'Mentor de Publicación & Monetización',
      featured: false,
      coverImage: './assets/images/ely/icon-appads.png',
      galleryImages: ['./assets/images/ely/icon-appads.png'],
      youtubeVideo: '',
      technologies: ['Google Play Console', 'Unity IAP', 'Google AdMob', 'Android App Bundles (.aab)', 'Keystore Security'],
      metrics: [
        { label: 'Tarifa', value: '$25 USD / hora' },
        { label: 'Enfoque', value: 'Lanzamiento Comercial' },
        { label: 'Resultado', value: 'Juego Publicado' }
      ],
      keyContributions: [
        'Paso a paso para crear y firmar tu aplicación para Google Play Store.',
        'Configuración de cuenta de desarrollador, fichas de tienda y cuestionarios de contenido.',
        'Integración práctica de banners y rewarded ads con AdMob.',
        'Evita los rechazos más comunes de Google Play.'
      ],
      requirements: [
        'Proyecto de Unity terminado o en fase final listo para compilar.',
        'Cuenta de Google Play Console (o intención de adquirirla).',
        'Conexión estable a internet para sesión por Discord / Google Meet.'
      ],
      links: [
        { label: 'Ver Información en Canva', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-multijugador-photon',
      title: 'Clase Privada: Multijugador Online con Photon PUN 2',
      tagline: 'Aprende a crear juegos multijugador online desde cero',
      description: 'Domina la programación de videojuegos online: estructura cliente-servidor, sincronización sin lag, interpolación de movimientos, manejo de salas y RPCs con Photon Network.',
      fullStory: 'Una clase intensiva donde desmitificamos la programación en red. Aprenderás cómo sincronizar personajes entre jugadores, sincronizar disparos y proyectiles, manejar la desconexión de usuarios y crear lobbies con búsqueda de partidas de forma comprensible y modular.',
      category: 'juegos',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$25 USD / hora',
      deliveryTime: 'Sesión en Vivo con Pantalla Compartida',
      role: 'Mentor de Multijugador & Networking',
      featured: false,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      galleryImages: ['./assets/images/ely/icon-dominicanpower.png'],
      youtubeVideo: '',
      technologies: ['Photon PUN 2', 'Unity C#', 'Network RPCs', 'Lobby & Room Management', 'Smooth Interpolation'],
      metrics: [
        { label: 'Tarifa', value: '$25 USD / hora' },
        { label: 'Enfoque', value: 'Arquitectura Online' },
        { label: 'Tecnología', value: 'Photon Network' }
      ],
      keyContributions: [
        'Entendimiento profundo de RPCs y Custom Properties de Photon.',
        'Técnicas de interpolación de red para que el movimiento de otros jugadores se vea fluido.',
        'Estructura de lobbies para invitar amigos con códigos de sala.',
        'Plantilla de proyecto multijugador funcional para tus futuros juegos.'
      ],
      requirements: [
        'Conocimientos básicos de C# y programación de scripts en Unity.',
        'Unity instalado y cuenta en photonengine.com creada.',
        'Discord para llamada en vivo y visualización compartida de código.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'canva' }
      ]
    }
  ];

  // 1.1 Listado Oficial de Experiencia Laboral & Contratos
  const initialExperiences = [
    {
      id: 'exp-moneyfight-cesar',
      title: 'Freelance Game Developer',
      company: 'MoneyFight & Cesar',
      location: 'Remoto',
      period: 'Feb 2025 — Presente',
      startDate: '2025-02-01',
      color: 'text-amber-400',
      description: 'Desarrollo en producción activa de un nuevo título confidencial de alto impacto para plataformas interactivas.',
      technologies: ['Unity', 'C#', 'Game Architecture']
    },
    {
      id: 'exp-capricornio-games',
      title: 'Freelance Game & Web Developer',
      company: 'Capricornio Games (CapricornioTV)',
      location: 'República Dominicana / Remoto',
      period: 'Ago 2024 — Ene 2025',
      startDate: '2024-08-01',
      color: 'text-cyan-400',
      description: 'Desarrollé íntegramente el juego "MotoLoco: En una goma" y creé su plataforma web promocional completa, gestionando frontend y backend con PHP y base de datos a medida.',
      technologies: ['Unity', 'PHP', 'MySQL', 'Web Full-Stack']
    },
    {
      id: 'exp-caribeatomic',
      title: 'Freelance Game Developer',
      company: 'CaribeAtomic',
      location: 'Remoto',
      period: 'Ene 2022 — Ene 2024',
      startDate: '2022-01-01',
      color: 'text-amber-400',
      description: 'Contribución en diversas áreas críticas de desarrollo de videojuegos, incluyendo beta testing, mejoras de demos y diseño de niveles.',
      technologies: ['Unity', 'Level Design', 'Beta Testing']
    },
    {
      id: 'exp-moneyfight-game',
      title: 'Freelance Lead Game Developer',
      company: 'MoneyFight',
      location: 'Remoto',
      period: 'Nov 2022 — Jul 2023',
      startDate: '2022-11-01',
      color: 'text-amber-400',
      description: 'Desarrollo integral de "MoneyFight Game", abarcando configuración de servidor, multijugador online, base de datos PHP y arte 2D.',
      technologies: ['Unity', 'Multiplayer Network', 'PHP/MySQL']
    },
    {
      id: 'exp-shl-dominoes',
      title: 'Game Developer (Bug Fixer & Optimization)',
      company: 'SHL · Dominoes Republic',
      location: 'Remoto',
      period: 'Nov 2022',
      startDate: '2022-11-15',
      color: 'text-cyan-400',
      description: 'Resolución de problemas críticos de rendimiento e interferencias de geolocalización en el juego de dominó competitivo.',
      technologies: ['Unity', 'Geolocation Services', 'Profiling']
    },
    {
      id: 'exp-dogame-dominican',
      title: 'Freelance Game Developer (UI & Multijugador)',
      company: 'DoGame · Dominican Power',
      location: 'Remoto',
      period: 'Nov 2021 — Feb 2022',
      startDate: '2021-11-01',
      color: 'text-cyan-400',
      description: 'Renovación técnica integral: corrección de errores, cambio de orientación de juego, rediseño completo de UI e integración de Photon Multiplayer.',
      technologies: ['Unity', 'Photon PUN 2', 'UI Remake']
    },
    {
      id: 'exp-jobs-laru',
      title: 'Freelance Game Developer',
      company: 'Jobs Laru',
      location: 'Remoto',
      period: 'Oct 2019 — Dic 2021',
      startDate: '2019-10-01',
      color: 'text-amber-400',
      description: 'Desarrollo y mantenimiento de múltiples proyectos comerciales: Simón, LEVA 3D (Google Play), Fireball (Ads), Dark Castle y GUGO.',
      technologies: ['Unity 2D/3D', 'AdMob', 'Google Play']
    }
  ];

  // 1.2 Listado Oficial de Clientes Satisfechos
  // 1.3 Códigos Especiales Iniciales para Realizar Feedback (Uso Único)
  const initialCommunityAssets = [];

  const initialFeedbackCodes = [
    { code: 'ELY-VIP-2026', label: 'Invitación VIP Cliente', used: false, disabled: false, createdAt: '2026-03-01' },
    { code: 'CLIENT-GAME-77', label: 'Cliente Videojuego Unity', used: false, disabled: false, createdAt: '2026-03-05' },
    { code: 'STUDENT-UNITY-01', label: 'Alumno de Clase Privada', used: false, disabled: false, createdAt: '2026-03-10' },
    { code: 'FEEDBACK-SPECIAL-99', label: 'Invitado Especial', used: false, disabled: false, createdAt: '2026-03-15' },
    { code: 'DEMO-USED-CODE', label: 'Código de Ejemplo Usado', used: true, usedBy: 'Carlos Martínez', usedAt: '12 mar 2026', disabled: false, createdAt: '2026-02-20' }
  ];

  // 2. Estado de la aplicación
  let projects = [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        projects = parsed;
      }
    }
  } catch (e) {}
  if (!projects || projects.length === 0) {
    projects = JSON.parse(JSON.stringify(initialProjects));
  }

  // Experiencias Laborales
  let experiences = [];
  try {
    const expSaved = localStorage.getItem(EXPERIENCES_STORAGE_KEY);
    if (expSaved) {
      const parsedExp = JSON.parse(expSaved);
      if (Array.isArray(parsedExp) && parsedExp.length > 0) {
        experiences = parsedExp;
      }
    }
  } catch (e) {}
  if (!experiences || experiences.length === 0) {
    experiences = JSON.parse(JSON.stringify(initialExperiences));
  }

  // Clientes Satisfechos / Feedback: Google Sheets es la única fuente de verdad.
  let satisfiedClients = [];

  // Habilidades & Especialidades: se cargan desde CardsInfo cuando existe el registro.
  const initialSkillCards = [
    { id: 'skill-card-1', title: 'Desarrollo Videojuegos 2D/3D', color: 'amber', lines: ['Unity Engine (Especialista C#)', 'Físicas 2D & 3D (Rigidbody, Colisiones)', 'Diseño de Niveles & Mecánicas', 'Animación & Controladores de Estado', 'Optimización Móvil (Draw Calls)', 'Publicación en Google Play Store'] },
    { id: 'skill-card-2', title: 'Multijugador & Red', color: 'cyan', lines: ['Photon Network & Photon PUN 2', 'Sincronización de Salas & Matchmaking', 'Replicación de Estados en Tiempo Real', 'Economía Dentro del Juego & Tiendas', 'Personalización de Avatares / Skins', 'WebSockets & Cliente-Servidor'] },
    { id: 'skill-card-3', title: 'Monetización & Backend', color: 'emerald', lines: ['Anuncios (Banner, Interstitial, Rewarded)', 'Compras Integradas (IAP Billing)', 'PHP & Bases de Datos MySQL', 'Desarrollo Web (HTML5, CSS3, JS)', 'Arquitectura de Audio & Sound FX', 'Git & GitHub Version Control'] }
  ];
  let skillCards = JSON.parse(JSON.stringify(initialSkillCards));
  let editingSkillCardId = null;

  // Códigos de Feedback: la única fuente es Google Sheets.
  let feedbackCodes = [];
  let contactMessages = [];
  let assets = [];

  try {
    const assetsSaved = localStorage.getItem(ASSETS_STORAGE_KEY);
    if (assetsSaved) {
      const parsedAssets = JSON.parse(assetsSaved);
      if (Array.isArray(parsedAssets)) assets = parsedAssets;
    }
  } catch (e) {}
  if (!Array.isArray(assets) || assets.length === 0) {
    assets = JSON.parse(JSON.stringify(initialCommunityAssets));
  }

  let experienceSortOrder = 'desc'; // 'desc' = más recientes primero, 'asc' = más antiguos primero
  let selectedOrigin = 'todos';
  let selectedCategory = 'todos';
  let selectedAsset = null;
  let editingAssetId = null;
  let selectedAssetSort = 'newest';
  let assetDiscoveryMode = 'trending';
  let showOnlyFavoriteAssets = false;
  let assetViewMode = 'cards';
  const ASSET_RECENT_VIEWS_KEY = 'portfolio_community_asset_recent_views_v1';
  let recentAssetViews = [];
  try { recentAssetViews = JSON.parse(localStorage.getItem(ASSET_RECENT_VIEWS_KEY) || '[]'); } catch (e) { recentAssetViews = []; }
  if (!Array.isArray(recentAssetViews)) recentAssetViews = [];
  function rememberAssetView(assetId) {
    recentAssetViews = [assetId].concat(recentAssetViews.filter(function (id) { return id !== assetId; })).slice(0, 20);
    try { localStorage.setItem(ASSET_RECENT_VIEWS_KEY, JSON.stringify(recentAssetViews)); } catch (e) {}
  }
  function getAssetTrendScore(asset) {
    const downloads = Number(globalAssetCounters[asset.id]?.downloads) || Number(asset.downloads) || 0;
    const likes = getAssetLikes(asset.id);
    const ageDays = Math.max(0, (Date.now() - (Number(asset.createdAt) || Date.now())) / 86400000);
    return downloads * 3 + likes * 5 + Math.max(0, 30 - ageDays);
  }
  let assetLikes = {};
  let assetComments = {};
  let assetDownloadDays = {};
  try { assetViewMode = localStorage.getItem('portfolio_community_asset_view_v1') === 'list' ? 'list' : 'cards'; } catch (e) {}
  try { assetLikes = JSON.parse(localStorage.getItem(ASSET_LIKES_KEY) || '{}'); } catch (e) { assetLikes = {}; }
  try { assetComments = JSON.parse(localStorage.getItem(ASSET_COMMENTS_KEY) || '{}'); } catch (e) { assetComments = {}; }
  try { assetDownloadDays = JSON.parse(localStorage.getItem(ASSET_DOWNLOAD_DAYS_KEY) || '{}'); } catch (e) { assetDownloadDays = {}; }
  if (!assetLikes || typeof assetLikes !== 'object') assetLikes = {};
  if (!assetComments || typeof assetComments !== 'object') assetComments = {};
  if (!assetDownloadDays || typeof assetDownloadDays !== 'object') assetDownloadDays = {};
  const ASSET_FAVORITES_KEY = 'portfolio_community_asset_favorites_v1';
  let favoriteAssetIds = [];
  try {
    const savedFavorites = localStorage.getItem(ASSET_FAVORITES_KEY);
    if (savedFavorites) favoriteAssetIds = JSON.parse(savedFavorites);
  } catch (e) {}
  if (!Array.isArray(favoriteAssetIds)) favoriteAssetIds = [];
  let searchQuery = '';
  let selectedProject = null;
  let activeMediaIndex = 0; // Para el carrusel de imágenes
  let activeMediaMode = 'image'; // 'image' o 'video'
  let filteredProjects = [];
  let isModerator = false;
  let visitorPreviewMode = false;
  const SYNC_FINGERPRINT_KEY = 'portfolio_github_sync_fingerprint_v1';

  // Google Sheets es la fuente de verdad del catálogo.
  // Evita peticiones duplicadas cuando navegación, hash y click ocurren casi al mismo tiempo.
  let catalogRefreshPromise = null;
  let catalogLastRefreshAt = 0;
  const CATALOG_REFRESH_TTL_MS = 10000;
  const CATALOG_BACKGROUND_REFRESH_MS = 60000;
  let catalogBackgroundRefreshTimer = null;

  try {
    const authSaved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authSaved) {
      const parsedUser = JSON.parse(authSaved);
      if (parsedUser && parsedUser.role === 'moderator') {
        isModerator = true;
      }
    }
  } catch (e) {}

  // 3. Gestión de tema claro / oscuro
  let currentTheme = 'dark';
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    }
  } catch (e) {}

  function applyTheme(theme) {
    currentTheme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {}
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.textContent = '🌙';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.textContent = '☀️';
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // 3.1 Sistema de Notificaciones Flotantes de Estado (Status Notifications)
  // Animación slide-in sutil desde la esquina superior derecha con auto-cierre tras 3 segundos.
  function showStatusNotification(optionsOrTitle, maybeMessage, maybeType) {
    let opts = {};
    if (typeof optionsOrTitle === 'string') {
      opts = {
        title: optionsOrTitle,
        message: maybeMessage || '',
        type: maybeType || 'success'
      };
    } else if (optionsOrTitle && typeof optionsOrTitle === 'object') {
      opts = optionsOrTitle;
    }

    const title = opts.title || 'Acción completada';
    const message = opts.message || '';
    const type = opts.type || 'success';
    const duration = typeof opts.duration === 'number' ? opts.duration : 3000;

    let icon = opts.icon;
    let accentBorder = 'border-amber-400/40';
    let iconBg = 'bg-amber-400/20 text-amber-400';
    let badgeText = 'Éxito';
    let badgeClass = 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    let progressBarClass = 'from-amber-400 to-amber-300';

    if (type === 'success') {
      if (!icon) icon = '✓';
      accentBorder = 'border-emerald-500/40';
      iconBg = 'bg-emerald-500/20 text-emerald-400';
      badgeText = 'Confirmado';
      badgeClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      progressBarClass = 'from-emerald-500 via-teal-400 to-amber-400';
    } else if (type === 'info') {
      if (!icon) icon = 'ℹ️';
      accentBorder = 'border-cyan-500/40';
      iconBg = 'bg-cyan-500/20 text-cyan-400';
      badgeText = 'Información';
      badgeClass = 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      progressBarClass = 'from-cyan-500 to-blue-400';
    } else if (type === 'warning') {
      if (!icon) icon = '⚠️';
      accentBorder = 'border-amber-500/50';
      iconBg = 'bg-amber-500/20 text-amber-300';
      badgeText = 'Aviso';
      badgeClass = 'text-amber-300 bg-amber-500/10 border-amber-500/20';
      progressBarClass = 'from-amber-500 to-yellow-400';
    } else if (type === 'error') {
      if (!icon) icon = '✕';
      accentBorder = 'border-red-500/50';
      iconBg = 'bg-red-500/20 text-red-400';
      badgeText = 'Error';
      badgeClass = 'text-red-400 bg-red-500/10 border-red-500/20';
      progressBarClass = 'from-red-500 to-rose-400';
    }

    let container = document.getElementById('status-notification-container');
    if (!container) {
      container = document.createElement('aside');
      container.id = 'status-notification-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      container.className = 'fixed top-5 right-5 z-[99999] pointer-events-none flex flex-col gap-2.5 max-w-sm sm:max-w-md w-full px-4 sm:px-0';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `status-notification-toast status-toast-enter pointer-events-auto relative overflow-hidden rounded-2xl bg-[#121622]/95 border ${accentBorder} text-slate-100 shadow-2xl shadow-black/80 backdrop-blur-md p-4 transition-all duration-300`;
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg} font-bold text-sm shadow-inner">
          ${icon}
        </div>
        <div class="flex-1 min-w-0 pr-1">
          <div class="flex items-center gap-2">
            <h5 class="toast-title text-xs font-bold text-white font-display tracking-tight">${title}</h5>
            <span class="text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded border ${badgeClass}">
              ${badgeText}
            </span>
          </div>
          ${message ? `<p class="toast-desc ${opts.messageClass || 'text-[11px] text-slate-300'} leading-snug mt-1">${message}</p>` : ''}
        </div>
        <button
          type="button"
          class="toast-close-btn -mr-1 -mt-1 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
          aria-label="Cerrar notificación"
        >
          ✕
        </button>
      </div>
      <div class="status-toast-progress absolute bottom-0 left-0 h-1 bg-gradient-to-r ${progressBarClass}"></div>
    `;

    container.appendChild(toast);

    let dismissed = false;
    let timerId = null;
    let remainingTime = duration;
    let startTime = Date.now();

    function dismissToast() {
      if (dismissed) return;
      dismissed = true;
      if (timerId) clearTimeout(timerId);

      toast.classList.remove('status-toast-enter');
      toast.classList.add('status-toast-exit');

      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 340);
    }

    toast.dismiss = dismissToast;
    toast.update = function (next) {
      next = next || {};
      const titleEl = toast.querySelector('.toast-title');
      const descEl = toast.querySelector('.toast-desc');
      if (titleEl && next.title) titleEl.textContent = next.title;
      if (descEl && typeof next.message === 'string') descEl.textContent = next.message;
    };

    function startTimer(time) {
      startTime = Date.now();
      timerId = setTimeout(dismissToast, time);
    }

    startTimer(remainingTime);

    // Pausar auto-dismiss al pasar el mouse por encima
    const progressBar = toast.querySelector('.status-toast-progress');
    toast.addEventListener('mouseenter', function () {
      if (dismissed) return;
      if (timerId) clearTimeout(timerId);
      remainingTime -= (Date.now() - startTime);
      if (remainingTime < 500) remainingTime = 500;
      if (progressBar) progressBar.classList.add('paused');
    });

    toast.addEventListener('mouseleave', function () {
      if (dismissed) return;
      if (progressBar) progressBar.classList.remove('paused');
      startTimer(remainingTime);
    });

    // Botón de cierre manual
    const closeBtn = toast.querySelector('.toast-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dismissToast();
      });
    }

    return toast;
  }

  function animateCounterElement(element, target, formatter) {
    if (!element) return;
    const numericTarget = Math.max(0, Number(target) || 0);
    const previous = Number(element.getAttribute('data-counter-value') || 0);
    if (previous === numericTarget) {
      element.textContent = formatter ? formatter(numericTarget) : String(numericTarget);
      return;
    }
    element.setAttribute('data-counter-value', String(numericTarget));
    const start = previous;
    const duration = 650;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (numericTarget - start) * eased);
      element.textContent = formatter ? formatter(value) : String(value);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function renderFeedbackStats() {
    const averageEl = document.getElementById('feedback-average-value');
    const countEl = document.getElementById('feedback-average-count');
    const distributionEl = document.getElementById('feedback-star-distribution');
    const ratings = satisfiedClients.map(c => Math.max(1, Math.min(5, Number(c.rating) || 5)));
    const total = ratings.length;
    const average = total ? ratings.reduce((sum, value) => sum + value, 0) / total : 0;

    if (averageEl) animateCounterElement(averageEl, Math.round(average * 10), value => (value / 10).toFixed(1));
    if (countEl) countEl.textContent = '(' + total + ')';
    if (distributionEl) {
      distributionEl.innerHTML = [5,4,3,2,1].map(function (star) {
        const count = ratings.filter(r => r === star).length;
        const percentage = total ? Math.round((count / total) * 100) : 0;
        return '<div class="flex items-center gap-2 text-[10px]">' +
          '<span class="w-10 text-amber-400 font-mono">' + '★★★★★'.slice(0, star) + '</span>' +
          '<div class="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden"><div class="h-full bg-amber-400 transition-all duration-500" style="width:' + percentage + '%"></div></div>' +
          '<span class="w-7 text-right text-slate-400 font-mono">' + count + '</span>' +
        '</div>';
      }).join('');
    }
  }

  function setVisitorPreviewMode(enabled) {
    if (!isModerator) return;
    visitorPreviewMode = !!enabled;
    updateModeratorUI();
    renderProjectsGrid();
    if (selectedOrigin === 'assets') renderAssetsGrid();
    addElyDevBackgroundMotion();
    initElyDevMotionEnhancements();
    renderExperiences();
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    showStatusNotification({
      title: visitorPreviewMode ? 'Preview visitante' : 'Modo moderador',
      message: visitorPreviewMode ? 'Estás viendo el portafolio como un visitante.' : 'Herramientas de moderación activadas.',
      type: 'info',
      icon: visitorPreviewMode ? '👁' : '🛠️'
    });
  }

  function toggleVisitorPreview() {
    setVisitorPreviewMode(!visitorPreviewMode);
  }

  function setMediaPreviewElement(element, path, altText) {
    if (!element || !path) return element;
    const isVideo = isLocalVideoMedia(path);
    const wantedTag = isVideo ? 'video' : 'img';
    let preview = element;
    if (element.tagName.toLowerCase() !== wantedTag) {
      preview = document.createElement(wantedTag);
      preview.id = element.id;
      preview.className = element.className;
      element.replaceWith(preview);
    }
    preview.onerror = null;
    preview.removeAttribute('onerror');
    preview.src = path;
    if (isVideo) {
      preview.controls = true;
      preview.playsInline = true;
      preview.preload = 'metadata';
      preview.removeAttribute('autoplay');
    } else {
      preview.alt = altText || 'Imagen';
      preview.onerror = function() { this.onerror = null; this.src = './assets/images/ely/my-avatar.png'; };
    }
    return preview;
  }

  function isLocalVideoMedia(path) {
    return /\.(mp4|webm|mov|m4v|ogv)(?:[?#].*)?$/i.test(String(path || ''));
  }

  // Helper para extraer ID de video de YouTube
  function getYouTubeEmbedUrl(url) {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = trimmed.match(regExp);
    return (match && match[2] && match[2].length === 11)
      ? 'https://www.youtube.com/embed/' + match[2] + '?rel=0&modestbranding=1'
      : null;
  }

  // 4. Filtrado de proyectos
  // Regla del usuario: "al seleccionar servicios comunes o clases privadas no deben aparecer las categorías secundarias"
  function getFilteredProjects() {
    if (selectedOrigin === 'assets') return [];
    return projects.filter(function (project) {
      if (selectedOrigin === 'more') {
        if (project.origin !== 'more') return false;
      } else if (selectedOrigin === 'todos') {
        if (project.origin === 'servicios' || project.origin === 'clases' || project.origin === 'more') {
          return false;
        }
      } else if (project.origin !== selectedOrigin) {
        return false;
      }

      // Si es servicios o clases, se ignoran las categorías de juegos/apps
      if (selectedOrigin !== 'servicios' && selectedOrigin !== 'clases') {
        if (selectedCategory !== 'todos' && project.category !== selectedCategory) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (project.title || '').toLowerCase().includes(q);
        const inTagline = (project.tagline || '').toLowerCase().includes(q);
        const inDesc = (project.description || '').toLowerCase().includes(q);
        const inTech = (project.technologies || []).some(t => t.toLowerCase().includes(q));
        const inRole = (project.role || '').toLowerCase().includes(q);
        const inClient = (project.clientOrTeam || '').toLowerCase().includes(q);

        if (!inTitle && !inTagline && !inDesc && !inTech && !inRole && !inClient) {
          return false;
        }
      }

      return true;
    });
  }

  // 5. Renderizado de las tarjetas de proyectos con colapso hacia atrás
  let filterTransitionTimer = null;
  let lastFilterOrigin = 'todos';
  let lastFilterCategory = 'todos';
  let lastFilterSearch = '';
  let renderedCardIds = new Set();

  function updateCatalogHeaders() {
    const countDisplay = document.getElementById('projects-count-display');
    const headerTitle = document.getElementById('catalog-header-title');
    const headerSub = document.getElementById('catalog-header-sub');
    const badgeLabel = document.getElementById('catalog-badge-label');
    const secondaryFilters = document.getElementById('secondary-category-filters');
    const assetTools = document.getElementById('asset-tools');
    if (assetTools) assetTools.classList.toggle('hidden', selectedOrigin !== 'assets');
    if (assetTools) assetTools.classList.toggle('flex', selectedOrigin === 'assets');

    // Ocultar categorías secundarias si se elige Servicios o Clases
    const assetCategoryLabel = document.getElementById('asset-category-label');
    const normalCategoryLabel = document.getElementById('normal-category-label');
    const assetCategoryFilters = document.querySelectorAll('.asset-category-filter');
    const normalCategoryFilters = document.querySelectorAll('.normal-category-filter');
    if (secondaryFilters) {
      if (selectedOrigin === 'servicios' || selectedOrigin === 'clases' || selectedOrigin === 'more') {
        secondaryFilters.classList.add('hidden');
      } else {
        secondaryFilters.classList.remove('hidden');
      }
    }
    if (assetCategoryLabel) assetCategoryLabel.classList.toggle('hidden', selectedOrigin !== 'assets');
    if (normalCategoryLabel) normalCategoryLabel.classList.toggle('hidden', selectedOrigin === 'assets');
    assetCategoryFilters.forEach(function (el) { el.classList.toggle('hidden', selectedOrigin !== 'assets'); });
    normalCategoryFilters.forEach(function (el) { el.classList.toggle('hidden', selectedOrigin === 'assets'); });

    if (countDisplay) {
      const count = selectedOrigin === 'assets'
        ? getFilteredAssets().length
        : filteredProjects.length;
      const total = selectedOrigin === 'assets' ? assets.length : projects.filter(function(p) { return p.origin !== 'more'; }).length;
      countDisplay.textContent = 'Mostrando ' + count + ' de ' + total + ' elementos';
    }

    if (badgeLabel) {
      badgeLabel.textContent =
        selectedOrigin === 'assets' ? 'Biblioteca de Scripts / Assets' :
        selectedOrigin === 'servicios' ? 'Catálogo de Servicios Comunes' :
        selectedOrigin === 'clases' ? 'Clases Privadas Personalizadas' :
        selectedOrigin === 'more' ? 'Sistemas & Desarrollo' :
        selectedOrigin === 'more' ? 'Sistemas & Desarrollo' :
        selectedOrigin === 'propio' ? 'Proyectos Propios (Indie)' :
        selectedOrigin === 'trabajado' ? 'Proyectos Trabajados para Clientes' :
        'Catálogo de Proyectos (Todos)';
    }

    if (headerTitle) {
      headerTitle.textContent =
        selectedOrigin === 'assets' ? 'ElyDev Community' :
        selectedOrigin === 'servicios' ? 'Servicios Técnicos Especializados' :
        selectedOrigin === 'clases' ? 'Clases & Asesorías Privadas' :
        selectedOrigin === 'more' ? 'Sistemas en Desarrollo' :
        selectedOrigin === 'more' ? 'Sistemas en Desarrollo' :
        'Proyectos Trabajados & Propios';
    }

    if (headerSub) {
      headerSub.textContent =
        selectedOrigin === 'assets' ? 'Scripts, Assets y herramientas de la comunidad. Busca, guarda y descarga.' :
        selectedOrigin === 'servicios' ? 'Sistemas llave en mano de monetización publicitaria, compras in-app, audio y multiplayer.' :
        selectedOrigin === 'clases' ? 'Aprende Unity, programación C#, monetización y multijugador online con sesiones 1 a 1 en vivo.' :
        selectedOrigin === 'more' ? 'Videos cortos, demostraciones y etiquetas de sistemas desarrollados por ElyDev.' :
        selectedOrigin === 'more' ? 'Videos cortos, demostraciones y etiquetas de sistemas desarrollados por ElyDev.' :
        'Filtra por Propios, Trabajados o explora Servicios Comunes y Clases Privadas.';
    }

    // Actualizar contadores del hero
    const ownCountEl = document.getElementById('metric-count-propio');
    const workedCountEl = document.getElementById('metric-count-trabajado');
    const servicesCountEl = document.getElementById('metric-count-servicios');
    const classesCountEl = document.getElementById('metric-count-clases');
    animateCounterElement(ownCountEl, projects.filter(p => p.origin === 'propio').length);
    animateCounterElement(workedCountEl, projects.filter(p => p.origin === 'trabajado').length);
    const servicesWorkCount = projects.filter(p => p.origin === 'servicios').reduce((sum, p) => sum + Math.max(0, Number(p.workedCount) || 0), 0);
    const classesWorkCount = projects.filter(p => p.origin === 'clases').reduce((sum, p) => sum + Math.max(0, Number(p.workedCount) || 0), 0);
    const servicesCountPublicEl = document.getElementById('metric-count-servicios-public');
    const classesCountPublicEl = document.getElementById('metric-count-clases-public');
    if (servicesCountEl) servicesCountEl.value = servicesWorkCount;
    if (classesCountEl) classesCountEl.value = classesWorkCount;
    animateCounterElement(servicesCountPublicEl, servicesWorkCount);
    animateCounterElement(classesCountPublicEl, classesWorkCount);
  }

  async function setCategoryWorkCount(origin, value) {
    if (origin !== 'servicios' && origin !== 'clases') return;
    const categoryProjects = projects.filter(p => p.origin === origin);
    if (!categoryProjects.length) return;
    const target = Math.max(0, Math.floor(Number(value) || 0));
    const otherCount = categoryProjects.slice(1).reduce((sum, p) => sum + Math.max(0, Number(p.workedCount) || 0), 0);
    categoryProjects[0].workedCount = Math.max(0, target - otherCount);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (e) {}
    renderProjectsGrid();
    updateCatalogHeaders();
    await persistProjectsImmediately('counter', origin);
  }

  function changeCategoryWorkCount(origin, delta) {
    if (origin !== 'servicios' && origin !== 'clases') return;
    const total = projects.filter(p => p.origin === origin).reduce((sum, p) => sum + Math.max(0, Number(p.workedCount) || 0), 0);
    setCategoryWorkCount(origin, total + delta);
  }

  async function setProjectWorkCount(projectId, value) {
    const project = projects.find(p => p.id === projectId);
    if (!project || (project.origin !== 'servicios' && project.origin !== 'clases')) return;
    const count = Math.max(0, Math.floor(Number(value) || 0));
    project.workedCount = count;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (e) {}
    renderProjectsGrid();
    await persistProjectsImmediately('counter', project.title);
  }

  function changeProjectWorkCount(projectId, delta) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    setProjectWorkCount(projectId, Math.max(0, (Number(project.workedCount) || 0) + delta));
  }

  function slugifyAssetId(value) {
    return String(value || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'asset-' + Date.now();
  }

  function isAssetNew(asset) {
    const createdAt = Number(asset.createdAt) || 0;
    return createdAt > 0 && (Date.now() - createdAt) < 7 * 24 * 60 * 60 * 1000;
  }

  function isAssetFavorite(assetId) {
    return favoriteAssetIds.includes(assetId);
  }

  function toggleAssetFavorite(assetId) {
    const index = favoriteAssetIds.indexOf(assetId);
    if (index >= 0) favoriteAssetIds.splice(index, 1);
    else favoriteAssetIds.push(assetId);
    try { localStorage.setItem(ASSET_FAVORITES_KEY, JSON.stringify(favoriteAssetIds)); } catch (e) {}
    renderAssetsGrid();
  }

  const GLOBAL_COUNTER_URL = 'https://script.google.com/macros/s/AKfycbzcbBZtcpI7B41ngSMU6bAEjdOS-9PSEXmWBVF3EhcPg2T-be9ntGnW3_c5ANsVFYbEJg/exec';
  let globalAssetCounters = {};

  function assetTodayKey() { return new Date().toISOString().slice(0,10); }
  function getAssetLikes(assetId) { return Number(globalAssetCounters[assetId]?.likes) || Number(assetLikes[assetId]) || 0; }

  async function requestGlobalAssetCounter(assetId, type, action) {
    try {
      const url = GLOBAL_COUNTER_URL + '?id=' + encodeURIComponent(assetId) + '&type=' + encodeURIComponent(type) + '&action=' + encodeURIComponent(action);
      const response = await fetch(url, {
        method: action === 'increment' ? 'POST' : 'GET',
        cache: 'no-store',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      if (!response.ok) return null;
      const data = await response.json();
      if (!data || !data.success) return null;
      if (!globalAssetCounters[assetId]) globalAssetCounters[assetId] = {};
      globalAssetCounters[assetId][type] = Number(data.count) || 0;
      return globalAssetCounters[assetId][type];
    } catch (e) {
      return null;
    }
  }

  async function refreshGlobalAssetCounter(assetId, type) {
    return requestGlobalAssetCounter(assetId, type, 'get');
  }

  async function refreshAllGlobalAssetCounters() {
    const visibleAssets = assets.filter(function(asset) {
      return asset && (isModerator || asset.published !== false);
    });
    await Promise.all(visibleAssets.map(function(asset) {
      return Promise.all([
        refreshGlobalAssetCounter(asset.id, 'likes'),
        refreshGlobalAssetCounter(asset.id, 'downloads')
      ]);
    }));
    updateGlobalAssetCounterUI();
  }

  function animateAssetCounterElement(el, kind) {
    if (!el) return;
    el.classList.remove('ely-counter-update', 'ely-counter-like', 'ely-counter-download');
    void el.offsetWidth;
    el.classList.add('ely-counter-update', kind === 'likes' ? 'ely-counter-like' : 'ely-counter-download');
  }

  function updateGlobalAssetCounterUI(animate) {
    document.querySelectorAll('[data-global-likes-id]').forEach(function(el) {
      const id = el.getAttribute('data-global-likes-id');
      el.textContent = '♥ ' + getAssetLikes(id);
      if (animate) animateAssetCounterElement(el, 'likes');
    });
    document.querySelectorAll('[data-global-downloads-id]').forEach(function(el) {
      const id = el.getAttribute('data-global-downloads-id');
      const count = Number(globalAssetCounters[id]?.downloads);
      if (Number.isFinite(count)) {
        el.textContent = '↓ ' + count;
        if (animate) animateAssetCounterElement(el, 'downloads');
      }
    });
    if (selectedAsset) {
      const likesEl = document.getElementById('asset-modal-likes');
      const downloadsEl = document.getElementById('asset-modal-downloads');
      const likes = Number(globalAssetCounters[selectedAsset.id]?.likes);
      const downloads = Number(globalAssetCounters[selectedAsset.id]?.downloads);
      if (likesEl && Number.isFinite(likes)) {
        likesEl.textContent = String(likes);
        if (animate) animateAssetCounterElement(likesEl, 'likes');
      }
      if (downloadsEl && Number.isFinite(downloads)) {
        downloadsEl.textContent = String(downloads);
        if (animate) animateAssetCounterElement(downloadsEl, 'downloads');
      }
    }
  }

  async function toggleAssetLike(assetId) {
    const count = await requestGlobalAssetCounter(assetId, 'likes', 'increment');
    if (count === null) return;
    assetLikes[assetId] = count;
    try { localStorage.setItem(ASSET_LIKES_KEY, JSON.stringify(assetLikes)); } catch(e) {}
    renderAssetsGrid();
    updateGlobalAssetCounterUI(true);
  }
  function getAssetComments(assetId) { return Array.isArray(assetComments[assetId]) ? assetComments[assetId] : []; }
  function renderAssetComments(assetId) {
    const el=document.getElementById('asset-modal-comments-list'); if(!el) return;
    const list=getAssetComments(assetId);
    el.innerHTML=list.length ? list.slice().reverse().map(function(c){return '<div class="rounded-lg bg-white/[.03] border border-white/5 p-2.5"><div class="text-[10px] text-cyan-300 font-semibold">'+String(c.name||'Visitante').replace(/</g,'&lt;')+'</div><div class="text-[11px] text-slate-300 mt-1 whitespace-pre-line">'+String(c.text||'').replace(/</g,'&lt;')+'</div></div>';}).join('') : '<div class="text-[11px] text-slate-500 text-center py-3">Aún no hay comentarios.</div>';
  }
  function addAssetComment() {
    if(!selectedAsset) return;
    const input=document.getElementById('asset-modal-comment-input'); if(!input) return;
    const text=input.value.trim(); if(!text) return;
    if(!assetComments[selectedAsset.id]) assetComments[selectedAsset.id]=[];
    assetComments[selectedAsset.id].push({name:'Visitante',text:text,createdAt:Date.now()});
    try { localStorage.setItem(ASSET_COMMENTS_KEY, JSON.stringify(assetComments)); } catch(e) {}
    input.value=''; renderAssetComments(selectedAsset.id);
  }
  function copyAssetCode() {
    if(!selectedAsset || !selectedAsset.codeExample) return;
    const code=selectedAsset.codeExample;
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(function(){showStatusNotification({title:'Código Copiado',message:'El ejemplo de código está en tu portapapeles.',type:'success',icon:'📋'});});
    else window.prompt('Copia el código:',code);
  }
  function trackAssetDownload(asset) {
    const today=assetTodayKey();
    if(!assetDownloadDays[asset.id]) assetDownloadDays[asset.id]={};
    assetDownloadDays[asset.id][today]=(Number(assetDownloadDays[asset.id][today])||0)+1;
    try { localStorage.setItem(ASSET_DOWNLOAD_DAYS_KEY,JSON.stringify(assetDownloadDays)); } catch(e) {}
  }
  function getAssetDownloadsToday(assetId) {
    return Number((assetDownloadDays[assetId]||{})[assetTodayKey()])||0;
  }
  function getRelatedAssets(asset) {
    const sourceTags=(asset.tags||[]).map(function(t){return String(t).toLowerCase();});
    return assets.filter(function(other){
      if(!other || other.id===asset.id || other.published===false) return false;
      return (other.tags||[]).some(function(t){return sourceTags.includes(String(t).toLowerCase());});
    }).sort(function(a,b){
      const score=function(x){return (x.tags||[]).filter(function(t){return sourceTags.includes(String(t).toLowerCase());}).length;};
      return score(b)-score(a);
    }).slice(0,4);
  }
  function renderRelatedAssets(asset) {
    const container = document.getElementById('asset-modal-related-list');
    if (!container) return;
    container.innerHTML = '';
    getRelatedAssets(asset).forEach(function(other) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'text-left rounded-lg bg-white/[.03] border border-white/5 hover:border-cyan-400/40 p-2';
      button.innerHTML = '<div class="text-[11px] font-bold text-white truncate"></div><div class="text-[9px] text-slate-500"></div>';
      button.querySelector('div').textContent = other.name;
      button.querySelectorAll('div')[1].textContent = (other.type === 'script' ? 'Script' : 'Asset') + ' · ↓ ' + (Number(other.downloads) || 0);
      button.addEventListener('click', function() { openAssetModal(other.id); });
      container.appendChild(button);
    });
  }

  function toggleAssetViewMode() {
    assetViewMode=assetViewMode==='cards'?'list':'cards';
    try { localStorage.setItem('portfolio_community_asset_view_v1',assetViewMode); } catch(e) {}
    renderAssetsGrid();
  }

  function filterAssetsByTag(tag) {
    searchQuery = tag;
    const searchInput = document.getElementById('projects-search-input');
    if (searchInput) searchInput.value = tag;
    if (selectedOrigin !== 'assets') selectedOrigin = 'assets';
    renderProjectsGrid(true);
  }

  function isAssetsRoute() {
    const params = new URLSearchParams(window.location.search || '');
    return params.has('assets') || params.get('page') === 'assets' || (window.location.hash || '').toLowerCase() === '#assets';
  }

  function isMoreRoute() {
    const params = new URLSearchParams(window.location.search || '');
    return params.has('more') || params.get('page') === 'more';
  }

  function isAssetsPage() {
    return !!(document.body && document.body.getAttribute('data-page') === 'assets') || isAssetsRoute();
  }

  function applyAssetsRouteUI() {
    const assetsRoute = isAssetsRoute();
    const moreRoute = !assetsRoute && isMoreRoute();
    const specialRoute = assetsRoute || moreRoute;
    if (document.body) document.body.setAttribute('data-page', assetsRoute ? 'assets' : moreRoute ? 'more' : 'portfolio');
    const projectSection = document.getElementById('proyectos');
    if (!projectSection) return;

    document.querySelectorAll('main > section').forEach(function (section) {
      section.classList.toggle('hidden', specialRoute && section !== projectSection);
    });

    const portfolioHeader = document.getElementById('portfolio-projects-header');
    const portfolioFilters = document.getElementById('portfolio-project-filters');
    const assetsHeader = document.getElementById('assets-page-header');
    const moreHeader = document.getElementById('more-page-header');
    if (portfolioHeader) portfolioHeader.classList.toggle('hidden', specialRoute);
    if (portfolioFilters) portfolioFilters.classList.toggle('hidden', specialRoute);
    if (assetsHeader) assetsHeader.classList.toggle('hidden', !assetsRoute);
    if (moreHeader) moreHeader.classList.toggle('hidden', !moreRoute);

    document.querySelectorAll('a[href="./assets/"], a[href="../assets/"]').forEach(function (link) {
      link.href = '?assets';
    });

    if (assetsRoute) {
      selectedOrigin = 'assets';
      addElyDevBackgroundMotion();
      requestAnimationFrame(function () {
        renderAssetsGrid();
        initElyDevMotionEnhancements();
        initAssetCardInteractions();
      });
    } else if (moreRoute) {
      selectedOrigin = 'more';
      selectedCategory = 'todos';
      searchQuery = '';
      const searchInput = document.getElementById('projects-search-input');
      if (searchInput) searchInput.value = '';
      renderProjectsGrid(true);
    } else {
      // En la página principal no reiniciamos el filtro al refrescar datos, volver a la pestaña o restaurar la página.
      // El estado seleccionado por el visitante debe mantenerse mientras se actualizan los datos de Sheets.
      const validOrigins = ['todos', 'propio', 'trabajado', 'servicios', 'clases', 'more'];
      if (!validOrigins.includes(selectedOrigin)) selectedOrigin = 'todos';
      if (!selectedCategory) selectedCategory = 'todos';

      document.querySelectorAll('[data-origin-filter]').forEach(function (button) {
        const active = button.getAttribute('data-origin-filter') === selectedOrigin;
        button.classList.toggle('bg-amber-400', active);
        button.classList.toggle('text-black', active);
        button.classList.toggle('font-bold', active);
        button.classList.toggle('bg-[#141822]', !active);
        button.classList.toggle('text-slate-300', !active);
      });
      renderProjectsGrid(true);
    }
  }

  function refreshAssetsPageRuntime() {
    if (!isAssetsPage() || !document.getElementById('projects-grid')) return;
    selectedOrigin = 'assets';
    addElyDevBackgroundMotion();
    renderAssetsGrid();
    requestAnimationFrame(function () {
      initElyDevMotionEnhancements();
      initAssetCardInteractions();
    });
    refreshAllGlobalAssetCounters();
    checkAssetHashParam();
  }

  function sortAssetsList(list) {
    return list.sort(function (a, b) {
      if (assetDiscoveryMode === 'trending') return getAssetTrendScore(b) - getAssetTrendScore(a);
      if (assetDiscoveryMode === 'newest') return (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0);
      if (assetDiscoveryMode === 'top') return (Number(globalAssetCounters[b.id]?.downloads) || Number(b.downloads) || 0) - (Number(globalAssetCounters[a.id]?.downloads) || Number(a.downloads) || 0);
      if (assetDiscoveryMode === 'recent') return recentAssetViews.indexOf(a.id) - recentAssetViews.indexOf(b.id);
      if (a.pinned !== b.pinned) return a.pinned === true ? -1 : 1;
      if (selectedAssetSort === 'downloads') return (Number(globalAssetCounters[b.id]?.downloads) || Number(b.downloads) || 0) - (Number(globalAssetCounters[a.id]?.downloads) || Number(a.downloads) || 0);
      if (selectedAssetSort === 'name') return String(a.name || '').localeCompare(String(b.name || ''), 'es', { sensitivity: 'base' });
      if (selectedAssetSort === 'oldest') return (Number(a.createdAt) || 0) - (Number(b.createdAt) || 0);
      if (selectedAssetSort === 'manual') return (Number(a.order) || 0) - (Number(b.order) || 0);
      return (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0);
    });
  }

  function getFilteredAssets() {
    return assets.filter(function (asset) {
      if (selectedCategory !== 'todos' && asset.type !== selectedCategory) return false;
      if (showOnlyFavoriteAssets && !isAssetFavorite(asset.id)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const haystack = [
          asset.name, asset.utility, asset.description, asset.version, asset.codeExample,
          (asset.tags || []).join(' ')
        ].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return isModerator || asset.published !== false;
    });
  }

  function getDiscoveryFilteredAssets() {
    const visible = getFilteredAssets().slice();
    if (assetDiscoveryMode !== 'recent') return visible;
    return visible.filter(function (asset) { return recentAssetViews.indexOf(asset.id) !== -1; });
  }

  function assetDirectLink(asset) {
    return window.location.origin + window.location.pathname + '#asset-' + encodeURIComponent(asset.id);
  }

  function renderAssetsGrid() {
    const container = document.getElementById('projects-grid');
    const emptyState = document.getElementById('projects-empty-state');
    if (!container) return;
    const list = sortAssetsList(getDiscoveryFilteredAssets());
    filteredProjects = [];
    updateCatalogHeaders();
    const sortSelect = document.getElementById('asset-sort-select');
    if (sortSelect) sortSelect.value = selectedAssetSort;
    const favoritesBtn = document.getElementById('asset-favorites-filter');
    const viewBtn = document.getElementById('asset-view-toggle');
    if (viewBtn) viewBtn.textContent = assetViewMode === 'cards' ? '☷ Lista' : '▦ Cards';
    container.classList.toggle('assets-list-view', assetViewMode === 'list');
    if (favoritesBtn) {
      favoritesBtn.classList.toggle('bg-amber-400', showOnlyFavoriteAssets);
      favoritesBtn.classList.toggle('text-black', showOnlyFavoriteAssets);
      favoritesBtn.classList.toggle('bg-white/5', !showOnlyFavoriteAssets);
      favoritesBtn.classList.toggle('text-slate-300', !showOnlyFavoriteAssets);
    }
    if (emptyState) emptyState.classList.toggle('hidden', list.length > 0);
    container.classList.toggle('hidden', list.length === 0);
    if (!list.length) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = list.map(function (asset) {
      const safeId = asset.id.replace(/'/g, "\\'");
      const typeLabel = asset.type === 'script' ? 'SCRIPT' : 'ASSET';
      const typeClass = asset.type === 'script' ? 'text-cyan-300 bg-cyan-500/10 border-cyan-400/20' : 'text-amber-300 bg-amber-500/10 border-amber-400/20';
      const tags = (asset.tags || []).slice(0, 5).map(function (tag) {
        return '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.filterAssetsByTag(\'' + String(tag).replace(/'/g, "\\'") + '\')" class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300">' + tag + '</button>';
      }).join('');
      const effects = Array.isArray(asset.cardEffects) ? asset.cardEffects : [];
      const effectClasses = effects.map(function(effect){ return ' card-effect-' + effect; }).join('');
      const effectStyle = asset.cardEffectColor ? ' style="--card-effect-color:' + asset.cardEffectColor + ';--card-effect-soft:' + asset.cardEffectColor + 'aa;--card-effect-light:' + asset.cardEffectColor + ';"' : '';
      const pinnedBadge = asset.pinned === true ? '<span class="asset-compact-badge">📌</span>' : '';
      const newBadge = isAssetNew(asset) ? '<span class="asset-compact-badge asset-new-badge">Nuevo</span>' : '';
      const popularBadge = (Number(asset.downloads) || 0) >= 10 ? '<span class="asset-compact-badge asset-popular-badge">🔥 Popular</span>' : '';
      const favorite = isAssetFavorite(asset.id);
      const favoriteButton = '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.toggleAssetFavorite(\'' + safeId + '\')" class="absolute left-3 top-3 z-[121] h-7 w-7 rounded-lg bg-black/55 border border-white/10 text-sm hover:border-amber-400/50" title="' + (favorite ? 'Quitar de favoritos' : 'Agregar a favoritos') + '">' + (favorite ? '★' : '☆') + '</button>';
      const quickPreviewText = String(asset.previewText || 'Preview rápida').replace(/[&<>"']/g, function(ch) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]; });
      const image = asset.image ? (isLocalVideoMedia(asset.image) ? '<div class="asset-card-media relative aspect-video w-full overflow-hidden bg-[#080a0f]" onclick="event.stopPropagation()"><video src="' + asset.image + '" class="h-full w-full object-cover" controls playsinline preload="metadata" onclick="event.stopPropagation()"></video></div>' : '<div class="asset-card-media relative aspect-video w-full overflow-hidden bg-[#181d28] cursor-pointer"><img src="' + asset.image + '" alt="' + asset.name + '" class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" onerror="this.style.display=\'none\'"><div class="absolute inset-0 bg-gradient-to-t from-[#12151d] via-transparent to-black/40"></div><div class="asset-quick-preview"><span class="asset-quick-preview-icon">◉</span><span>' + quickPreviewText + '</span></div></div>') : '';
      const moderatorBar = (isModerator && !visitorPreviewMode) ? '<div class="flex items-center justify-between gap-2 p-2 bg-amber-400/10 border-b border-amber-400/20 text-[10px] relative z-[130]"><div class="flex items-center gap-1"><button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.moveAssetOrder(\'' + safeId + '\',-1)" class="px-1.5 py-1 rounded bg-white/5 hover:bg-white/10">▲</button><button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.moveAssetOrder(\'' + safeId + '\',1)" class="px-1.5 py-1 rounded bg-white/5 hover:bg-white/10">▼</button></div><div class="flex items-center gap-1"><button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.duplicateAsset(\'' + safeId + '\')" class="px-2 py-1 rounded bg-white/5 hover:bg-white/10">📋</button><button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.editAsset(\'' + safeId + '\')" class="px-2 py-1 rounded bg-amber-400 text-black font-bold">✏️</button><button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.deleteAsset(\'' + safeId + '\')" class="px-2 py-1 rounded bg-red-600 text-white">🗑️</button></div></div>' : '';
      return '<article data-asset-id="' + safeId + '" onclick="window.ElyPortfolio.openAssetModal(\'' + safeId + '\')" class="card-fade-in group relative flex flex-col overflow-hidden rounded-2xl bg-[#12151d] border border-[#232733] hover:border-amber-400/60 transform hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 z-0 hover:z-10 cursor-pointer' + effectClasses + '"' + effectStyle + '>' +
        moderatorBar + pinnedBadge + favoriteButton +
        '<div class="absolute top-3 right-3 z-[121] flex gap-1">' + newBadge + popularBadge + '</div>' +
        image +
        '<div class="p-4 space-y-3 text-center">' +
          '<div class="flex items-center justify-center gap-2"><span class="px-2 py-0.5 rounded-md border text-[10px] font-bold ' + typeClass + '">' + typeLabel + '</span><span class="text-[10px] text-slate-500 font-mono">v' + (asset.version || '1.0.0') + '</span></div>' +
          '<h3 class="asset-card-title text-base font-bold text-white font-display text-center w-full">' + asset.name + '</h3>' +
          '<p class="text-xs text-slate-400 line-clamp-2">' + (asset.utility || asset.description || '') + '</p>' +
          '<div class="flex items-center justify-start gap-3 pt-2 border-t border-[#1e2330]">' +
            '<span class="text-[10px] text-rose-300" data-global-likes-id="' + safeId + '">♥ ' + getAssetLikes(asset.id) + '</span>' +
            '<span class="text-[10px] text-slate-500 font-mono" data-global-downloads-id="' + safeId + '">↓ ' + (Number(globalAssetCounters[asset.id]?.downloads) || Number(asset.downloads) || 0) + '</span>' +
            '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.openAssetModal(\'' + safeId + '\')" class="asset-view-resource-btn" title="Ver recurso">👁️</button>' +
          '</div>' +
        '</div></article>';
    }).join('');
    initElyDevMotionEnhancements();
    initAssetCardInteractions();
    refreshAllGlobalAssetCounters();
  }

  function initAssetCardInteractions() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    document.querySelectorAll('#projects-grid > article[data-asset-id]').forEach(function (card) {
      if (card.dataset.assetTiltBound === '1' || card.dataset.elyMotionBound === '1') return;
      card.dataset.assetTiltBound = '1';
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform';
      card.addEventListener('pointermove', function (e) {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        const rx = ((y - 50) / 50) * -5;
        const ry = ((x - 50) / 50) * 5;
        card.style.setProperty('--ely-mx', x + '%');
        card.style.setProperty('--ely-my', y + '%');
        card.style.setProperty('--ely-rx', rx + 'deg');
        card.style.setProperty('--ely-ry', ry + 'deg');
        card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(0) scale(1.015)';
      }, { passive: true });
      card.addEventListener('pointerleave', function () {
        card.style.setProperty('--ely-mx', '50%');
        card.style.setProperty('--ely-my', '50%');
        card.style.setProperty('--ely-rx', '0deg');
        card.style.setProperty('--ely-ry', '0deg');
        card.style.removeProperty('transform');
      });
    });
  }

  function moveAssetOrder(assetId, direction) {
    if (!isModerator || visitorPreviewMode) return;
    const index = assets.findIndex(function (a) { return a.id === assetId; });
    if (index < 0) return;
    const sorted = assets.slice().sort(function(a,b){ return (Number(a.order)||0) - (Number(b.order)||0); });
    const sortedIndex = sorted.findIndex(function(a){ return a.id === assetId; });
    const targetIndex = sortedIndex + direction;
    if (targetIndex < 0 || targetIndex >= sorted.length) return;
    const other = sorted[targetIndex];
    const currentOrder = Number(sorted[sortedIndex].order) || sortedIndex;
    const otherOrder = Number(other.order) || targetIndex;
    sorted[sortedIndex].order = otherOrder;
    other.order = currentOrder;
    assets = sorted;
    try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
    syncCardsInfoImmediately().catch(function(error) { console.error('[ASSETS SHEET SYNC ERROR]', error); });
    renderAssetsManagerList();
    if (selectedOrigin === 'assets') renderAssetsGrid();
  }

  function duplicateAsset(assetId) {
    if (!isModerator || visitorPreviewMode) return;
    const source = assets.find(function(a){ return a.id === assetId; });
    if (!source) return;
    let id = slugifyAssetId(source.name + '-copy');
    let suffix = 2;
    while (assets.some(function(a){ return a.id === id; })) id = slugifyAssetId(source.name + '-copy') + '-' + suffix++;
    const copy = JSON.parse(JSON.stringify(source));
    copy.id = id;
    copy.name = source.name + ' Copy';
    copy.downloads = 0;
    copy.createdAt = Date.now();
    copy.published = false;
    copy.pinned = false;
    copy.order = assets.length;
    assets.unshift(copy);
    try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
    renderAssetsManagerList();
    syncCardsInfoImmediately().catch(function(error) { console.error('[ASSETS SHEET SYNC ERROR]', error); });
    if (selectedOrigin === 'assets') renderAssetsGrid();
    showStatusNotification({title:'Recurso Duplicado',message:'Se creó como borrador para que puedas revisarlo antes de publicarlo.',type:'success',icon:'📋'});
  }

  function openAssetFormPreview() {
    if (!isModerator) return;
    const name = document.getElementById('asset-form-name')?.value.trim() || 'Recurso sin nombre';
    const type = document.getElementById('asset-form-type')?.value === 'asset' ? 'asset' : 'script';
    const utility = document.getElementById('asset-form-utility')?.value.trim() || '';
    const description = document.getElementById('asset-form-description')?.value.trim() || '';
    const image = document.getElementById('asset-form-image')?.value.trim() || '';
    const version = document.getElementById('asset-form-version')?.value.trim() || '1.0.0';
    const tags = document.getElementById('asset-form-tags')?.value.split(',').map(function(s){return s.trim();}).filter(Boolean) || [];
    const preview = document.getElementById('asset-preview-modal');
    if (!preview) return;
    const title = document.getElementById('asset-preview-title');
    const desc = document.getElementById('asset-preview-description');
    const util = document.getElementById('asset-preview-utility');
    const typeEl = document.getElementById('asset-preview-type');
    const versionEl = document.getElementById('asset-preview-version');
    const imageEl = document.getElementById('asset-preview-image');
    const imageWrap = document.getElementById('asset-preview-image-wrap');
    const tagsEl = document.getElementById('asset-preview-tags');
    if (title) title.textContent = name;
    if (desc) desc.textContent = description;
    if (util) util.textContent = utility;
    if (typeEl) typeEl.textContent = type.toUpperCase();
    if (versionEl) versionEl.textContent = 'v' + version;
    if (tagsEl) tagsEl.innerHTML = tags.map(function(tag){return '<span class="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10">' + tag + '</span>';}).join('');
    if (imageWrap && imageEl) {
      if (image) { imageEl.src=image; imageWrap.classList.remove('hidden'); } else imageWrap.classList.add('hidden');
    }
    preview.classList.remove('hidden');
  }

  function closeAssetFormPreview() {
    const preview = document.getElementById('asset-preview-modal');
    if (preview) preview.classList.add('hidden');
  }

  function openAssetImagePicker() {
    if (!isModerator) return;
    const modal = document.getElementById('asset-image-picker-modal');
    const grid = document.getElementById('asset-image-picker-grid');
    if (!modal || !grid) return;
    grid.innerHTML = customLibraryImages.map(function(image) {
      const path = image.path || '';
      return '<button type="button" onclick="window.ElyPortfolio.selectAssetImage(\'' + path.replace(/'/g, "\\'") + '\')" class="group rounded-xl overflow-hidden border border-white/10 bg-[#0b0d11] hover:border-cyan-400/60 text-left">' +
        '<img src="' + path + '" alt="' + (image.name || '') + '" class="w-full h-28 object-cover">' +
        '<span class="block px-2 py-1.5 text-[10px] text-slate-300 truncate">' + (image.name || path) + '</span></button>';
    }).join('');
    modal.classList.remove('hidden');
  }

  function closeAssetImagePicker() {
    const modal = document.getElementById('asset-image-picker-modal');
    if (modal) modal.classList.add('hidden');
  }

  function selectAssetImage(path) {
    const input = document.getElementById('asset-form-image');
    const preview = document.getElementById('asset-form-image-preview');
    const previewImg = document.getElementById('asset-form-image-preview-img');
    if (input) input.value = path;
    if (previewImg) previewImg.src = path;
    if (preview) preview.classList.remove('hidden');
    closeAssetImagePicker();
  }

  function openAssetModal(assetId, updateHash, skipRefresh) {
    // La información ya fue cargada al entrar. Abrimos inmediatamente con el estado actual.
    // Las actualizaciones de Sheets ocurren en segundo plano y no bloquean el click.
    const asset = assets.find(function (a) { return a.id === assetId; });
    if (!asset || (asset.published === false && (!isModerator || visitorPreviewMode))) return;
    selectedAsset = asset;
    rememberAssetView(asset.id);
    if (updateHash !== false) {
      history.replaceState(null, '', '#asset-' + encodeURIComponent(asset.id));
    }
    const modal = document.getElementById('asset-detail-modal');
    if (!modal) return;
    const typeEl = document.getElementById('asset-modal-type');
    const versionEl = document.getElementById('asset-modal-version');
    const titleEl = document.getElementById('asset-modal-title');
    const descEl = document.getElementById('asset-modal-description');
    const utilityEl = document.getElementById('asset-modal-utility');
    const tagsEl = document.getElementById('asset-modal-tags');
    const downloadsEl = document.getElementById('asset-modal-downloads');
    const linkEl = document.getElementById('asset-modal-link');
    const imageWrap = document.getElementById('asset-modal-image-wrap');
    const imageEl = document.getElementById('asset-modal-image');
    const downloadBtn = document.getElementById('asset-modal-download-btn');
    const codeEl = document.getElementById('asset-modal-code');
    const codeWrap = document.getElementById('asset-modal-code-wrap');
    const favoriteBtn = document.getElementById('asset-modal-favorite-btn');
    const likesEl = document.getElementById('asset-modal-likes');
    const dailyEl = document.getElementById('asset-modal-downloads-today');
    if (codeWrap && codeEl) {
      if (asset.codeExample) { codeEl.textContent = asset.codeExample; codeWrap.classList.remove('hidden'); } else codeWrap.classList.add('hidden');
    }
    if (favoriteBtn) favoriteBtn.textContent = isAssetFavorite(asset.id) ? '★ Favorito' : '☆ Favorito';
    if (likesEl) likesEl.textContent = String(getAssetLikes(asset.id));
    if (downloadsEl) downloadsEl.textContent = String(Number(globalAssetCounters[asset.id]?.downloads) || Number(asset.downloads) || 0);
    if (dailyEl) dailyEl.textContent = String(getAssetDownloadsToday(asset.id));
    Promise.all([
      refreshGlobalAssetCounter(asset.id, 'likes'),
      refreshGlobalAssetCounter(asset.id, 'downloads')
    ]).then(updateGlobalAssetCounterUI);
    renderAssetComments(asset.id);
    renderRelatedAssets(asset);
    const moderatorActions = document.getElementById('asset-modal-moderator-actions');
    window.ElyPortfolio.getSelectedAssetId = function () { return selectedAsset ? selectedAsset.id : ''; };
    if (moderatorActions) moderatorActions.classList.toggle('hidden', !(isModerator && !visitorPreviewMode));
    if (typeEl) typeEl.textContent = asset.type === 'script' ? 'SCRIPT' : 'ASSET';
    if (versionEl) versionEl.textContent = 'v' + (asset.version || '1.0.0');
    if (titleEl) titleEl.textContent = asset.name || asset.id;
    if (descEl) descEl.textContent = asset.description || '';
    if (utilityEl) utilityEl.textContent = asset.utility || '';
    if (tagsEl) tagsEl.innerHTML = (asset.tags || []).map(function (tag) { return '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">' + tag + '</span>'; }).join('');
    if (downloadsEl) downloadsEl.textContent = String(Number(asset.downloads) || 0);
    if (linkEl) linkEl.textContent = assetDirectLink(asset);
    if (imageWrap && imageEl) {
      if (asset.image) {
        imageEl.src = asset.image;
        imageEl.alt = asset.name || 'Asset';
        imageWrap.classList.remove('hidden');
      } else {
        imageWrap.classList.add('hidden');
      }
    }
    if (downloadBtn) {
      downloadBtn.onclick = function () {
        const target = assets.find(function (a) { return a.id === asset.id; });
        if (!target) return;
        downloadBtn.classList.remove('btn-101-active');
        void downloadBtn.offsetWidth;
        downloadBtn.classList.add('btn-101-active');
        showStatusNotification({
          title: 'Descargando',
          message: target.name || target.id,
          type: 'success',
          icon: '↓',
          messageClass: 'toast-download-name'
        });
        trackAssetDownload(target);
        requestGlobalAssetCounter(target.id, 'downloads', 'increment').then(function(count) {
          if (count === null) return;
          target.downloads = count;
          renderAssetsGrid();
          updateGlobalAssetCounterUI(true);
        });
        if (dailyEl) dailyEl.textContent = String(getAssetDownloadsToday(target.id));
        window.open(target.downloadUrl, '_blank', 'noopener,noreferrer');
      };
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeAssetModal() {
    const modal = document.getElementById('asset-detail-modal');
    if (modal) modal.classList.add('hidden');
    if ((window.location.hash || '').toLowerCase().startsWith('#asset-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    document.body.style.overflow = '';
    selectedAsset = null;
  }

  function copyAssetLink() {
    if (!selectedAsset) return;
    const link = assetDirectLink(selectedAsset);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(function () {
        showStatusNotification({ title: 'Enlace Copiado', message: link, type: 'success', icon: '🔗' });
      });
    } else {
      window.prompt('Copia este enlace:', link);
    }
  }

  function renderAssetsManagerList() {
    const container = document.getElementById('assets-manager-list');
    const count = document.getElementById('assets-total-count');
    if (count) count.textContent = String(assets.length);
    const mostDownloadedEl = document.getElementById('asset-most-downloaded');
    const todayTotalEl = document.getElementById('asset-downloads-today-total');
    if (mostDownloadedEl) {
      const top = assets.slice().sort(function(a,b){return (Number(b.downloads)||0)-(Number(a.downloads)||0);})[0];
      mostDownloadedEl.textContent = top ? top.name + ' · ' + (Number(top.downloads)||0) : '—';
    }
    if (todayTotalEl) {
      todayTotalEl.textContent = String(assets.reduce(function(sum,a){return sum + getAssetDownloadsToday(a.id);},0));
    }
    if (!container) return;
    if (!assets.length) {
      container.innerHTML = '<div class="p-4 rounded-xl bg-[#141822] text-center text-xs text-slate-400">No hay recursos registrados todavía.</div>';
      return;
    }
    container.innerHTML = assets.slice().sort(function(a,b){return (Number(a.order)||0)-(Number(b.order)||0);}).map(function (asset) {
      const safeId = asset.id.replace(/'/g, "\\'");
      const status = asset.published === false ? '<span class="text-red-300 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">Borrador</span>' : '<span class="text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">Publicado</span>';
      const isNew = isAssetNew(asset) ? '<span class="text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded">Nuevo</span>' : '';
      return '<div class="rounded-xl bg-[#141822] border border-[#232733] p-3 flex flex-col gap-2">' +
        '<div class="flex items-center justify-between gap-2"><div class="min-w-0"><div class="flex items-center gap-2 flex-wrap"><span class="text-[10px] uppercase font-bold text-cyan-300">' + (asset.type === 'script' ? 'SCRIPT' : 'ASSET') + '</span><span class="text-xs font-bold text-white truncate">' + asset.name + '</span>' + status + isNew + '</div><div class="text-[10px] text-slate-500 font-mono">↓ ' + (Number(asset.downloads)||0) + ' · v' + (asset.version||'1.0.0') + '</div></div></div>' +
        '<div class="flex flex-wrap items-center gap-1.5"><button type="button" onclick="window.ElyPortfolio.moveAssetOrder(\''+safeId+'\',-1)" class="px-2 py-1 rounded-lg bg-white/5 text-[10px]">▲</button><button type="button" onclick="window.ElyPortfolio.moveAssetOrder(\''+safeId+'\',1)" class="px-2 py-1 rounded-lg bg-white/5 text-[10px]">▼</button><button type="button" onclick="window.ElyPortfolio.toggleAssetPublished(\''+safeId+'\')" class="px-2 py-1 rounded-lg bg-white/5 text-[10px]">'+(asset.published===false?'🚀 Publicar':'⏸ Ocultar')+'</button><button type="button" onclick="window.ElyPortfolio.duplicateAsset(\''+safeId+'\')" class="px-2 py-1 rounded-lg bg-white/5 text-[10px]">📋 Duplicar</button><button type="button" onclick="window.ElyPortfolio.editAsset(\''+safeId+'\')" class="px-2 py-1 rounded-lg bg-amber-400 text-black text-[10px] font-bold">✏️ Editar</button><button type="button" onclick="window.ElyPortfolio.deleteAsset(\''+safeId+'\')" class="px-2 py-1 rounded-lg bg-red-600 text-white text-[10px]">🗑️</button></div>' +
      '</div>';
    }).join('');
  }

  function editAsset(assetId) {
    if (!isModerator || visitorPreviewMode) return;
    const asset = assets.find(function (a) { return a.id === assetId; });
    if (!asset) return;
    editingAssetId = asset.id;
    closeAssetModal();
    const form = document.getElementById('asset-form');
    if (!form) return;
    document.getElementById('asset-form-name').value = asset.name || '';
    document.getElementById('asset-form-type').value = asset.type === 'asset' ? 'asset' : 'script';
    document.getElementById('asset-form-utility').value = asset.utility || '';
    document.getElementById('asset-form-description').value = asset.description || '';
    const previewText = document.getElementById('asset-form-preview-text');
    if (previewText) previewText.value = asset.previewText || 'Preview rápida';
    document.getElementById('asset-form-tags').value = (asset.tags || []).join(', ');
    document.getElementById('asset-form-version').value = asset.version || '1.0.0';
    document.getElementById('asset-form-download').value = asset.downloadUrl || '';
    document.getElementById('asset-form-image').value = asset.image || '';
    const codeExample = document.getElementById('asset-form-code');
    if (codeExample) codeExample.value = asset.codeExample || '';
    const published = document.getElementById('asset-form-published');
    if (published) published.checked = asset.published !== false;
    const pinned = document.getElementById('asset-form-pinned');
    if (pinned) pinned.checked = asset.pinned === true;
    const effects = Array.isArray(asset.cardEffects) ? asset.cardEffects : [];
    const effectElectrify = document.getElementById('asset-form-effect-electrify');
    const effectRainbow = document.getElementById('asset-form-effect-rainbow');
    const effectGlow = document.getElementById('asset-form-effect-glow');
    const effectShake = document.getElementById('asset-form-effect-shake');
    if (effectElectrify) effectElectrify.checked = effects.includes('electrify');
    if (effectRainbow) effectRainbow.checked = effects.includes('rainbow');
    if (effectGlow) effectGlow.checked = effects.includes('glow');
    if (effectShake) effectShake.checked = effects.includes('shake');
    const effectColor = document.getElementById('asset-form-effect-color');
    if (effectColor) effectColor.value = /^#[0-9a-fA-F]{6}$/.test(asset.cardEffectColor || '') ? asset.cardEffectColor : '#fbbf24';
    const preview = document.getElementById('asset-form-image-preview');
    const previewImg = document.getElementById('asset-form-image-preview-img');
    if (asset.image && preview && previewImg) {
      previewImg.src = asset.image;
      preview.classList.remove('hidden');
    } else if (preview) {
      preview.classList.add('hidden');
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = '💾 Guardar cambios';
    const title = document.querySelector('#assets-manager-modal h3');
    if (title) title.textContent = '✏️ Editar Script / Asset';
    const modal = document.getElementById('assets-manager-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  async function openAssetsManagerModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    editingAssetId = null;
    renderAssetsManagerList();
    const form = document.getElementById('asset-form');
    if (form) form.reset();
    const version = document.getElementById('asset-form-version');
    if (version) version.value = '1.0.0';
    const modal = document.getElementById('assets-manager-modal');
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeAssetsManagerModal() {
    const modal = document.getElementById('assets-manager-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function handleAssetSubmit(e) {
    e.preventDefault();
    if (!isModerator) return;
    const name = document.getElementById('asset-form-name').value.trim();
    const type = document.getElementById('asset-form-type').value;
    const utility = document.getElementById('asset-form-utility').value.trim();
    const description = document.getElementById('asset-form-description').value.trim();
    const previewText = document.getElementById('asset-form-preview-text')?.value.trim() || 'Preview rápida';
    const tags = document.getElementById('asset-form-tags').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    const version = document.getElementById('asset-form-version').value.trim() || '1.0.0';
    const downloadUrl = document.getElementById('asset-form-download').value.trim();
    const image = document.getElementById('asset-form-image').value.trim();
    const codeExample = document.getElementById('asset-form-code')?.value || '';
    const published = !!document.getElementById('asset-form-published')?.checked;
    const pinned = !!document.getElementById('asset-form-pinned')?.checked;
    const effectList = [];
    if (document.getElementById('asset-form-effect-electrify')?.checked) effectList.push('electrify');
    if (document.getElementById('asset-form-effect-rainbow')?.checked) effectList.push('rainbow');
    if (document.getElementById('asset-form-effect-glow')?.checked) effectList.push('glow');
    if (document.getElementById('asset-form-effect-shake')?.checked) effectList.push('shake');
    const cardEffectColor = document.getElementById('asset-form-effect-color')?.value || '#fbbf24';
    if (!name || !utility || !downloadUrl) return;
    if (editingAssetId) {
      const target = assets.find(function (a) { return a.id === editingAssetId; });
      if (!target) return;
      target.name = name;
      target.type = type === 'asset' ? 'asset' : 'script';
      target.utility = utility;
      target.description = description;
      target.previewText = previewText;
      target.tags = tags;
      target.downloadUrl = downloadUrl;
      target.image = image;
      target.codeExample = codeExample;
      target.version = version;
      target.published = published;
      target.pinned = pinned;
      target.cardEffects = effectList;
      target.cardEffect = effectList.length ? effectList[0] : 'none';
      target.cardEffectColor = cardEffectColor;
      if (!target.createdAt) target.createdAt = Date.now();
      if (typeof target.order !== 'number') target.order = assets.length;
    } else {
      let id = slugifyAssetId(name);
      let suffix = 2;
      while (assets.some(function (a) { return a.id === id; })) id = slugifyAssetId(name) + '-' + suffix++;
      assets.unshift({
        id: id,
        name: name,
        type: type === 'asset' ? 'asset' : 'script',
        utility: utility,
        description: description,
        previewText: previewText,
        tags: tags,
        downloadUrl: downloadUrl,
        image: image,
        codeExample: codeExample,
        version: version,
        downloads: 0,
        published: published,
        pinned: pinned,
        createdAt: Date.now(),
        order: assets.length,
        cardEffects: effectList,
        cardEffect: effectList.length ? effectList[0] : 'none',
        cardEffectColor: cardEffectColor
      });
    }
    try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (err) {}
    renderAssetsManagerList();
    if (selectedOrigin === 'assets') renderAssetsGrid();
    syncCardsInfoImmediately().catch(function(error) { console.error('[ASSETS SHEET SYNC ERROR]', error); });
    const savedAsset = editingAssetId ? assets.find(function(a){return a.id===editingAssetId;}) : assets.find(function(a){return a.id===slugifyAssetId(name) || a.name===name;});
    showStatusNotification({ title: editingAssetId ? 'Recurso Actualizado' : 'Recurso Creado', message: editingAssetId ? 'Los cambios fueron guardados.' : (published ? 'Recurso publicado. Enlace: ' + assetDirectLink(savedAsset || assets[0]) : 'Guardado como borrador.'), type: 'success', icon: editingAssetId ? '✏️' : '📦' });
    editingAssetId = null;
    e.target.reset();
    document.getElementById('asset-form-version').value = '1.0.0';
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = '📦 Publicar recurso';
    const assetPreview = document.getElementById('asset-form-image-preview');
    if (assetPreview) assetPreview.classList.add('hidden');
    const title = document.querySelector('#assets-manager-modal h3');
    if (title) title.textContent = '📦 Scripts / Assets de la Comunidad';
  }

  function toggleAssetPublished(assetId) {
    if (!isModerator || visitorPreviewMode) return;
    const target = assets.find(function(a){return a.id===assetId;});
    if (!target) return;
    target.published = target.published === false;
    try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
    syncCardsInfoImmediately().catch(function(error) { console.error('[ASSETS SHEET SYNC ERROR]', error); });
    renderAssetsManagerList();
    if (selectedOrigin === 'assets') renderAssetsGrid();
  }

  function deleteAsset(assetId) {
    if (!isModerator) return;
    const target = assets.find(function (a) { return a.id === assetId; });
    if (!target) return;
    showConfirmModal({
      title: '¿Eliminar recurso?',
      message: 'Se eliminará "' + target.name + '" de la biblioteca local.',
      icon: '📦',
      confirmText: 'Sí, eliminar',
      danger: true,
      onConfirm: function () {
        assets = assets.filter(function (a) { return a.id !== assetId; });
        try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
        syncCardsInfoImmediately().catch(function(error) { console.error('[ASSETS SHEET SYNC ERROR]', error); });
        renderAssetsManagerList();
        if (selectedOrigin === 'assets') renderAssetsGrid();
      }
    });
  }

  function copyAssetLinkById(assetId) {
    const asset = assets.find(function (a) { return a.id === assetId; });
    if (!asset) return;
    const link = assetDirectLink(asset);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(function () {
        showStatusNotification({ title: 'Enlace del Asset Copiado', message: link, type: 'success', icon: '🔗' });
      });
    } else {
      window.prompt('Copia este enlace:', link);
    }
  }

  function checkAssetHashParam() {
    const hash = window.location.hash || '';
    if (!hash.toLowerCase().startsWith('#asset-')) return;
    const id = decodeURIComponent(hash.substring(7));
    if (!id) return;
    const target = assets.find(function (a) { return a.id === id; });
    if (target) {
      setTimeout(function () { openAssetModal(id, false); }, 250);
    }
  }

   function renderProjectsGrid(forceFilterTransition) {
    if (selectedOrigin === 'assets') {
      renderAssetsGrid();
      return;
    }
    filteredProjects = getFilteredProjects().sort(function(a, b) { return (b.pinned === true ? 1 : 0) - (a.pinned === true ? 1 : 0); });
    updateCatalogHeaders();

    const container = document.getElementById('projects-grid');
    if (!container) return;

    const currentCards = Array.from(container.querySelectorAll('article[data-id]'));
    const isFilterChange = forceFilterTransition === true || (
      currentCards.length > 0 && (
        lastFilterOrigin !== selectedOrigin ||
        lastFilterCategory !== selectedCategory ||
        lastFilterSearch !== searchQuery
      )
    );

    lastFilterOrigin = selectedOrigin;
    lastFilterCategory = selectedCategory;
    lastFilterSearch = searchQuery;

    // Si es cambio de filtro y ya hay elementos en pantalla:
    // Los cuadros que no van en el nuevo filtro se colapsan hacia atrás (scale down + fade out)
    if (isFilterChange && currentCards.length > 0) {
      if (filterTransitionTimer) {
        clearTimeout(filterTransitionTimer);
      }

      const nextIds = new Set(filteredProjects.map(p => p.id));
      const exitingCards = currentCards.filter(function (card) {
        const id = card.getAttribute('data-id');
        return !nextIds.has(id);
      });

      // Si hay elementos que no van a estar en el nuevo filtro, colapsarlos hacia atrás
      if (exitingCards.length > 0) {
        exitingCards.forEach(function (card) {
          card.classList.remove('card-fade-in');
          card.classList.add('card-collapse-exit');
        });

        filterTransitionTimer = setTimeout(function () {
          renderProjectsGridDOM();
          filterTransitionTimer = null;
        }, 220);
        return;
      }
    }

    renderProjectsGridDOM();
  }

  function renderProjectsGridDOM() {
    const container = document.getElementById('projects-grid');
    const emptyState = document.getElementById('projects-empty-state');
    if (!container) return;

    if (filteredProjects.length === 0) {
      container.innerHTML = '';
      container.classList.add('hidden');
      renderedCardIds.clear();
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    container.classList.remove('hidden');

    let html = '';
    filteredProjects.forEach(function (project, index) {
      const isServ = project.origin === 'servicios';
      const isClas = project.origin === 'clases';
      const isProp = project.origin === 'propio';
      const isAlreadyInDom = renderedCardIds.has(project.id);
      const entranceClass = isAlreadyInDom ? '' : 'card-fade-in';
      const cardEffects = Array.isArray(project.cardEffects)
        ? project.cardEffects
        : (project.cardEffect && project.cardEffect !== 'none' ? [project.cardEffect] : []);
      const cardEffectClass = cardEffects.map(function(effect) {
        return ' card-effect-' + effect;
      }).join('');
      const cardEffectStyle = project.cardEffectColor ? ' style="--card-effect-color:' + project.cardEffectColor + ';--card-effect-soft:' + project.cardEffectColor + 'aa;--card-effect-light:' + project.cardEffectColor + ';"' : '';
      const pinnedBadge = project.pinned ? '<span class="card-pinned-badge">📌 Fijado</span>' : '';
      const originBadge = project.origin === 'more'
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">Sistema</span>'
        : isServ
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Servicio Técnico</span>'
        : isClas
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Clase Privada</span>'
        : isProp
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Proyecto Propio</span>'
        : '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Para Cliente</span>';

      const categoryBadge = project.category === 'juegos'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">🎮 Juego</span>'
        : project.category === 'aplicaciones'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">📱 App</span>'
        : '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">🤝 Colab</span>';

      const priceBadge = project.priceTag
        ? '<div class="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-400 text-black font-extrabold text-xs shadow-md">' + project.priceTag + '</div>'
        : '';

      const hasVideo = !!project.youtubeVideo;
      const playStoreBadge = project.playStoreUrl ? '<a href="' + project.playStoreUrl + '" target="_blank" rel="noopener noreferrer" class="shrink-0 hover:scale-105 transition-transform" title="Ver en Google Play" onclick="event.stopPropagation()"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" class="w-[112px] h-auto max-h-[34px] object-contain" loading="lazy"></a>' : '';
      const itchStoreBadge = project.itchUrl ? '<a href="' + project.itchUrl + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#fa5c5c] text-white text-[11px] font-bold shadow-sm hover:bg-[#ff6b6b] hover:scale-105 transition-transform" title="Ver en itch.io" onclick="event.stopPropagation()">itch.io ↗</a>' : '';
      const steamStoreBadge = project.steamUrl ? '<a href="' + project.steamUrl + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#1b2838] text-white text-[11px] font-bold border border-white/10 shadow-sm hover:bg-[#243447] hover:scale-105 transition-transform" title="Ver en Steam" onclick="event.stopPropagation()">Steam ↗</a>' : '';
      const storeBadges = playStoreBadge || itchStoreBadge || steamStoreBadge ? '<div class="flex flex-wrap items-center justify-end gap-2 pt-2">' + itchStoreBadge + steamStoreBadge + playStoreBadge + '</div>' : '';
      const mediaBadge = hasVideo
        ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-red-600/80 text-white backdrop-blur-sm shadow">▶ Video YouTube</span>'
        : '';

      const techIcons = {
        'Unity': '🎮', 'Unity 3D': '🎮', 'Unity 2D': '🎮', 'C#': '♯',
        'Photon Network': '🌐', 'Photon PUN 2': '🌐', 'PHP': '🐘', 'MySQL': '🗄️',
        'JavaScript': 'JS', 'HTML5': 'HTML', 'CSS3': 'CSS', 'Git': '🔀',
        'GitHub': '🐙', 'FMOD Audio': '🔊', 'Cinemachine': '🎥', 'REST API Integration': '🔗',
        'HLS Video Streaming': '▶', 'Android Deployment': '📱', 'Mobile UI': '📱',
        'Vehicle Physics': '🏎️', 'Custom Shaders': '✨', 'UI/UX Design': '🎨'
      };
      const techBadges = (project.technologies || []).slice(0, 4).map(function (t) {
        const label = String(t || '');
        let icon = '⚙️';
        Object.keys(techIcons).some(function (key) {
          if (label.toLowerCase().includes(key.toLowerCase())) {
            icon = techIcons[key];
            return true;
          }
          return false;
        });
        return '<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"><span class="text-xs leading-none">' + icon + '</span><span>' + label + '</span></span>';
      }).join('');

      const clientSubtitle = project.clientOrTeam
        ? '<div class="text-[11px] text-cyan-400 font-medium mb-1 truncate">Cliente: ' + project.clientOrTeam + '</div>'
        : '';

      // Barra de controles de moderador (Ajustar Orden, Editar, Eliminar)
      const moderatorBar = (isModerator && !visitorPreviewMode) ? `
        <div class="flex items-center justify-between p-2.5 bg-amber-400/10 border-b border-amber-400/20 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.moveProjectOrder('${project.id}', -1)"
              class="px-2 py-1 rounded bg-[#12151d] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors"
              title="Mover hacia arriba en la lista"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.moveProjectOrder('${project.id}', 1)"
              class="px-2 py-1 rounded bg-[#12151d] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors"
              title="Mover hacia abajo en la lista"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.duplicateProject('${project.id}')"
              class="px-2 py-1 rounded bg-[#1e2534] text-amber-300 hover:bg-amber-400 hover:text-black text-[11px] font-bold transition-colors shadow-sm"
              title="Duplicar este proyecto"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.openEditProjectModal('${project.id}')"
              class="px-2.5 py-1 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors shadow-sm"
              title="Editar título, descripciones, imágenes o video en grande"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.deleteProject('${project.id}')"
              class="px-2.5 py-1 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors shadow-sm"
              title="Eliminar este cuadro de información"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      html += `
        <article data-id="${project.id}"${cardEffectStyle} class="${entranceClass}${cardEffectClass} group relative flex flex-col overflow-hidden rounded-2xl bg-[#12151d] border border-[#232733] hover:border-amber-400/60 transform hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 z-0 hover:z-10">
          
          ${moderatorBar}

          ${pinnedBadge}

          <!-- Portada principal 16:9 del proyecto -->
          <div class="relative aspect-video w-full overflow-hidden bg-[#181d28] cursor-pointer" onclick="window.ElyPortfolio.openProjectModal('${project.id}')">
            ${isLocalVideoMedia(project.coverImage) ? '<video src="' + project.coverImage + '" class="h-full w-full object-cover" controls playsinline preload="metadata" onclick="event.stopPropagation()"></video>' : '<img src="' + (project.coverImage || './assets/images/ely/my-avatar.png') + '" alt="' + project.title + '" class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" onerror="this.removeAttribute(\'src\'); this.style.display=\'none\'" />'}
            <div class="absolute inset-0 bg-gradient-to-t from-[#12151d] via-transparent to-black/40"></div>
            
            <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
              ${originBadge}
              ${categoryBadge}
              ${mediaBadge}
            </div>

            ${priceBadge ? '<div class="absolute top-3 right-3 z-10">' + priceBadge + '</div>' : ''}

            ${project.year && !isServ && !isClas ? '<div class="absolute bottom-2.5 right-3 text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">' + project.year + '</div>' : ''}
          </div>

          <!-- Contenido de la Ficha -->
          <div class="flex flex-1 flex-col p-5 justify-between space-y-4">
            <div class="space-y-2">
              ${clientSubtitle}
              <h3
                class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1 font-display"
                onclick="window.ElyPortfolio.openProjectModal('${project.id}')"
              >
                ${project.title}
              </h3>
              <p class="text-xs text-amber-300/80 font-medium line-clamp-1">
                ${project.tagline}
              </p>
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                ${project.description}
              </p>

              ${(isServ || isClas) ? `
                <div class="mt-3 rounded-xl bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20 p-3" onclick="event.stopPropagation()">
                  <div class="flex items-center justify-between gap-2">
                    <div>
                      <div class="text-[10px] uppercase tracking-wider font-bold text-amber-400">${isClas ? 'Horas impartidas' : 'Veces trabajado'}</div>
                      <div class="text-[9px] text-slate-500 mt-0.5">${isClas ? 'Horas de clases impartidas' : 'Trabajos realizados'}</div>
                    </div>
                    <div class="flex items-center gap-1.5">
                      ${(isModerator && !visitorPreviewMode) ? `
                        <button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.changeProjectWorkCount('${project.id}', -1)" class="w-7 h-7 rounded-lg bg-white/10 hover:bg-red-500/30 text-white font-black text-lg leading-none">−</button>
                        <input type="number" min="0" step="1" value="${Math.max(0, Number(project.workedCount) || 0)}" onchange="window.ElyPortfolio.setProjectWorkCount('${project.id}', this.value)" onclick="event.stopPropagation()" class="w-14 h-8 rounded-lg bg-[#0b0d11] border border-amber-400/30 text-center text-sm font-black text-amber-300 outline-none focus:border-amber-400" />
                        <button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.changeProjectWorkCount('${project.id}', 1)" class="w-7 h-7 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-black text-lg leading-none">+</button>
                      ` : `
                        <span class="text-3xl font-black text-amber-400 leading-none drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]">${Math.max(0, Number(project.workedCount) || 0)}</span>
                      `}
                    </div>
                  </div>
                </div>
              ` : ''}
            </div>

            <div class="space-y-3 pt-2 border-t border-[#1e2330]">
              <div class="flex flex-wrap items-center gap-1.5">
                ${techBadges}
              </div>

              <div class="space-y-1.5 pt-1">
                <div class="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onclick="window.ElyPortfolio.openProjectModal('${project.id}')"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Ver Ficha Completa</span>
                    <span>→</span>
                  </button>

                  ${project.links && project.links.length > 0 ? `
                    <div class="flex flex-wrap items-center gap-2">
                      ${project.links.map(function (link) {
                        return '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-400 hover:text-white transition-colors" title="' + (link.label || 'Enlace') + '" onclick="event.stopPropagation()">↗ ' + (link.label || 'Enlace') + '</a>';
                      }).join('')}
                    </div>
                  ` : ''}
                </div>
                ${storeBadges}
              </div>
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
    renderedCardIds = new Set(filteredProjects.map(p => p.id));
    initElyDevMotionEnhancements();
  }

  // 6. Modal de detalle del proyecto (Soporta 16:9, Múltiples Imágenes y Videos de YouTube en Grande)
  function cardDirectLink(project) {
    if (!project || !project.id) return window.location.origin + window.location.pathname;
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('card', project.id);
    return url.toString();
  }

  function copyProjectCardLink(projectId) {
    const project = projects.find(function (p) { return String(p.id) === String(projectId); });
    if (!project) return;
    const link = cardDirectLink(project);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(function () {
        showStatusNotification({ title: 'Enlace copiado', message: 'Enlace directo a "' + project.title + '".', type: 'success', icon: '🔗' });
      }).catch(function () { window.prompt('Copia este enlace:', link); });
    } else {
      window.prompt('Copia este enlace:', link);
    }
  }

  function applyCardQueryRoute() {
    const params = new URLSearchParams(window.location.search || '');
    const cardId = params.get('card');
    if (!cardId) return false;
    const target = projects.find(function (project) { return String(project.id) === String(cardId); });
    if (!target) return false;
    setTimeout(function () { openProjectModal(target.id, true); }, 0);
    return true;
  }

  function openProjectModal(projectId, skipRefresh) {
    // La información ya fue cargada al entrar. Abrimos inmediatamente con el estado actual.
    // Las actualizaciones de Sheets ocurren en segundo plano y no bloquean el click.
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    selectedProject = project;
    activeMediaIndex = 0;

    if (!skipRefresh) {
      const url = new URL(window.location.href);
      url.search = '';
      url.hash = '';
      url.searchParams.set('card', project.id);
      history.replaceState(null, '', url.toString());
    }
    
    // Si tiene video de YouTube configurado, activarlo por defecto o permitir alternar
    activeMediaMode = (project.youtubeVideo && (getYouTubeEmbedUrl(project.youtubeVideo) || isLocalVideoMedia(project.youtubeVideo))) ? 'video' : 'image';

    const modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    // Actualizar campos de texto e icono del proyecto
    const modalProjectIcon = document.getElementById('modal-project-icon');
    if (modalProjectIcon) {
      modalProjectIcon.src = project.icon || project.coverImage || '';
      modalProjectIcon.alt = 'Icono del Proyecto';
      modalProjectIcon.onerror = function () {
        this.onerror = null;
        this.src = project.coverImage || '';
      };
    }

    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-tagline').textContent = project.tagline;
    document.getElementById('modal-project-desc').textContent = project.fullStory || project.description;

    const priceEl = document.getElementById('modal-project-price');
    if (priceEl) {
      if (project.priceTag) {
        priceEl.textContent = project.priceTag;
        priceEl.parentElement.classList.remove('hidden');
      } else {
        priceEl.parentElement.classList.add('hidden');
      }
    }

    const roleEl = document.getElementById('modal-project-role');
    if (roleEl) roleEl.textContent = project.role || 'Game Developer';

    const clientEl = document.getElementById('modal-project-client');
    if (clientEl) {
      if (project.clientOrTeam) {
        clientEl.textContent = project.clientOrTeam;
        clientEl.parentElement.classList.remove('hidden');
      } else {
        clientEl.parentElement.classList.add('hidden');
      }
    }

    // Renderizar el visor multimedia (16:9)
    renderModalMediaViewer();

    // Métricas
    const metricsContainer = document.getElementById('modal-project-metrics');
    if (metricsContainer) {
      if (project.metrics && project.metrics.length > 0) {
        metricsContainer.innerHTML = project.metrics.map(function (m) {
          return `
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div class="text-[10px] text-slate-400 font-medium">${m.label}</div>
              <div class="text-xs font-bold text-white mt-0.5">${m.value}</div>
            </div>
          `;
        }).join('');
        metricsContainer.parentElement.classList.remove('hidden');
      } else {
        metricsContainer.parentElement.classList.add('hidden');
      }
    }

    // Contribuciones clave
    const contribContainer = document.getElementById('modal-project-contributions');
    if (contribContainer) {
      if (project.keyContributions && project.keyContributions.length > 0) {
        contribContainer.innerHTML = project.keyContributions.map(function (c) {
          return `
            <li class="flex items-start gap-2 text-xs text-slate-300">
              <span class="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
              <span>${c}</span>
            </li>
          `;
        }).join('');
        contribContainer.parentElement.classList.remove('hidden');
      } else {
        contribContainer.parentElement.classList.add('hidden');
      }
    }

    // Requisitos (si es servicio o clase)
    const reqContainer = document.getElementById('modal-project-requirements');
    if (reqContainer) {
      if (project.requirements && project.requirements.length > 0) {
        reqContainer.innerHTML = project.requirements.map(function (r) {
          return `
            <li class="flex items-start gap-2 text-xs text-slate-300">
              <span class="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <span>${r}</span>
            </li>
          `;
        }).join('');
        reqContainer.parentElement.classList.remove('hidden');
      } else {
        reqContainer.parentElement.classList.add('hidden');
      }
    }

    // Tecnologías
    const techContainer = document.getElementById('modal-project-techs');
    if (techContainer) {
      techContainer.innerHTML = (project.technologies || []).map(function (t) {
        return '<span class="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-amber-300 border border-white/10">' + t + '</span>';
      }).join('');
    }

    // Enlaces externos
    const linksContainer = document.getElementById('modal-project-links');
    if (linksContainer) {
      if (project.links && project.links.length > 0) {
        linksContainer.innerHTML = project.links.map(function (l) {
          return `
            <a
              href="${l.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <span>${l.label}</span>
              <span>↗</span>
            </a>
          `;
        }).join('');
        linksContainer.classList.remove('hidden');
      } else {
        linksContainer.classList.add('hidden');
      }
    }

    const shareButton = document.getElementById('modal-project-share-btn');
    if (shareButton) {
      shareButton.onclick = function (event) {
        event.stopPropagation();
        copyProjectCardLink(project.id);
      };
    }

    // Botón de solicitar servicio / contactar
    const contactCta = document.getElementById('modal-project-contact-btn');
    if (contactCta) {
      contactCta.onclick = function () {
        closeProjectModal();
        openContactModal(project.title);
      };
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // Renderizar visor 16:9 con soporte de Video de YouTube en Grande y Múltiples Imágenes
  function renderModalMediaViewer() {
    if (!selectedProject) return;
    const mediaContainer = document.getElementById('modal-media-viewport');
    const tabsContainer = document.getElementById('modal-media-tabs');
    const thumbsContainer = document.getElementById('modal-media-thumbs');

    const videoSource = String(selectedProject.youtubeVideo || '').trim();
    const embedUrl = getYouTubeEmbedUrl(videoSource);
    const localVideo = !embedUrl && isLocalVideoMedia(videoSource);
    const hasVideo = !!embedUrl || localVideo;
    
    // Lista de imágenes (incluye coverImage y galleryImages)
    let images = [];
    if (Array.isArray(selectedProject.galleryImages) && selectedProject.galleryImages.length > 0) {
      images = selectedProject.galleryImages;
    } else if (selectedProject.coverImage) {
      images = [selectedProject.coverImage];
    } else {
      images = ['./assets/images/ely/my-avatar.png'];
    }

    // Pestañas superiores (si tiene video y fotos a la vez)
    if (tabsContainer) {
      if (hasVideo) {
        tabsContainer.innerHTML = `
          <div class="flex items-center gap-2 mb-2">
            <button
              type="button"
              onclick="window.ElyPortfolio.setModalMediaMode('video')"
              class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeMediaMode === 'video' ? 'bg-red-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'}"
            >
              ▶ Ver Video en Grande (${localVideo ? 'Local' : 'YouTube'})
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.setModalMediaMode('image')"
              class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeMediaMode === 'image' ? 'bg-amber-400 text-black shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'}"
            >
              📷 Galería de Fotos (${images.length})
            </button>
          </div>
        `;
        tabsContainer.classList.remove('hidden');
      } else {
        tabsContainer.innerHTML = '';
        tabsContainer.classList.add('hidden');
      }
    }

    // Contenido del visor (16:9)
    if (mediaContainer) {
      if (activeMediaMode === 'video' && hasVideo) {
        if (localVideo) {
          mediaContainer.innerHTML = `
            <div class="aspect-16-9 w-full rounded-xl overflow-hidden bg-black shadow-inner">
              <video src="${videoSource}" title="${String(selectedProject.title || 'Video del proyecto').replace(/&/g, '&amp;').replace(/\"/g, '&quot;')}" class="w-full h-full object-contain" controls playsinline preload="metadata"></video>
            </div>`;
        } else mediaContainer.innerHTML = `
          <div class="aspect-16-9 w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              src="${embedUrl}"
              title="${selectedProject.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
        `;
      } else {
        const currentImgSrc = images[activeMediaIndex] || images[0];
        mediaContainer.innerHTML = `
          <div class="relative aspect-16-9 w-full rounded-xl overflow-hidden bg-black/60 shadow-inner group">
            <img
              src="${currentImgSrc}"
              alt="${selectedProject.title}"
              class="w-full h-full object-cover object-center transition-all duration-300"
              onerror="this.src='./assets/images/ely/my-avatar.png'"
            />
            
            ${images.length > 1 ? `
              <button
                type="button"
                onclick="window.ElyPortfolio.cycleModalImage(-1)"
                class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white text-sm transition-all"
                title="Foto anterior"
              >
                ◀
              </button>
              <button
                type="button"
                onclick="window.ElyPortfolio.cycleModalImage(1)"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white text-sm transition-all"
                title="Siguiente foto"
              >
                ▶
              </button>
            ` : ''}
          </div>
        `;
      }
    }

    if (activeMediaMode === 'image' && images.length > 1) attachModalGallerySwipe();

    // Miniaturas (Thumbs) si hay múltiples fotos y está en modo 'image'
    if (thumbsContainer) {
      if (activeMediaMode === 'image' && images.length > 1) {
        thumbsContainer.innerHTML = images.map(function (src, idx) {
          const isActive = idx === activeMediaIndex;
          return `
            <button
              type="button"
              onclick="window.ElyPortfolio.selectModalImage(${idx})"
              class="h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${isActive ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}"
            >
              <img src="${src}" class="w-full h-full object-cover" onerror="this.src='./assets/images/ely/my-avatar.png'" />
            </button>
          `;
        }).join('');
        thumbsContainer.classList.remove('hidden');
      } else {
        thumbsContainer.innerHTML = '';
        thumbsContainer.classList.add('hidden');
      }
    }
  }

  function attachModalGallerySwipe() {
    const mediaContainer = document.getElementById('modal-media-viewport');
    if (!mediaContainer || mediaContainer.dataset.swipeReady === '1') return;
    mediaContainer.dataset.swipeReady = '1';
    let startX = 0;
    let startY = 0;
    let tracking = false;
    mediaContainer.addEventListener('touchstart', function (event) {
      if (activeMediaMode !== 'image' || !selectedProject) return;
      const touch = event.changedTouches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      tracking = true;
    }, { passive: true });
    mediaContainer.addEventListener('touchend', function (event) {
      if (!tracking || activeMediaMode !== 'image') return;
      tracking = false;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
      cycleModalImage(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function setModalMediaMode(mode) {
    activeMediaMode = mode;
    renderModalMediaViewer();
  }

  function selectModalImage(index) {
    activeMediaIndex = index;
    renderModalMediaViewer();
  }

  function cycleModalImage(delta) {
    if (!selectedProject) return;
    const images = (selectedProject.galleryImages && selectedProject.galleryImages.length > 0)
      ? selectedProject.galleryImages
      : [selectedProject.coverImage];
    activeMediaIndex = (activeMediaIndex + delta + images.length) % images.length;
    renderModalMediaViewer();
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-detail-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    // Detener reproducción de iframes al cerrar
    const mediaContainer = document.getElementById('modal-media-viewport');
    if (mediaContainer) mediaContainer.innerHTML = '';

    const params = new URLSearchParams(window.location.search || '');
    if (params.has('card')) {
      const url = new URL(window.location.href);
      url.searchParams.delete('card');
      history.replaceState(null, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash);
    }
  }

  // 7. Navegación Anterior / Siguiente en Modal
  function navigateProjectModal(direction) {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < 0) return;

    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < filteredProjects.length) {
      openProjectModal(filteredProjects[nextIndex].id);
    }
  }

  // 8. Feedback & Clientes Satisfechos
  function getTestimonialClientKey(testimonial) {
    return String(testimonial && testimonial.name || '').trim().toLowerCase();
  }

  function getGroupedTestimonials() {
    const groups = new Map();
    satisfiedClients.forEach(function (testimonial, index) {
      const key = getTestimonialClientKey(testimonial);
      if (!key) return;
      if (!groups.has(key)) groups.set(key, { name: String(testimonial.name || '').trim(), items: [] });
      groups.get(key).items.push({ item: testimonial, index: index });
    });

    groups.forEach(function (group) {
      group.items.sort(function (a, b) {
        const aTime = Date.parse(a.item.createdAt || '') || 0;
        const bTime = Date.parse(b.item.createdAt || '') || 0;
        if (aTime && bTime && aTime !== bTime) return bTime - aTime;
        if (aTime && !bTime) return -1;
        if (!aTime && bTime) return 1;
        return a.index - b.index;
      });
      group.items = group.items.map(function (entry) { return entry.item; });
      group.latest = group.items[0] || null;
    });

    return Array.from(groups.values());
  }

  function getTestimonialsForClient(clientName) {
    const key = String(clientName || '').trim().toLowerCase();
    const group = getGroupedTestimonials().find(function (entry) {
      return entry.name.trim().toLowerCase() === key;
    });
    return group ? group.items : [];
  }

  function truncateTestimonialFeedback(text, limit) {
    const value = String(text || '');
    if (value.length <= limit) return { text: value, truncated: false };
    return { text: value.slice(0, limit).trimEnd() + '…', truncated: true };
  }

  function renderTestimonialFeedback(testimonial, uniqueId, compact) {
    const full = String(testimonial.feedback || '');
    const limit = compact ? 150 : 280;
    const preview = truncateTestimonialFeedback(full, limit);
    const feedbackId = 'testimonial-feedback-' + uniqueId;
    const buttonId = 'testimonial-more-' + uniqueId;

    return '<div class="pt-3 border-t border-[#1e2330]">' +
      '<p id="' + feedbackId + '" class="text-xs text-slate-300 italic leading-relaxed whitespace-pre-line">' +
      '“' + (preview.truncated ? preview.text : full) + '”' +
      '</p>' +
      (preview.truncated
        ? '<button id="' + buttonId + '" type="button" onclick="window.ElyPortfolio.toggleTestimonialMore(\'' + uniqueId + '\')" class="mt-2 text-[10px] font-bold text-amber-400 hover:text-amber-300 hover:underline cursor-pointer">Ver más...</button>'
        : '') +
      '</div>';
  }

  function toggleTestimonialMore(uniqueId) {
    const testimonial = satisfiedClients.find(function (item) { return String(item.id) === String(uniqueId); });
    if (!testimonial) return;
    const p = document.getElementById('testimonial-feedback-' + uniqueId);
    const button = document.getElementById('testimonial-more-' + uniqueId);
    if (!p || !button) return;
    const expanded = button.dataset.expanded === 'true';
    p.textContent = '“' + (expanded ? truncateTestimonialFeedback(testimonial.feedback || '', 150).text : String(testimonial.feedback || '')) + '”';
    button.textContent = expanded ? 'Ver más...' : 'Ver menos';
    button.dataset.expanded = expanded ? 'false' : 'true';
  }

  function getTestimonialModeratorBar(c) {
    if (!isModerator || visitorPreviewMode) return '';
    return '<div class="flex items-center justify-between p-2 mb-2 bg-[#171c26] rounded-xl border border-amber-400/30 text-xs">' +
      '<div class="flex items-center gap-1">' +
      '<button type="button" onclick="window.ElyPortfolio.moveTestimonialOrder(\'' + c.id + '\', -1)" class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer">▲ Subir</button>' +
      '<button type="button" onclick="window.ElyPortfolio.moveTestimonialOrder(\'' + c.id + '\', 1)" class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer">▼ Bajar</button>' +
      '</div>' +
      '<div class="flex items-center gap-1.5">' +
      '<button type="button" onclick="window.ElyPortfolio.duplicateTestimonial(\'' + c.id + '\')" class="px-2 py-0.5 rounded bg-[#202738] text-amber-300 hover:bg-amber-400 hover:text-black font-bold cursor-pointer">📋 Duplicar</button>' +
      '<button type="button" onclick="window.ElyPortfolio.openEditTestimonialModal(\'' + c.id + '\')" class="px-2.5 py-0.5 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 cursor-pointer">✏️ Editar</button>' +
      '<button type="button" onclick="window.ElyPortfolio.deleteTestimonial(\'' + c.id + '\')" class="px-2.5 py-0.5 rounded bg-red-600 text-white font-bold hover:bg-red-500 cursor-pointer">🗑️ Eliminar</button>' +
      '</div></div>';
  }

  function renderTestimonialsPreview() {
    const container = document.getElementById('testimonials-preview-grid');
    const badge = document.getElementById('testimonials-count-badge');
    const groups = getGroupedTestimonials();
    if (badge) badge.textContent = satisfiedClients.length + ' Feedbacks';

    const heroFeedbackCount = document.getElementById('hero-feedback-count');
    animateCounterElement(heroFeedbackCount, satisfiedClients.length, function (value) {
      return value + ' Feedbacks';
    });
    renderFeedbackStats();
    if (!container) return;

    container.innerHTML = groups.slice(0, 4).map(function (group, groupIndex) {
      const c = group.latest;
      if (!c) return '';
      const starIcons = '★'.repeat(c.rating || 5);
      const tagBadges = (c.tags || []).map(function (t) {
        return '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">' + t + '</span>';
      }).join('');
      const countLabel = group.items.length === 1 ? '1 testimonio' : group.items.length + ' testimonios';
      const countButton = '<button type="button" onclick="window.ElyPortfolio.openClientTestimonials(\'' + String(c.name || '').replace(/'/g, "\\'") + '\')" class="text-[10px] font-bold text-cyan-300 hover:text-cyan-200 hover:underline cursor-pointer whitespace-nowrap">' + countLabel + ' →</button>';

      return '<div class="rounded-2xl bg-[#12151d] border border-[#232733] p-6 space-y-3 hover:border-amber-400/40 transition-colors">' +
        getTestimonialModeratorBar(c) +
        '<div class="relative h-0"><span class="absolute right-0 -top-1 text-[9px] font-mono text-slate-500">' + (c.year || '2025') + '</span></div>' +
        '<div class="flex items-center gap-2.5">' +
        '<div class="h-9 w-9 rounded-lg overflow-hidden bg-black/40 border border-[#232733] shrink-0"><img src="' + (c.avatar || './assets/images/ely/my-avatar.png') + '" alt="' + (c.name || '') + '" class="h-full w-full object-cover" onerror="this.src=\'./assets/images/ely/my-avatar.png\'" /></div>' +
        '<div class="min-w-0 flex-1"><div class="flex items-center gap-2 flex-wrap"><div class="text-xs font-bold text-white">' + (c.name || '') + '</div>' + countButton + '</div>' +
        '<div class="text-[11px] text-amber-400/90 truncate">' + (c.project || '') + '</div><div class="text-[10px] text-slate-500">' + (c.role || '') + '</div></div>' +
        '</div>' +
        renderTestimonialFeedback(c, String(c.id || groupIndex), true) +
        '<div class="flex items-end justify-between gap-3 pt-1"><div class="flex flex-wrap gap-1">' + tagBadges + '</div><div class="text-amber-400 text-sm font-bold tracking-wider shrink-0">' + starIcons + ' <span class="text-xs text-slate-400 font-mono">' + Number(c.rating || 5).toFixed(1) + '</span></div></div>' +
        '</div>';
    }).join('');
  }

  function renderSatisfiedClientsModalList(clientName) {
    const container = document.getElementById('satisfied-clients-list');
    const badge = document.getElementById('modal-clients-count-badge');
    const groups = getGroupedTestimonials();
    const modal = document.getElementById('satisfied-clients-modal');
    if (!container) return;

    if (clientName) {
      const items = getTestimonialsForClient(clientName);
      if (badge) badge.textContent = items.length + (items.length === 1 ? ' Testimonio' : ' Testimonios');
      container.innerHTML = items.map(function (c, index) {
        const starIcons = '★'.repeat(c.rating || 5);
        const tagBadges = (c.tags || []).map(function (t) {
          return '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">' + t + '</span>';
        }).join('');
        return '<div class="rounded-2xl bg-[#101b2d] border border-cyan-400/40 p-5 space-y-3 shadow-lg shadow-cyan-500/10 hover:border-cyan-300/70 transition-colors">' +
          getTestimonialModeratorBar(c) +
          '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">' +
          '<div class="flex items-center gap-3"><div class="h-12 w-12 rounded-xl overflow-hidden bg-black/40 border border-[#232733] shrink-0"><img src="' + (c.avatar || './assets/images/ely/my-avatar.png') + '" alt="' + (c.name || '') + '" class="h-full w-full object-cover" onerror="this.src=\'./assets/images/ely/my-avatar.png\'" /></div>' +
          '<div><h4 class="text-sm font-bold text-white font-display">' + (c.name || '') + '</h4><div class="text-xs text-amber-400 font-medium">' + (c.project || '') + '</div><div class="text-[11px] text-slate-400">' + (c.role || '') + '</div></div></div>' +
          '<div class="flex flex-col sm:items-end gap-1 shrink-0"><div class="star-rating text-sm font-bold text-amber-400">' + starIcons + ' <span class="text-xs text-slate-300">' + Number(c.rating || 5).toFixed(1) + '</span></div><div class="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded">' + (c.year || '2025') + '</div></div>' +
          '</div>' +
          '<div class="rounded-xl bg-[#141822] p-3 border border-[#1f2534]">' + renderTestimonialFeedback(c, String(c.id || index), false) + '</div>' +
          '<div class="flex flex-wrap items-center gap-1.5 pt-1">' + tagBadges + '</div>' +
          '</div>';
      }).join('');

      const titleWrap = document.getElementById('modal-client-title-wrap');
      const title = document.getElementById('modal-client-title');
      const mainTitle = modal ? modal.querySelector('[data-testimonials-main-title]') : null;
      if (mainTitle) mainTitle.classList.add('hidden');
      if (titleWrap) titleWrap.classList.remove('hidden');
      if (title) title.textContent = String(clientName || '');
      if (modal) {
        modal.dataset.clientName = String(clientName || '');
        modal.classList.add('testimonial-detail-mode');
      }
      const modalPanel = modal ? modal.querySelector('.relative.w-full.max-w-3xl') : null;
      if (modalPanel) {
        modalPanel.classList.add('border-cyan-400/50', 'bg-[#0b1320]', 'shadow-cyan-500/20');
        modalPanel.classList.remove('border-[#232733]', 'bg-[#12151d]');
      }
      return;
    }

    if (badge) badge.textContent = groups.length + (groups.length === 1 ? ' Cliente' : ' Clientes');
    container.innerHTML = groups.map(function (group, index) {
      const c = group.latest;
      const countLabel = group.items.length === 1 ? '1 testimonio' : group.items.length + ' testimonios';
      return '<div class="rounded-2xl bg-[#0e1118] border border-[#232733] p-5 space-y-3 hover:border-amber-400/40 transition-colors">' +
        getTestimonialModeratorBar(c) +
        '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">' +
        '<div class="flex items-center gap-3">' +
        '<div class="h-12 w-12 rounded-xl overflow-hidden bg-black/40 border border-[#232733] shrink-0"><img src="' + (c.avatar || './assets/images/ely/my-avatar.png') + '" alt="' + (c.name || '') + '" class="h-full w-full object-cover" onerror="this.src=\'./assets/images/ely/my-avatar.png\'" /></div>' +
        '<div><h4 class="text-sm font-bold text-white font-display">' + (c.name || '') + '</h4><div class="text-xs text-amber-400 font-medium">' + (c.project || '') + '</div><div class="text-[11px] text-slate-400">' + (c.role || '') + '</div></div>' +
        '</div>' +
        '<div class="flex flex-col sm:items-end gap-1 shrink-0">' +
        '<div class="star-rating text-sm font-bold text-amber-400">' + '★'.repeat(c.rating || 5) + ' <span class="text-xs text-slate-300">' + Number(c.rating || 5).toFixed(1) + '</span></div>' +
        '<button type="button" onclick="window.ElyPortfolio.openClientTestimonials(\'' + String(c.name || '').replace(/'/g, "\\'") + '\')" class="text-[10px] font-bold text-cyan-300 hover:text-cyan-200 hover:underline cursor-pointer">' + countLabel + ' →</button>' +
        '</div></div>' +
        renderTestimonialFeedback(c, String(c.id || index), false) +
        '</div>';
    }).join('');

    const titleWrap = document.getElementById('modal-client-title-wrap');
    const mainTitle = modal ? modal.querySelector('[data-testimonials-main-title]') : null;
    if (titleWrap) titleWrap.classList.add('hidden');
    if (mainTitle) mainTitle.classList.remove('hidden');
    if (modal) {
      delete modal.dataset.clientName;
      modal.classList.remove('testimonial-detail-mode');
      const modalPanel = modal.querySelector('.relative.w-full.max-w-3xl');
      if (modalPanel) {
        modalPanel.classList.remove('border-cyan-400/50', 'bg-[#0b1320]', 'shadow-cyan-500/20');
        modalPanel.classList.add('border-[#232733]', 'bg-[#12151d]');
      }
    }
  }

  function openClientTestimonials(clientName) {
    const modal = document.getElementById('satisfied-clients-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    renderSatisfiedClientsModalList(clientName);
    document.body.style.overflow = 'hidden';
  }

  async function openSatisfiedClientsModal() {
    const modal = document.getElementById('satisfied-clients-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    renderSatisfiedClientsModalList();
    renderTestimonialsPreview();
    document.body.style.overflow = 'hidden';
  }

  function closeSatisfiedClientsModal() {
    const modal = document.getElementById('satisfied-clients-modal');
    if (modal) {
      modal.classList.add('hidden');
      delete modal.dataset.clientName;
    }
    const titleWrap = document.getElementById('modal-client-title-wrap');
    if (titleWrap) titleWrap.classList.add('hidden');
    const header = modal ? modal.querySelector('[data-testimonials-main-title]') : null;
    if (header) header.classList.remove('hidden');
    document.body.style.overflow = '';
  }

  async function moveTestimonialOrder(testimonialId, delta) {
    const index = satisfiedClients.findIndex(c => c.id === testimonialId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= satisfiedClients.length) return;
    const temp = satisfiedClients[index];
    satisfiedClients[index] = satisfiedClients[newIndex];
    satisfiedClients[newIndex] = temp;
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    try { await syncTestimonialsWithBackend(satisfiedClients); showStatusNotification({title:'Posición Actualizada',message:'El orden se guardó automáticamente en Google Sheets.',type:'success',icon:'⇅'}); }
    catch (error) { showStatusNotification({title:'Error al guardar',message:'El nuevo orden no pudo guardarse en Google Sheets.',type:'error',icon:'⚠️'}); }
  }

  async function duplicateTestimonial(testimonialId) {
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;
    const copy = JSON.parse(JSON.stringify(target));
    copy.id = 'client-' + Date.now();
    copy.name = '[Copia] ' + copy.name;
    const index = satisfiedClients.findIndex(c => c.id === testimonialId);
    if (index >= 0) satisfiedClients.splice(index + 1, 0, copy); else satisfiedClients.unshift(copy);
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    try { await syncTestimonialsWithBackend(satisfiedClients); showStatusNotification({title:'Feedback Duplicado',message:'La copia se guardó automáticamente en Google Sheets.',type:'success',icon:'📋'}); }
    catch (error) { showStatusNotification({title:'Error al guardar',message:'El duplicado no pudo guardarse en Google Sheets.',type:'error',icon:'⚠️'}); }
  }

  function deleteTestimonial(testimonialId) {
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;
    showConfirmModal({title:'¿Eliminar Feedback?',message:`¿Estás seguro de eliminar el feedback de "${target.name}"?`,icon:'💬',confirmText:'Sí, Eliminar Feedback',danger:true,onConfirm:async function(){
      satisfiedClients = satisfiedClients.filter(c => c.id !== testimonialId);
      renderTestimonialsPreview();
      renderSatisfiedClientsModalList();
      try { await syncTestimonialsWithBackend(satisfiedClients); showStatusNotification({title:'Feedback Eliminado',message:'El feedback se eliminó y guardó automáticamente en Google Sheets.',type:'success',icon:'🗑️'}); }
      catch (error) { showStatusNotification({title:'Error al guardar',message:'El feedback eliminado no pudo guardarse en Google Sheets.',type:'error',icon:'⚠️'}); }
    }});
  }

  let editingTestimonialId = null;

  function openAddTestimonialModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    editingTestimonialId = null;
    const modal = document.getElementById('testimonial-modal');
    const titleEl = document.getElementById('testimonial-modal-title');
    if (titleEl) titleEl.textContent = '+ Agregar Feedback de Cliente';

    document.getElementById('test-form-id').value = '';
    document.getElementById('test-form-name').value = '';
    document.getElementById('test-form-role').value = '';
    document.getElementById('test-form-project').value = '';
    document.getElementById('test-form-year').value = '2025';
    document.getElementById('test-form-rating').value = '5';
    document.getElementById('test-form-avatar').value = './assets/images/ely/my-avatar.png';
    document.getElementById('test-form-feedback').value = '';
    document.getElementById('test-form-tags').value = 'Videojuego Unity, Colaboración';

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function openEditTestimonialModal(testimonialId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;
    editingTestimonialId = testimonialId;

    const modal = document.getElementById('testimonial-modal');
    const titleEl = document.getElementById('testimonial-modal-title');
    if (titleEl) titleEl.textContent = '✏️ Editar Feedback de Cliente';

    document.getElementById('test-form-id').value = target.id;
    document.getElementById('test-form-name').value = target.name || '';
    document.getElementById('test-form-role').value = target.role || '';
    document.getElementById('test-form-project').value = target.project || '';
    document.getElementById('test-form-year').value = target.year || '';
    document.getElementById('test-form-rating').value = String(target.rating || 5);
    document.getElementById('test-form-avatar').value = target.avatar || './assets/images/ely/my-avatar.png';
    document.getElementById('test-form-feedback').value = target.feedback || '';
    document.getElementById('test-form-tags').value = (target.tags || []).join(', ');

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeTestimonialModal() {
    const modal = document.getElementById('testimonial-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingTestimonialId = null;
  }

  async function handleTestimonialSubmit(e) {
    e.preventDefault();
    const name=document.getElementById('test-form-name').value.trim();
    const role=document.getElementById('test-form-role').value.trim();
    const project=document.getElementById('test-form-project').value.trim();
    const year=document.getElementById('test-form-year').value.trim();
    const rating=parseInt(document.getElementById('test-form-rating').value,10)||5;
    const avatar=document.getElementById('test-form-avatar').value.trim()||'./assets/images/ely/my-avatar.png';
    const feedback=document.getElementById('test-form-feedback').value.trim();
    const tags=document.getElementById('test-form-tags').value.split(',').map(s=>s.trim()).filter(Boolean);
    const wasEditing=Boolean(editingTestimonialId);
    if(editingTestimonialId){
      const target=satisfiedClients.find(c=>c.id===editingTestimonialId);
      if(target) Object.assign(target,{name,role,project,year,rating,avatar,feedback,tags});
    }else{
      satisfiedClients.unshift({id:'client-'+Date.now(),name,role,project,year:year||'2025',rating,avatar,feedback,tags,createdAt:new Date().toISOString()});
    }
    closeTestimonialModal();
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    try{await syncTestimonialsWithBackend(satisfiedClients);showStatusNotification({title:wasEditing?'Feedback Actualizado':'Feedback Guardado',message:'El feedback se guardó automáticamente en Google Sheets.',type:'success',icon:'⭐'});}
    catch(error){showStatusNotification({title:'Error al guardar',message:'El feedback no pudo guardarse en Google Sheets.',type:'error',icon:'⚠️'});}
  }

  // 8.1 Sistema de Feedback con Códigos Especiales (Dejar Feedback)
  function getFeedbackCodeFromSheetData(result, code) {
    const normalized = String(code || '').trim().toUpperCase();
    if (!normalized || !result || !Array.isArray(result.cards)) return null;
    const record = result.cards.find(function (item) {
      return item && String(item.id || '').trim().toUpperCase() === normalized && item.type === 'feedback_code' && item.data;
    });
    return record && record.data ? record.data : null;
  }

  function setFeedbackLoading(isLoading, message) {
    const overlay = document.getElementById('feedback-loading-overlay');
    const text = document.getElementById('feedback-loading-text');
    if (text && message) text.textContent = message;
    if (overlay) overlay.classList.toggle('hidden', !isLoading);
  }

  function applyFeedbackCodeData(codeData) {
    if (!codeData) return false;
    const nameInput = document.getElementById('feedback-input-name');
    const roleInput = document.getElementById('feedback-input-role');
    const serviceInput = document.getElementById('feedback-input-service');
    const projInput = document.getElementById('feedback-input-project');
    const avatarInput = document.getElementById('feedback-input-avatar');
    const tagsInput = document.getElementById('feedback-input-tags');

    if (nameInput && codeData.name) nameInput.value = codeData.name;
    if (roleInput && codeData.role) roleInput.value = codeData.role;
    if (serviceInput && codeData.service) serviceInput.value = codeData.service;
    if (projInput && (codeData.project || codeData.serviceType)) {
      const value = String(codeData.project || codeData.serviceType);
      if (projInput.tagName === 'SELECT') {
        const option = Array.from(projInput.options || []).find(function (item) {
          return item.value.toLowerCase() === value.toLowerCase() || item.textContent.trim().toLowerCase() === value.toLowerCase();
        });
        if (option) projInput.value = option.value;
      } else {
        projInput.value = value;
      }
    }
    if (avatarInput && codeData.avatar) avatarInput.value = codeData.avatar;
    if (tagsInput && Array.isArray(codeData.tags)) tagsInput.value = codeData.tags.join(', ');

    [nameInput, roleInput, serviceInput, projInput, avatarInput, tagsInput].forEach(function (input) {
      if (!input) return;
      if (input === nameInput || input === projInput) {
        input.readOnly = false;
        input.disabled = false;
        input.classList.remove('opacity-70', 'cursor-not-allowed');
      } else {
        input.readOnly = true;
        input.classList.add('opacity-70', 'cursor-not-allowed');
        if (input.tagName === 'SELECT') input.disabled = true;
      }
    });
    return true;
  }

  function normalizeFeedbackCodeRecord(codeData, fallbackCode) {
    if (!codeData) return null;
    const normalized = Object.assign({}, codeData);
    normalized.code = String(normalized.code || fallbackCode || '').trim().toUpperCase();
    normalized.used = Boolean(normalized.used);
    normalized.disabled = Boolean(normalized.disabled);
    return normalized.code ? normalized : null;
  }

  async function loadFeedbackCodeDetails(code) {
    const normalized = String(code || '').trim().toUpperCase();
    if (!normalized) {
      setFeedbackLoading(false);
      return null;
    }

    try {
      const url = GLOBAL_COUNTER_URL + '?action=loadSheetData&sheet=' + encodeURIComponent(sheetName) + '&cacheBust=' + Date.now();
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error('Google Sheets HTTP ' + response.status);
      const result = await response.json();
      if (!result || !result.success) throw new Error('Google Sheets no devolvió datos.');

      const remote = getFeedbackCodeFromSheetData(result, normalized);
      if (!remote) {
        setFeedbackLoading(false, 'No se encontró la información de este código.');
        return null;
      }

      const normalizedRemote = normalizeFeedbackCodeRecord(remote, normalized);
      const existingIndex = feedbackCodes.findIndex(function (item) {
        return item && String(item.code || '').toUpperCase() === normalized;
      });
      if (existingIndex >= 0) feedbackCodes[existingIndex] = normalizedRemote;
      else feedbackCodes.push(normalizedRemote);

      applyFeedbackCodeData(normalizedRemote);
      setFeedbackLoading(false);
      return normalizedRemote;
    } catch (error) {
      setFeedbackLoading(false, 'No se pudo consultar la información del código.');
      return null;
    }
  }

  function openFeedbackModal(initialCode) {
    const modal = document.getElementById('feedback-modal');
    const form = document.getElementById('feedback-submission-form');
    const codeInput = document.getElementById('feedback-input-code');
    const statusMsg = document.getElementById('feedback-status-msg');
    if (!modal || !form) return;

    form.reset();
    if (statusMsg) statusMsg.classList.add('hidden');
    setFeedbackLoading(false);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const urlParams = new URLSearchParams(window.location.search);
    const urlCode = initialCode || urlParams.get('feedback') || urlParams.get('code') || '';
    const normalizedCode = String(urlCode).trim().toUpperCase();
    if (codeInput) {
      codeInput.value = normalizedCode;
      codeInput.readOnly = Boolean(normalizedCode);
      codeInput.classList.toggle('opacity-70', Boolean(normalizedCode));
    }

    if (normalizedCode) {
      setFeedbackLoading(true, 'Buscando la información de tu servicio...');
      loadFeedbackCodeDetails(normalizedCode).then(function (record) {
        if (!record) {
          const msg = document.getElementById('feedback-status-msg');
          if (msg) {
            msg.className = 'p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';
            msg.innerHTML = '❌ <strong>Código no encontrado:</strong> Verifica el enlace o solicita un nuevo código.';
            msg.classList.remove('hidden');
          }
        }
      });
    }
  }

  function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.classList.add('hidden');
    setFeedbackLoading(false);
    document.body.style.overflow = '';
  }

  async function handleFeedbackSubmit(e) {
    e.preventDefault();
    const codeInput=document.getElementById('feedback-input-code');
    const nameInput=document.getElementById('feedback-input-name');
    const roleInput=document.getElementById('feedback-input-role');
    const projInput=document.getElementById('feedback-input-project');
    const ratingInput=document.getElementById('feedback-input-rating');
    const textInput=document.getElementById('feedback-input-text');
    const avatarInput=document.getElementById('feedback-input-avatar');
    const tagsInput=document.getElementById('feedback-input-tags');
    const statusMsg=document.getElementById('feedback-status-msg');
    const submitBtn=document.getElementById('feedback-submit-btn');
    const enteredCode=codeInput.value.trim().toUpperCase();
    const name=nameInput.value.trim();
    const role=roleInput?roleInput.value.trim():'';
    const project=projInput.value.trim();
    const rating=parseInt(ratingInput.value,10)||5;
    const feedback=textInput.value.trim();
    const avatar=avatarInput.value.trim()||'./assets/images/ely/my-avatar.png';
    const tags=tagsInput.value.split(',').map(s=>s.trim()).filter(Boolean);
    const foundCode=feedbackCodes.find(c=>c.code.toUpperCase()===enteredCode);
    if(!foundCode||foundCode.disabled||foundCode.used){
      if(statusMsg){statusMsg.className='p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';statusMsg.innerHTML=!foundCode?'❌ <strong>Código no válido:</strong> El código ingresado no existe en el sistema.':foundCode.disabled?'⚠️ <strong>Código deshabilitado:</strong> Este código ha sido pausado temporalmente por el moderador.':'⚠️ <strong>Código ya utilizado:</strong> Este código fue registrado anteriormente.';statusMsg.classList.remove('hidden');}
      return;
    }
    foundCode.used=true;
    foundCode.usedBy=name;
    foundCode.usedAt=new Date().toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'});
    const serviceInput=document.getElementById('feedback-input-service');
    const service=serviceInput?serviceInput.value.trim():'';
    const newFeedback={id:'feedback-'+Date.now(),name,role:role||'Cliente Verificado',service,project,year:new Date().getFullYear().toString(),rating,avatar,feedback,tags:tags.length?tags:['Feedback Verificado','Cliente Satisfecho']};
    satisfiedClients.unshift(newFeedback);
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    if(submitBtn)submitBtn.disabled=true;
    setFeedbackLoading(true, 'Publicando tu feedback...');
    try{
      await Promise.all([
        saveFeedbackCodesImmediately(),
        syncTestimonialsWithBackend(satisfiedClients)
      ]);
      const loadingOverlay=document.getElementById('feedback-loading-overlay');
      const loadingSpinner=loadingOverlay ? loadingOverlay.querySelector('.feedback-loading-spinner') : null;
      const loadingText=document.getElementById('feedback-loading-text');
      const loadingHint=document.getElementById('feedback-loading-hint');
      const publishedAnimation=document.getElementById('feedback-published-animation');
      if(loadingSpinner)loadingSpinner.classList.add('hidden');
      if(loadingText)loadingText.classList.add('hidden');
      if(loadingHint)loadingHint.classList.add('hidden');
      if(publishedAnimation)publishedAnimation.classList.remove('hidden');
      setTimeout(function(){
        closeFeedbackModal();
        closeSatisfiedClientsModal();
        window.scrollTo({top:0,behavior:'smooth'});
      },1800);
    }catch(error){
      satisfiedClients=satisfiedClients.filter(c=>c.id!==newFeedback.id);
      foundCode.used=false;
      foundCode.usedBy='';
      foundCode.usedAt='';
      if(submitBtn)submitBtn.disabled=false;
      setFeedbackLoading(false);
      renderTestimonialsPreview();
      renderSatisfiedClientsModalList();
      if(statusMsg){statusMsg.className='p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';statusMsg.innerHTML='⚠️ <strong>No se pudo guardar el feedback.</strong> Inténtalo nuevamente.';statusMsg.classList.remove('hidden');}
    }
  }

  // 8.2 Panel Moderador de Códigos de Feedback
  function openFeedbackCodesModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const modal = document.getElementById('feedback-codes-modal');
    if (!modal) return;
    renderFeedbackCodesList();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeFeedbackCodesModal() {
    const modal = document.getElementById('feedback-codes-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function renderFeedbackCodesList() {
    const container = document.getElementById('feedback-codes-list');
    const countEl = document.getElementById('codes-total-count');
    if (countEl) countEl.textContent = feedbackCodes.length;
    if (!container) return;

    if (feedbackCodes.length === 0) {
      container.innerHTML = `
        <div class="p-4 rounded-xl bg-[#141822] text-center text-xs text-slate-400">
          No hay códigos registrados. Genera uno nuevo arriba.
        </div>
      `;
      return;
    }

    container.innerHTML = feedbackCodes.map(function (c) {
      const statusBadge = c.used
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">✓ Usado por ${c.usedBy || 'Cliente'} (${c.usedAt || 'Fecha'})</span>`
        : c.disabled
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-red-900/40 text-red-400 border border-red-800/40">✕ Deshabilitado</span>`
        : `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">● Disponible (1 uso)</span>`;

      return `
        <div class="rounded-xl bg-[#141822] border border-[#232733] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-black/60 font-mono text-amber-400 font-bold text-xs border border-amber-400/30 tracking-wider">
                ${c.code}
              </span>
              ${statusBadge}
            </div>
            <div class="text-[11px] text-slate-300">
              ${c.label || 'Para cliente comercial o alumno'}
              <span class="text-slate-500 text-[10px] ml-1">· Creado: ${c.createdAt || 'Reciente'}</span>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onclick="window.ElyPortfolio.copyFeedbackLink('${c.code}')"
              class="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              title="Copiar enlace directo con este código"
            >
              📋 Link
            </button>

            ${!c.used ? `
              <button
                type="button"
                onclick="window.ElyPortfolio.toggleDisableCode('${c.code}')"
                class="px-2.5 py-1 rounded ${c.disabled ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30' : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'} text-xs font-semibold transition-colors cursor-pointer"
              >
                ${c.disabled ? 'Habilitar' : 'Deshabilitar'}
              </button>
            ` : ''}

            <button
              type="button"
              onclick="window.ElyPortfolio.deleteFeedbackCode('${c.code}')"
              class="px-2.5 py-1 rounded bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              title="Eliminar código"
            >
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function handleCreateCodeSubmit(e) {
    e.preventDefault();
    const codeInput = document.getElementById('new-code-input');
    const labelInput = document.getElementById('new-code-label');
    const nameInput = document.getElementById('new-code-name');
    const serviceInput = document.getElementById('new-code-service');
    const projectInput = document.getElementById('new-code-project');
    const rawCode = codeInput.value.trim().toUpperCase();
    const label = labelInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : '';
    const service = serviceInput ? serviceInput.value.trim() : '';
    const project = projectInput ? projectInput.value.trim() : '';

    if (!rawCode) return;

    if (feedbackCodes.some(c => c.code.toUpperCase() === rawCode)) {
      alert('Ya existe un código con ese nombre: ' + rawCode);
      return;
    }

    feedbackCodes.unshift({
      code: rawCode,
      label: label || name || 'Código de cliente',
      name: name,
      service: service,
      project: project || 'Servicio',
      used: false,
      disabled: false,
      createdAt: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    });

    codeInput.value = '';
    labelInput.value = '';
    if (nameInput) nameInput.value = '';
    if (serviceInput) serviceInput.value = '';
    if (projectInput) projectInput.value = '';
    renderFeedbackCodesList();
    saveFeedbackCodesImmediately().catch(function () {
      showStatusNotification({ title: 'Error al guardar el código', message: 'Google Sheets no confirmó el guardado.', type: 'error', icon: '⚠️' });
    });
    showStatusNotification({
      title: 'Código de Feedback Generado',
      message: `Código "${rawCode}" creado con éxito para ${label || 'cliente'}. Puedes enviárselo para su feedback.`,
      type: 'success',
      icon: '🔑'
    });
  }

  function generateRandomCodeInput() {
    const input = document.getElementById('new-code-input');
    if (!input) return;
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    input.value = 'ELY-VIP-' + randomHex;
    showStatusNotification({
      title: 'Código Aleatorio Generado',
      message: `Código propuesto "${input.value}". Haz clic en "Crear" para guardarlo en la lista.`,
      type: 'info',
      icon: '🎲'
    });
  }

  function toggleDisableCode(codeStr) {
    const target = feedbackCodes.find(c => c.code.toUpperCase() === codeStr.toUpperCase());
    if (!target) return;
    target.disabled = !target.disabled;
    saveFeedbackCodesImmediately().catch(function () {
      showStatusNotification({ title: 'Error al guardar el cambio', message: 'Google Sheets no confirmó la actualización.', type: 'error', icon: '⚠️' });
    });
    renderFeedbackCodesList();
    showStatusNotification({
      title: target.disabled ? 'Código Deshabilitado' : 'Código Habilitado',
      message: `El código "${codeStr}" ha sido ${target.disabled ? 'pausado temporalmente' : 'reactivado para su uso'}.`,
      type: 'info',
      icon: '⚡'
    });
  }

  function deleteFeedbackCode(codeStr) {
    showConfirmModal({
      title: '¿Eliminar Código de Feedback?',
      message: `¿Estás seguro de eliminar el código "${codeStr}"? No se podrá reutilizar.`,
      icon: '🔑',
      confirmText: 'Sí, Eliminar Código',
      danger: true,
      onConfirm: function () {
        feedbackCodes = feedbackCodes.filter(c => c.code.toUpperCase() !== codeStr.toUpperCase());
        saveFeedbackCodesImmediately().catch(function () {
          showStatusNotification({ title: 'Error al eliminar el código', message: 'Google Sheets no confirmó la eliminación.', type: 'error', icon: '⚠️' });
        });
        renderFeedbackCodesList();
        showStatusNotification({
          title: 'Código Eliminado',
          message: `El código "${codeStr}" ha sido eliminado del sistema.`,
          type: 'warning',
          icon: '🗑️'
        });
      }
    });
  }

  function copyFeedbackLink(codeStr) {
    const base = window.location.origin + window.location.pathname;
    const directUrl = base + '?feedback=' + encodeURIComponent(codeStr);
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(directUrl).then(function () {
        showStatusNotification({
          title: 'Enlace Directo Copiado',
          message: `Enlace con código "${codeStr}" copiado al portapapeles. Listo para enviar por WhatsApp o correo.`,
          type: 'success',
          icon: '📋'
        });
      }).catch(function () {
        prompt('Copia este enlace directo para tu cliente:', directUrl);
      });
    } else {
      prompt('Copia este enlace directo para tu cliente:', directUrl);
    }
  }

  function checkFeedbackUrlParam() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const hash = window.location.hash || '';
      const pathname = window.location.pathname || '';

      let targetCode = '';
      let shouldOpen = false;

      if (urlParams.has('feedback')) {
        shouldOpen = true;
        const val = urlParams.get('feedback');
        if (val && val !== 'true' && val !== '1') {
          targetCode = val;
        }
      } else if (hash.includes('feedback')) {
        shouldOpen = true;
        const parts = hash.split('=');
        if (parts.length > 1) {
          targetCode = parts[1];
        }
      } else if (pathname.endsWith('/feedback') || pathname.endsWith('/feedback/')) {
        shouldOpen = true;
      }

      if (shouldOpen) {
        setTimeout(function () {
          openFeedbackModal(targetCode);
        }, 500);
      }
    } catch (e) {}
  }

  // 9. Modal de Contacto y Bandeja de Mensajes
  const CONTACT_MESSAGES_SHEET_TYPE = 'contact_message';
  const CONTACT_REQUEST_SHEET_NAME = 'ContactRequest';
  const OWNER_EMAIL = 'eliezerterrero275@gmail.com';
  let activeMessageReplyId = null;
  let activeMessagesFilter = 'unread';
  let backendContactSnapshot = [];
  let backendContactSnapshotReady = false;

  function openContactModal(initialSubject) {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    const subjInput = document.getElementById('contact-subject');
    if (subjInput) subjInput.value = initialSubject || '';
    const successMsg = document.getElementById('contact-success-msg');
    const errorMsg = document.getElementById('contact-error-msg');
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function formatMessageRelativeTime(timestamp) {
    const value = Number(timestamp) || Date.parse(timestamp) || Date.now();
    const diff = Math.max(0, Date.now() - value);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) return 'Hace unos segundos';
    if (diff < hour) {
      const minutes = Math.floor(diff / minute);
      return 'Hace ' + minutes + ' ' + (minutes === 1 ? 'minuto' : 'minutos');
    }
    if (diff < day) {
      const hours = Math.floor(diff / hour);
      const minutes = Math.floor((diff % hour) / minute);
      return 'Hace ' + hours + ' ' + (hours === 1 ? 'hora' : 'horas') + (minutes ? ' y ' + minutes + ' ' + (minutes === 1 ? 'minuto' : 'minutos') : '');
    }
    if (diff < month) {
      const days = Math.floor(diff / day);
      const minutes = Math.floor((diff % day) / minute);
      return 'Hace ' + days + ' ' + (days === 1 ? 'día' : 'días') + (minutes ? ' y ' + minutes + ' ' + (minutes === 1 ? 'minuto' : 'minutos') : '');
    }
    if (diff < year) {
      const months = Math.floor(diff / month);
      const days = Math.floor((diff % month) / day);
      return 'Hace ' + months + ' ' + (months === 1 ? 'mes' : 'meses') + (days ? ', ' + days + ' ' + (days === 1 ? 'día' : 'días') : '');
    }
    const years = Math.floor(diff / year);
    const months = Math.floor((diff % year) / month);
    return 'Hace ' + years + ' ' + (years === 1 ? 'año' : 'años') + (months ? ', ' + months + ' ' + (months === 1 ? 'mes' : 'meses') : '');
  }

  function getUnreadContactMessagesCount() {
    return contactMessages.filter(function(item) {
      return item && !item.read;
    }).length;
  }

  function updateMessagesButtonBadge() {
    const count = getUnreadContactMessagesCount();
    const badge = document.getElementById('messages-unread-count');
    if (badge) badge.textContent = String(count);
    const modalCount = document.getElementById('messages-modal-count');
    if (modalCount) modalCount.textContent = count + (count === 1 ? ' sin leer' : ' sin leer');
  }

  function renderMessagesModal() {
    const listEl = document.getElementById('messages-list');
    if (!listEl) return;
    const sorted = contactMessages.slice().sort(function(a, b) {
      return (Number(b.createdAt) || Date.parse(b.createdAt) || 0) - (Number(a.createdAt) || Date.parse(a.createdAt) || 0);
    });
    const unreadCount = contactMessages.filter(function(item) { return item && !item.read; }).length;
    const readCount = contactMessages.filter(function(item) { return item && !!item.read; }).length;
    const unreadTab = document.getElementById('messages-tab-unread');
    const readTab = document.getElementById('messages-tab-read');
    const unreadTabCount = document.getElementById('messages-unread-tab-count');
    const readTabCount = document.getElementById('messages-read-tab-count');
    if (unreadTabCount) unreadTabCount.textContent = String(unreadCount);
    if (readTabCount) readTabCount.textContent = String(readCount);
    if (unreadTab) {
      unreadTab.setAttribute('aria-selected', String(activeMessagesFilter === 'unread'));
      unreadTab.className = 'px-3 py-1.5 rounded-lg ' + (activeMessagesFilter === 'unread' ? 'bg-violet-400 text-black font-bold' : 'bg-white/5 border border-white/10 text-slate-300 font-semibold hover:bg-white/10') + ' text-[10px] transition-colors';
    }
    if (readTab) {
      readTab.setAttribute('aria-selected', String(activeMessagesFilter === 'read'));
      readTab.className = 'px-3 py-1.5 rounded-lg ' + (activeMessagesFilter === 'read' ? 'bg-violet-400 text-black font-bold' : 'bg-white/5 border border-white/10 text-slate-300 font-semibold hover:bg-white/10') + ' text-[10px] transition-colors';
    }
    const filtered = sorted.filter(function(item) {
      return activeMessagesFilter === 'read' ? !!item.read : !item.read;
    });
    if (!sorted.length || !filtered.length) {
      listEl.innerHTML = '<div class="rounded-xl border border-dashed border-white/10 p-6 text-center text-[10px] text-slate-500">' +
        (!sorted.length ? 'No hay mensajes todavía.' : (activeMessagesFilter === 'read' ? 'No hay mensajes leídos.' : 'No hay mensajes sin leer.')) +
        '</div>';
      updateMessagesButtonBadge();
      return;
    }

    listEl.innerHTML = filtered.map(function(item) {
      const id = String(item.id || '');
      const safeId = escapeSocialAttr(id);
      const name = escapeSocialText(item.name || 'Sin nombre');
      const email = escapeSocialText(item.email || '');
      const whatsapp = escapeSocialText(item.whatsapp || '');
      const instagram = escapeSocialText(item.instagram || '');
      const service = escapeSocialText(item.service || 'Consulta general');
      const message = escapeSocialText(item.message || '');
      const replies = Array.isArray(item.replies) ? item.replies : [];
      const lastReply = replies.length ? replies[replies.length - 1] : null;
      return '<article class="rounded-xl border ' + (item.read ? 'border-white/5 bg-white/[.025]' : 'border-violet-400/25 bg-violet-500/[.045]') + ' p-2.5 sm:p-3">' +
        '<div class="flex flex-col sm:flex-row sm:items-start gap-2.5">' +
          '<div class="min-w-0 flex-1">' +
            '<div class="flex flex-wrap items-center gap-1.5">' +
              '<span class="text-[11px] font-bold text-white">' + name + '</span>' +
              (!item.read ? '<span class="px-1.5 py-0.5 rounded bg-violet-400 text-black text-[8px] font-black uppercase">Nuevo</span>' : '') +
              '<span class="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/15 text-amber-300 text-[8px] font-bold">' + service + '</span>' +
            '</div>' +
            '<div class="mt-1 text-[10px] text-slate-500 break-all">' + email +
              (whatsapp ? ' · WhatsApp: ' + whatsapp : '') +
              (instagram ? ' · Instagram: ' + instagram : '') +
            '</div>' +
            '<div class="mt-1.5 text-[11px] text-slate-300 leading-relaxed whitespace-pre-line">' + message + '</div>' +
            (lastReply ? '<div class="mt-2 rounded-lg bg-cyan-400/5 border border-cyan-400/10 px-2 py-1.5 text-[9px] text-cyan-200"><span class="font-bold">Última respuesta:</span> ' + escapeSocialText(lastReply.body || '') + '</div>' : '') +
          '</div>' +
          '<div class="shrink-0 flex sm:flex-col items-end gap-1.5">' +
            '<span class="text-[9px] text-slate-500 whitespace-nowrap">' + formatMessageRelativeTime(item.createdAt) + '</span>' +
            '<div class="flex items-center gap-1">' +
              '<button type="button" onclick="window.ElyPortfolio.toggleMessageRead(\'' + safeId + '\')" class="px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-[9px] text-slate-300">' + (item.read ? 'No leído' : 'Leído') + '</button>' +
              '<button type="button" onclick="window.ElyPortfolio.openMessageReply(\'' + safeId + '\')" class="px-2 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 text-[9px] text-cyan-300 font-bold">Responder</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    updateMessagesButtonBadge();
  }

  function setMessagesFilter(filter) {
    if (!isModerator || visitorPreviewMode) return;
    activeMessagesFilter = filter === 'read' ? 'read' : 'unread';
    closeMessageReply();
    renderMessagesModal();
  }

  function openMessagesModal() {
    if (!isModerator || visitorPreviewMode) return;
    const modal = document.getElementById('messages-modal');
    if (!modal) return;
    closeMessageReply();
    renderMessagesModal();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMessagesModal() {
    const modal = document.getElementById('messages-modal');
    if (modal) modal.classList.add('hidden');
    closeMessageReply();
    document.body.style.overflow = '';
  }

  async function syncContactMessagesImmediately(explicitRecord) {
    return queueBackendSync(async function () {
      const localRecords = contactMessages.filter(function (item) {
        return item && item.id;
      }).map(function (item) {
        return { id: String(item.id), type: CONTACT_MESSAGES_SHEET_TYPE, data: item };
      });
      const target = explicitRecord && explicitRecord.id
        ? [{ id: String(explicitRecord.id), type: CONTACT_MESSAGES_SHEET_TYPE, data: explicitRecord }]
        : null;
      const result = await syncOnlyChangedRecords(
        CONTACT_REQUEST_SHEET_NAME,
        localRecords,
        backendContactSnapshot,
        backendContactSnapshotReady,
        target
      );
      backendContactSnapshot = cloneBackendRecords(result.records);
      backendContactSnapshotReady = true;
      return result;
    });
  }

  async function saveContactMessage(message) {
    if (!message || !message.id) return false;
    const existingIndex = contactMessages.findIndex(function(item) { return String(item.id) === String(message.id); });
    if (existingIndex >= 0) contactMessages[existingIndex] = message;
    else contactMessages.push(message);
    try { localStorage.setItem('portfolio_contact_messages_v1', JSON.stringify(contactMessages)); } catch (e) {}
    try {
      await syncContactMessagesImmediately(message);
      return true;
    } catch (error) {
      console.error('[CONTACT MESSAGE SAVE ERROR]', error);
      return false;
    }
  }

  async function toggleMessageRead(messageId) {
    if (!isModerator) return;
    const item = contactMessages.find(function(message) { return String(message.id) === String(messageId); });
    if (!item) return;
    item.read = !item.read;
    await saveContactMessage(item);
    renderMessagesModal();
  }

  function openMessageReply(messageId) {
    if (!isModerator) return;
    const item = contactMessages.find(function(message) { return String(message.id) === String(messageId); });
    if (!item) return;
    activeMessageReplyId = String(item.id);
    const panel = document.getElementById('message-reply-panel');
    const recipient = document.getElementById('message-reply-recipient');
    const textarea = document.getElementById('message-reply-text');
    const status = document.getElementById('message-reply-status');
    if (recipient) recipient.textContent = (item.name || 'Visitante') + ' · ' + (item.email || '');
    if (textarea) textarea.value = '';
    if (status) {
      status.className = 'hidden text-[10px] leading-relaxed';
      status.textContent = '';
    }
    if (panel) panel.classList.remove('hidden');
    if (textarea) {
      textarea.focus();
      panel && panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function closeMessageReply() {
    activeMessageReplyId = null;
    const panel = document.getElementById('message-reply-panel');
    if (panel) panel.classList.add('hidden');
  }

  async function sendMessageReply() {
    if (!isModerator || !activeMessageReplyId) return;
    const item = contactMessages.find(function(message) { return String(message.id) === String(activeMessageReplyId); });
    const textarea = document.getElementById('message-reply-text');
    const button = document.getElementById('message-reply-send-btn');
    const status = document.getElementById('message-reply-status');
    const body = textarea ? textarea.value.trim() : '';
    if (!item || !item.email || !body) return;

    if (button) {
      button.disabled = true;
      button.classList.add('opacity-80', 'cursor-wait');
      button.innerHTML = '<span class="inline-block h-3 w-3 animate-spin rounded-full border-2 border-black/25 border-t-black"></span><span>Enviando...</span>';
    }
    if (status) {
      status.className = 'text-[10px] text-cyan-300 flex items-center gap-1.5';
      status.innerHTML = '<span class="inline-block h-2.5 w-2.5 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300"></span><span>Enviando respuesta...</span>';
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(item.email), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nombre: 'Eliezer Terrero (ElyDev)',
          Correo: OWNER_EMAIL,
          Mensaje: body,
          _subject: 'Re: ' + (item.service || 'Consulta desde Portafolio ElyDev'),
          _replyto: OWNER_EMAIL,
          _template: 'table'
        })
      });
      const result = await response.json().catch(function() { return {}; });
      if (!response.ok || !(result.success === 'true' || result.success === true || result.message)) {
        throw new Error(result.message || 'No se pudo enviar la respuesta.');
      }

      if (!Array.isArray(item.replies)) item.replies = [];
      item.replies.push({ body: body, sentAt: Date.now() });
      item.read = true;
      const saved = await saveContactMessage(item);
      if (!saved) throw new Error('El correo se envió, pero no se pudo guardar la respuesta en Google Sheets.');
      if (status) {
        status.className = 'text-[10px] text-emerald-300';
        status.textContent = '✓ Respuesta enviada y guardada.';
      }
      if (textarea) textarea.value = '';
      renderMessagesModal();
    } catch (error) {
      console.error('[CONTACT REPLY ERROR]', error);
      if (status) {
        status.className = 'text-[10px] text-red-300';
        status.textContent = 'No se pudo enviar: ' + (error.message || 'Error desconocido.');
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.classList.remove('opacity-80', 'cursor-wait');
        button.innerHTML = 'Enviar respuesta ✉';
      }
    }
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const whatsapp = (document.getElementById('contact-whatsapp')?.value || '').trim();
    const instagram = (document.getElementById('contact-instagram')?.value || '').trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const submitBtn = document.getElementById('contact-submit-btn');
    const successMsg = document.getElementById('contact-success-msg');
    const errorMsg = document.getElementById('contact-error-msg');

    if (!name || !email || !message) {
      alert('Por favor completa tu nombre, correo y mensaje.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-80', 'cursor-wait');
      submitBtn.innerHTML = '<span class="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/25 border-t-black"></span><span>Enviando mensaje...</span>';
    }
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    const contactMessage = {
      id: 'contact-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
      name: name,
      email: email,
      whatsapp: whatsapp,
      instagram: instagram,
      service: subject || 'Consulta general',
      message: message,
      createdAt: Date.now(),
      read: false,
      replies: []
    };

    let savedToSheet = false;
    try {
      savedToSheet = await saveContactMessage(contactMessage);
    } catch (error) {
      console.error('[CONTACT MESSAGE PERSIST ERROR]', error);
    }

    let emailSent = false;
    try {
      const response = await fetch('https://formsubmit.co/ajax/' + OWNER_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nombre: name,
          Correo: email,
          WhatsApp: whatsapp || 'No proporcionado',
          Instagram: instagram || 'No proporcionado',
          Servicio: subject || 'Consulta general',
          Mensaje: message,
          _subject: '[Portafolio ElyDev] ' + (subject || 'Nuevo Mensaje de Contacto'),
          _replyto: email,
          _template: 'table'
        })
      });
      const result = await response.json().catch(function() { return {}; });
      emailSent = response.ok && (result.success === 'true' || result.success === true || result.message);
      if (!emailSent) throw new Error(result.message || 'FormSubmit rechazó el envío.');
    } catch (error) {
      console.warn('[CONTACT EMAIL ERROR]', error);
    }

    if (emailSent || savedToSheet) {
      if (successMsg) {
        successMsg.innerHTML = emailSent
          ? '✓ Mensaje enviado. Tu solicitud quedó registrada y podrás recibir respuesta por correo.'
          : '✓ Tu solicitud quedó registrada. El correo de notificación no pudo enviarse, pero el mensaje no se perdió.';
        successMsg.classList.remove('hidden');
      }
      const form = document.getElementById('contact-form');
      if (form) form.reset();
      setTimeout(function() { closeContactModal(); }, 2500);
    } else {
      if (errorMsg) {
        errorMsg.textContent = 'No se pudo guardar ni enviar el mensaje. Inténtalo nuevamente.';
        errorMsg.classList.remove('hidden');
      }
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-80', 'cursor-wait');
      submitBtn.innerHTML = '<span>Enviar Mensaje</span>';
    }
  }

  // 10. Modal de CV Imprimible
  function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  // 11. Modal de Autenticación de Moderador
  function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    const pass = document.getElementById('auth-password').value;
    if (pass === 'elydev2026') {
      isModerator = true;
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ role: 'moderator', username: 'ElyDev' }));
      } catch (err) {}
      closeAuthModal();
      updateModeratorUI();
      renderProjectsGrid();
      if (selectedOrigin === 'assets') renderAssetsGrid();
      showStatusNotification({
        title: 'Acceso de Moderador Autorizado',
        message: 'Bienvenido ElyDev. Los controles de edición, reordenar y feedback están activos.',
        type: 'success',
        icon: '🛡️'
      });
    } else {
      alert('Contraseña incorrecta.');
    }
  }

  function handleLogout() {
    isModerator = false;
    visitorPreviewMode = false;
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {}
    updateModeratorUI();
    renderProjectsGrid();
    if (selectedOrigin === 'assets') renderAssetsGrid();
    showStatusNotification({
      title: 'Sesión Cerrada',
      message: 'Has salido del modo moderador de manera segura.',
      type: 'info',
      icon: '🔒'
    });
  }

  function updateModeratorUI() {
    const showModeratorControls = isModerator && !visitorPreviewMode;
    const modElements = document.querySelectorAll('.moderator-only');
    modElements.forEach(function (el) {
      if (showModeratorControls) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    document.querySelectorAll('.category-public-counter').forEach(function (el) {
      if (showModeratorControls) {
        el.classList.add('hidden');
      } else {
        el.classList.remove('hidden');
      }
    });
    const previewBtn = document.getElementById('visitor-preview-btn');
    if (previewBtn) {
      previewBtn.classList.toggle('hidden', !isModerator);
      previewBtn.textContent = visitorPreviewMode ? '🛠️ Volver a moderador' : '👁 Preview visitante';
    }
    const authBtn = document.getElementById('nav-auth-btn');
    if (authBtn) {
      authBtn.textContent = isModerator ? 'Cerrar Moderador' : 'Acceso Moderador';
    }
    renderExperiences();
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    updateMessagesButtonBadge();
    if (document.getElementById('messages-modal') && !document.getElementById('messages-modal').classList.contains('hidden')) {
      renderMessagesModal();
    }
  }

  // 12. Reordenar Proyectos (Subir o Bajar orden)
  async function moveProjectOrder(projectId, delta) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= projects.length) return;

    // Intercambiar posición en el array
    const temp = projects[index];
    projects[index] = projects[newIndex];
    projects[newIndex] = temp;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    renderProjectsGrid();
    await persistProjectsImmediately('reorder', projects[newIndex].title);
  }

  // 12.1 Duplicar Proyecto
  async function duplicateProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const copy = JSON.parse(JSON.stringify(project));
    copy.id = 'proj-' + Date.now();
    copy.title = '[Copia] ' + (copy.title || 'Proyecto');

    const index = projects.findIndex(p => p.id === projectId);
    if (index >= 0) {
      projects.splice(index + 1, 0, copy);
    } else {
      projects.unshift(copy);
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    renderProjectsGrid();
    await persistProjectsImmediately('duplicate', copy.title);
  }

  // Modal de Confirmación Moderno (Reemplaza confirm nativo bloqueado en iframes)
  let activeConfirmCallback = null;

  function showConfirmModal(options) {
    const { title, message, icon = '🗑️', confirmText = 'Sí, Eliminar', danger = true, onConfirm } = options || {};
    activeConfirmCallback = onConfirm;

    const modal = document.getElementById('confirm-action-modal');
    if (!modal) {
      if (typeof onConfirm === 'function') onConfirm();
      return;
    }

    const titleEl = document.getElementById('confirm-modal-title');
    const msgEl = document.getElementById('confirm-modal-message');
    const iconEl = document.getElementById('confirm-modal-icon');
    const actionBtn = document.getElementById('confirm-modal-action-btn');

    if (titleEl) titleEl.textContent = title || 'Confirmar Acción';
    if (msgEl) msgEl.textContent = message || '¿Estás seguro de realizar esta acción?';
    if (iconEl) iconEl.textContent = icon;
    if (actionBtn) {
      actionBtn.textContent = confirmText;
      actionBtn.className = danger
        ? 'px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs text-white font-bold transition-colors shadow-lg shadow-red-600/30 cursor-pointer'
        : 'px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-xs text-black font-bold transition-colors shadow-lg shadow-amber-400/30 cursor-pointer';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeConfirmModal() {
    const modal = document.getElementById('confirm-action-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    activeConfirmCallback = null;
  }

  // 13. Eliminar Proyecto
  async function deleteProject(projectId) {
    const target = projects.find(p => p.id === projectId);
    if (!target) return;

    showConfirmModal({
      title: '¿Eliminar Proyecto / Ficha?',
      message: `¿Estás seguro de eliminar el cuadro de información "${target.title}"? Los cambios se guardarán automáticamente en los archivos (Google Sheets).`,
      icon: '🗑️',
      confirmText: 'Sí, Eliminar Proyecto',
      danger: true,
      onConfirm: async function () {
        projects = projects.filter(p => p.id !== projectId);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        } catch (err) {}
        renderProjectsGrid();
        await persistProjectsImmediately('delete', target.title);
      }
    });
  }

  // 14. Modal para Editar Proyecto Existente (Solo moderador)
  let editingProjectId = null;

  function openEditProjectModal(projectId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    editingProjectId = projectId;

    const modal = document.getElementById('edit-project-modal');
    if (!modal) return;

    document.getElementById('edit-proj-id').value = project.id;
    document.getElementById('edit-proj-title').value = project.title || '';
    document.getElementById('edit-proj-tagline').value = project.tagline || '';
    document.getElementById('edit-proj-origin').value = project.origin || 'propio';
    document.getElementById('edit-proj-category').value = project.category || 'juegos';
    document.getElementById('edit-proj-price').value = project.priceTag || '';
    document.getElementById('edit-proj-role').value = project.role || '';
    document.getElementById('edit-proj-client').value = project.clientOrTeam || '';
    document.getElementById('edit-proj-year').value = project.year || '';
    const editPinned = document.getElementById('edit-proj-pinned');
    if (editPinned) editPinned.checked = project.pinned === true;
    const editEffectElectrify = document.getElementById('edit-proj-effect-electrify');
    const editEffectRainbow = document.getElementById('edit-proj-effect-rainbow');
    const editEffectGlow = document.getElementById('edit-proj-effect-glow');
    const editEffectShake = document.getElementById('edit-proj-effect-shake');
    const editEffectColor = document.getElementById('edit-proj-effect-color');
    const storedEffects = Array.isArray(project.cardEffects) ? project.cardEffects : (project.cardEffect && project.cardEffect !== 'none' ? [project.cardEffect] : []);
    if (editEffectElectrify) editEffectElectrify.checked = storedEffects.includes('electrify') || storedEffects.includes('red') || storedEffects.includes('gold') || storedEffects.includes('blue');
    if (editEffectShake) editEffectShake.checked = storedEffects.includes('shake');
    if (editEffectRainbow) editEffectRainbow.checked = storedEffects.includes('rainbow');
    if (editEffectGlow) editEffectGlow.checked = storedEffects.includes('glow');
    if (editEffectColor) editEffectColor.value = /^#[0-9a-fA-F]{6}$/.test(project.cardEffectColor || '') ? project.cardEffectColor : '#fbbf24';
    document.getElementById('edit-proj-cover').value = project.coverImage || '';
    const editPlayCheck = document.getElementById('edit-proj-play-check');
    const editPlayUrl = document.getElementById('edit-proj-play-url');
    const editItchCheck = document.getElementById('edit-proj-itch-check');
    const editItchUrl = document.getElementById('edit-proj-itch-url');
    const editSteamCheck = document.getElementById('edit-proj-steam-check');
    const editSteamUrl = document.getElementById('edit-proj-steam-url');
    if (editPlayCheck) editPlayCheck.checked = !!project.playStoreUrl;
    if (editPlayUrl) editPlayUrl.value = project.playStoreUrl || '';
    if (editItchCheck) editItchCheck.checked = !!project.itchUrl;
    if (editItchUrl) editItchUrl.value = project.itchUrl || '';
    if (editSteamCheck) editSteamCheck.checked = !!project.steamUrl;
    if (editSteamUrl) editSteamUrl.value = project.steamUrl || '';
    
    // Múltiples imágenes (galería) separadas por salto de línea
    const galleryImgs = Array.isArray(project.galleryImages) ? project.galleryImages.join('\n') : (project.coverImage || '');
    const linksInput = document.getElementById('edit-proj-links');
    if (linksInput) linksInput.value = (project.links || []).map(link => `${link.label || ''} | ${link.url || ''}`).join('\n');
    document.getElementById('edit-proj-gallery').value = galleryImgs;

    const iconPrev = document.getElementById('edit-proj-icon-preview');
    const savedIcon = project.icon || project.coverImage || './assets/images/ely/my-avatar.png';
    if (iconPrev) setMediaPreviewElement(iconPrev, savedIcon, project.title || 'Icono');
    const iconInp = document.getElementById('edit-proj-icon');
    if (iconInp) iconInp.value = savedIcon;
    const coverPrev = document.getElementById('edit-proj-cover-preview');
    if (coverPrev) setMediaPreviewElement(coverPrev, project.coverImage || './assets/images/ely/Proyectos/Overdrivers/od1.jpg', project.title || 'Portada');
    renderGalleryThumbnails('edit-proj-gallery-thumbs', 'edit-proj-gallery');

    // Video de YouTube en grande
    document.getElementById('edit-proj-video').value = project.youtubeVideo || '';

    document.getElementById('edit-proj-desc').value = project.description || '';
    document.getElementById('edit-proj-story').value = project.fullStory || project.description || '';
    document.getElementById('edit-proj-techs').value = (project.technologies || []).join(', ');
    document.getElementById('edit-proj-contribs').value = (project.keyContributions || []).join('\n');
    document.getElementById('edit-proj-reqs').value = (project.requirements || []).join('\n');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeEditProjectModal() {
    const modal = document.getElementById('edit-project-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingProjectId = null;
  }

  async function handleEditProjectSubmit(e) {
    e.preventDefault();
    if (!editingProjectId) return;
    const project = projects.find(p => p.id === editingProjectId);
    if (!project) return;

    project.title = document.getElementById('edit-proj-title').value.trim();
    project.tagline = document.getElementById('edit-proj-tagline').value.trim();
    project.origin = document.getElementById('edit-proj-origin').value;
    project.category = document.getElementById('edit-proj-category').value;
    project.priceTag = document.getElementById('edit-proj-price').value.trim() || undefined;
    project.role = document.getElementById('edit-proj-role').value.trim();
    project.clientOrTeam = document.getElementById('edit-proj-client').value.trim() || undefined;
    project.year = document.getElementById('edit-proj-year').value.trim();
    const editPinned = document.getElementById('edit-proj-pinned');
    project.pinned = !!(editPinned && editPinned.checked);
    const effectList = [];
    const editEffectElectrify = document.getElementById('edit-proj-effect-electrify');
    const editEffectRainbow = document.getElementById('edit-proj-effect-rainbow');
    const editEffectGlow = document.getElementById('edit-proj-effect-glow');
    const editEffectShake = document.getElementById('edit-proj-effect-shake');
    const editEffectColor = document.getElementById('edit-proj-effect-color');
    if (editEffectElectrify && editEffectElectrify.checked) effectList.push('electrify');
    if (editEffectRainbow && editEffectRainbow.checked) effectList.push('rainbow');
    if (editEffectGlow && editEffectGlow.checked) effectList.push('glow');
    if (editEffectShake && editEffectShake.checked) effectList.push('shake');
    project.cardEffects = effectList;
    project.cardEffect = effectList.length ? effectList[0] : 'none';
    project.cardEffectColor = editEffectColor ? editEffectColor.value : '#fbbf24';
    project.icon = document.getElementById('edit-proj-icon').value.trim() || project.icon || project.coverImage || './assets/images/ely/my-avatar.png';
    project.coverImage = document.getElementById('edit-proj-cover').value.trim() || './assets/images/ely/my-avatar.png';
    const editPlayCheck = document.getElementById('edit-proj-play-check');
    const editPlayUrl = document.getElementById('edit-proj-play-url');
    const editItchCheck = document.getElementById('edit-proj-itch-check');
    const editItchUrl = document.getElementById('edit-proj-itch-url');
    const editSteamCheck = document.getElementById('edit-proj-steam-check');
    const editSteamUrl = document.getElementById('edit-proj-steam-url');
    project.playStoreUrl = editPlayCheck && editPlayCheck.checked && editPlayUrl ? editPlayUrl.value.trim() : '';
    project.itchUrl = editItchCheck && editItchCheck.checked && editItchUrl ? editItchUrl.value.trim() : '';
    project.steamUrl = editSteamCheck && editSteamCheck.checked && editSteamUrl ? editSteamUrl.value.trim() : '';

    // Parsear galería de imágenes (una por línea o por coma)
    const galleryRaw = document.getElementById('edit-proj-gallery').value;
    const parsedGallery = galleryRaw
      .split(/[\n,]+/)
      .map(s => s.trim())
      .filter(Boolean);
    project.galleryImages = parsedGallery.length > 0 ? parsedGallery : [project.coverImage];

    // Video de YouTube en grande
    project.youtubeVideo = document.getElementById('edit-proj-video').value.trim();
    const linksRaw = document.getElementById('edit-proj-links') ? document.getElementById('edit-proj-links').value : '';
    project.links = linksRaw.split('\n').map(line => { const parts = line.split('|'); const url = parts.slice(1).join('|').trim(); return { label: (parts[0] || '').trim(), url: url, type: /canva\.com/i.test(url) ? 'canva' : 'external' }; }).filter(link => link.label && link.url);

    project.description = document.getElementById('edit-proj-desc').value.trim();
    project.fullStory = document.getElementById('edit-proj-story').value.trim() || project.description;

    const techsRaw = document.getElementById('edit-proj-techs').value;
    project.technologies = techsRaw.split(',').map(s => s.trim()).filter(Boolean);

    const contribsRaw = document.getElementById('edit-proj-contribs').value;
    project.keyContributions = contribsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const reqsRaw = document.getElementById('edit-proj-reqs').value;
    project.requirements = reqsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    closeEditProjectModal();
    renderProjectsGrid();
    await persistProjectsImmediately('edit', project.title);
  }

  // 15. Modal para Agregar Proyecto (Solo moderador)
  function openAddProjectModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const modal = document.getElementById('add-project-modal');
    if (modal) {
      const iconPrev = document.getElementById('new-proj-icon-preview');
      if (iconPrev) iconPrev.src = './assets/images/ely/my-avatar.png';
      const iconInp = document.getElementById('new-proj-icon');
      if (iconInp) iconInp.value = './assets/images/ely/my-avatar.png';
      const coverPrev = document.getElementById('new-proj-cover-preview');
      if (coverPrev) coverPrev.src = './assets/images/ely/overdrivers-teaser.jpg';
      const coverInp = document.getElementById('new-proj-cover');
      if (coverInp) coverInp.value = './assets/images/ely/overdrivers-teaser.jpg';
      const galleryInp = document.getElementById('new-proj-gallery');
      if (galleryInp) galleryInp.value = '';
      const linksInp = document.getElementById('new-proj-links');
      if (linksInp) linksInp.value = '';
      const playCheck = document.getElementById('new-proj-play-check');
      const playUrl = document.getElementById('new-proj-play-url');
      const itchCheck = document.getElementById('new-proj-itch-check');
      const itchUrl = document.getElementById('new-proj-itch-url');
      const steamCheck = document.getElementById('new-proj-steam-check');
      const steamUrl = document.getElementById('new-proj-steam-url');
      if (playCheck) playCheck.checked = false;
      if (playUrl) playUrl.value = '';
      if (itchCheck) itchCheck.checked = false;
      if (itchUrl) itchUrl.value = '';
      if (steamCheck) steamCheck.checked = false;
      if (steamUrl) steamUrl.value = '';
      renderGalleryThumbnails('new-proj-gallery-thumbs', 'new-proj-gallery');

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAddProjectModal() {
    const modal = document.getElementById('add-project-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  async function handleAddProjectSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('new-proj-title').value.trim();
    const tagline = document.getElementById('new-proj-tagline').value.trim();
    const origin = document.getElementById('new-proj-origin').value;
    const category = document.getElementById('new-proj-category').value;
    const priceTag = document.getElementById('new-proj-price').value.trim();
    const coverImage = document.getElementById('new-proj-cover').value.trim() || './assets/images/ely/my-avatar.png';
    const galleryRaw = document.getElementById('new-proj-gallery').value;
    const videoUrl = document.getElementById('new-proj-video').value.trim();
    const playCheck = document.getElementById('new-proj-play-check');
    const playUrl = document.getElementById('new-proj-play-url');
    const itchCheck = document.getElementById('new-proj-itch-check');
    const itchUrl = document.getElementById('new-proj-itch-url');
    const steamCheck = document.getElementById('new-proj-steam-check');
    const steamUrl = document.getElementById('new-proj-steam-url');
    const playStoreUrl = playCheck && playCheck.checked && playUrl ? playUrl.value.trim() : '';
    const itchStoreUrl = itchCheck && itchCheck.checked && itchUrl ? itchUrl.value.trim() : '';
    const steamStoreUrl = steamCheck && steamCheck.checked && steamUrl ? steamUrl.value.trim() : '';
    const linksRaw = document.getElementById('new-proj-links') ? document.getElementById('new-proj-links').value : '';
    const links = linksRaw.split('\n').map(line => { const parts = line.split('|'); const url = parts.slice(1).join('|').trim(); return { label: (parts[0] || '').trim(), url: url, type: /canva\.com/i.test(url) ? 'canva' : 'external' }; }).filter(link => link.label && link.url);
    const desc = document.getElementById('new-proj-desc').value.trim();
    const techs = document.getElementById('new-proj-techs').value.split(',').map(s => s.trim()).filter(Boolean);

    const parsedGallery = galleryRaw.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);

    const newProject = {
      id: 'proj-' + Date.now(),
      title: title,
      tagline: tagline,
      origin: origin,
      category: category,
      priceTag: priceTag || undefined,
      description: desc,
      fullStory: desc,
      icon: document.getElementById('new-proj-icon').value.trim() || './assets/images/ely/my-avatar.png',
      coverImage: coverImage,
      galleryImages: parsedGallery.length > 0 ? parsedGallery : [coverImage],
      youtubeVideo: videoUrl || '',
      playStoreUrl: playStoreUrl,
      itchUrl: itchStoreUrl,
      steamUrl: steamStoreUrl,
      links: links,
      technologies: techs.length > 0 ? techs : ['Unity', 'C#'],
      role: 'Desarrollador'
    };

    projects.unshift(newProject);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    closeAddProjectModal();
    renderProjectsGrid();
    await persistProjectsImmediately('create', newProject.title);
  }

  // 15.1 Experiencia Laboral & Contratos (CRUD, Reordenar, Duplicar)
  function renderExperiences() {
    const container = document.getElementById('experiences-list');
    if (!container) return;

    const sortBtnLabel = document.getElementById('label-sort-experiences');
    if (sortBtnLabel) {
      sortBtnLabel.textContent = (experienceSortOrder === 'asc') 
        ? 'Reordenar: Más Recientes' 
        : 'Reordenar: Antiguos Primero';
    }

    if (experiences.length === 0) {
      container.innerHTML = `
        <div class="rounded-2xl border border-dashed border-[#282f40] bg-[#10131b] p-6 text-center text-xs text-slate-400">
          No hay experiencias laborales registradas.
        </div>
      `;
      return;
    }

    container.innerHTML = experiences.map(function (exp, index) {
      const colorClass = exp.color || 'text-amber-400';
      const techBadges = (exp.technologies || []).map(function (t) {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">${t}</span>`;
      }).join('');

      const moderatorBar = (isModerator && !visitorPreviewMode) ? `
        <div class="flex items-center justify-between p-2 mb-2 bg-[#171c26] rounded-xl border border-amber-400/30 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="window.ElyPortfolio.moveExperienceOrder('${exp.id}', -1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Mover arriba"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.moveExperienceOrder('${exp.id}', 1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Mover abajo"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="window.ElyPortfolio.duplicateExperience('${exp.id}')"
              class="px-2 py-0.5 rounded bg-[#202738] text-amber-300 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Duplicar experiencia"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.openEditExperienceModal('${exp.id}')"
              class="px-2.5 py-0.5 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              title="Editar experiencia"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.deleteExperience('${exp.id}')"
              class="px-2.5 py-0.5 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors cursor-pointer"
              title="Eliminar experiencia"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      return `
        <div class="rounded-2xl bg-[#12151d] border border-[#232733] p-5 space-y-2 hover:border-amber-400/40 transition-colors">
          ${moderatorBar}
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h4 class="text-sm font-bold text-white font-display">${exp.title}</h4>
              <div class="text-xs ${colorClass}">${exp.company}${exp.location ? ' · ' + exp.location : ''}</div>
            </div>
            <div class="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded w-fit sm:w-auto">
              ${exp.period}
            </div>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${exp.description}</p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${techBadges}
          </div>
        </div>
      `;
    }).join('');
  }

  function toggleSortExperiencesByDate() {
    experienceSortOrder = (experienceSortOrder === 'desc') ? 'asc' : 'desc';

    experiences.sort(function (a, b) {
      const dateA = a.startDate || '2000-01-01';
      const dateB = b.startDate || '2000-01-01';
      return experienceSortOrder === 'asc' 
        ? dateA.localeCompare(dateB)
        : dateB.localeCompare(dateA);
    });

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    syncExperiencesWithBackend(experiences);
    showStatusNotification({
      title: 'Cronología Reordenada',
      message: experienceSortOrder === 'asc' 
        ? 'Experiencias ordenadas: Más antiguas primero (cronológico).' 
        : 'Experiencias ordenadas: Más recientes primero.',
      type: 'info',
      icon: '📅'
    });
  }

  function moveExperienceOrder(expId, delta) {
    const index = experiences.findIndex(e => e.id === expId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= experiences.length) return;

    const temp = experiences[index];
    experiences[index] = experiences[newIndex];
    experiences[newIndex] = temp;

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    syncExperiencesWithBackend(experiences);
    showStatusNotification({
      title: 'Posición Actualizada',
      message: `Se reordenó la experiencia "${experiences[newIndex].title}".`,
      type: 'info',
      icon: '⇅'
    });
  }

  function duplicateExperience(expId) {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;

    const copy = JSON.parse(JSON.stringify(exp));
    copy.id = 'exp-' + Date.now();
    copy.title = '[Copia] ' + copy.title;

    const index = experiences.findIndex(e => e.id === expId);
    if (index >= 0) {
      experiences.splice(index + 1, 0, copy);
    } else {
      experiences.unshift(copy);
    }

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    syncExperiencesWithBackend(experiences);
    showStatusNotification({
      title: 'Experiencia Duplicada',
      message: `Se ha duplicado la experiencia "${exp.title}".`,
      type: 'success',
      icon: '📋'
    });
  }

  function deleteExperience(expId) {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;

    showConfirmModal({
      title: '¿Eliminar Experiencia Laboral?',
      message: `¿Estás seguro de eliminar la trayectoria "${exp.title}" en "${exp.company}"? Los cambios se guardarán automáticamente en Google Sheets.`,
      icon: '💼',
      confirmText: 'Sí, Eliminar Experiencia',
      danger: true,
      onConfirm: function () {
        experiences = experiences.filter(e => e.id !== expId);
        try {
          localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
        } catch (e) {}
        renderExperiences();
        syncExperiencesWithBackend(experiences);
        showStatusNotification({
          title: 'Experiencia Eliminada',
          message: `"${exp.title}" ha sido eliminada y guardada en el archivo.`,
          type: 'info',
          icon: '🗑️'
        });
      }
    });
  }

  let editingExpId = null;

  function openAddExperienceModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    editingExpId = null;
    const modal = document.getElementById('experience-modal');
    const titleEl = document.getElementById('experience-modal-title');
    if (titleEl) titleEl.textContent = '+ Agregar Experiencia Laboral & Contrato';

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    };

    setVal('exp-form-id', '');
    setVal('exp-form-title', '');
    setVal('exp-form-company', '');
    setVal('exp-form-location', 'Remoto / Rep. Dominicana');
    const today = new Date().toISOString().split('T')[0];
    setVal('exp-form-start-date', today);
    setVal('exp-form-end-date', '');
    setVal('exp-form-period', 'Presente');
    setVal('exp-form-color', 'text-amber-400');
    setVal('exp-form-desc', '');
    setVal('exp-form-techs', 'Unity, C#');

    const currentCheck = document.getElementById('exp-form-current');
    const endInput = document.getElementById('exp-form-end-date');
    if (currentCheck) {
      currentCheck.checked = true;
    }
    if (endInput) {
      endInput.disabled = true;
      endInput.style.opacity = '0.4';
    }

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function openEditExperienceModal(expId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    editingExpId = expId;

    const modal = document.getElementById('experience-modal');
    const titleEl = document.getElementById('experience-modal-title');
    if (titleEl) titleEl.textContent = '✏️ Editar Experiencia Laboral & Contrato';

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    };

    setVal('exp-form-id', exp.id || '');
    setVal('exp-form-title', exp.title || '');
    setVal('exp-form-company', exp.company || '');
    setVal('exp-form-location', exp.location || '');
    setVal('exp-form-start-date', exp.startDate || '');
    setVal('exp-form-end-date', exp.endDate || '');
    setVal('exp-form-period', exp.period || '');
    setVal('exp-form-color', exp.color || 'text-amber-400');
    setVal('exp-form-desc', exp.description || '');
    setVal('exp-form-techs', (exp.technologies || []).join(', '));

    const currentCheck = document.getElementById('exp-form-current');
    const endInput = document.getElementById('exp-form-end-date');
    const isCurrent = !exp.endDate || (exp.period && exp.period.toLowerCase().includes('presente'));
    if (currentCheck) {
      currentCheck.checked = !!isCurrent;
    }
    if (endInput) {
      endInput.disabled = !!isCurrent;
      endInput.style.opacity = isCurrent ? '0.4' : '1';
    }

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeExperienceModal() {
    const modal = document.getElementById('experience-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingExpId = null;
  }

  function handleExperienceSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const getVal = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    const title = getVal('exp-form-title');
    const company = getVal('exp-form-company');
    const location = getVal('exp-form-location');
    const startDate = getVal('exp-form-start-date');
    const endDate = getVal('exp-form-end-date');
    const isCurrent = document.getElementById('exp-form-current')?.checked || false;
    let period = getVal('exp-form-period');
    const color = getVal('exp-form-color') || 'text-amber-400';
    const desc = getVal('exp-form-desc');
    const techsRaw = getVal('exp-form-techs');
    const techs = techsRaw.split(',').map(s => s.trim()).filter(Boolean);

    if (!period) {
      period = isCurrent ? 'Presente' : (startDate ? startDate : '');
    }

    if (editingExpId) {
      const exp = experiences.find(e => e.id === editingExpId);
      if (exp) {
        exp.title = title;
        exp.company = company;
        exp.location = location;
        exp.startDate = startDate;
        exp.endDate = isCurrent ? '' : endDate;
        exp.period = period;
        exp.color = color;
        exp.description = desc;
        exp.technologies = techs;
      }
    } else {
      const newExp = {
        id: 'exp-' + Date.now(),
        title: title,
        company: company,
        location: location,
        startDate: startDate,
        endDate: isCurrent ? '' : endDate,
        period: period,
        color: color,
        description: desc,
        technologies: techs
      };
      experiences.unshift(newExp);
    }

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (err) {}

    closeExperienceModal();
    renderExperiences();
    syncExperiencesWithBackend(experiences);
    showStatusNotification({
      title: editingExpId ? 'Experiencia Editada' : 'Experiencia Guardada',
      message: `"${title}" en ${company} guardada y sincronizada en Google Sheets.`,
      type: 'success',
      icon: '💼'
    });
  }

  // 16. Restablecer datos originales
  function resetSampleData() {
    showConfirmModal({
      title: '¿Restablecer Proyectos Originales?',
      message: 'Esta acción restablecerá el catálogo a la muestra inicial y sincronizará el archivo Google Sheets.',
      icon: '🔄',
      confirmText: 'Sí, Restablecer',
      danger: false,
      onConfirm: async function () {
        projects = JSON.parse(JSON.stringify(initialProjects));
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        } catch (err) {}
        renderProjectsGrid();
        await persistProjectsImmediately('reset', 'los proyectos originales');
      }
    });
  }

  // Todas las escrituras y cargas usan una única cola para evitar condiciones de carrera.
  // Nunca se permite que un guardado de Sheets, sincronización de GitHub o carga
  // reemplace datos mientras otra operación todavía está trabajando.
  let backendSyncQueue = Promise.resolve();
  let backendSyncBusy = false;
  let backendCardsSnapshot = [];
  let backendFeedbackSnapshot = [];
  let backendCardsSnapshotReady = false;
  let backendFeedbackSnapshotReady = false;

  function cloneBackendRecords(records) {
    try { return JSON.parse(JSON.stringify(Array.isArray(records) ? records : [])); }
    catch (e) { return Array.isArray(records) ? records.slice() : []; }
  }

  function backendRecordSignature(record) {
    if (!record) return '';
    try { return JSON.stringify({ id: String(record.id || ''), type: record.type || '', data: record.data }); }
    catch (e) { return String(record.id || '') + '|' + String(record.type || ''); }
  }

  const SHEETS_REMOTE_CACHE_MS = 10000;
  const SHEETS_WRITE_MIN_INTERVAL_MS = 2500;
  let sheetsRemoteCache = {};
  let sheetsRemoteCacheAt = {};
  let sheetsLastWriteAt = 0;
  let sheetsWritePromise = Promise.resolve();

  function waitForSheetsWriteSlot() {
    const run = sheetsWritePromise.then(async function () {
      const wait = Math.max(0, sheetsLastWriteAt + SHEETS_WRITE_MIN_INTERVAL_MS - Date.now());
      if (wait > 0) await new Promise(function (resolve) { setTimeout(resolve, wait); });
      return true;
    });
    sheetsWritePromise = run.catch(function () {});
    return run;
  }

  async function loadCurrentSheetRecords(sheetName, force) {
    const key = sheetName === FEEDBACKS_SHEET_NAME ? 'feedbacks' : (sheetName === CONTACT_REQUEST_SHEET_NAME ? 'contactRequests' : 'cards');
    const now = Date.now();
    if (!force && sheetsRemoteCache[key] && now - (sheetsRemoteCacheAt[key] || 0) < SHEETS_REMOTE_CACHE_MS) {
      return cloneBackendRecords(sheetsRemoteCache[key]);
    }

    const url = GLOBAL_COUNTER_URL + '?action=loadSheetData&cacheBust=' + Date.now();
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Google Sheets HTTP ' + response.status);
    const result = await response.json();
    if (!result || !result.success) {
      throw new Error(result && result.error ? result.error : 'Google Sheets no devolvió datos.');
    }

    const records = Array.isArray(result[key]) ? result[key] : (sheetName === CONTACT_REQUEST_SHEET_NAME ? (Array.isArray(result.contactRequests) ? result.contactRequests : (Array.isArray(result.records) ? result.records : [])) : []);
    sheetsRemoteCache[key] = cloneBackendRecords(records);
    sheetsRemoteCacheAt[key] = Date.now();
    return records;
  }

  async function syncOnlyChangedRecords(sheetName, localRecords, snapshotRecords, snapshotReady, explicitRecords) {
    if (!snapshotReady && (!Array.isArray(explicitRecords) || !explicitRecords.length)) {
      throw new Error('Google Sheets todavía no terminó de cargar. Se canceló el guardado para evitar borrar tarjetas.');
    }

    const current = Array.isArray(localRecords) ? localRecords.filter(Boolean) : [];
    const previous = Array.isArray(snapshotRecords) ? snapshotRecords.filter(Boolean) : [];
    const previousMap = new Map(previous.map(function (record) { return [String(record.id || ''), record]; }));
    const currentMap = new Map(current.map(function (record) { return [String(record.id || ''), record]; }));

    let changes = [];
    let deletedIds = [];

    if (Array.isArray(explicitRecords) && explicitRecords.length) {
      changes = explicitRecords.filter(function (record) { return record && record.id; });
    } else {
      current.forEach(function (record) {
        const id = String(record.id || '');
        const oldRecord = previousMap.get(id);
        if (!oldRecord || backendRecordSignature(oldRecord) !== backendRecordSignature(record)) {
          changes.push(record);
        }
      });
      previous.forEach(function (record) {
        const id = String(record.id || '');
        if (id && !currentMap.has(id)) deletedIds.push(id);
      });
    }

    if (!changes.length && !deletedIds.length) {
      return { changed: 0, records: cloneBackendRecords(previous) };
    }

    const remote = await loadCurrentSheetRecords(sheetName);
    const remoteMap = new Map(remote.map(function (record) { return [String(record.id || ''), record]; }));

    // Si la hoja remota quedó vacía mientras nosotros conocíamos datos existentes,
    // jamás usamos ese vacío como base para guardar y borrar todo.
    if (!remote.length && previous.length) {
      const hasOnlyNewRecords = changes.length > 0 && changes.every(function (record) {
        return !previousMap.has(String(record.id || ''));
      }) && !deletedIds.length;
      if (!hasOnlyNewRecords) {
        throw new Error('Google Sheets devolvió 0 tarjetas mientras existían datos guardados. Guardado cancelado para proteger el catálogo.');
      }
    }

    // Nunca aceptamos una respuesta remota incompleta. Si falta cualquier
    // registro que existía en el snapshot anterior, cancelar es más seguro
    // que guardar una hoja parcial y borrar datos accidentalmente.
    previous.forEach(function (record) {
      const id = String(record.id || '');
      if (!id || deletedIds.includes(id)) return;
      if (!remoteMap.has(id)) {
        throw new Error('Google Sheets devolvió una lista incompleta. Guardado cancelado para proteger los demás cards.');
      }
    });

    const merged = remote.slice();
    const mergedMap = new Map(merged.map(function (record, index) {
      return [String(record.id || ''), index];
    }));

    changes.forEach(function (record) {
      const id = String(record.id || '');
      if (!id) return;
      const index = mergedMap.get(id);
      if (index == null) {
        mergedMap.set(id, merged.length);
        merged.push(record);
      } else {
        merged[index] = record;
      }
    });

    if (deletedIds.length) {
      for (let i = merged.length - 1; i >= 0; i--) {
        if (deletedIds.includes(String(merged[i] && merged[i].id || ''))) merged.splice(i, 1);
      }
    }

    await waitForSheetsWriteSlot();
    await syncDataToGoogleSheet(sheetName, merged);
    sheetsLastWriteAt = Date.now();
    sheetsRemoteCache[sheetName === FEEDBACKS_SHEET_NAME ? 'feedbacks' : (sheetName === CONTACT_REQUEST_SHEET_NAME ? 'contactRequests' : 'cards')] = cloneBackendRecords(merged);
    sheetsRemoteCacheAt[sheetName === FEEDBACKS_SHEET_NAME ? 'feedbacks' : (sheetName === CONTACT_REQUEST_SHEET_NAME ? 'contactRequests' : 'cards')] = Date.now();
    return { changed: changes.length + deletedIds.length, records: merged };
  }


  function queueBackendSync(operation) {
    const run = backendSyncQueue.catch(function () {}).then(async function () {
      backendSyncBusy = true;
      try {
        return await operation();
      } finally {
        backendSyncBusy = false;
      }
    });
    backendSyncQueue = run.catch(function () {});
    return run;
  }

  function syncCardsInfoImmediately(explicitRecords) {
    return queueBackendSync(async function () {
      const localRecords = getCardsInfoSheetRecords();
      const result = await syncOnlyChangedRecords(
        CARDS_INFO_SHEET_NAME,
        localRecords,
        backendCardsSnapshot,
        backendCardsSnapshotReady,
        Array.isArray(explicitRecords) ? explicitRecords : null
      );
      backendCardsSnapshot = cloneBackendRecords(result.records);
      backendCardsSnapshotReady = true;
      return result;
    });
  }

  function saveFeedbackCodesImmediately(explicitRecord) {
    return queueBackendSync(async function () {
      const localRecords = satisfiedClients ? [] : [];
      const cardRecords = getCardsInfoSheetRecords();
      const target = explicitRecord ? [explicitRecord] : null;
      const result = await syncOnlyChangedRecords(
        CARDS_INFO_SHEET_NAME,
        cardRecords,
        backendCardsSnapshot,
        backendCardsSnapshotReady,
        target
      );
      backendCardsSnapshot = cloneBackendRecords(result.records);
      backendCardsSnapshotReady = true;
      return result;
    });
  }

  function syncProjectsWithBackend(list, changedProject) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (err) {}
    const target = changedProject && changedProject.id
      ? [{ id: String(changedProject.id), type: 'project', data: changedProject }]
      : null;
    return syncCardsInfoImmediately(target);
  }

  async function persistProjectsImmediately(action, projectTitle) {
    try {
      await syncProjectsWithBackend(projects);
      showStatusNotification({
        title: 'Proyecto guardado',
        message: (projectTitle ? '"' + projectTitle + '" ' : '') + 'se guardó inmediatamente en Google Sheets.',
        type: 'success',
        icon: '✓'
      });
      return true;
    } catch (error) {
      console.error('[PROJECT SAVE ERROR]', error);
      showStatusNotification({
        title: 'Error al guardar proyecto',
        message: 'El cambio quedó aplicado localmente, pero Google Sheets no pudo actualizarse: ' + (error.message || 'Error desconocido.'),
        type: 'error',
        icon: '⚠️'
      });
      return false;
    }
  }

  function syncExperiencesWithBackend(list, changedExperience) {
    try { localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
    const target = changedExperience && changedExperience.id
      ? [{ id: String(changedExperience.id), type: 'experience', data: changedExperience }]
      : null;
    return syncCardsInfoImmediately(target).then(function (result) {
      updateSyncModalCounters();
      return result;
    }).catch(function (error) {
      console.error('[EXPERIENCIAS SHEET SYNC ERROR]', error);
      showStatusNotification({
        title: 'Error al guardar experiencia',
        message: 'El cambio quedó aplicado localmente, pero Google Sheets no pudo actualizarse: ' + (error.message || 'Error desconocido.'),
        type: 'error',
        icon: '⚠️'
      });
      return null;
    });
  }

  async function syncTestimonialsWithBackend(list, changedFeedback) {
    return queueBackendSync(async function () {
      const feedbackRecords = (Array.isArray(list) ? list : [])
        .filter(function (item) { return item && item.id; })
        .map(function (item) {
          return { id: String(item.id), type: 'feedback', data: item };
        });
      const target = changedFeedback && changedFeedback.id
        ? [{ id: String(changedFeedback.id), type: 'feedback', data: changedFeedback }]
        : null;
      const result = await syncOnlyChangedRecords(
        FEEDBACKS_SHEET_NAME,
        feedbackRecords,
        backendFeedbackSnapshot,
        backendFeedbackSnapshotReady,
        target
      );
      backendFeedbackSnapshot = cloneBackendRecords(result.records);
      backendFeedbackSnapshotReady = true;
      return result;
    });
  }

  const CARDS_INFO_SHEET_NAME = 'CardsInfo';
  const FEEDBACKS_SHEET_NAME = 'Feedbacks';

  function getCardsInfoSheetRecords() {
    const records = [];
    records.push({ id: 'profile', type: 'profile', data: initialProfile });
    projects.forEach(function (item) {
      if (item && item.id) records.push({ id: String(item.id), type: 'project', data: item });
    });
    experiences.forEach(function (item) {
      if (item && item.id) records.push({ id: String(item.id), type: 'experience', data: item });
    });
    assets.forEach(function (item) {
      if (item && item.id) records.push({ id: String(item.id), type: 'asset', data: item });
    });
    feedbackCodes.forEach(function (item, index) {
      if (item) records.push({
        id: String(item.code || ('feedback-code-' + index)),
        type: 'feedback_code',
        data: item
      });
    });
    getSocialNetworks().forEach(function (item, index) {
      if (item) records.push({
        id: 'social-' + String(item.id || ('network-' + index)),
        type: 'social_network',
        data: normalizeSocialNetwork(item, index)
      });
    });
    skillCards.forEach(function (item) {
      if (item && item.id) records.push({ id: String(item.id), type: 'skill_card', data: item });
    });
    // La biblioteca se guarda como un único registro JSON dentro de CardsInfo.
    // Esto permite reconstruirla desde Google Sheets sin depender de GitHub Sync.
    records.push({
      id: 'library-json',
      type: 'library_json',
      data: getLibraryManifest()
    });
    return records;
  }

  async function syncDataToGoogleSheet(sheetName, records) {
    if (!GLOBAL_COUNTER_URL) throw new Error('No se configuró la URL de Google Apps Script.');
    const body = new URLSearchParams();
    body.set('action', 'syncSheetData');
    body.set('sheet', sheetName);
    body.set('payload', JSON.stringify(records));
    const response = await fetch(GLOBAL_COUNTER_URL, {
      method: 'POST',
      body: body,
      cache: 'no-store'
    });
    const data = await response.json().catch(function () { return null; });
    if (!response.ok || !data || !data.success) {
      throw new Error(data && data.error ? data.error : 'Google Sheets no pudo guardar los datos.');
    }
    return data;
  }

  async function syncLocalDataToGoogleSheets() {
    return queueBackendSync(async function () {
      const cardsRecords = getCardsInfoSheetRecords();
      const feedbackRecords = satisfiedClients
        .filter(function (item) { return item && item.id; })
        .map(function (item) {
          return { id: String(item.id), type: 'feedback', data: item };
        });

      const cardsResult = await syncOnlyChangedRecords(
        CARDS_INFO_SHEET_NAME,
        cardsRecords,
        backendCardsSnapshot,
        backendCardsSnapshotReady,
        null
      );
      backendCardsSnapshot = cloneBackendRecords(cardsResult.records);
      backendCardsSnapshotReady = true;

      const feedbackResult = await syncOnlyChangedRecords(
        FEEDBACKS_SHEET_NAME,
        feedbackRecords,
        backendFeedbackSnapshot,
        backendFeedbackSnapshotReady,
        null
      );
      backendFeedbackSnapshot = cloneBackendRecords(feedbackResult.records);
      backendFeedbackSnapshotReady = true;

      return {
        cards: cardsResult.records.length,
        feedbacks: feedbackResult.records.length,
        changedCards: cardsResult.changed,
        changedFeedbacks: feedbackResult.changed
      };
    });
  }

  // Los datos ya no se sincronizan con archivos JSON ni con GitHub.

  function getGithubToken() {
    let token = '';
    try { token = localStorage.getItem(GITHUB_TOKEN_STORAGE_KEY) || ''; } catch (e) {}
    if (!token && window.ELY_GITHUB_TOKEN) token = window.ELY_GITHUB_TOKEN;
    if (token) {
      try { localStorage.setItem(GITHUB_TOKEN_STORAGE_KEY, token.trim()); } catch (e) {}
      return token.trim();
    }
    return '';
  }

  async function githubApiRequest(path, options) {
    const token = getGithubToken();
    if (!token) throw new Error('No se configuró el GitHub API Token.');

    const response = await fetch(GITHUB_API_BASE + path, {
      ...options,
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2026-03-10',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        ...(options && options.headers ? options.headers : {})
      }
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || ('GitHub API error ' + response.status));
    return data;
  }

  async function getGithubFile(path) {
    const encodedPath = path.split('/').map(encodeURIComponent).join('/');
    const token = getGithubToken();
    if (!token) throw new Error('No se configuró el GitHub API Token.');

    const response = await fetch(
      GITHUB_API_BASE + '/repos/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/contents/' + encodedPath + '?ref=' + encodeURIComponent(GITHUB_BRANCH),
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2026-03-10',
          Authorization: 'Bearer ' + token
        }
      }
    );

    if (response.status === 404) return null;
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || ('GitHub API error ' + response.status));
    return data;
  }

  async function putGithubFile(path, base64Content, message) {
    const endpoint = '/repos/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/contents/' + path.split('/').map(encodeURIComponent).join('/');

    for (let attempt = 0; attempt < 3; attempt++) {
      const existing = await getGithubFile(path);
      const body = {
        message: message,
        content: base64Content,
        branch: GITHUB_BRANCH
      };

      if (existing && existing.sha) body.sha = existing.sha;

      try {
        return await githubApiRequest(endpoint, {
          method: 'PUT',
          body: JSON.stringify(body)
        });
      } catch (error) {
        const conflict = /does not match|sha|409|422/i.test(error.message || '');
        if (!conflict || attempt === 2) throw error;
        await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1)));
      }
    }

    throw new Error('No se pudo actualizar ' + path);
  }

  function dataUrlToBase64(dataUrl) {
    const comma = dataUrl.indexOf(',');
    if (comma < 0) throw new Error('Imagen inválida.');
    return dataUrl.slice(comma + 1);
  }

  function dataUrlToBytes(dataUrl) {
    const binary = atob(dataUrlToBase64(dataUrl));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  async function sha256Hex(bytes) {
    if (window.crypto && window.crypto.subtle) {
      const hash = await window.crypto.subtle.digest('SHA-256', bytes);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  function imageExtension(dataUrl) {
    const match = dataUrl.match(/^data:image\/([^;]+);base64,/i);
    if (!match) return 'png';
    const type = match[1].toLowerCase();
    if (type === 'jpeg') return 'jpg';
    if (type === 'svg+xml') return 'svg';
    if (type === 'webp') return 'webp';
    if (type === 'gif') return 'gif';
    return type.replace(/[^a-z0-9]/g, '') || 'png';
  }

  function sanitizeGithubImageName(name, fallbackExtension) {
    let clean = String(name || '').trim().replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
    if (!clean) clean = 'image-' + Date.now() + '.' + fallbackExtension;
    if (!/\.[a-z0-9]{2,5}$/i.test(clean)) clean += '.' + fallbackExtension;
    return clean;
  }

  async function prepareGithubData(value, uploadedImages) {
    if (typeof value === 'string' && value.startsWith('https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/' + GITHUB_BRANCH + '/')) {
      const rawPrefix = 'https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/' + GITHUB_BRANCH + '/';
      const repoPath = value.substring(rawPrefix.length);
      if (repoPath.startsWith('assets/images/')) return './' + repoPath;
    }

    if (typeof value === 'string' && value.startsWith('data:image/')) {
      if (uploadedImages.has(value)) return uploadedImages.get(value).url;

      const bytes = dataUrlToBytes(value);
      const hash = await sha256Hex(bytes);
      const path = 'assets/images/ely/' + hash + '.' + imageExtension(value);
      const url = './' + path;

      await putGithubFile(path, dataUrlToBase64(value), 'Upload portfolio image ' + hash.slice(0, 8));
      uploadedImages.set(value, { path, url });
      return url;
    }

    if (Array.isArray(value)) {
      const result = [];
      for (const item of value) result.push(await prepareGithubData(item, uploadedImages));
      return result;
    }

    if (value && typeof value === 'object') {
      const result = {};
      for (const key of Object.keys(value)) result[key] = await prepareGithubData(value[key], uploadedImages);
      return result;
    }

    return value;
  }


  function getLibraryManifest() {
    return customLibraryImages.map(function (image) {
      return {
        id: image.id,
        name: image.name || '',
        category: image.category || getLibraryImageFolder(image),
        folder: getLibraryImageFolder(image),
        path: image.path || '',
        imageId: String(image.id || '')
      };
    });
  }

  async function syncLocalDataToGoogleSheetsDirect() {
    const cardsRecords = getCardsInfoSheetRecords();
    const feedbackRecords = satisfiedClients
      .filter(function (item) { return item && item.id; })
      .map(function (item) {
        return { id: String(item.id), type: 'feedback', data: item };
      });
    const results = await Promise.all([
      syncDataToGoogleSheet(CARDS_INFO_SHEET_NAME, cardsRecords),
      syncDataToGoogleSheet(FEEDBACKS_SHEET_NAME, feedbackRecords)
    ]);
    return {
      cards: cardsRecords.length,
      feedbacks: feedbackRecords.length,
      results: results
    };
  }


  function updateSyncModalCounters() {
    const projCount = document.getElementById('sync-projects-count');
    const expCount = document.getElementById('sync-experiences-count');
    const testCount = document.getElementById('sync-testimonials-count');
    if (projCount) projCount.textContent = String(projects.length);
    if (expCount) expCount.textContent = String(experiences.length);
    if (testCount) testCount.textContent = String(satisfiedClients.length);
  }

  function openSyncFilesModal() {
    const modal = document.getElementById('sync-files-modal');
    if (!modal) return;
    updateSyncModalCounters();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSyncFilesModal() {
    const modal = document.getElementById('sync-files-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  async function compressBackupToBase64(value) {
    if (typeof CompressionStream !== 'function') {
      throw new Error('Este navegador no soporta compresión GZIP. Actualiza el navegador para guardar backups comprimidos.');
    }
    const bytes = new TextEncoder().encode(JSON.stringify(value));
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'));
    const compressed = new Uint8Array(await new Response(stream).arrayBuffer());
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < compressed.length; i += chunkSize) {
      binary += String.fromCharCode.apply(null, compressed.subarray(i, i + chunkSize));
    }
    return {
      data: btoa(binary),
      originalBytes: bytes.length,
      compressedBytes: compressed.length
    };
  }

  async function saveSheetsBackup() {
    try {
      showStatusNotification({
        title:'Creando backup',
        message:'Leyendo CardsInfo y Feedbacks desde Google Sheets...',
        type:'info',
        icon:'⏳',
        duration:15000
      });

      await backendSyncQueue.catch(function () {});

      const response = await fetch(
        GLOBAL_COUNTER_URL + '?action=loadSheetData&cacheBust=' + Date.now(),
        {cache:'no-store'}
      );

      if (!response.ok) {
        throw new Error('Google Sheets HTTP ' + response.status);
      }

      const result = await response.json();

      if (!result || !result.success) {
        throw new Error(
          result && result.error
            ? result.error
            : 'Google Sheets no devolvió datos.'
        );
      }

      const backup = {
        version: 1,
        createdAt: new Date().toISOString(),
        source: 'Google Sheets',
        cards: Array.isArray(result.cards) ? result.cards : [],
        feedbacks: Array.isArray(result.feedbacks) ? result.feedbacks : []
      };

      const compressed = await compressBackupToBase64(backup);
      const body = new URLSearchParams();
      body.set('action', 'saveBackup');
      body.set('encoding', 'gzip-base64');
      body.set('payload', compressed.data);

      const saveResponse = await fetch(
        GLOBAL_COUNTER_URL,
        {
          method:'POST',
          body:body,
          cache:'no-store'
        }
      );

      const saveResult = await saveResponse.json().catch(function () {
        return null;
      });

      if (!saveResponse.ok || !saveResult || !saveResult.success) {
        throw new Error(
          saveResult && saveResult.error
            ? saveResult.error
            : 'Google Sheets no pudo guardar el backup.'
        );
      }

      showStatusNotification({
        title:'Backup guardado',
        message:'Backup comprimido guardado en la hoja Backup (' + Math.round((1 - compressed.compressedBytes / Math.max(1, compressed.originalBytes)) * 100) + '% menos datos).',
        type:'success',
        icon:'💾'
      });

    } catch (error) {
      console.error('[SHEETS BACKUP SAVE ERROR]',error);
      showStatusNotification({
        title:'Error al crear backup',
        message:error.message || 'No se pudo guardar el backup.',
        type:'error',
        icon:'⚠️'
      });
    }
  }

  async function loadSheetsBackup() {
    try {
      const confirmed = await new Promise(function(resolve) {
        showConfirmModal(
          'Cargar último backup',
          'Esto reemplazará CardsInfo y Feedbacks con el último backup guardado en la hoja Backup.',
          '⚠️',
          'Sí, Restaurar'
        );

        const actionBtn = document.getElementById('confirm-modal-action-btn');
        const cancelBtn = document.getElementById('confirm-modal-cancel-btn');

        const onAction = function() {
          cleanup(true);
        };

        const onCancel = function() {
          cleanup(false);
        };

        const cleanup = function(value) {
          if (actionBtn) actionBtn.removeEventListener('click',onAction);
          if (cancelBtn) cancelBtn.removeEventListener('click',onCancel);
          closeConfirmModal();
          resolve(value);
        };

        if (actionBtn) actionBtn.addEventListener('click',onAction);
        if (cancelBtn) cancelBtn.addEventListener('click',onCancel);
      });

      if (!confirmed) return;

      showStatusNotification({
        title:'Cargando backup',
        message:'Buscando el último backup guardado en Google Sheets...',
        type:'info',
        icon:'⏳',
        duration:15000
      });

      const response = await fetch(
        GLOBAL_COUNTER_URL + '?action=loadBackup&cacheBust=' + Date.now(),
        {cache:'no-store'}
      );

      if (!response.ok) {
        throw new Error('Google Sheets HTTP ' + response.status);
      }

      const result = await response.json();

      if (!result || !result.success) {
        throw new Error(
          result && result.error
            ? result.error
            : 'No se encontró ningún backup.'
        );
      }

      const backup = result.backup;

      if (!backup) {
        throw new Error('El último backup no contiene datos.');
      }

      const cards = Array.isArray(backup.cards) ? backup.cards : null;
      const feedbacks = Array.isArray(backup.feedbacks) ? backup.feedbacks : null;

      if (!cards || !feedbacks) {
        throw new Error(
          'El backup no contiene las listas "cards" y "feedbacks".'
        );
      }

      showStatusNotification({
        title:'Restaurando backup',
        message:'Restaurando el backup del ' + new Date(result.createdAt).toLocaleString() + '...',
        type:'info',
        icon:'⏳',
        duration:15000
      });

      await queueBackendSync(async function() {
        await syncDataToGoogleSheet(CARDS_INFO_SHEET_NAME,cards);
        await syncDataToGoogleSheet(FEEDBACKS_SHEET_NAME,feedbacks);
      });

      showStatusNotification({
        title:'Backup restaurado',
        message:'Se cargó el último backup de la hoja Backup y se restauraron CardsInfo y Feedbacks.',
        type:'success',
        icon:'✓'
      });

      await loadAllDataFromBackend(true);

    } catch (error) {
      console.error('[SHEETS BACKUP LOAD ERROR]',error);
      showStatusNotification({
        title:'Error al restaurar backup',
        message:error.message || 'No se pudo cargar el backup desde Google Sheets.',
        type:'error',
        icon:'⚠️'
      });
    }
  }

  let backendLoadPromise = null;
  let backendLastLoadAt = 0;
  const BACKEND_LOAD_TTL_MS = 10000;

  async function loadAllDataFromBackend(force) {
    if (typeof fetch !== 'function') return;
    const now = Date.now();
    if (!force && backendLoadPromise) return backendLoadPromise;
    if (!force && backendLastLoadAt && now - backendLastLoadAt < BACKEND_LOAD_TTL_MS) return;

    backendLoadPromise = (async function () {
    // Si hay un guardado pendiente o en progreso, primero se termina.
    // Así "Cargar cambios" nunca puede traer una versión anterior y borrar
    // lo que acaba de guardarse.
    await backendSyncQueue.catch(function () {});

    const loadFromGoogleSheets = async () => {
      const previousSocialNetworks = Array.isArray(socialNetworksState) ? socialNetworksState.slice() : [];
      const url = GLOBAL_COUNTER_URL + '?action=loadSheetData&cacheBust=' + Date.now();
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error('Google Sheets HTTP ' + response.status);
      const result = await response.json();
      if (!result || !result.success) {
        throw new Error(result && result.error ? result.error : 'Google Sheets no devolvió datos.');
      }

      const cards = Array.isArray(result.cards) ? result.cards : [];
      const feedbacks = Array.isArray(result.feedbacks) ? result.feedbacks : [];
      let contactRequests = [];
      try {
        contactRequests = await loadCurrentSheetRecords(CONTACT_REQUEST_SHEET_NAME, true);
      } catch (contactError) {
        console.warn('[CONTACT REQUESTS LOAD ERROR]', contactError);
      }
      backendContactSnapshot = cloneBackendRecords(contactRequests);
      backendContactSnapshotReady = true;

      // Snapshot confirmado de Sheets. Los guardados posteriores comparan contra
      // este estado y solo modifican los registros que realmente cambiaron.
      backendCardsSnapshot = cloneBackendRecords(cards);
      backendFeedbackSnapshot = cloneBackendRecords(feedbacks);
      backendCardsSnapshotReady = true;
      backendFeedbackSnapshotReady = true;

      const cardMap = {};
      cards.forEach(function(record) {
        if (record && record.id) cardMap[String(record.id)] = record;
      });

      const projectsFromSheet = cards
        .filter(function(record) { return record && record.type === 'project' && record.data; })
        .map(function(record) { return record.data; });

      const experiencesFromSheet = cards
        .filter(function(record) { return record && record.type === 'experience' && record.data; })
        .map(function(record) { return record.data; });

      const assetsFromSheet = cards
        .filter(function(record) { return record && record.type === 'asset' && record.data; })
        .map(function(record) { return record.data; });

      const codesFromSheet = cards
        .filter(function(record) { return record && record.type === 'feedback_code' && record.data; })
        .map(function(record) { return record.data; });

      const contactMessagesFromSheet = contactRequests
        .filter(function(record) { return record && record.type === CONTACT_MESSAGES_SHEET_TYPE && record.data; })
        .map(function(record) { return record.data; });

      const skillCardsFromSheet = cards
        .filter(function(record) { return record && record.type === 'skill_card' && record.data; })
        .map(function(record) { return record.data; });

      const libraryRecordFromSheet = cards.find(function(record) {
        return record && record.type === 'library_json' && record.data;
      });
      const libraryFromSheet = libraryRecordFromSheet && Array.isArray(libraryRecordFromSheet.data)
        ? libraryRecordFromSheet.data
        : [];

      if (skillCardsFromSheet.length) {
        const byId = {};
        skillCardsFromSheet.forEach(function(item) { if (item && item.id) byId[String(item.id)] = item; });
        skillCards = initialSkillCards.map(function(base) {
          const saved = byId[String(base.id)];
          return saved ? Object.assign({}, base, saved, { lines: Array.isArray(saved.lines) ? saved.lines.slice(0, 6) : base.lines.slice() }) : JSON.parse(JSON.stringify(base));
        });
      } else {
        skillCards = JSON.parse(JSON.stringify(initialSkillCards));
      }
      renderSkillCards();

      if (libraryRecordFromSheet) {
        customLibraryImages = libraryFromSheet
          .filter(function(item) { return item && item.path; })
          .map(function(item, index) {
            return {
              id: String(item.id || ('img-' + Date.now() + '-' + index + '-' + Math.random().toString(36).slice(2, 8))),
              name: item.name || 'Imagen',
              category: item.category || item.folder || 'Profile',
              folder: item.folder || item.category || 'Profile',
              path: item.path || '',
              previewPath: ''
            };
          });
        persistCustomLibraryImages();
        persistCustomLibraryImages();
        renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
      }

      const socialNetworkRecordsFromSheet = cards
        .filter(function(record) { return record && record.type === 'social_network' && record.data; });
      const socialNetworksFromSheet = socialNetworkRecordsFromSheet
        .map(function(record, index) {
          const normalized = normalizeSocialNetwork(record.data, index);
          const previous = previousSocialNetworks.find(function(item) {
            return item && String(item.id) === String(normalized.id);
          });
          if (previous && (normalized.networkType === 'youtube' || normalized.networkType === 'discord')) {
            if (normalized.networkType === 'youtube') {
              const previousStats = normalizeYouTubeStats(previous.youtubeStats);
              const sheetStats = normalizeYouTubeStats(normalized.youtubeStats);
              if ((!sheetStats.subscribers && previousStats.subscribers) ||
                  (!sheetStats.videos && previousStats.videos) ||
                  (!sheetStats.views && previousStats.views)) {
                normalized.youtubeStats = {
                  subscribers: sheetStats.subscribers || previousStats.subscribers,
                  videos: sheetStats.videos || previousStats.videos,
                  views: sheetStats.views || previousStats.views
                };
              }
              if (!Number(normalized.countValue) && Number(previous.countValue)) {
                normalized.countValue = Number(previous.countValue);
              }
            } else {
              const previousStats = normalizeDiscordStats(previous.discordStats);
              const sheetStats = normalizeDiscordStats(normalized.discordStats);
              if ((!sheetStats.members && previousStats.members) || (!sheetStats.online && previousStats.online)) {
                normalized.discordStats = {
                  members: sheetStats.members || previousStats.members,
                  online: sheetStats.online || previousStats.online
                };
              }
              if (!Number(normalized.countValue) && Number(previous.countValue)) {
                normalized.countValue = Number(previous.countValue);
              }
            }
          }
          return normalized;
        });

      const profileRecord = cardMap.profile;
      if (profileRecord && profileRecord.data && typeof profileRecord.data === 'object') {
        const profileData = Object.assign({}, profileRecord.data);
        delete profileData.socialNetworks;
        Object.assign(initialProfile, profileData);
      }

      if (socialNetworksFromSheet.length > 0 || previousSocialNetworks.length === 0) {
        socialNetworksState = socialNetworksFromSheet
          .map(function(item, index) {
            item.order = Number.isFinite(Number(item.order)) ? Number(item.order) : index;
            return item;
          })
          .sort(function(a, b) { return Number(a.order) - Number(b.order); });
      } else {
        socialNetworksState = previousSocialNetworks;
      }
      renderSocialNetworks();
      renderSocialNetworksManager();

      const feedbacksFromSheet = feedbacks
        .filter(function(record) { return record && record.data; })
        .map(function(record) { return record.data; });

      projects = projectsFromSheet;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (e) {}
      if (!isAssetsPage()) renderProjectsGrid();

      if (experiencesFromSheet.length > 0) {
        experiences = experiencesFromSheet;
        try { localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences)); } catch (e) {}
        renderExperiences();
      }

      satisfiedClients = feedbacksFromSheet;
      renderTestimonialsPreview();
      renderSatisfiedClientsModalList();

      assets = assetsFromSheet;
      try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
      if (selectedOrigin === 'assets') renderAssetsGrid();
      checkAssetHashParam();

      feedbackCodes = Array.isArray(codesFromSheet) ? codesFromSheet : [];
      contactMessages = Array.isArray(contactMessagesFromSheet) ? contactMessagesFromSheet : [];
      try { localStorage.setItem('portfolio_contact_messages_v1', JSON.stringify(contactMessages)); } catch (e) {}
      updateMessagesButtonBadge();
      if (document.getElementById('messages-modal') && !document.getElementById('messages-modal').classList.contains('hidden')) {
        renderMessagesModal();
      }

      return {
        projects: projectsFromSheet.length,
        experiences: experiencesFromSheet.length,
        feedbacks: feedbacksFromSheet.length,
        assets: assetsFromSheet.length,
        feedbackCodes: codesFromSheet.length,
        contactRequests: contactMessagesFromSheet.length
      };
    };

    try {
      await loadFromGoogleSheets();
      backendLastLoadAt = Date.now();
    } catch (error) {
      console.warn('[GOOGLE SHEETS LOAD ERROR]', error);
      showStatusNotification({
        title: 'No se pudo actualizar el catálogo',
        message: 'Google Sheets no respondió. Los datos publicados ya no se cargan desde archivos JSON.',
        type: 'error',
        icon: '⚠️'
      });
    } finally {
      backendLoadPromise = null;
    }
    })();

    return backendLoadPromise;
  }

  // 16.1 Biblioteca de Imágenes & Drag and Drop Multimedia
  const CUSTOM_IMAGES_KEY = 'portfolio_custom_images_v2';
  const DEFAULT_LIBRARY_IMAGES = [
    { id: 'overdrivers', name: 'OverDrivers Teaser', category: 'Juegos', path: './assets/images/ely/overdrivers-teaser.jpg' },
    { id: 'enunagoma', name: 'MotoLoco (En Una Goma)', category: 'Juegos', path: './assets/images/ely/icon-enunagoma.png' },
    { id: 'dominicanpower', name: 'Dominican Power', category: 'Juegos', path: './assets/images/ely/icon-dominicanpower.png' },
    { id: 'telesancris', name: 'Telesancris Mobile App', category: 'Apps', path: './assets/images/ely/icon-telesancris.png' },
    { id: 'yunonline', name: 'Yun Online', category: 'Juegos', path: './assets/images/ely/icon-yunonline.png' },
    { id: 'retopolis', name: 'Retopolis Hub', category: 'Juegos', path: './assets/images/ely/icon-retopolis.jpg' },
    { id: 'helptuber', name: 'HELPTUBER Suite', category: 'Apps', path: './assets/images/ely/icon-helptuber.jpg' },
    { id: 'dominoesrepublic', name: 'Dominoes Republic', category: 'Juegos', path: './assets/images/ely/icon-dominoesrepublic.png' },
    { id: 'adventureworld', name: 'Adventure World', category: 'Juegos', path: './assets/images/ely/picon-aworld.png' },
    { id: 'hellishflash', name: 'Hellish Flash', category: 'Juegos', path: './assets/images/ely/picon-hellishF.png' },
    { id: 'thespider', name: 'La Arañita Online', category: 'Juegos', path: './assets/images/ely/picon-thespider.png' },
    { id: 'rollingball', name: 'Rolling Ball 3D', category: 'Juegos', path: './assets/images/ely/picon-Rball.png' },
    { id: 'maddys', name: 'Maddys Adventures', category: 'Juegos', path: './assets/images/ely/picon-maddys.png' },
    { id: 'snakes', name: 'Snakes Battles', category: 'Juegos', path: './assets/images/ely/picon-snakes.png' },
    { id: 'peace', name: 'Peace In The Forest', category: 'Juegos', path: './assets/images/ely/picon-peace.png' },
    { id: 'wallball', name: 'Wall Ball Reflex', category: 'Juegos', path: './assets/images/ely/picon-wallball.png' },
    { id: 'adsmonetization', name: 'Ads Monetization System', category: 'Servicios', path: './assets/images/ely/icon-appads.png' },
    { id: 'inapppurchases', name: 'In-App Purchases System', category: 'Servicios', path: './assets/images/ely/icon-inapppurchase.png' },
    { id: 'soundsfx', name: 'Sounds FX & Music System', category: 'Servicios', path: './assets/images/ely/icon-soundsystempng.png' },
    { id: 'avatar', name: 'Avatar Eliezer (ElyDev)', category: 'Perfil', path: './assets/images/ely/my-avatar.png' }
  ];

  let customLibraryImages = [];
  try {
    const savedCustom = localStorage.getItem(CUSTOM_IMAGES_KEY);
    if (savedCustom) {
      customLibraryImages = JSON.parse(savedCustom);
    }
  } catch (e) {
    customLibraryImages = [];
  }

  let currentLibraryTarget = null;
  let selectedGalleryLibraryImages = new Set();
  let githubElyFolderImages = [];
  let githubElyFolderPaths = [];
  let selectedLibraryFolder = '';
  let githubElyFolderLoading = false;
  const libraryUploadInFlight = new Map();

  function getAllLibraryImages() {
    ensureLibraryImageIds();
    const customKeys = new Set();
    const getImageKey = function (image) {
      if (!image) return '';
      const path = String(image.path || '').trim().toLowerCase();
      const folder = normalizeLibraryFolder(image.folder || image.category || '').toLowerCase();
      const name = String(image.name || '').trim().toLowerCase();
      if (path && !path.startsWith('data:image/')) return 'path:' + path;
      return 'file:' + folder + '/' + name;
    };
    customLibraryImages.forEach(function (image) {
      const key = getImageKey(image);
      if (key) customKeys.add(key);
    });
    const seen = new Set();
    const result = [];
    const addUnique = function (image) {
      if (!image) return;
      const key = getImageKey(image);
      const fallbackKey = 'id:' + String(image.id || '');
      const uniqueKey = key || fallbackKey;
      if (seen.has(uniqueKey)) return;
      seen.add(uniqueKey);
      result.push(image);
    };
    const liveElyPaths = new Set(githubElyFolderImages.map(function(image) {
      return String(image.path || '').replace(/^\.\//, '').toLowerCase();
    }));
    const isStaleElyPath = function(image) {
      const path = String(image && image.path || '').replace(/^\.\//, '').toLowerCase();
      return path.startsWith('assets/images/ely/') && liveElyPaths.size > 0 && !liveElyPaths.has(path);
    };
    customLibraryImages.filter(function(image) { return !isStaleElyPath(image); }).forEach(addUnique);
    githubElyFolderImages.forEach(function (remoteImage) {
      const remoteKey = getImageKey(remoteImage);
      if (DEFAULT_LIBRARY_IMAGES.some(function (defaultImage) {
        return defaultImage.path === remoteImage.path;
      })) return;
      if (customKeys.has(remoteKey)) return;
      addUnique(remoteImage);
    });
    DEFAULT_LIBRARY_IMAGES.filter(function(image) { return !isStaleElyPath(image); }).forEach(addUnique);
    return result;
  }

  const FALLBACK_ELY_IMAGE_MANIFEST = [
    "Captura-de-pantalla-2025-08-07-211620.png",
    "Imagen_de_WhatsApp_2025-03-01_a_las_21.29.15_ff053395.jpg",
    "icon-appads.png","icon-dominicanpower.png","icon-dominoesrepublic.png","icon-enunagoma.png",
    "icon-helptuber.jpg","icon-inapppurchase.png","icon-retopolis.jpg","icon-soundsystempng.png",
    "icon-telesancris.png","icon-yunonline.png","my-avatar.png","odd.png","overdrivers-teaser.jpg",
    "picon-Rball.png","picon-aworld.png","picon-hellishF.png","picon-maddys.png","picon-peace.png",
    "picon-snakes.png","picon-thespider.png","picon-wallball.png","vlcsnap-2025-02-10-12h53m54s498.png",
    "vlcsnap-2026-09-24-08h57m21s128.png","MotoLoco/MotoLoco-En-Una-Goma.png","MotoLoco/MotoLocoLogo.png",
    "Profile/telesancrilogo.jpg","maddys/1.png","maddys/10.png","maddys/2.png","maddys/3.png",
    "maddys/4.png","maddys/5.png","maddys/6.png","maddys/7.png","maddys/8.png","maddys/9.png","maddys/icon.png"
  ];

  async function loadImagesFromMainElyFolder(showNotification = false) {
    if (githubElyFolderLoading) return;
    githubElyFolderLoading = true;
    const mediaExtensions = ['png','jpg','jpeg','webp','gif','avif','bmp','svg','mp4','webm','mov','m4v','ogv','mkv'];
    const isMedia = function(path) {
      return mediaExtensions.includes(String(path).split('.').pop().toLowerCase());
    };
    try {
      githubElyFolderPaths = [];
      let foundImages = [];
      let source = 'GitHub';
      let githubTreeLoaded = false;

      // Read the repository tree directly so manually added files and every nested
      // subfolder are detected immediately, without waiting for manifest.json.
      try {
        const apiUrl = GITHUB_API_BASE + '/repos/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/git/trees/' + GITHUB_BRANCH + '?recursive=1';
        const headers = {};
        const token = getGithubToken();
        if (token) headers.Authorization = 'Bearer ' + token;
        const response = await fetch(apiUrl, { cache: 'no-store', headers: headers });
        if (response.ok) {
          const treeData = await response.json();
          githubTreeLoaded = true;
          const prefix = 'assets/images/ely/';
          const folderSet = new Set();
          const files = Array.isArray(treeData.tree) ? treeData.tree : [];

          files.forEach(function(entry) {
            if (!entry || entry.type !== 'blob' || typeof entry.path !== 'string' || !entry.path.startsWith(prefix)) return;
            const relativePath = entry.path.substring(prefix.length).replace(/^\/+/, '');
            if (!relativePath || !isMedia(relativePath)) return;

            const parts = relativePath.split('/').filter(Boolean);
            const fileName = parts.pop();
            const folder = parts.join('/');
            let folderPath = '';
            parts.forEach(function(part) {
              folderPath = folderPath ? folderPath + '/' + part : part;
              folderSet.add(folderPath);
            });

            const extension = fileName.split('.').pop().toLowerCase();
            foundImages.push({
              id: 'ely-folder-' + relativePath,
              name: fileName.replace(/\.[^.]+$/, ''),
              category: folder || 'Ely',
              folder: folder || 'Ely',
              path: './assets/images/ely/' + relativePath,
              isVideo: ['mp4','webm','mov','m4v','ogv','mkv'].includes(extension)
            });
          });

githubElyFolderPaths = Array.from(folderSet).sort(function(a,b) {
            return a.localeCompare(b, undefined, {numeric:true, sensitivity:'base'});
          });
        } else {
          throw new Error('GitHub tree HTTP ' + response.status);
        }
      } catch (treeError) {
        console.warn('[LIBRARY] GitHub tree scan failed, trying manifest:', treeError);
        source = 'manifest.json';
        const urls = [
          './assets/images/ely/manifest.json?cache=' + Date.now(),
          'assets/images/ely/manifest.json?cache=' + Date.now(),
          '/assets/images/ely/manifest.json?cache=' + Date.now()
        ];
        for (const url of urls) {
          try {
            const response = await fetch(url, { cache: 'no-store' });
            if (!response.ok) continue;
            const manifest = await response.json();
            const parsed = Array.isArray(manifest) ? manifest : (Array.isArray(manifest.images) ? manifest.images : []);
            const folders = !Array.isArray(manifest) && Array.isArray(manifest.folders) ? manifest.folders : [];
            if (Array.isArray(parsed)) {
              githubElyFolderPaths = folders.filter(folder => typeof folder === 'string').map(normalizeLibraryFolder);
              foundImages = parsed.filter(isMedia).map(function(relativePath) {
                const cleanPath = String(relativePath).replace(/^\/+/, '').replace(/\\/g, '/');
                const fileName = cleanPath.split('/').pop();
                const folder = cleanPath.includes('/') ? cleanPath.substring(0, cleanPath.lastIndexOf('/')) : 'Ely';
                const extension = fileName.split('.').pop().toLowerCase();
                return {
                  id: 'ely-folder-' + cleanPath,
                  name: fileName.replace(/\.[^.]+$/, ''),
                  category: folder,
                  folder: folder,
                  path: './assets/images/ely/' + cleanPath,
                  isVideo: ['mp4','webm','mov','m4v','ogv','mkv'].includes(extension)
                };
              });
              break;
            }
          } catch (e) {}
        }
      }

      if (!foundImages.length && !githubTreeLoaded) {
        source = source === 'GitHub' ? 'respaldo local' : source;
        foundImages = FALLBACK_ELY_IMAGE_MANIFEST.filter(isMedia).map(function(relativePath) {
          const cleanPath = String(relativePath).replace(/^\/+/, '').replace(/\\/g, '/');
          const fileName = cleanPath.split('/').pop();
          const folder = cleanPath.includes('/') ? cleanPath.substring(0, cleanPath.lastIndexOf('/')) : 'Ely';
          return {
            id: 'ely-folder-' + cleanPath,
            name: fileName.replace(/\.[^.]+$/, ''),
            category: folder,
            folder: folder,
            path: './assets/images/ely/' + cleanPath,
            isVideo: ['mp4','webm','mov','m4v','ogv','mkv'].includes(fileName.split('.').pop().toLowerCase())
          };
        });
      }

      githubElyFolderImages = foundImages;
      // Rebuild all folder paths from the actual files too, covering every depth.
      const discoveredFolders = new Set(githubElyFolderPaths);
      foundImages.forEach(function(image) {
        const folder = getLibraryImageFolder(image);
        let current = '';
        folder.split('/').filter(Boolean).forEach(function(part) {
          current = current ? current + '/' + part : part;
          discoveredFolders.add(current);
        });
      });
      githubElyFolderPaths = Array.from(discoveredFolders).sort(function(a,b) {
        return a.localeCompare(b, undefined, {numeric:true, sensitivity:'base'});
      });

      renderLibraryGrid(document.getElementById('library-search-input')?.value || '');

      if (showNotification) {
        showStatusNotification({
          title: 'Biblioteca actualizada',
          message: 'Se detectaron ' + foundImages.length + ' archivos multimedia y ' + githubElyFolderPaths.length + ' carpetas en assets/images/ely (' + source + ').',
          type: 'success',
          icon: '🔄'
        });
      }
    } catch (error) {
      console.warn('[LIBRARY] Error escaneando assets/images/ely:', error);
      if (showNotification) {
        showStatusNotification({
          title: 'Error al recargar',
          message: 'No se pudo escanear assets/images/ely.',
          type: 'error',
          icon: '⚠️'
        });
      }
    } finally {
      githubElyFolderLoading = false;
    }
  }
  function getLibraryFolderConfig() {
    const styleEl = document.getElementById('library-folder-style');
    const customEl = document.getElementById('library-custom-folder');
    const style = styleEl ? styleEl.value : 'Profile';
    if (style === 'Custom') {
      const custom = (customEl ? customEl.value : '').trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
      return custom || 'Custom';
    }
    return style;
  }

  function setLibraryFolderUI() {
    const styleEl = document.getElementById('library-folder-style');
    const customWrap = document.getElementById('library-custom-folder-wrap');
    if (customWrap) customWrap.classList.toggle('hidden', !styleEl || styleEl.value !== 'Custom');
  }

  function normalizeLibraryFolder(folder) {
    return String(folder || 'Profile').trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '') || 'Profile';
  }

  function getLibraryImageFolder(image) {
    if (image && image.folder) return normalizeLibraryFolder(image.folder);
    if (image && image.category) return normalizeLibraryFolder(image.category);
    if (image && typeof image.path === 'string') {
      const match = image.path.match(/^\.\/assets\/images\/(?:ely|moderator)\/(.+)\/[^/]+$/i);
      if (match) return normalizeLibraryFolder(match[1]);
    }
    return 'Profile';
  }

  function getLibraryMoveConfig(card) {
    const select = card ? card.querySelector('.library-folder-move-select') : null;
    const custom = card ? card.querySelector('.library-folder-move-custom') : null;
    return select && select.value === 'Custom' ? normalizeLibraryFolder(custom ? custom.value : 'Custom') : normalizeLibraryFolder(select ? select.value : 'Profile');
  }

  async function ensureGithubImageFolder(folder) {
    const folderPath = 'assets/images/ely/' + normalizeLibraryFolder(folder);
    const keepPath = folderPath + '/.gitkeep';
    const existing = await getGithubFile(keepPath);
    if (existing) return;
    await putGithubFile(keepPath, btoa(''), 'Create library folder ' + folder);
    // Keep .gitkeep so empty folders remain visible in GitHub.
  }

  async function moveCustomLibraryImageFolder(imageId, card) {
    const image = getAllLibraryImages().find(item => item.id === imageId);
    if (!image) return;
    const newFolder = getLibraryMoveConfig(card);
    if (newFolder === getLibraryImageFolder(image)) return;
    const oldPath = typeof image.path === 'string' && /^\.\/assets\/images\/(?:ely|moderator)\//.test(image.path) ? image.path.substring(2) : '';
    if (oldPath && !getGithubToken()) {
      showStatusNotification({ title: 'GitHub requerido', message: 'Configura tu token de GitHub para mover una imagen ya sincronizada.', type: 'error', icon: '⚠️' });
      return;
    }
    try {
      const extension = image.path && image.path.startsWith('data:image/') ? imageExtension(image.path) : ((image.name || '').match(/\.([a-z0-9]{2,5})$/i) || [, 'png'])[1];
      const filename = sanitizeGithubImageName(String(image.id) + '.' + extension, extension);
      const newPath = 'assets/images/ely/' + newFolder + '/' + filename;
      await ensureGithubImageFolder(newFolder);
      if (oldPath) {
        const existing = await getGithubFile(oldPath);
        if (!existing || !existing.content) throw new Error('No se encontró la imagen actual en GitHub.');
        await putGithubFile(newPath, existing.content.replace(/\s/g, ''), 'Move library image to ' + newFolder);
        const previousPath = image.path;
        image.path = './' + newPath;
        image.previewPath = image.path + '?v=' + Date.now();
        replaceImageReferenceEverywhere(previousPath, image.path);
        image.previewPath = image.path + '?v=' + Date.now();
        await deleteGithubImageFile(oldPath);
        customLibraryImages = customLibraryImages.filter(item => item.id !== imageId);
        if (!customLibraryImages.some(item => item.path === image.path)) customLibraryImages.push(image);
        githubElyFolderImages = githubElyFolderImages.filter(item => item.id !== imageId);
      } else if (typeof image.path === 'string' && image.path.startsWith('data:image/') && getGithubToken()) {
        await putGithubFile(newPath, dataUrlToBase64(image.path), 'Move library image to ' + newFolder);
        const previousPath = image.path;
        image.path = './' + newPath;
        image.previewPath = image.path + '?v=' + Date.now();
        replaceImageReferenceEverywhere(previousPath, image.path);
        image.previewPath = image.path + '?v=' + Date.now();
      }
      image.folder = newFolder;
      image.category = newFolder;
      renderLibraryGrid();
      await persistLibraryImmediately('folder', image.name || 'Imagen');
      showStatusNotification({ title: 'Carpeta actualizada', message: '"' + (image.name || 'Imagen') + '" movida a ' + newFolder + ' y guardada en Google Sheets.', type: 'success', icon: '📁' });
    } catch (error) {
      showStatusNotification({ title: 'No se pudo mover', message: error.message || 'Error moviendo la imagen.', type: 'error', icon: '⚠️' });
    }
  }

  function renderLibraryGrid(searchFilter = '') {
    const grid = document.getElementById('library-images-grid');
    const countEl = document.getElementById('library-images-count');
    if (!grid) return;

    const allImages = getAllLibraryImages();
    grid.className = 'flex flex-1 min-h-0 overflow-hidden rounded-xl border border-[#252b38] bg-[#0b0d12]';
    grid.style.display = 'flex';
    grid.style.gridTemplateColumns = '';
    grid.innerHTML = '<aside class="w-44 sm:w-60 shrink-0 border-r border-[#252b38] flex flex-col min-h-0 bg-[#0d1017]"><div class="px-3 py-3 border-b border-[#252b38] text-xs font-bold text-slate-300 flex items-center justify-between"><span>📁 Carpetas</span><button type="button" id="library-create-folder-btn" class="text-amber-400 hover:text-amber-300" title="Crear carpeta">＋</button></div><div id="library-folder-tree" class="flex-1 min-h-0 overflow-y-auto p-2 text-xs"></div></aside><section class="flex-1 min-w-0 min-h-0 flex flex-col"><div class="px-3 py-2 border-b border-[#252b38] flex items-center justify-between gap-2"><div id="library-folder-breadcrumb" class="text-[11px] text-slate-400 truncate">📁 Todas las imágenes</div><span id="library-folder-count" class="text-[10px] text-slate-500 shrink-0"></span></div><div id="library-file-items" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 overflow-y-auto flex-1 min-h-0 p-3 content-start"></div></section></div>';
    const imageGrid = document.getElementById('library-file-items');
    const folderTree = document.getElementById('library-folder-tree');
    const folderPaths = new Set(['']);
    allImages.forEach(function(image) {
      const folder = getLibraryImageFolder(image);
      const parts = folder.split('/').filter(Boolean);
      let path = '';
      parts.forEach(function(part) { path = path ? path + '/' + part : part; folderPaths.add(path); });
    });
    if (selectedLibraryFolder && !Array.from(folderPaths).some(function(path) {
      return path === selectedLibraryFolder || path.startsWith(selectedLibraryFolder + '/');
    })) selectedLibraryFolder = '';
    const childFolders = function(parent) {
      const prefix = parent ? parent + '/' : '';
      return Array.from(folderPaths).filter(path => path && path.startsWith(prefix) && path.slice(prefix.length).length > 0 && !path.slice(prefix.length).includes('/')).sort((x,y)=>x.localeCompare(y));
    };
    const folderButton = function(path) {
      const name = path ? path.split('/').pop() : 'Todas las imágenes';
      const active = path === selectedLibraryFolder;
      const children = childFolders(path);
      return '<div class="library-tree-node"><button type="button" data-library-folder="' + path.replace(/&/g,'&amp;').replace(/"/g,'&quot;') + '" class="w-full text-left px-2 py-1.5 rounded-md flex items-center gap-1.5 ' + (active ? 'bg-amber-400/15 text-amber-300' : 'text-slate-400 hover:bg-white/5 hover:text-white') + '"><span class="text-[10px]">' + (children.length ? '▸' : '·') + '</span><span>📁</span><span class="truncate">' + name.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</span></button>' + (children.length && (!path || selectedLibraryFolder === path || selectedLibraryFolder.startsWith(path + '/')) ? '<div class="ml-3 pl-1 border-l border-white/10">' + children.map(folderButton).join('') + '</div>' : '') + '</div>';
    };
    if (folderTree) folderTree.innerHTML = folderButton('');
    const crumb = document.getElementById('library-folder-breadcrumb');
    if (crumb) crumb.textContent = selectedLibraryFolder ? '📁 ' + selectedLibraryFolder : '📁 Todas las imágenes';
    if (!grid.dataset.treeBound) {
      grid.dataset.treeBound = 'true';
      grid.addEventListener('click', function(e) {
        const folderButton = e.target.closest('[data-library-folder]');
        if (folderButton) { selectedLibraryFolder = folderButton.getAttribute('data-library-folder') || ''; renderLibraryGrid(document.getElementById('library-search-input')?.value || ''); return; }
        if (e.target.closest('#library-create-folder-btn')) {
          const parent = selectedLibraryFolder;
          const folderName = window.prompt('Nombre de la nueva carpeta o subcarpeta:');
          if (!folderName || !folderName.trim()) return;
          const clean = normalizeLibraryFolder((parent ? parent + '/' : '') + folderName).split('/').filter(part => part && part !== '.' && part !== '..').join('/');
          if (!clean) return;
          ensureGithubImageFolder(clean).then(() => { selectedLibraryFolder = clean; renderLibraryGrid(document.getElementById('library-search-input')?.value || ''); showStatusNotification({title:'Carpeta creada',message:clean,type:'success',icon:'📁'}); }).catch(error => showStatusNotification({title:'No se pudo crear',message:error.message || 'Error creando carpeta.',type:'error',icon:'⚠️'}));
        }
      });
    }
    const librarySizeSlider = document.getElementById('library-size-slider');
    const librarySize = Math.max(120, Math.min(300, parseInt((librarySizeSlider && librarySizeSlider.value) || '190', 10) || 190));
    const librarySizeValue = document.getElementById('library-size-value');
    if (librarySizeValue) librarySizeValue.textContent = librarySize + 'px';
    if (imageGrid) imageGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(' + librarySize + 'px, 1fr))';
    const query = (searchFilter || '').toLowerCase().trim();

    const filtered = allImages.filter(img => {
      const folder = getLibraryImageFolder(img);
      const inFolder = !selectedLibraryFolder || folder === selectedLibraryFolder || folder.startsWith(selectedLibraryFolder + '/');
      if (!inFolder) return false;
      if (!query) return true;
      return (img.name && img.name.toLowerCase().includes(query)) ||
             (img.category && img.category.toLowerCase().includes(query)) ||
             (img.path && img.path.toLowerCase().includes(query));
    });

    if (countEl) {
      countEl.textContent = filtered.length;
    }
    const folderCount = document.getElementById('library-folder-count');
    if (folderCount) folderCount.textContent = filtered.length + ' elemento(s)';

    if (filtered.length === 0) {
      imageGrid.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-500">
          <p class="text-sm">No se encontraron imágenes que coincidan con la búsqueda.</p>
        </div>
      `;
      return;
    }

    imageGrid.innerHTML = filtered.map((img, filteredIndex) => {
      const isCustom = String(img.id || '').startsWith('custom-');
      const allIndex = allImages.findIndex(item => item.id === img.id);
      const customIndex = customLibraryImages.findIndex(item => item.id === img.id);
      const canMove = typeof img.path === 'string' && (/^\.\/assets\/images\/(?:ely|moderator)\//.test(img.path) || img.path.startsWith('data:image/'));
      return `
        <div class="group relative flex h-max min-h-0 flex-col overflow-visible rounded-xl border border-[#232733] bg-[#0d1017] hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all p-3 text-left self-start library-card"
             draggable="${canMove ? 'true' : 'false'}"
             data-library-img-id="${img.id || ''}"
             data-library-img-path="${img.path}"
             data-library-img-name="${img.name || ''}">
          <div class="relative w-full shrink-0 overflow-hidden rounded-xl bg-[#141822] mb-3 border border-white/5 cursor-pointer library-image-area" style="height:${Math.round(librarySize * 0.78)}px">
            ${img.isVideo || /\.(mp4|webm|mov|m4v|ogv)(?:\?.*)?$/i.test(img.path || img.name || "") ? '<video src="' + (img.previewPath || img.path) + '" class="h-full w-full object-contain p-2" muted playsinline preload="metadata"></video><span class="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-[10px] text-white">▶ VIDEO</span>' : '<img src="' + (img.previewPath || img.path) + '" alt="' + (img.name || "Imagen") + '" class="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" data-fallback="' + img.path + '" />'}
            <span class="absolute top-2 left-2 rounded bg-black/80 px-2 py-1 text-[10px] font-mono text-amber-400 border border-amber-400/20 backdrop-blur-sm">
              ${img.category || 'Asset'}
            </span>
            <button type="button" class="absolute top-2 right-2 z-10 h-8 w-8 aspect-square rounded-md bg-black/75 hover:bg-black/90 border border-white/15 text-sm flex items-center justify-center transition-all library-preview-btn" title="Ver imagen grande" aria-label="Ver imagen grande">🔍</button>
            ${canMove ? `<span class="absolute top-2 right-11 rounded bg-black/80 px-2 py-1 text-[10px] text-slate-300 border border-white/10">↕ Arrastra</span>` : ''}
          </div>
          <div class="flex-1 min-w-0">
            <div class="truncate text-sm font-semibold text-slate-200 group-hover:text-amber-400 font-display" title="${img.name}">
              ${img.name || 'Imagen'}
            </div>
            <div class="truncate text-[10px] text-slate-500 font-mono mt-0.5" title="${img.path}">
              ${img.path}
            </div>
          </div>
          ${canMove ? `
            <div class="grid grid-cols-2 gap-1.5 mt-3">
              <button type="button" class="rounded-md bg-white/5 hover:bg-white/10 border border-white/10 py-1 text-[10px] font-bold text-slate-300 library-move-up-btn">▲ Subir</button>
              <button type="button" class="rounded-md bg-white/5 hover:bg-white/10 border border-white/10 py-1 text-[10px] font-bold text-slate-300 library-move-down-btn">▼ Bajar</button>
            </div>
          ` : ''}
          ${canMove ? `
            <div class="mt-2 rounded-lg border border-white/10 bg-black/20 p-2">
              <label class="block text-[9px] uppercase tracking-wider text-slate-500 mb-1">Mover carpeta</label>
              <div class="flex gap-1.5">
                <select class="library-folder-move-select flex-1 min-w-0 rounded-md bg-[#0d1017] border border-[#262c3b] px-2 py-1 text-[10px] text-white focus:border-amber-400 focus:outline-none">
                  ${Array.from(folderPaths).filter(Boolean).sort((a,b)=>a.localeCompare(b)).map(folder => '<option value="' + folder.replace(/&/g,'&amp;').replace(/"/g,'&quot;') + '"' + (folder === getLibraryImageFolder(img) ? ' selected' : '') + '>' + folder.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</option>').join('')}
                  <option value="Custom">＋ Nueva ruta...</option>
                </select>
                <button type="button" class="library-move-folder-btn rounded-md bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/20 px-2 py-1 text-[10px] font-bold text-amber-400">Mover</button>
              </div>
              <input type="text" class="library-folder-move-custom hidden mt-1.5 w-full rounded-md bg-[#0d1017] border border-[#262c3b] px-2 py-1 text-[10px] text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none" placeholder="Nombre de carpeta..." />
            </div>
          ` : ''}
          <button type="button" class="mt-1.5 rounded-md bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 py-1 text-[11px] font-bold text-red-400 transition-colors delete-library-image-btn">Eliminar</button>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.library-preview-btn').forEach(el => { el.style.width = '32px'; el.style.height = '32px'; });

    grid.querySelectorAll('.select-image-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-path]');
        selectImageFromLibrary(card.getAttribute('data-library-img-path'), card.getAttribute('data-library-img-name'));
      });
    });

    grid.querySelectorAll('.library-image-area').forEach(area => {
      area.addEventListener('click', function (e) {
        if (e.target.closest('.library-preview-btn')) return;
        const card = this.closest('[data-library-img-path]');
        if (!card) return;
        const path = card.getAttribute('data-library-img-path');
        const name = card.getAttribute('data-library-img-name');
        if (currentLibraryTarget && currentLibraryTarget.type === 'gallery') {
          if (selectedGalleryLibraryImages.has(path)) selectedGalleryLibraryImages.delete(path);
          else selectedGalleryLibraryImages.add(path);
          updateLibraryGallerySelectionUI();
        } else {
          selectImageFromLibrary(path, name);
        }
      });
    });
    grid.querySelectorAll('.library-preview-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-path]');
        const previewRecord = customLibraryImages.find(function (item) { return item.id === card.getAttribute('data-library-img-id'); }) || githubElyFolderImages.find(function (item) { return item.id === card.getAttribute('data-library-img-id'); });
        openLibraryImagePreview(card.getAttribute('data-library-img-path'), card.getAttribute('data-library-img-name'), previewRecord && previewRecord.previewPath ? previewRecord.previewPath : '');
      });
    });

    grid.querySelectorAll('.library-move-up-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-id]');
        if (card) moveCustomLibraryImageOrder(card.getAttribute('data-library-img-id'), -1);
      });
    });

    grid.querySelectorAll('.library-move-down-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-id]');
        if (card) moveCustomLibraryImageOrder(card.getAttribute('data-library-img-id'), 1);
      });
    });

    grid.querySelectorAll('.library-card[draggable="true"]').forEach(card => {
      card.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.getAttribute('data-library-img-id'));
        this.classList.add('opacity-50');
      });
      card.addEventListener('dragend', function () {
        this.classList.remove('opacity-50');
      });
      card.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        this.classList.add('border-amber-400');
      });
      card.addEventListener('dragleave', function () {
        this.classList.remove('border-amber-400');
      });
      card.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('border-amber-400');
        moveCustomLibraryImageTo(e.dataTransfer.getData('text/plain'), this.getAttribute('data-library-img-id'));
      });
    });

    grid.querySelectorAll('.library-folder-move-select').forEach(select => {
      select.addEventListener('change', function () {
        const card = this.closest('[data-library-img-path]');
        const custom = card ? card.querySelector('.library-folder-move-custom') : null;
        if (custom) custom.classList.toggle('hidden', this.value !== 'Custom');
      });
    });

    grid.querySelectorAll('.library-move-folder-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-path]');
        const imageId = filtered.find(img => img.path === card.getAttribute('data-library-img-path'))?.id;
        if (imageId) moveCustomLibraryImageFolder(imageId, card);
      });
    });

    grid.querySelectorAll('.delete-library-image-btn').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('[data-library-img-path]');
        const imageId = filtered.find(img => img.path === card.getAttribute('data-library-img-path'))?.id;
        if (imageId) deleteCustomLibraryImage(imageId);
      });
    });
  }

  function persistCustomLibraryImages() {
    try {
      localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customLibraryImages));
    } catch (e) {}
  }

  function ensureLibraryImageIds() {
    let changed = false;
    customLibraryImages.forEach(function (image, index) {
      if (!image) return;
      if (!image.id) {
        image.id = 'img-' + Date.now() + '-' + index + '-' + Math.random().toString(36).slice(2, 8);
        changed = true;
      }
      if (!image.folder) {
        image.folder = image.category || getLibraryImageFolder(image);
        changed = true;
      }
      if (!image.category) {
        image.category = image.folder;
        changed = true;
      }
    });
    if (changed) persistCustomLibraryImages();
    return changed;
  }

  function replaceImageReferenceEverywhere(oldPath, newPath, oldDataUrl) {
    if (!oldPath || !newPath || oldPath === newPath) return;
    const values = new Set([String(oldPath), String(newPath)]);
    if (oldDataUrl) values.add(String(oldDataUrl));
    const replaceValue = function (value) {
      return values.has(String(value)) ? newPath : value;
    };
    const visit = function (value) {
      if (!value || typeof value !== 'object') return;
      if (Array.isArray(value)) {
        value.forEach(function (item, index) {
          if (typeof item === 'string') value[index] = replaceValue(item);
          else visit(item);
        });
        return;
      }
      Object.keys(value).forEach(function (key) {
        if (typeof value[key] === 'string') value[key] = replaceValue(value[key]);
        else visit(value[key]);
      });
    };
    visit(projects);
    visit(experiences);
    visit(assets);
    visit(satisfiedClients);
    visit(feedbackCodes);
    visit(initialProfile);
    visit(socialNetworksState);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (e) {}
    try { localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences)); } catch (e) {}
    try { localStorage.setItem(ASSETS_STORAGE_KEY, JSON.stringify(assets)); } catch (e) {}
  }

  function persistLibraryImmediately(action, imageName) {
    persistCustomLibraryImages();
    return syncCardsInfoImmediately().then(function () {
      showStatusNotification({
        title: 'Biblioteca guardada',
        message: (imageName ? '"' + imageName + '" ' : '') + 'se guardó inmediatamente en Google Sheets.',
        type: 'success',
        icon: '🖼️'
      });
      return true;
    }).catch(function (error) {
      console.error('[LIBRARY SHEET SYNC ERROR]', error);
      showStatusNotification({
        title: 'Error al guardar biblioteca',
        message: 'El cambio quedó aplicado localmente, pero Google Sheets no pudo actualizarse: ' + (error.message || 'Error desconocido.'),
        type: 'error',
        icon: '⚠️'
      });
      return false;
    });
  }

  async function moveCustomLibraryImageOrder(imageId, delta) {
    const index = customLibraryImages.findIndex(item => item.id === imageId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= customLibraryImages.length) return;
    const temp = customLibraryImages[index];
    customLibraryImages[index] = customLibraryImages[newIndex];
    customLibraryImages[newIndex] = temp;
    renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
    await persistLibraryImmediately('reorder', temp.name || 'Imagen');
  }

  async function moveCustomLibraryImageTo(imageId, targetId) {
    if (!imageId || !targetId || imageId === targetId) return;
    const from = customLibraryImages.findIndex(item => item.id === imageId);
    const to = customLibraryImages.findIndex(item => item.id === targetId);
    if (from < 0 || to < 0 || from === to) return;
    const item = customLibraryImages.splice(from, 1)[0];
    customLibraryImages.splice(to, 0, item);
    renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
    await persistLibraryImmediately('reorder', item.name || 'Imagen');
  }

  function openLibraryImagePreview(imagePath, imageName, previewPath) {
    const modal = document.getElementById('library-image-preview-modal');
    let image = document.getElementById('library-image-preview');
    const title = document.getElementById('library-image-preview-title');
    if (!modal || !image) return;
    const isVideo = /\.(mp4|webm|mov|m4v|ogv)(?:\?.*)?$/i.test(imagePath || imageName || '');
    if (isVideo && image.tagName.toLowerCase() !== 'video') { const video = document.createElement('video'); video.id = 'library-image-preview'; video.className = 'max-w-full max-h-[78vh] object-contain rounded-lg'; video.controls = true; image.replaceWith(video); image = video; }
    if (!isVideo && image.tagName.toLowerCase() !== 'img') { const img = document.createElement('img'); img.id = 'library-image-preview'; img.className = 'max-w-full max-h-[78vh] object-contain rounded-lg'; image.replaceWith(img); image = img; }
    image.src = previewPath || imagePath;
    if (isVideo) { image.controls = true; image.autoplay = true; image.playsInline = true; } else image.alt = imageName || 'Imagen';
    if (title) title.textContent = imageName || 'Vista previa';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLibraryImagePreview() {
    const modal = document.getElementById('library-image-preview-modal');
    if (modal) modal.classList.add('hidden');
    if (!document.getElementById('image-library-modal') || document.getElementById('image-library-modal').classList.contains('hidden')) {
      document.body.style.overflow = '';
    }
  }

  async function deleteGithubImageFile(path) {
    if (!path || !/^assets\/images\/(?:ely|moderator)\//.test(path)) return;
    const file = await getGithubFile(path);
    if (!file) return;
    await githubApiRequest('/repos/' + GITHUB_OWNER + '/' + GITHUB_REPOSITORY + '/contents/' + path.split('/').map(encodeURIComponent).join('/'), {
      method: 'DELETE',
      body: JSON.stringify({
        message: 'Delete library image ' + path.split('/').pop(),
        sha: file.sha,
        branch: GITHUB_BRANCH
      })
    });
  }

  function deleteCustomLibraryImage(imageId) {
    const image = getAllLibraryImages().find(item => item.id === imageId);
    if (!image) return;
    showConfirmModal({
      title: '¿Eliminar imagen de la biblioteca?',
      message: 'Se eliminará "' + (image.name || 'Imagen') + '" de la biblioteca. Si ya fue sincronizada, también se eliminará del repositorio.',
      icon: '🗑️',
      confirmText: 'Sí, Eliminar Imagen',
      danger: true,
      onConfirm: async function () {
        const previous = customLibraryImages.slice();
        const previousRemote = githubElyFolderImages.slice();
        customLibraryImages = customLibraryImages.filter(item => item.id !== imageId);
        githubElyFolderImages = githubElyFolderImages.filter(item => item.id !== imageId);
        renderLibraryGrid();
        try {
          const token = getGithubToken();
          if (typeof image.path === 'string' && /^\.\/assets\/images\/(?:ely|moderator)\//.test(image.path)) {
            if (!token) throw new Error('Configura tu token de GitHub para eliminar esta imagen del repositorio.');
            await deleteGithubImageFile(image.path.substring(2).split('?')[0]);
            await persistLibraryImmediately('delete', image.name || 'Imagen');
            showStatusNotification({
              title: 'Imagen Eliminada',
              message: 'La imagen fue eliminada de la biblioteca, de GitHub y de Google Sheets.',
              type: 'success',
              icon: '🗑️'
            });
          } else {
            await persistLibraryImmediately('delete', image.name || 'Imagen');
            showStatusNotification({
              title: 'Imagen Eliminada',
              message: 'La imagen fue eliminada de la biblioteca y de Google Sheets.',
              type: 'success',
              icon: '🗑️'
            });
          }
        } catch (error) {
          customLibraryImages = previous;
          githubElyFolderImages = previousRemote;
          try {
            localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customLibraryImages));
          } catch (e) {}
          renderLibraryGrid();
          showStatusNotification({
            title: 'Error al eliminar',
            message: error.message || 'No se pudo eliminar la imagen de GitHub.',
            type: 'error',
            icon: '⚠️'
          });
        }
      }
    });
  }

  function openImageLibraryModal() {
    const modal = document.getElementById('image-library-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const searchInput = document.getElementById('library-search-input');
      if (searchInput) searchInput.value = '';
      const styleEl = document.getElementById('library-folder-style');
      const customEl = document.getElementById('library-custom-folder');
      if (styleEl) styleEl.value = 'Profile';
      if (customEl) customEl.value = '';
      setLibraryFolderUI();
      renderLibraryGrid();
      loadImagesFromMainElyFolder();
      const sizeSlider = document.getElementById('library-size-slider');
      if (sizeSlider && !sizeSlider.dataset.bound) {
        sizeSlider.dataset.bound = 'true';
        sizeSlider.addEventListener('input', function () {
          renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
        });
      }
    }
  }

  function closeImageLibraryModal() {
    const modal = document.getElementById('image-library-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      currentLibraryTarget = null;
      selectedGalleryLibraryImages.clear();
      updateLibraryGallerySelectionUI();
    }
  }

  function openImageLibraryForInput(inputId, previewId) {
    currentLibraryTarget = {
      type: 'input',
      inputId: inputId,
      previewId: previewId
    };
    openImageLibraryModal();
  }

  function openVideoLibraryForInput(inputId) {
    currentLibraryTarget = { type: 'video', inputId: inputId };
    selectedLibraryFolder = '';
    openImageLibraryModal();
    renderLibraryGrid('');
  }

  function openImageLibraryForGallery(thumbsContainerId, hiddenInputId) {
    selectedGalleryLibraryImages.clear();
    currentLibraryTarget = {
      type: 'gallery',
      thumbsContainerId: thumbsContainerId,
      hiddenInputId: hiddenInputId
    };
    openImageLibraryModal();
    updateLibraryGallerySelectionUI();
  }

  if (!document.getElementById('library-selection-shake-style')) { const style=document.createElement('style'); style.id='library-selection-shake-style'; style.textContent='@keyframes librarySelectionShake{0%,100%{transform:translateX(0) rotate(0)}20%{transform:translateX(-3px) rotate(-1deg)}40%{transform:translateX(3px) rotate(1deg)}60%{transform:translateX(-2px) rotate(-0.5deg)}80%{transform:translateX(2px) rotate(0.5deg)}} .library-selection-shake{animation:librarySelectionShake .4s ease-in-out}'; document.head.appendChild(style); }

  function updateLibraryGallerySelectionUI() {
    if (!document.getElementById('library-selection-vibrate-style')) {
      const style = document.createElement('style');
      style.id = 'library-selection-vibrate-style';
      style.textContent = '@keyframes librarySelectionVibrate{0%,100%{transform:translate(0,0) rotate(0)}20%{transform:translate(-1px,1px) rotate(-0.35deg)}40%{transform:translate(1px,-1px) rotate(0.35deg)}60%{transform:translate(-1px,-1px) rotate(-0.3deg)}80%{transform:translate(1px,1px) rotate(0.3deg)}} .library-selection-vibrate{animation:librarySelectionVibrate .22s ease-in-out infinite}';
      document.head.appendChild(style);
    }
    const applyBtn = document.getElementById('library-gallery-apply-btn');
    const help = document.getElementById('library-selection-help');
    const count = selectedGalleryLibraryImages.size;
    if (applyBtn) {
      applyBtn.classList.toggle('hidden', !(currentLibraryTarget && currentLibraryTarget.type === 'gallery'));
      applyBtn.textContent = 'Agregar seleccionadas (' + count + ')';
      applyBtn.disabled = count === 0;
      applyBtn.classList.toggle('opacity-50', count === 0);
    }
    if (help) help.textContent = currentLibraryTarget && currentLibraryTarget.type === 'gallery' ? 'Selecciona varias imágenes y luego pulsa "Agregar seleccionadas".' : 'Haz clic en "Seleccionar" para asignar una imagen.';
    document.querySelectorAll('#library-images-grid [data-library-img-path]').forEach(card => {
      const selected = selectedGalleryLibraryImages.has(card.getAttribute('data-library-img-path'));
      card.classList.toggle('ring-2', selected);
      card.classList.toggle('ring-amber-400', selected);
      card.classList.toggle('library-selection-vibrate', selected);
      const button = card.querySelector('.select-image-btn');
      if (button && currentLibraryTarget && currentLibraryTarget.type === 'gallery') button.textContent = selected ? '✓ Seleccionada' : 'Seleccionar';
    });
  }

  function applySelectedGalleryLibraryImages() {
    if (!currentLibraryTarget || currentLibraryTarget.type !== 'gallery' || selectedGalleryLibraryImages.size === 0) return;
    const inputEl = document.getElementById(currentLibraryTarget.hiddenInputId);
    if (!inputEl) return;
    const items = inputEl.value ? inputEl.value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean) : [];
    selectedGalleryLibraryImages.forEach(path => { if (!items.includes(path)) items.push(path); });
    inputEl.value = items.join('\n');
    renderGalleryThumbnails(currentLibraryTarget.thumbsContainerId, currentLibraryTarget.hiddenInputId);
    const count = selectedGalleryLibraryImages.size;
    selectedGalleryLibraryImages.clear();
    showStatusNotification({ title: 'Galería actualizada', message: 'Se agregaron ' + count + ' imágenes.', type: 'success', icon: '📸' });
    closeImageLibraryModal();
  }

  function selectImageFromLibrary(imagePath, imageName) {
    if (!currentLibraryTarget) {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(imagePath);
      showStatusNotification({ title: 'Ruta Copiada', message: 'Ruta copiada al portapapeles: ' + imagePath, type: 'info', icon: '📋' });
      closeImageLibraryModal();
      return;
    }
    if (currentLibraryTarget.type === 'input') {
      const inputEl = document.getElementById(currentLibraryTarget.inputId);
      if (inputEl) inputEl.value = imagePath;
      if (currentLibraryTarget.previewId) {
        const previewEl = document.getElementById(currentLibraryTarget.previewId);
        if (previewEl) setMediaPreviewElement(previewEl, imagePath, imageName || 'Vista previa');
      }
      showStatusNotification({ title: 'Imagen Asignada', message: 'Se asignó "' + (imageName || imagePath) + '" correctamente.', type: 'success', icon: '🖼️' });
      closeImageLibraryModal();
      return;
    }
    if (currentLibraryTarget.type === 'video') {
      if (!isLocalVideoMedia(imagePath)) { showStatusNotification({ title: 'Selecciona un video', message: 'El archivo seleccionado no es un video compatible.', type: 'error', icon: '⚠️' }); return; }
      const inputEl = document.getElementById(currentLibraryTarget.inputId);
      if (inputEl) inputEl.value = imagePath;
      showStatusNotification({ title: 'Video asignado', message: imageName || imagePath, type: 'success', icon: '▶️' });
      closeImageLibraryModal();
      return;
    }
    if (currentLibraryTarget.type === 'gallery') {
      if (selectedGalleryLibraryImages.has(imagePath)) selectedGalleryLibraryImages.delete(imagePath);
      else selectedGalleryLibraryImages.add(imagePath);
      updateLibraryGallerySelectionUI();
    }
  }

  function renderGalleryThumbnails(containerId, inputId) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    if (!container || !input) return;
    const items = input.value ? input.value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean) : [];
    container.innerHTML = '';
    const parent = container.parentElement;
    const slider = parent ? parent.querySelector('.gallery-size-slider') : null;
    const valueLabel = parent ? parent.querySelector('.gallery-size-value') : null;
    const savedSize = Math.max(48, Math.min(180, parseInt(container.dataset.thumbSize || '72', 10) || 72));
    container.dataset.thumbSize = String(savedSize);
    if (slider) {
      slider.value = String(savedSize);
      if (valueLabel) valueLabel.textContent = savedSize + 'px';
      slider.oninput = function () {
        const size = parseInt(this.value, 10) || 72;
        container.dataset.thumbSize = String(size);
        if (valueLabel) valueLabel.textContent = size + 'px';
        container.querySelectorAll('.gallery-thumb').forEach(el => { el.style.width = size + 'px'; el.style.height = size + 'px'; });
      };
    }
    if (items.length === 0) {
      container.innerHTML = '<span class="text-[11px] text-slate-500 italic py-1">Sin imágenes secundarias aún.</span>';
      return;
    }
    items.forEach((src, idx) => {
      const thumb = document.createElement('div');
      const size = savedSize;
      thumb.className = 'relative group rounded-lg overflow-hidden border border-[#2c3345] bg-[#0c0e14] shrink-0 gallery-thumb cursor-grab';
      thumb.draggable = true;
      thumb.style.width = size + 'px';
      thumb.style.height = size + 'px';
      thumb.innerHTML = (isLocalVideoMedia(src) ? '<video src="' + src + '" class="w-full h-full object-cover" muted playsinline preload="metadata"></video><span class="absolute bottom-1 left-1 rounded bg-black/80 px-1 py-0.5 text-[8px] text-white">▶ VIDEO</span>' : '<img src="' + src + '" alt="Screenshot ' + (idx + 1) + '" class="w-full h-full object-cover" onerror="this.removeAttribute(\'src\'); this.style.display=\'none\'" />') + '<span class="absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[9px] text-white font-mono">' + (idx + 1) + '</span><button type="button" title="Eliminar de galería" class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-400 font-bold text-xs transition-opacity cursor-pointer">✕</button>';
      thumb.querySelector('button').addEventListener('click', function(e) {
        e.stopPropagation();
        items.splice(idx, 1);
        input.value = items.join('\n');
        renderGalleryThumbnails(containerId, inputId);
      });
      thumb.addEventListener('dragstart', function(e) { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', String(idx)); thumb.classList.add('opacity-50'); });
      thumb.addEventListener('dragend', function() { thumb.classList.remove('opacity-50'); });
      thumb.addEventListener('dragover', function(e) { e.preventDefault(); thumb.classList.add('border-amber-400'); });
      thumb.addEventListener('dragleave', function() { thumb.classList.remove('border-amber-400'); });
      thumb.addEventListener('drop', function(e) {
        e.preventDefault();
        thumb.classList.remove('border-amber-400');
        const from = parseInt(e.dataTransfer.getData('text/plain'), 10);
        if (Number.isNaN(from) || from === idx) return;
        const moved = items.splice(from, 1)[0];
        items.splice(idx, 0, moved);
        input.value = items.join('\n');
        renderGalleryThumbnails(containerId, inputId);
      });
      container.appendChild(thumb);
    });
  }

  function addCustomImageToLibrary(name, dataUrl, onUploaded) {
    const folder = getLibraryFolderConfig();
    const normalizedName = String(name || 'Imagen Subida').trim().toLowerCase();
    const normalizedFolder = normalizeLibraryFolder(folder);
    const duplicate = customLibraryImages.find(function (item) {
      return typeof item.path === 'string' && item.path === dataUrl;
    });
    if (duplicate) {
      if (typeof onUploaded === 'function') onUploaded(duplicate, dataUrl);
      renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
      return duplicate;
    }

    const newImg = {
      id: 'img-' + Date.now() + '-' + Math.random().toString(36).substring(2, 10),
      name: name || 'Imagen Subida',
      category: folder,
      folder: folder,
      path: dataUrl
    };
    customLibraryImages.unshift(newImg);
    persistCustomLibraryImages();
    renderLibraryGrid();

    const uploadKey = normalizedFolder + '|' + normalizedName + '|' + dataUrl;
    let uploadPromise = libraryUploadInFlight.get(uploadKey);
    if (!uploadPromise) {
      uploadPromise = uploadCustomImageImmediately(newImg, dataUrl);
      libraryUploadInFlight.set(uploadKey, uploadPromise);
      uploadPromise.finally(function () {
        libraryUploadInFlight.delete(uploadKey);
      });
    }
    uploadPromise.then(function () {
      if (typeof onUploaded === 'function') onUploaded(newImg, dataUrl);
    });
    return newImg;
  }

  async function prepareLibraryUploadDataUrl(dataUrl, name) {
    const maxBytes = 6500000;
    if (!dataUrl || dataUrl.length <= maxBytes) return dataUrl;
    if (!/^data:image\/(png|jpeg|jpg|webp);base64,/i.test(dataUrl)) return dataUrl;
    return new Promise(function (resolve) {
      const img = new Image();
      img.onload = function () {
        const maxDimension = 2560;
        const scale = Math.min(1, maxDimension / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
        canvas.height = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
        const ctx = canvas.getContext('2d');
        if (!ctx) { resolve(dataUrl); return; }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let compressed = canvas.toDataURL('image/webp', 0.86);
        if (compressed.length > maxBytes) compressed = canvas.toDataURL('image/jpeg', 0.84);
        resolve(compressed.length < dataUrl.length ? compressed : dataUrl);
      };
      img.onerror = function () { resolve(dataUrl); };
      img.src = dataUrl;
    });
  }

  async function uploadCustomImageImmediately(image, dataUrl) {
    if (!image || !dataUrl || !dataUrl.startsWith('data:image/')) return false;

    try {
      if (!getGithubToken()) throw new Error('No se configuró el token de GitHub para guardar el archivo de imagen.');
      const prepared = await prepareLibraryUploadDataUrl(dataUrl, image.name);
      const extension = imageExtension(prepared);
      const folder = normalizeLibraryFolder(image.folder || getLibraryFolderConfig());
      const filename = sanitizeGithubImageName(image.name, extension);
      const githubPath = 'assets/images/ely/' + folder + '/' + filename;
      showStatusNotification({
        title: 'Subiendo imagen',
        message: '"' + (image.name || 'Imagen') + '" se está subiendo a GitHub...',
        type: 'info',
        icon: '☁️'
      });

      await putGithubFile(githubPath, dataUrlToBase64(prepared), 'Upload library image ' + filename);

      const previousPath = image.path;
      image.path = './' + githubPath;
      image.previewPath = prepared;
      replaceImageReferenceEverywhere(previousPath, image.path, dataUrl);
      image.previewPath = prepared;

      if (currentLibraryTarget) {
        if (currentLibraryTarget.type === 'input') {
          const inputEl = document.getElementById(currentLibraryTarget.inputId);
          const previewEl = currentLibraryTarget.previewId ? document.getElementById(currentLibraryTarget.previewId) : null;
          if (inputEl && (!inputEl.value || inputEl.value === previousPath || inputEl.value === dataUrl)) inputEl.value = image.path;
          if (previewEl && (!previewEl.src || previewEl.src === previousPath || previewEl.src === dataUrl)) {
            previewEl.onerror = null;
            previewEl.src = image.path;
          }
        } else if (currentLibraryTarget.type === 'gallery') {
          const galleryInput = document.getElementById(currentLibraryTarget.hiddenInputId);
          if (galleryInput) {
            const current = galleryInput.value ? galleryInput.value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean) : [];
            const replaced = current.map(function (item) {
              return item === previousPath || item === dataUrl ? image.path : item;
            });
            galleryInput.value = Array.from(new Set(replaced)).join('\n');
            renderGalleryThumbnails(currentLibraryTarget.thumbsContainerId, currentLibraryTarget.hiddenInputId);
          }
          if (selectedGalleryLibraryImages.has(previousPath) || selectedGalleryLibraryImages.has(dataUrl)) {
            selectedGalleryLibraryImages.delete(previousPath);
            selectedGalleryLibraryImages.delete(dataUrl);
            selectedGalleryLibraryImages.add(image.path);
            updateLibraryGallerySelectionUI();
          }
        }
      }

      renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
      await persistLibraryImmediately('upload', image.name || 'Imagen');
      showStatusNotification({
        title: 'Imagen subida',
        message: '"' + (image.name || 'Imagen') + '" ya está disponible y su referencia quedó guardada en Google Sheets.',
        type: 'success',
        icon: '☁️'
      });
      return true;
    } catch (error) {
      console.error('[LIBRARY UPLOAD ERROR]', error);
      showStatusNotification({
        title: 'No se pudo subir',
        message: '"' + (image.name || 'Imagen') + '" quedó disponible localmente. No se publicó en Google Sheets porque el archivo todavía no tiene una ruta permanente.',
        type: 'error',
        icon: '⚠️'
      });
      return false;
    }
  }

  function setupImageDropzones() {
    if (document.body.dataset.libraryDropzonesInitialized === '1') {
      setLibraryFolderUI();
      return;
    }
    document.body.dataset.libraryDropzonesInitialized = '1';
    const folderStyle = document.getElementById('library-folder-style');
    if (folderStyle && folderStyle.dataset.libraryFolderBound !== '1') {
      folderStyle.dataset.libraryFolderBound = '1';
      folderStyle.addEventListener('change', setLibraryFolderUI);
    }
    setLibraryFolderUI();

    // 1. Search in library
    const searchInput = document.getElementById('library-search-input');
    if (searchInput && searchInput.dataset.librarySearchBound !== '1') {
      searchInput.dataset.librarySearchBound = '1';
      searchInput.addEventListener('input', function (e) {
        renderLibraryGrid(e.target.value);
      });
    }

    // 2. Library modal upload dropzone
    const libDropzone = document.getElementById('library-upload-dropzone');
    const libFileInput = document.getElementById('library-upload-file-input');

    if (libDropzone && libFileInput && libDropzone.dataset.libraryUploadBound !== '1') {
      libDropzone.dataset.libraryUploadBound = '1';
      libDropzone.addEventListener('click', () => libFileInput.click());
      libDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        libDropzone.classList.add('border-amber-400', 'bg-amber-400/10');
      });
      libDropzone.addEventListener('dragleave', () => {
        libDropzone.classList.remove('border-amber-400', 'bg-amber-400/10');
      });
      libDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        libDropzone.classList.remove('border-amber-400', 'bg-amber-400/10');
        if (e.dataTransfer && e.dataTransfer.files) {
          handleMultipleFilesUpload(e.dataTransfer.files);
        }
      });
      libFileInput.addEventListener('change', (e) => {
        if (e.target.files) {
          handleMultipleFilesUpload(e.target.files);
          e.target.value = '';
        }
      });
    }

    function handleMultipleFilesUpload(fileList) {
      const files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
      if (files.length === 0) return;

      let processed = 0;
      let firstAdded = null;
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          const added = addCustomImageToLibrary(file.name, dataUrl);
          if (!firstAdded) firstAdded = added;
          processed++;
          if (processed === files.length) {
            showStatusNotification({
              title: 'Imágenes Guardadas',
              message: `Se agregaron ${files.length} imágenes a tu biblioteca local.`,
              type: 'success',
              icon: '☁️'
            });
            if (currentLibraryTarget && currentLibraryTarget.type === 'gallery') {
              renderLibraryGrid(document.getElementById('library-search-input')?.value || '');
              updateLibraryGallerySelectionUI();
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }

    // Helper for single image dropzones
    function bindSingleDropzone(dropzoneId, fileInputId, inputId, previewId) {
      const dz = document.getElementById(dropzoneId);
      const fi = document.getElementById(fileInputId);
      const inp = document.getElementById(inputId);
      const prev = document.getElementById(previewId);

      if (!dz) return;
      if (fi) {
        dz.addEventListener('click', () => fi.click());
        fi.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            processSingleFile(e.target.files[0]);
            e.target.value = '';
          }
        });
      }
      dz.addEventListener('dragover', (e) => {
        e.preventDefault();
        dz.classList.add('border-amber-400', 'bg-amber-400/10');
      });
      dz.addEventListener('dragleave', () => {
        dz.classList.remove('border-amber-400', 'bg-amber-400/10');
      });
      dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('border-amber-400', 'bg-amber-400/10');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          processSingleFile(e.dataTransfer.files[0]);
        }
      });

      function processSingleFile(file) {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (inp) inp.value = dataUrl;
          if (prev) {
            prev.onerror = null;
            prev.src = dataUrl;
          }
          addCustomImageToLibrary(file.name, dataUrl, function(uploadedImage) {
            if (!uploadedImage || !uploadedImage.path || uploadedImage.path.startsWith('data:image/')) return;
            if (inp) inp.value = uploadedImage.path;
            if (prev) {
              prev.onerror = null;
              prev.src = uploadedImage.path;
            }
          });
          showStatusNotification({
            title: 'Imagen Cargada',
            message: `"${file.name}" cargada correctamente.`,
            type: 'success',
            icon: '🖼️'
          });
        };
        reader.readAsDataURL(file);
      }
    }

    // Helper for gallery dropzones
    function bindGalleryDropzone(dropzoneId, fileInputId, containerId, hiddenInputId) {
      const dz = document.getElementById(dropzoneId);
      const fi = document.getElementById(fileInputId);
      const hiddenInput = document.getElementById(hiddenInputId);

      if (!dz) return;
      if (fi) {
        dz.addEventListener('click', () => fi.click());
        fi.addEventListener('change', (e) => {
          if (e.target.files) {
            processGalleryFiles(e.target.files);
            e.target.value = '';
          }
        });
      }
      dz.addEventListener('dragover', (e) => {
        e.preventDefault();
        dz.classList.add('border-amber-400', 'bg-amber-400/10');
      });
      dz.addEventListener('dragleave', () => {
        dz.classList.remove('border-amber-400', 'bg-amber-400/10');
      });
      dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('border-amber-400', 'bg-amber-400/10');
        if (e.dataTransfer && e.dataTransfer.files) {
          processGalleryFiles(e.dataTransfer.files);
        }
      });

      function processGalleryFiles(fileList) {
        const files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
        if (files.length === 0) return;
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target.result;
            const added = addCustomImageToLibrary(file.name, dataUrl, function(uploadedImage) {
              if (!hiddenInput || !uploadedImage || !uploadedImage.path || uploadedImage.path.startsWith('data:image/')) return;
              const current = hiddenInput.value ? hiddenInput.value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean) : [];
              const replaced = current.map(function(item) {
                return item === dataUrl ? uploadedImage.path : item;
              });
              hiddenInput.value = Array.from(new Set(replaced)).join('\n');
              renderGalleryThumbnails(containerId, hiddenInputId);
            });
            if (hiddenInput) {
              const current = hiddenInput.value ? hiddenInput.value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean) : [];
              const resolvedPath = added && added.path && !added.path.startsWith('data:image/') ? added.path : dataUrl;
              if (!current.includes(resolvedPath)) current.push(resolvedPath);
              hiddenInput.value = Array.from(new Set(current)).join('\n');
              renderGalleryThumbnails(containerId, hiddenInputId);
            }
          };
          reader.readAsDataURL(file);
        });
        showStatusNotification({
          title: 'Galería Actualizada',
          message: `Las ${files.length} capturas se están cargando inmediatamente.`,
          type: 'success',
          icon: '📸'
        });
      }
    }

    bindSingleDropzone('edit-proj-icon-dropzone', 'edit-proj-icon-file', 'edit-proj-icon', 'edit-proj-icon-preview');
    bindSingleDropzone('edit-proj-cover-dropzone', 'edit-proj-cover-file', 'edit-proj-cover', 'edit-proj-cover-preview');
    bindGalleryDropzone('edit-proj-gallery-dropzone', 'edit-proj-gallery-files', 'edit-proj-gallery-thumbs', 'edit-proj-gallery');

    bindSingleDropzone('new-proj-icon-dropzone', 'new-proj-icon-file', 'new-proj-icon', 'new-proj-icon-preview');
    bindSingleDropzone('new-proj-cover-dropzone', 'new-proj-cover-file', 'new-proj-cover', 'new-proj-cover-preview');
    bindGalleryDropzone('new-proj-gallery-dropzone', 'new-proj-gallery-files', 'new-proj-gallery-thumbs', 'new-proj-gallery');

    bindSingleDropzone('test-form-avatar-dropzone', 'test-form-avatar-file', 'test-form-avatar', 'test-form-avatar-preview');
  }


  // Redes sociales configurables
  let socialNetworksState = [];
  const SOCIAL_NETWORK_TYPES = {
    youtube: { name: 'YouTube', icon: '▶️', color: 'youtube' },
    discord: { name: 'Discord', icon: '💬', color: 'discord' },
    instagram: { name: 'Instagram', icon: '◎', color: 'instagram' },
    tiktok: { name: 'TikTok', icon: '♪', color: 'tiktok' },
    twitch: { name: 'Twitch', icon: '◉', color: 'twitch' },
    facebook: { name: 'Facebook', icon: 'f', color: 'facebook' },
    twitter: { name: 'X / Twitter', icon: '𝕏', color: 'twitter' },
    linkedin: { name: 'LinkedIn', icon: 'in', color: 'linkedin' },
    github: { name: 'GitHub', icon: '◖', color: 'github' },
    whatsapp: { name: 'WhatsApp', icon: '🟢', color: 'whatsapp' },
    other: { name: 'Otra red', icon: '🌐', color: 'other' }
  };

  const SOCIAL_NETWORK_STYLES = {
    youtube: { accent: '#ff0033', soft: 'rgba(255,0,51,.12)', border: 'rgba(255,0,51,.32)', hover: 'rgba(255,0,51,.58)' },
    discord: { accent: '#5865f2', soft: 'rgba(88,101,242,.14)', border: 'rgba(88,101,242,.34)', hover: 'rgba(88,101,242,.58)' },
    instagram: { accent: '#e1306c', soft: 'rgba(225,48,108,.13)', border: 'rgba(225,48,108,.34)', hover: 'rgba(225,48,108,.58)' },
    tiktok: { accent: '#25f4ee', soft: 'rgba(37,244,238,.10)', border: 'rgba(37,244,238,.30)', hover: 'rgba(254,44,85,.58)' },
    twitch: { accent: '#9146ff', soft: 'rgba(145,70,255,.14)', border: 'rgba(145,70,255,.34)', hover: 'rgba(145,70,255,.58)' },
    facebook: { accent: '#1877f2', soft: 'rgba(24,119,242,.14)', border: 'rgba(24,119,242,.34)', hover: 'rgba(24,119,242,.58)' },
    twitter: { accent: '#e7e9ea', soft: 'rgba(231,233,234,.08)', border: 'rgba(231,233,234,.22)', hover: 'rgba(231,233,234,.45)' },
    linkedin: { accent: '#0a66c2', soft: 'rgba(10,102,194,.14)', border: 'rgba(10,102,194,.34)', hover: 'rgba(10,102,194,.58)' },
    github: { accent: '#f0f6fc', soft: 'rgba(240,246,252,.08)', border: 'rgba(240,246,252,.20)', hover: 'rgba(240,246,252,.42)' },
    whatsapp: { accent: '#25d366', soft: 'rgba(37,211,102,.13)', border: 'rgba(37,211,102,.34)', hover: 'rgba(37,211,102,.58)' },
    other: { accent: '#22d3ee', soft: 'rgba(34,211,238,.12)', border: 'rgba(34,211,238,.30)', hover: 'rgba(34,211,238,.55)' }
  };

  function getSocialNetworks() {
    return socialNetworksState;
  }

  function getSocialNetworkType(item) {
    const raw = String(item && item.networkType || '').toLowerCase();
    if (SOCIAL_NETWORK_TYPES[raw]) return raw;
    const id = String(item && item.id || '').toLowerCase();
    if (SOCIAL_NETWORK_TYPES[id]) return id;
    const name = String(item && item.name || '').toLowerCase();
    if (name.includes('youtube')) return 'youtube';
    if (name.includes('discord')) return 'discord';
    if (name.includes('instagram')) return 'instagram';
    if (name.includes('tiktok')) return 'tiktok';
    if (name.includes('twitch')) return 'twitch';
    if (name.includes('facebook')) return 'facebook';
    if (name === 'x' || name.includes('twitter')) return 'twitter';
    if (name.includes('linkedin')) return 'linkedin';
    if (name.includes('github')) return 'github';
    if (name.includes('whatsapp')) return 'whatsapp';
    return 'other';
  }

  function extractYouTubeChannelId(value) {
    const text = String(value || '').trim();
    if (!text) return '';
    if (/^UC[a-zA-Z0-9_-]{20,}$/.test(text)) return text;
    const match = text.match(/(?:channel[\/=]|channel_id=)(UC[a-zA-Z0-9_-]{20,})/i);
    return match ? match[1] : '';
  }

  function normalizeYouTubeStats(stats) {
    const source = stats && typeof stats === 'object' ? stats : {};
    return {
      subscribers: Math.max(0, Number(source.subscribers ?? source.subscriberCount) || 0),
      videos: Math.max(0, Number(source.videos ?? source.videoCount) || 0),
      views: Math.max(0, Number(source.views ?? source.viewCount) || 0)
    };
  }

  function extractDiscordInviteCode(value) {
    const text = String(value || '').trim();
    if (!text) return '';
    const match = text.match(/(?:discord(?:\.gg|\.com\/invite)\/)([a-zA-Z0-9-]+)/i);
    return match ? match[1] : (text.indexOf('/') === -1 ? text : '');
  }

  function normalizeDiscordStats(stats) {
    const source = stats && typeof stats === 'object' ? stats : {};
    return {
      members: Math.max(0, Number(source.members ?? source.memberCount) || 0),
      online: Math.max(0, Number(source.online ?? source.onlineCount) || 0)
    };
  }

  function normalizeSocialNetwork(item, index) {
    const networkType = getSocialNetworkType(item);
    const defaults = SOCIAL_NETWORK_TYPES[networkType] || SOCIAL_NETWORK_TYPES.other;
    const youtubeChannelId = extractYouTubeChannelId(item && (item.youtubeChannelId || item.url || ''));
    const youtubeStats = normalizeYouTubeStats(item && item.youtubeStats);
    const discordStats = item && item.discordStats && typeof item.discordStats === 'object' ? item.discordStats : {};
    const instagramStats = item && item.instagramStats && typeof item.instagramStats === 'object' ? item.instagramStats : {};
    return {
      id: String(item && item.id || ('social-' + Date.now() + '-' + index)),
      order: Number.isFinite(Number(item && item.order)) ? Number(item.order) : index,
      networkType: networkType,
      name: String(item && item.name || defaults.name),
      icon: String(item && item.icon || defaults.icon),
      color: String(item && item.color || defaults.color),
      url: String(item && item.url || ''),
      countLabel: String(item && item.countLabel || (networkType === 'youtube' ? 'Suscriptores' : 'Usuarios')),
      countValue: networkType === 'youtube' ? (Number(item && item.countValue) || youtubeStats.subscribers) : (networkType === 'instagram' ? (Number(item && item.countValue) || Number(instagramStats.followers) || 0) : (Number(item && item.countValue) || 0)),
      countMode: networkType === 'youtube' ? 'youtube' : (networkType === 'discord' ? 'discord' : (item && item.countMode === 'livecounts' ? 'livecounts' : (item && item.countMode === 'url' ? 'url' : 'manual'))),
      countUrl: String(item && item.countUrl || ''),
      youtubeChannelId: youtubeChannelId,
      youtubeStats: youtubeStats,
      discordGuildId: String(item && item.discordGuildId || ''),
      discordInviteCode: String(item && item.discordInviteCode || extractDiscordInviteCode(item && item.url || '')),
      discordStats: {
        members: Math.max(0, Number(discordStats.members ?? discordStats.memberCount) || Number(item && item.countValue) || 0),
        online: Math.max(0, Number(discordStats.online ?? discordStats.onlineCount) || 0)
      },
      instagramUsername: String(item && item.instagramUsername || extractInstagramUsername(item && item.url || '')),
      instagramStats: {
        followers: Math.max(0, Number(instagramStats.followers ?? instagramStats.followerCount) || Number(item && item.countValue) || 0),
        posts: Math.max(0, Number(instagramStats.posts ?? instagramStats.postCount) || 0)
      },
      enabled: !item || item.enabled !== false
    };
  }

  function extractInstagramUsername(value) {
    const text = String(value || '').trim();
    if (!text) return '';
    const match = text.match(/instagram\.com\/([a-zA-Z0-9._]+)\/?/i);
    return match ? match[1] : text.replace(/^@/, '').split(/[/?#]/)[0];
  }

  function normalizeInstagramStats(stats) {
    const source = stats && typeof stats === 'object' ? stats : {};
    return {
      followers: Math.max(0, Number(source.followers ?? source.followerCount ?? source.followersCount) || 0),
      posts: Math.max(0, Number(source.posts ?? source.postCount ?? source.postsCount ?? source.mediaCount) || 0)
    };
  }

  function escapeSocialText(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function escapeSocialAttr(value) {
    return escapeSocialText(value).replace(/javascript:/gi, '');
  }

  function escapeSocialJs(value) {
    return String(value == null ? '' : value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  }

  function getSocialNetworkStyle(networkType) {
    return SOCIAL_NETWORK_STYLES[networkType] || SOCIAL_NETWORK_STYLES.other;
  }

  function formatSocialNumber(value) {
    return (Number(value) || 0).toLocaleString('es-DO');
  }

  function renderSocialNetworks() {
    const grid = document.getElementById('social-networks-grid');
    if (!grid) return;
    const list = getSocialNetworks().map(normalizeSocialNetwork).filter(function(item) { return item.enabled; });
    if (!list.length) {
      grid.innerHTML = '<div class="col-span-full text-center py-10 text-sm text-slate-500">No hay redes configuradas.</div>';
      return;
    }
    grid.innerHTML = list.map(function(item, index) {
      const stats = item.youtubeStats;
      const style = getSocialNetworkStyle(item.networkType);
      const safeId = escapeSocialJs(item.id);
      const body = item.networkType === 'youtube'
        ? '<div class="grid grid-cols-3 gap-2 mt-4">' +
            '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Subs</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(stats.subscribers) + '</div></div>' +
            '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Videos</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(stats.videos) + '</div></div>' +
            '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Views</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(stats.views) + '</div></div>' +
          '</div>'
        : item.networkType === 'discord'
          ? '<div class="grid grid-cols-2 gap-2 mt-4">' +
              '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Miembros</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(item.discordStats.members) + '</div></div>' +
              '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Online</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(item.discordStats.online) + '</div></div>' +
            '</div>' +
            '<div class="mt-2 text-[9px] text-slate-500 flex items-center gap-1.5"><span class="inline-block w-1.5 h-1.5 rounded-full" style="background:' + style.accent + '"></span>Datos del widget de Discord</div>'
          : item.networkType === 'instagram'
            ? '<div class="grid grid-cols-2 gap-2 mt-4">' +
                '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Seguidores</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(item.instagramStats.followers) + '</div></div>' +
                '<div class="rounded-xl border p-2.5 text-center" style="background:' + style.soft + ';border-color:' + style.border + '"><div class="text-[9px] uppercase tracking-wider text-slate-500">Posts</div><div class="text-sm font-bold font-mono mt-1" style="color:' + style.accent + '">' + formatSocialNumber(item.instagramStats.posts) + '</div></div>' +
              '</div>' +
              '<div class="mt-2 text-[9px] text-slate-500 flex items-center gap-1.5"><span class="inline-block w-1.5 h-1.5 rounded-full" style="background:' + style.accent + '"></span>@' + escapeSocialText(item.instagramUsername || extractInstagramUsername(item.url)) + '</div>'
            : '<div class="mt-4 flex items-center justify-between rounded-xl border px-3 py-2.5" style="background:' + style.soft + ';border-color:' + style.border + '"><span class="text-[10px] text-slate-500">' + escapeSocialText(item.countLabel) + '</span><span class="font-mono text-sm font-bold" style="color:' + style.accent + '">' + formatSocialNumber(item.countValue) + '</span></div>';
      return '<article draggable="' + (isModerator && !visitorPreviewMode ? 'true' : 'false') + '" data-social-id="' + escapeSocialAttr(item.id) + '" data-social-order="' + index + '" class="social-network-card h-full flex flex-col rounded-2xl bg-[#0e1118] border p-4 transition-all ' + (isModerator && !visitorPreviewMode ? 'cursor-grab active:cursor-grabbing' : '') + '" style="border-color:' + style.border + '">' +
        '<div class="flex items-start justify-between gap-3">' +
          '<div class="flex items-center gap-3 min-w-0">' +
            '<div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold border" style="background:' + style.soft + ';border-color:' + style.border + ';color:' + style.accent + '">' + escapeSocialText(item.icon) + '</div>' +
            '<div class="min-w-0"><h4 class="font-bold text-white truncate">' + escapeSocialText(item.name) + '</h4><p class="text-[10px] uppercase tracking-wider font-semibold" style="color:' + style.accent + '">' + escapeSocialText(SOCIAL_NETWORK_TYPES[item.networkType]?.name || item.networkType) + '</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="flex-1">' + body + '</div>' +
        '<div class="mt-4 flex gap-2 items-stretch">' +
          (item.url ? '<a href="' + escapeSocialAttr(item.url) + '" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-3 py-2 rounded-lg text-[11px] font-bold transition-all" style="background:' + style.accent + ';color:#05070a">Visitar →</a>' : '<span class="flex-1 text-center px-3 py-2 rounded-lg bg-white/5 text-slate-500 text-[11px]">Sin enlace</span>') +
          (isModerator && !visitorPreviewMode ? '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.editSocialNetwork(\'' + safeId + '\')" class="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold hover:bg-white/10">Editar</button>' : '') +
        '</div>' +
      '</article>';
    }).join('');
    setupSocialNetworkDragAndDrop();
  }

  function setupSocialNetworkDragAndDrop() {
    const grid = document.getElementById('social-networks-grid');
    if (!grid || !isModerator || visitorPreviewMode) return;

    const cards = Array.from(grid.querySelectorAll('.social-network-card[draggable="true"]'));
    cards.forEach(function(card) {
      if (card.dataset.dragBound === '1') return;
      card.dataset.dragBound = '1';

      card.addEventListener('dragstart', function(event) {
        card.classList.add('opacity-50', 'scale-[0.98]');
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/plain', card.getAttribute('data-social-id') || '');
        }
      });

      card.addEventListener('dragend', function() {
        card.classList.remove('opacity-50', 'scale-[0.98]');
        cards.forEach(function(item) { item.classList.remove('border-cyan-400', 'bg-cyan-400/5'); });
      });

      card.addEventListener('dragover', function(event) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
        card.classList.add('border-cyan-400', 'bg-cyan-400/5');
      });

      card.addEventListener('dragleave', function() {
        card.classList.remove('border-cyan-400', 'bg-cyan-400/5');
      });

      card.addEventListener('drop', function(event) {
        event.preventDefault();
        card.classList.remove('border-cyan-400', 'bg-cyan-400/5');

        const draggedId = event.dataTransfer ? event.dataTransfer.getData('text/plain') : '';
        const targetId = card.getAttribute('data-social-id') || '';
        if (!draggedId || !targetId || draggedId === targetId) return;

        const current = getSocialNetworks().slice();
        const from = current.findIndex(function(item) { return String(item.id) === String(draggedId); });
        const to = current.findIndex(function(item) { return String(item.id) === String(targetId); });
        if (from < 0 || to < 0 || from === to) return;

        const moved = current.splice(from, 1)[0];
        current.splice(to, 0, moved);
        current.forEach(function(item, itemIndex) { item.order = itemIndex; });
        socialNetworksState = current;

        renderSocialNetworks();
        renderSocialNetworksManager();

        syncLocalDataToGoogleSheets().then(function() {
          showStatusNotification({
            title: 'Orden guardado',
            message: 'El orden de las redes se guardó en Google Sheets.',
            type: 'success',
            icon: '↕'
          });
        }).catch(function(error) {
          console.error('[SOCIAL ORDER]', error);
          showStatusNotification({
            title: 'Orden actualizado',
            message: 'El nuevo orden quedó aplicado en pantalla, pero Google Sheets no respondió.',
            type: 'warning',
            icon: '⚠️'
          });
        });
      });
    });
  }

  async function openSocialNetworksModal() {
    const modal = document.getElementById('social-networks-modal');
    const grid = document.getElementById('social-networks-grid');
    if (!modal) return;

    modal.classList.remove('hidden');

    if (grid) {
      grid.innerHTML = '<div class="col-span-full flex flex-col items-center justify-center py-12 text-center">' +
        '<div class="w-10 h-10 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin mb-4"></div>' +
        '<div class="text-sm font-semibold text-white">Redes sociales</div>' +
        '<div class="text-[11px] text-slate-500 mt-1">Información cargada del portafolio</div>' +
      '</div>';
    }

    const manager = document.getElementById('social-networks-manager');
    if (manager) manager.innerHTML = '';

    renderSocialNetworks();
    renderSocialNetworksManager();
    refreshAllSocialNetworkCounts();
  }

  function copySocialNetworksLink() {
    const directUrl = window.location.origin + window.location.pathname + '?redes';
    const copyFallback = function () {
      window.prompt('Copia este enlace:', directUrl);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(directUrl).then(function () {
        showStatusNotification({
          title: 'Enlace de Redes Copiado',
          message: 'El enlace directo a este panel fue copiado al portapapeles.',
          type: 'success',
          icon: '🔗'
        });
      }).catch(copyFallback);
    } else {
      copyFallback();
    }
  }

  function closeSocialNetworksModal() {
    const modal = document.getElementById('social-networks-modal');
    if (modal) modal.classList.add('hidden');
    const params = new URLSearchParams(window.location.search || '');
    if (params.has('redes')) history.replaceState(null, '', window.location.pathname);
  }

  function renderSocialNetworksManager() {
    const manager = document.getElementById('social-networks-manager');
    if (!manager) return;
    if (!isModerator || visitorPreviewMode) {
      manager.classList.add('hidden');
      return;
    }
    manager.classList.remove('hidden');
    const list = getSocialNetworks();
    manager.innerHTML = '<div class="flex items-center justify-between mb-3"><div><h4 class="text-sm font-bold text-white">Administrar redes</h4><p class="text-[10px] text-slate-500">Cada red tiene un tipo y muestra sus métricas correspondientes.</p></div><button type="button" onclick="window.ElyPortfolio.editSocialNetwork(\'\')" class="px-3 py-2 rounded-lg bg-cyan-400 text-black text-[11px] font-bold">+ Agregar red</button></div>' +
      '<div class="space-y-2">' + (list.length ? list.map(function(item) {
        const n = normalizeSocialNetwork(item, 0);
        return '<div class="flex items-center gap-3 p-3 rounded-xl bg-white/[.03] border border-white/5">' +
          '<span class="text-lg">' + escapeSocialText(n.icon) + '</span><span class="flex-1 text-xs text-white font-semibold">' + escapeSocialText(n.name) + '</span>' +
          '<span class="text-[10px] text-slate-500">' + escapeSocialText(SOCIAL_NETWORK_TYPES[n.networkType]?.name || n.networkType) + '</span>' +
          (n.networkType === 'youtube' ? '<span class="text-[10px] text-cyan-300">Subs / Videos / Views</span>' : '<span class="text-[10px] text-slate-500">' + (n.countMode === 'url' ? 'Endpoint JSON' : (n.countMode === 'livecounts' ? 'Livecounts' : 'Manual')) + '</span>') +
          '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.editSocialNetwork(\'' + escapeSocialJs(n.id) + '\')" class="px-2.5 py-1.5 rounded-lg bg-white/5 text-[10px] text-slate-300">Editar</button>' +
          '<button type="button" onclick="event.stopPropagation(); window.ElyPortfolio.deleteSocialNetwork(\'' + escapeSocialJs(n.id) + '\')" class="px-2.5 py-1.5 rounded-lg bg-red-500/10 text-red-300 text-[10px]">Eliminar</button>' +
        '</div>';
      }).join('') : '<div class="text-xs text-slate-500 py-3">No hay redes configuradas.</div>') + '</div>';
  }

  function updateSocialNetworkFormFields() {
    const typeEl = document.getElementById('social-form-network-type');
    const youtubeFields = document.getElementById('social-form-youtube-fields');
    const genericFields = document.getElementById('social-form-generic-fields');
    if (!typeEl) return;
    const isYoutube = typeEl.value === 'youtube';
    if (youtubeFields) youtubeFields.classList.toggle('hidden', !isYoutube);
    if (genericFields) genericFields.classList.toggle('hidden', isYoutube);
    const labelEl = document.getElementById('social-form-label');
    const countEl = document.getElementById('social-form-count');
    const postsWrap = document.getElementById('social-form-instagram-posts-wrap');
    if (typeEl.value === 'instagram') {
      if (labelEl) labelEl.value = 'Seguidores';
      if (countEl) countEl.previousElementSibling.textContent = 'Seguidores';
      if (postsWrap) postsWrap.classList.remove('hidden');
    } else {
      if (postsWrap) postsWrap.classList.add('hidden');
    }
  }

  function editSocialNetwork(id) {
    if (!isModerator || visitorPreviewMode) {
      if (!isModerator) openAuthModal();
      return;
    }
    const item = id ? getSocialNetworks().find(function(x) { return String(x.id) === String(id); }) : null;
    const n = normalizeSocialNetwork(item || { networkType: 'other' }, 0);
    const form = document.getElementById('social-network-form');
    if (!form) return;
    document.getElementById('social-form-id').value = item ? item.id : '';
    document.getElementById('social-form-network-type').value = n.networkType;
    document.getElementById('social-form-name').value = item ? item.name : n.name;
    document.getElementById('social-form-icon').value = item ? item.icon : n.icon;
    document.getElementById('social-form-url').value = item ? item.url : '';
    document.getElementById('social-form-label').value = item ? item.countLabel : (n.networkType === 'youtube' ? 'Suscriptores' : 'Usuarios');
    document.getElementById('social-form-count').value = item ? (Number(item.countValue) || Number(n.instagramStats.followers) || 0) : 0;
    const instagramPostsInput = document.getElementById('social-form-instagram-posts');
    if (instagramPostsInput) instagramPostsInput.value = item ? (Number(n.instagramStats.posts) || 0) : 0;
    document.getElementById('social-form-mode').value = item && item.countMode === 'url' ? 'url' : (item && item.countMode === 'livecounts' ? 'livecounts' : 'manual');
    document.getElementById('social-form-count-url').value = item ? item.countUrl : '';
    document.getElementById('social-form-youtube-channel').value = n.youtubeChannelId || 'UCuiY3lZrlrbXsX-RR9v3Kbg';
    document.getElementById('social-form-discord-guild').value = item ? (item.discordGuildId || '') : '';
    document.getElementById('social-form-discord-invite').value = item ? (item.discordInviteCode || extractDiscordInviteCode(item.url || '')) : '';
    document.getElementById('social-form-enabled').checked = !item || item.enabled !== false;
    updateSocialNetworkFormFields();
    document.getElementById('social-network-editor').classList.remove('hidden');
  }

  function closeSocialNetworkEditor() {
    const editor = document.getElementById('social-network-editor');
    if (editor) editor.classList.add('hidden');
  }

  async function refreshDiscordSocialNetwork(item, silent) {
    const inviteCode = extractDiscordInviteCode(item.discordInviteCode || item.url || '');
    let guildId = String(item.discordGuildId || '').trim();
    let inviteData = null;
    let widget = null;
    let inviteError = null;

    if (inviteCode) {
      try {
        const inviteResponse = await fetch('https://discord.com/api/v10/invites/' + encodeURIComponent(inviteCode) + '?with_counts=true', { cache: 'no-store' });
        if (!inviteResponse.ok) throw new Error('Discord invite HTTP ' + inviteResponse.status);
        inviteData = await inviteResponse.json();
        guildId = guildId || String(inviteData && inviteData.guild && inviteData.guild.id || '');
      } catch (error) {
        inviteError = error;
      }
    }

    if (!guildId && !inviteData) {
      throw inviteError || new Error('Configura el enlace de invitación o el ID del servidor Discord.');
    }

    if (guildId) {
      try {
        const widgetResponse = await fetch('https://discord.com/api/guilds/' + encodeURIComponent(guildId) + '/widget.json', { cache: 'no-store' });
        if (widgetResponse.ok) widget = await widgetResponse.json();
      } catch (error) {
        console.warn('[DISCORD WIDGET]', error);
      }
    }

    const stats = normalizeDiscordStats({
      members: inviteData && (inviteData.approximate_member_count ?? inviteData.guild?.approximate_member_count),
      online: widget && widget.presence_count != null
        ? widget.presence_count
        : inviteData && inviteData.approximate_presence_count
    });

    if (!stats.members && item.countValue) stats.members = Math.max(0, Number(item.countValue) || 0);
    if (!stats.members && !stats.online) {
      throw inviteError || new Error('Discord no devolvió estadísticas. Comprueba que la invitación sea válida y que el widget del servidor esté habilitado.');
    }

    item.networkType = 'discord';
    item.discordGuildId = guildId;
    item.discordInviteCode = inviteCode;
    item.discordStats = stats;
    item.countValue = stats.members;
    item.countLabel = 'Miembros';
    item.countMode = 'discord';
    item.countUrl = '';
    if (widget && widget.name) item.name = widget.name;
    if (widget && widget.instant_invite && !item.url) item.url = widget.instant_invite;

    renderSocialNetworks();
    renderSocialNetworksManager();

    if (!silent) {
      showStatusNotification({
        title: 'Discord actualizado',
        message: formatSocialNumber(stats.members) + ' miembros · ' + formatSocialNumber(stats.online) + ' online' + (widget ? '' : ' · widget no habilitado'),
        type: 'success',
        icon: '💬'
      });
    }
    return stats;
  }


  async function refreshInstagramSocialNetwork(item, silent) {
    const username = extractInstagramUsername(item.instagramUsername || item.url || '');
    if (!username) throw new Error('Configura el usuario o URL de Instagram.');

    const parseInstagramPayload = function(payload) {
      const candidates = [
        payload,
        payload && payload.data,
        payload && payload.data && payload.data.user,
        payload && payload.profile,
        payload && payload.author,
        payload && payload.user
      ].filter(Boolean);

      for (const source of candidates) {
        const stats = normalizeInstagramStats({
          followers: source.followers ?? source.followersCount ?? source.follower_count ?? source.edge_followed_by?.count,
          posts: source.posts ?? source.postsCount ?? source.post_count ?? source.mediaCount ?? source.edge_owner_to_timeline_media?.count
        });
        if (stats.followers || stats.posts) return stats;
      }
      return null;
    };

    const urls = [
      'https://r.jina.ai/https://www.instagram.com/' + encodeURIComponent(username) + '/',
      'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + encodeURIComponent(username),
      GLOBAL_COUNTER_URL + '?action=instagramstats&username=' + encodeURIComponent(username)
    ];

    let lastError = null;
    for (const url of urls) {
      try {
        const response = await fetch(url, {
          cache: 'no-store',
          mode: 'cors',
          headers: url.indexOf('i.instagram.com') >= 0 ? { 'X-IG-App-ID': '936619743392459', 'Accept': 'application/json' } : {}
        });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const text = await response.text();
        let payload = null;
        try { payload = JSON.parse(text); } catch (e) {}

        let stats = payload ? parseInstagramPayload(payload) : null;
        if (!stats) {
          const followerMatches = text.match(/(?:followers|seguidores)[^\d]{0,120}([\d.,]+\s*[KMB]?)/i) || text.match(/([\d.,]+\s*[KMB]?)\s*(?:followers|seguidores)/i);
          const postMatches = text.match(/(?:posts|publicaciones)[^\d]{0,120}([\d.,]+\s*[KMB]?)/i) || text.match(/([\d.,]+\s*[KMB]?)\s*(?:posts|publicaciones)/i);
          const parseCount = function(raw) {
            if (!raw) return 0;
            const clean = raw.replace(/\s/g, '').replace(/,/g, '');
            const suffix = clean.slice(-1).toUpperCase();
            const n = parseFloat(suffix === 'K' || suffix === 'M' || suffix === 'B' ? clean.slice(0,-1) : clean);
            if (!Number.isFinite(n)) return 0;
            return Math.round(n * (suffix === 'K' ? 1e3 : suffix === 'M' ? 1e6 : suffix === 'B' ? 1e9 : 1));
          };
          stats = normalizeInstagramStats({ followers: parseCount(followerMatches && followerMatches[1]), posts: parseCount(postMatches && postMatches[1]) });
        }

        if (!stats || (!stats.followers && !stats.posts)) throw new Error('No se encontraron seguidores/posts.');
        item.networkType = 'instagram';
        item.instagramUsername = username;
        item.instagramStats = stats;
        item.countValue = stats.followers;
        item.countLabel = 'Seguidores';
        item.countMode = 'instagram';
        renderSocialNetworks();
        renderSocialNetworksManager();
        if (!silent) showStatusNotification({title:'Instagram actualizado',message:formatSocialNumber(stats.followers) + ' seguidores · ' + formatSocialNumber(stats.posts) + ' posts',type:'success',icon:'📸'});
        return stats;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error('Instagram no devolvió estadísticas.');
  }

  async function refreshYouTubeSocialNetwork(item, silent) {
    const channelId = extractYouTubeChannelId(item.youtubeChannelId || item.url) || 'UCuiY3lZrlrbXsX-RR9v3Kbg';
    const response = await fetch(GLOBAL_COUNTER_URL + '?action=youtubestats&channelId=' + encodeURIComponent(channelId), { cache: 'no-store' });
    if (!response.ok) throw new Error('YouTube stats HTTP ' + response.status);
    const data = await response.json();
    if (!data || data.success === false) throw new Error(data && data.error ? data.error : 'No se recibieron estadísticas de YouTube.');
    const stats = normalizeYouTubeStats({
      subscribers: data.subscribers,
      videos: data.videos,
      views: data.views
    });
    if (!stats.subscribers && !stats.videos && !stats.views) throw new Error('La respuesta de YouTube no contiene estadísticas.');
    item.networkType = 'youtube';
    item.youtubeChannelId = channelId;
    item.youtubeStats = stats;
    item.countValue = stats.subscribers;
    item.countLabel = 'Suscriptores';
    item.countMode = 'youtube';
    item.countUrl = '';
    renderSocialNetworks();
    renderSocialNetworksManager();
    if (!silent) showStatusNotification({ title:'YouTube actualizado', message:formatSocialNumber(stats.subscribers) + ' subs · ' + formatSocialNumber(stats.videos) + ' videos · ' + formatSocialNumber(stats.views) + ' views', type:'success', icon:'▶️' });
    return stats;
  }

  function extractLiveCountsOdometerDocument(doc) {
    if (!doc) return '';
    const root = doc.querySelector('.odometer .odometer-inside') || doc.querySelector('.odometer-inside');
    if (!root) return '';
    const digits = Array.from(root.querySelectorAll('.odometer-digit, .odometer-digit-spacer'));
    let value = '';
    digits.forEach(function(el) {
      const digitNode = el.querySelector('.odometer-digit-inner, .odometer-digit-value');
      const raw = (digitNode ? digitNode.textContent : el.textContent || '').trim();
      const match = raw.match(/\d/);
      if (match) value += match[0];
    });
    return value;
  }

  function extractLiveCountsOdometerHtml(text) {
    if (!text) return '';
    const match = text.match(/odometer-inside[\s\S]*?<\/div>/i);
    if (!match) return '';
    return (match[0].match(/\d/g) || []).join('');
  }

  async function refreshSocialNetworkCount(id, silent) {
    const item = getSocialNetworks().find(function(x) { return String(x.id) === String(id); });
    if (!item) return;
    const networkType = getSocialNetworkType(item);

    if (networkType === 'youtube') {
      try {
        await refreshYouTubeSocialNetwork(item, silent);
        return;
      } catch (youtubeError) {
        console.error('[YOUTUBE STATS]', youtubeError);
        if (!silent) showStatusNotification({ title:'No se pudo leer YouTube', message: youtubeError.message || 'Error consultando las estadísticas de YouTube.', type:'error', icon:'⚠️' });
        return;
      }
    }

    if (networkType === 'discord') {
      try {
        await refreshDiscordSocialNetwork(item, silent);
        return;
      } catch (discordError) {
        console.error('[DISCORD STATS]', discordError);
        if (!silent) showStatusNotification({ title:'No se pudo leer Discord', message: discordError.message || 'El widget de Discord no pudo ser consultado.', type:'error', icon:'⚠️' });
        return;
      }
    }

    if (networkType === 'instagram' && item.countMode === 'manual') {
      if (!silent) showStatusNotification({title:'Contador manual',message:item.name + ' usa seguidores y posts configurados manualmente.',type:'info',icon:'ℹ️'});
      return;
    }

    if (networkType === 'instagram') {
      try {
        await refreshInstagramSocialNetwork(item, silent);
        return;
      } catch (instagramError) {
        console.error('[INSTAGRAM STATS]', instagramError);
        if (!silent) showStatusNotification({ title:'No se pudo leer Instagram', message: instagramError.message || 'Instagram no devolvió seguidores/posts.', type:'error', icon:'⚠️' });
        return;
      }
    }

    if (item.countMode === 'manual') {
      if (!silent) showStatusNotification({title:'Contador manual',message:item.name + ' usa un valor manual.',type:'info',icon:'ℹ️'});
      return;
    }

    try {
      const response = await fetch(item.countMode === 'livecounts' ? GLOBAL_COUNTER_URL + '?action=' + 'livesubscribers' : item.countUrl, { cache: 'no-store', mode: 'cors' });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const text = await response.text();

      if (item.countMode === 'livecounts') {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        let value = extractLiveCountsOdometerDocument(doc);
        if (!value) value = extractLiveCountsOdometerHtml(text);
        if (!value) throw new Error('No se encontró .odometer-inside / .odometer-digit.');
        item.countValue = Math.max(0, parseInt(value, 10));
      } else {
        const data = JSON.parse(text);
        const value = Number(data.count ?? data.subscribers ?? data.members ?? data.users ?? data.total);
        if (!Number.isFinite(value)) throw new Error('El endpoint no devolvió un contador válido.');
        item.countValue = Math.max(0, Math.floor(value));
      }

      renderSocialNetworks();
      renderSocialNetworksManager();
      if (!silent) showStatusNotification({
        title:'Contador actualizado',
        message:item.name + ': ' + item.countValue.toLocaleString('es-DO'),
        type:'success',
        icon:'✓'
      });
    } catch (error) {
      console.error('[SOCIAL COUNT]', error);
      if (!silent) showStatusNotification({
        title:'No se pudo leer el contador',
        message:item.countMode === 'livecounts'
          ? 'Livecounts no permite la lectura directa desde este navegador o cambió su HTML. El valor manual sigue disponible.'
          : (error.message || 'Error consultando el contador.'),
        type:'error',
        icon:'⚠️'
      });
    }
  }

  function refreshAllSocialNetworkCounts() {
    getSocialNetworks().filter(function(item) {
      return getSocialNetworkType(item) === 'youtube' || getSocialNetworkType(item) === 'discord' || (getSocialNetworkType(item) === 'instagram' && item.countMode !== 'manual') || item.countMode === 'livecounts' || (item.countMode === 'url' && item.countUrl);
    }).forEach(function(item) {
      refreshSocialNetworkCount(item.id, true);
    });
  }

  async function handleSocialNetworkSubmit(event) {
    event.preventDefault();
    if (!isModerator || visitorPreviewMode) return;
    const id = document.getElementById('social-form-id').value.trim();
    const networkType = document.getElementById('social-form-network-type').value || 'other';
    const defaults = SOCIAL_NETWORK_TYPES[networkType] || SOCIAL_NETWORK_TYPES.other;
    const existing = id ? getSocialNetworks().find(function(x) { return String(x.id) === String(id); }) : null;
    const youtubeChannelId = extractYouTubeChannelId(document.getElementById('social-form-youtube-channel').value);
    const discordGuildId = document.getElementById('social-form-discord-guild').value.trim();
    const discordInviteCode = extractDiscordInviteCode(document.getElementById('social-form-discord-invite').value.trim() || document.getElementById('social-form-url').value.trim());
    const isYoutube = networkType === 'youtube';
    const isDiscord = networkType === 'discord';
    const isInstagram = networkType === 'instagram';
    const instagramUsername = extractInstagramUsername(document.getElementById('social-form-url').value.trim());
    const item = {
      id: id || networkType + '-' + Date.now(),
      order: existing && Number.isFinite(Number(existing.order)) ? Number(existing.order) : getSocialNetworks().length,
      networkType: networkType,
      name: document.getElementById('social-form-name').value.trim() || defaults.name,
      icon: document.getElementById('social-form-icon').value.trim() || defaults.icon,
      color: defaults.color,
      url: document.getElementById('social-form-url').value.trim(),
      countLabel: isYoutube ? 'Suscriptores' : (isDiscord ? 'Miembros' : (document.getElementById('social-form-label').value.trim() || 'Usuarios')),
      countValue: isYoutube ? (existing ? Number(existing.countValue) || 0 : 0) : (isDiscord ? (existing ? Number(existing.countValue) || 0 : 0) : Math.max(0, Number(document.getElementById('social-form-count').value) || 0)),
      countMode: isYoutube ? 'youtube' : (isDiscord ? 'discord' : (document.getElementById('social-form-mode').value === 'livecounts' ? 'livecounts' : (document.getElementById('social-form-mode').value === 'url' ? 'url' : 'manual'))),
      countUrl: isYoutube || isDiscord ? '' : document.getElementById('social-form-count-url').value.trim(),
      youtubeChannelId: isYoutube ? (youtubeChannelId || 'UCuiY3lZrlrbXsX-RR9v3Kbg') : '',
      youtubeStats: isYoutube ? normalizeYouTubeStats(existing && existing.youtubeStats) : { subscribers: 0, videos: 0, views: 0 },
      discordGuildId: isDiscord ? discordGuildId : '',
      discordInviteCode: isDiscord ? discordInviteCode : '',
      discordStats: isDiscord ? normalizeDiscordStats(existing && existing.discordStats) : { members: 0, online: 0 },
      instagramUsername: isInstagram ? (instagramUsername || (existing && existing.instagramUsername) || '') : '',
      instagramStats: isInstagram ? normalizeInstagramStats({
        followers: Math.max(0, Number(document.getElementById('social-form-count').value) || 0),
        posts: Math.max(0, Number(document.getElementById('social-form-instagram-posts')?.value) || (existing && existing.instagramStats && Number(existing.instagramStats.posts) || 0))
      }) : { followers: 0, posts: 0 },
      enabled: document.getElementById('social-form-enabled').checked
    };
    const list = getSocialNetworks();
    const index = list.findIndex(function(x) { return String(x.id) === String(item.id); });
    if (index >= 0) list[index] = item; else list.push(item);
    list.forEach(function(item, itemIndex) {
      item.order = itemIndex;
    });
    socialNetworksState = list;
    closeSocialNetworkEditor();
    renderSocialNetworks();
    renderSocialNetworksManager();
    try {
      await syncLocalDataToGoogleSheets();
      if (isYoutube || isDiscord || (isInstagram && item.countMode !== 'manual')) refreshSocialNetworkCount(item.id, true);
      showStatusNotification({title:'Red guardada',message:item.name + ' fue guardada en Google Sheets.',type:'success',icon:'✓'});
    } catch (error) {
      if (isYoutube || isDiscord || (isInstagram && item.countMode !== 'manual')) refreshSocialNetworkCount(item.id, true);
      showStatusNotification({title:'Red guardada localmente',message:'Google Sheets no está disponible ahora mismo.',type:'info',icon:'💾'});
    }
  }

  function deleteSocialNetwork(id) {
    if (!isModerator || visitorPreviewMode) return;
    showConfirmModal('¿Eliminar esta red social?', function() {
      socialNetworksState = getSocialNetworks().filter(function(item) { return String(item.id) !== String(id); });
      renderSocialNetworks();
      renderSocialNetworksManager();
      syncLocalDataToGoogleSheets().catch(function() {});
    });
  }

  function renderSkillCards() {
    const grid = document.getElementById('skill-cards-grid');
    if (!grid) return;
    grid.innerHTML = skillCards.map(function(card) {
      const color = normalizeSkillCardColor(card.color);
      const canEdit = isModerator && !visitorPreviewMode;
      return '<div class="skill-card rounded-2xl bg-[#12151d] border border-[#232733] p-5 space-y-3" data-skill-id="' + escapeSocialText(String(card.id)) + '">' +
        '<div class="flex items-start justify-between gap-3"><h4 class="text-sm font-bold" style="color:' + color + '">' + escapeSocialText(card.title) + '</h4>' +
        (canEdit ? '<button type="button" onclick="window.ElyPortfolio.openSkillCardEditor(\'' + escapeSocialText(String(card.id)) + '\')" class="shrink-0 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-slate-300">Editar</button>' : '') + '</div>' +
        '<ul class="space-y-1.5 text-xs text-slate-300">' +
        (Array.isArray(card.lines) ? card.lines : []).map(function(line, index) { return '<li class="skill-line" style="--skill-delay:' + (index * 90) + 'ms">• ' + escapeSocialText(String(line || '')) + '</li>'; }).join('') +
        '</ul></div>';
    }).join('');
  }

  function normalizeSkillCardColor(color) {
    const value = String(color || '').trim().toLowerCase();
    const legacy = {
      amber: '#fbbf24',
      cyan: '#22d3ee',
      emerald: '#34d399'
    };
    if (legacy[value]) return legacy[value];
    return /^#[0-9a-f]{6}$/i.test(value) ? value : '#fbbf24';
  }

  function openSkillCardEditor(id) {
    if (!isModerator || visitorPreviewMode) return;
    const card = skillCards.find(function(item) { return String(item.id) === String(id); });
    const modal = document.getElementById('skill-card-editor-modal');
    const title = document.getElementById('skill-editor-title');
    const fields = document.getElementById('skill-editor-fields');
    if (!card || !modal || !fields) return;
    editingSkillCardId = card.id;
    if (title) title.textContent = 'Editar ' + card.title;
    const color = normalizeSkillCardColor(card.color);
    fields.innerHTML =
      '<div class="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">' +
        '<div><label class="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">Título de la tarjeta</label><input id="skill-editor-title-input" type="text" maxlength="80" value="' + escapeSocialText(String(card.title || '')) + '" class="w-full rounded-lg bg-[#0b0d11] border border-[#262c3b] px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"></div>' +
        '<div><label class="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">Color</label><div class="flex items-center gap-2"><input id="skill-editor-color" type="color" value="' + color + '" class="h-10 w-14 rounded-lg bg-[#0b0d11] border border-[#262c3b] cursor-pointer"><span id="skill-editor-color-value" class="text-[10px] text-slate-400 font-mono">' + color + '</span></div></div>' +
      '</div>' +
      '<div class="border-t border-[#1e2330] pt-3 space-y-3">' +
        (Array.isArray(card.lines) ? card.lines : []).slice(0, 6).map(function(line, index) {
          return '<div><label class="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">Línea ' + (index + 1) + '</label><input id="skill-editor-line-' + index + '" value="' + escapeSocialText(String(line || '')) + '" class="w-full rounded-lg bg-[#0b0d11] border border-[#262c3b] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"></div>';
        }).join('') +
      '</div>';
    const colorInput = document.getElementById('skill-editor-color');
    const colorValue = document.getElementById('skill-editor-color-value');
    if (colorInput && colorValue) {
      colorInput.addEventListener('input', function() { colorValue.textContent = colorInput.value.toUpperCase(); });
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSkillCardEditor() {
    const modal = document.getElementById('skill-card-editor-modal');
    if (modal) modal.classList.add('hidden');
    editingSkillCardId = null;
    document.body.style.overflow = '';
  }

  async function saveSkillCardEditor() {
    if (!isModerator || visitorPreviewMode || !editingSkillCardId) return;
    const card = skillCards.find(function(item) { return String(item.id) === String(editingSkillCardId); });
    if (!card) return;
    const titleInput = document.getElementById('skill-editor-title-input');
    const colorInput = document.getElementById('skill-editor-color');
    card.title = titleInput ? titleInput.value.trim() || card.title : card.title;
    card.color = colorInput ? normalizeSkillCardColor(colorInput.value) : normalizeSkillCardColor(card.color);
    card.lines = Array.from({ length: 6 }, function(_, index) {
      const input = document.getElementById('skill-editor-line-' + index);
      return input ? input.value.trim() : '';
    });
    renderSkillCards();
    closeSkillCardEditor();
    try {
      await syncLocalDataToGoogleSheets();
      showStatusNotification({ title: 'Especialidad guardada', message: 'Título, color y contenido de ' + card.title + ' se guardaron automáticamente en CardsInfo.', type: 'success', icon: '✓' });
    } catch (error) {
      showStatusNotification({ title: 'Error al guardar', message: 'No se pudo guardar la especialidad en Google Sheets.', type: 'error', icon: '⚠️' });
    }
  }

  // 17. Event Listeners y arranque
  window.addEventListener('pageshow', function (event) {
    applyAssetsRouteUI();
    applySocialQueryRoute();
    applyCardQueryRoute();
    if (event.persisted) refreshCatalogFromSheet(true);
  });

  window.addEventListener('hashchange', function () {
    applyAssetsRouteUI();
    checkAssetHashParam();
  });

  window.addEventListener('popstate', function () {
    applyAssetsRouteUI();
    applySocialQueryRoute();
    applyCardQueryRoute();
  });

  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) setTimeout(applyAssetsRouteUI, 0);
  });

  // Recarga desde CardsInfo antes de navegar o abrir una ficha.
  // Las ediciones del moderador ya escriben en Sheets; GitHub queda solo como respaldo/publicación.
  function refreshCatalogFromSheet(force) {
    const shouldForce = force !== false;
    const now = Date.now();

    if (catalogRefreshPromise) {
      return catalogRefreshPromise;
    }

    if (!shouldForce && now - catalogLastRefreshAt < CATALOG_REFRESH_TTL_MS) {
      return Promise.resolve();
    }

    catalogRefreshPromise = loadAllDataFromBackend(shouldForce)
      .then(function () {
        catalogLastRefreshAt = Date.now();
        if (isAssetsPage()) refreshAssetsPageRuntime();
        else renderProjectsGrid(true);
        applyCardQueryRoute();
      })
      .catch(function () {})
      .finally(function () {
        catalogRefreshPromise = null;
      });

    return catalogRefreshPromise;
  }

  function startCatalogBackgroundRefresh() {
    stopCatalogBackgroundRefresh();
  }

  function stopCatalogBackgroundRefresh() {
    if (catalogBackgroundRefreshTimer) {
      clearInterval(catalogBackgroundRefreshTimer);
      catalogBackgroundRefreshTimer = null;
    }
  }

  function clearPortfolioRouteAndNavigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (window.location.search || window.location.hash) history.replaceState(null, '', window.location.pathname);
    if (section) requestAnimationFrame(function () { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    applyAssetsRouteUI();
    // Solo Inicio y Proyectos solicitan una actualización explícita.
    if (sectionId === 'inicio' || sectionId === 'proyectos') refreshCatalogFromSheet(true);
  }

  function applySocialQueryRoute() {
    const params = new URLSearchParams(window.location.search || '');
    if (!params.has('redes')) return false;
    setTimeout(function () { openSocialNetworksModal(); }, 0);
    return true;
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const sectionId = href.slice(1);
    if (!['inicio', 'proyectos', 'feedback'].includes(sectionId)) return;
    event.preventDefault();
    clearPortfolioRouteAndNavigate(sectionId);
  });

  document.addEventListener('DOMContentLoaded', function () {
    applyAssetsRouteUI();
    if (isAssetsPage()) selectedOrigin = 'assets';
    else renderProjectsGrid(true);
    applyTheme(currentTheme);
    setupImageDropzones();
    renderSkillCards();
    Promise.resolve(refreshCatalogFromSheet(true)).finally(function () {
      renderSkillCards();
      applyCardQueryRoute();
      refreshAllSocialNetworkCounts();
      startCatalogBackgroundRefresh();
    });
    loadImagesFromMainElyFolder();

    const socialNetworkForm = document.getElementById('social-network-form');
    const socialNetworkType = document.getElementById('social-form-network-type');
    if (socialNetworkForm) socialNetworkForm.addEventListener('submit', handleSocialNetworkSubmit);
    if (socialNetworkType) {
      socialNetworkType.addEventListener('change', function () {
        const type = SOCIAL_NETWORK_TYPES[this.value] || SOCIAL_NETWORK_TYPES.other;
        const nameInput = document.getElementById('social-form-name');
        const iconInput = document.getElementById('social-form-icon');
        if (nameInput && !nameInput.value.trim()) nameInput.value = type.name;
        if (iconInput && !iconInput.value.trim()) iconInput.value = type.icon;
        updateSocialNetworkFormFields();
      });
      updateSocialNetworkFormFields();
    }
    // Google Sheets es la fuente principal de las redes.
    // localStorage solo se usa como respaldo si Google Sheets no puede cargar los datos.
    // Los contadores de redes se actualizan cuando termina la carga de datos.
    setTimeout(function () {
      if (new URLSearchParams(window.location.search || '').has('redes')) openSocialNetworksModal();
    }, 120);

    // Confirm Modal Action Button
    const confirmActionBtn = document.getElementById('confirm-modal-action-btn');
    if (confirmActionBtn) {
      confirmActionBtn.addEventListener('click', function () {
        if (typeof activeConfirmCallback === 'function') {
          activeConfirmCallback();
        }
        closeConfirmModal();
      });
    }

    // Helper reactivo para fechas de experiencia laboral
    const expCurrentCheck = document.getElementById('exp-form-current');
    const expEndInput = document.getElementById('exp-form-end-date');
    const expPeriodInput = document.getElementById('exp-form-period');
    const expStartInput = document.getElementById('exp-form-start-date');

    const updateExpPeriodText = () => {
      if (!expPeriodInput) return;
      const isCur = expCurrentCheck ? expCurrentCheck.checked : false;
      const startVal = expStartInput ? expStartInput.value : '';
      const endVal = expEndInput ? expEndInput.value : '';
      
      const formatMonthYear = (dateStr) => {
        if (!dateStr) return '';
        try {
          const parts = dateStr.split('-');
          if (parts.length < 2) return dateStr;
          const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
          const idx = parseInt(parts[1], 10) - 1;
          return (months[idx] || '') + ' ' + parts[0];
        } catch (e) {
          return dateStr;
        }
      };

      if (isCur) {
        expPeriodInput.value = startVal ? `${formatMonthYear(startVal)} — Presente` : 'Presente';
      } else if (startVal && endVal) {
        expPeriodInput.value = `${formatMonthYear(startVal)} — ${formatMonthYear(endVal)}`;
      }
    };

    if (expCurrentCheck) {
      expCurrentCheck.addEventListener('change', function () {
        if (expEndInput) {
          expEndInput.disabled = this.checked;
          expEndInput.style.opacity = this.checked ? '0.4' : '1';
          if (this.checked) expEndInput.value = '';
        }
        updateExpPeriodText();
      });
    }

    if (expStartInput) expStartInput.addEventListener('change', updateExpPeriodText);
    if (expEndInput) expEndInput.addEventListener('change', updateExpPeriodText);

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Auth nav button
    const authNavBtn = document.getElementById('nav-auth-btn');
    if (authNavBtn) {
      authNavBtn.addEventListener('click', function () {
        if (isModerator) {
          handleLogout();
        } else {
          openAuthModal();
        }
      });
    }

    // Filter Buttons (Origen)
    const originButtons = document.querySelectorAll('[data-origin-filter]');
    originButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        originButtons.forEach(b => {
          b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
          b.classList.add('bg-[#141822]', 'text-slate-300');
        });
        btn.classList.add('bg-amber-400', 'text-black', 'font-bold');
        btn.classList.remove('bg-[#141822]', 'text-slate-300');

        selectedOrigin = btn.getAttribute('data-origin-filter');
        if (selectedOrigin === 'assets') {
          if (!isAssetsPage()) {
            history.pushState(null, '', '?assets');
            applyAssetsRouteUI();
          } else {
            renderAssetsGrid();
          }
          return;
        }
        if (selectedCategory !== 'script' && selectedCategory !== 'asset') {
          selectedCategory = 'todos';
        }
        renderProjectsGrid(true);
      });
    });

    // Category Buttons (Pills)
    const categoryButtons = document.querySelectorAll('[data-category-filter]');
    categoryButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        categoryButtons.forEach(b => {
          b.classList.remove('bg-white/20', 'text-white', 'border-amber-400');
          b.classList.add('bg-white/5', 'text-slate-400');
        });
        btn.classList.add('bg-white/20', 'text-white', 'border-amber-400');
        btn.classList.remove('bg-white/5', 'text-slate-400');

        selectedCategory = btn.getAttribute('data-category-filter');
        if (isAssetsPage()) renderAssetsGrid();
        else renderProjectsGrid(true);
      });
    });

    // Search Input
    const searchInput = document.getElementById('projects-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value;
        if (isAssetsPage()) renderAssetsGrid();
        else renderProjectsGrid(true);
      });
    }

    const searchClear = document.getElementById('projects-search-clear');
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        if (isAssetsPage()) renderAssetsGrid();
        else renderProjectsGrid(true);
      });
    }

    document.querySelectorAll('[data-asset-category-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-asset-category-filter]').forEach(function (b) {
          b.classList.remove('bg-white/20', 'text-white', 'border-amber-400');
          b.classList.add('bg-white/5', 'text-slate-400');
        });
        btn.classList.add('bg-white/20', 'text-white', 'border-amber-400');
        btn.classList.remove('bg-white/5', 'text-slate-400');
        selectedCategory = btn.getAttribute('data-asset-category-filter') || 'todos';
        if (isAssetsPage()) renderAssetsGrid();
      });
    });

    const assetsSearchInput = document.getElementById('assets-search-input');
    if (assetsSearchInput) {
      assetsSearchInput.addEventListener('input', function () {
        searchQuery = this.value;
        if (isAssetsPage()) renderAssetsGrid();
      });
    }

    const assetsSortSelect = document.getElementById('asset-sort-select-assets');
    if (assetsSortSelect) {
      assetsSortSelect.addEventListener('change', function () {
        selectedAssetSort = this.value || 'newest';
        assetDiscoveryMode = 'all';
        if (isAssetsPage()) renderAssetsGrid();
      });
    }

    const assetsFavoritesFilter = document.getElementById('asset-favorites-filter-assets');
    if (assetsFavoritesFilter) {
      assetsFavoritesFilter.addEventListener('click', function () {
        showOnlyFavoriteAssets = !showOnlyFavoriteAssets;
        if (isAssetsPage()) renderAssetsGrid();
      });
    }

    const assetsViewToggle = document.getElementById('asset-view-toggle-assets');
    if (assetsViewToggle) {
      assetsViewToggle.addEventListener('click', function () {
        if (isAssetsPage()) toggleAssetViewMode();
      });
    }

    const assetsResetFilters = document.getElementById('assets-reset-filters-btn');
    if (assetsResetFilters) {
      assetsResetFilters.addEventListener('click', function () {
        selectedCategory = 'todos';
        searchQuery = '';
        selectedAssetSort = 'newest';
        assetDiscoveryMode = 'trending';
        showOnlyFavoriteAssets = false;
        assetViewMode = 'cards';
        if (assetsSearchInput) assetsSearchInput.value = '';
        if (assetsSortSelect) assetsSortSelect.value = 'newest';
        document.querySelectorAll('[data-asset-discovery]').forEach(function (b, i) {
          b.classList.toggle('asset-discovery-active', i === 0);
        });
        document.querySelectorAll('[data-asset-category-filter]').forEach(function (b, i) {
          b.classList.toggle('bg-white/20', i === 0);
          b.classList.toggle('text-white', i === 0);
          b.classList.toggle('border-amber-400', i === 0);
          b.classList.toggle('bg-white/5', i !== 0);
          b.classList.toggle('text-slate-400', i !== 0);
        });
        if (isAssetsPage()) renderAssetsGrid();
      });
    }

    const assetDiscoveryButtons = document.querySelectorAll('[data-asset-discovery]');
    assetDiscoveryButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        assetDiscoveryButtons.forEach(function (b) { b.classList.remove('asset-discovery-active'); });
        btn.classList.add('asset-discovery-active');
        assetDiscoveryMode = btn.getAttribute('data-asset-discovery') || 'all';
        if (assetDiscoveryMode === 'newest') selectedAssetSort = 'newest';
        if (assetDiscoveryMode === 'top') selectedAssetSort = 'downloads';
        renderAssetsGrid();
      });
    });

    const assetSortSelect = document.getElementById('asset-sort-select');
    if (assetSortSelect) {
      assetSortSelect.addEventListener('change', function () {
        selectedAssetSort = this.value || 'newest';
        assetDiscoveryMode = 'all';
        document.querySelectorAll('[data-asset-discovery]').forEach(function (b) { b.classList.remove('asset-discovery-active'); });
        renderAssetsGrid();
      });
    }
    const assetFavoritesFilter = document.getElementById('asset-favorites-filter');
    if (assetFavoritesFilter) {
      assetFavoritesFilter.addEventListener('click', function () {
        showOnlyFavoriteAssets = !showOnlyFavoriteAssets;
        renderAssetsGrid();
      });
    }
    const assetViewToggle = document.getElementById('asset-view-toggle');
    if (assetViewToggle) {
      assetViewToggle.addEventListener('click', function () {
        toggleAssetViewMode();
      });
    }

    // Reset filters button
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', function () {
        selectedOrigin = 'todos';
        selectedCategory = 'todos';
        searchQuery = '';
        selectedAssetSort = 'newest';
        assetDiscoveryMode = 'trending';
        showOnlyFavoriteAssets = false;
        assetViewMode = 'cards';
        try { localStorage.setItem('portfolio_community_asset_view_v1', assetViewMode); } catch (e) {}
        if (searchInput) searchInput.value = '';
        const assetSortReset = document.getElementById('asset-sort-select');
        if (assetSortReset) assetSortReset.value = 'newest';

        // Reset UI active states
        originButtons.forEach(b => {
          if (b.getAttribute('data-origin-filter') === 'todos') {
            b.classList.add('bg-amber-400', 'text-black', 'font-bold');
            b.classList.remove('bg-[#141822]', 'text-slate-300');
          } else {
            b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
            b.classList.add('bg-[#141822]', 'text-slate-300');
          }
        });

        categoryButtons.forEach(b => {
          if (b.getAttribute('data-category-filter') === 'todos') {
            b.classList.add('bg-white/20', 'text-white', 'border-amber-400');
            b.classList.remove('bg-white/5', 'text-slate-400');
          } else {
            b.classList.remove('bg-white/20', 'text-white', 'border-amber-400');
            b.classList.add('bg-white/5', 'text-slate-400');
          }
        });

        renderProjectsGrid(true);
      });
    }

    // Quick metric cards in Hero
    const metricCards = document.querySelectorAll('[data-hero-metric]');
    metricCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const origin = card.getAttribute('data-hero-metric');
        selectedOrigin = origin;
        originButtons.forEach(b => {
          if (b.getAttribute('data-origin-filter') === origin) {
            b.classList.add('bg-amber-400', 'text-black', 'font-bold');
            b.classList.remove('bg-[#141822]', 'text-slate-300');
          } else {
            b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
            b.classList.add('bg-[#141822]', 'text-slate-300');
          }
        });
        renderProjectsGrid(true);
        const projSection = document.getElementById('proyectos');
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Form submits
    const sheetsBackupInput = document.getElementById('sheets-backup-file-input');
    if (sheetsBackupInput) sheetsBackupInput.addEventListener('change', function (event) {
      const file = event.target.files && event.target.files[0];
      handleSheetsBackupFile(file);
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    const authForm = document.getElementById('auth-form');
    if (authForm) authForm.addEventListener('submit', handleAuthSubmit);

    const addProjForm = document.getElementById('add-project-form');
    if (addProjForm) addProjForm.addEventListener('submit', handleAddProjectSubmit);

    const editProjForm = document.getElementById('edit-project-form');
    if (editProjForm) editProjForm.addEventListener('submit', handleEditProjectSubmit);

    const expForm = document.getElementById('experience-form');
    if (expForm) expForm.addEventListener('submit', handleExperienceSubmit);

    const testForm = document.getElementById('testimonial-form');
    if (testForm) testForm.addEventListener('submit', handleTestimonialSubmit);

    const feedbackForm = document.getElementById('feedback-submission-form');
    if (feedbackForm) feedbackForm.addEventListener('submit', handleFeedbackSubmit);

    const feedbackLoadCodeBtn = document.getElementById('feedback-load-code-btn');
    if (feedbackLoadCodeBtn) feedbackLoadCodeBtn.addEventListener('click', function () {
      const codeInput = document.getElementById('feedback-input-code');
      const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
      if (!code) return;
      if (codeInput) {
        codeInput.readOnly = true;
        codeInput.classList.add('opacity-70');
      }
      setFeedbackLoading(true, 'Buscando la información de tu servicio...');
      loadFeedbackCodeDetails(code).then(function (record) {
        if (!record) {
          const msg = document.getElementById('feedback-status-msg');
          if (msg) {
            msg.className = 'p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';
            msg.innerHTML = '❌ <strong>Código no encontrado:</strong> Verifica el código e inténtalo nuevamente.';
            msg.classList.remove('hidden');
          }
          if (codeInput) {
            codeInput.readOnly = false;
            codeInput.classList.remove('opacity-70');
          }
        }
      });
    });

    const createCodeForm = document.getElementById('create-code-form');
    if (createCodeForm) createCodeForm.addEventListener('submit', handleCreateCodeSubmit);

    const assetForm = document.getElementById('asset-form');
    if (assetForm) assetForm.addEventListener('submit', handleAssetSubmit);

    window.addEventListener('hashchange', function () {
      checkAssetHashParam();
    });

    // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeProjectModal();
        closeContactModal();
        closeMessagesModal();
        closeResumeModal();
        closeAuthModal();
        closeAddProjectModal();
        closeEditProjectModal();
        closeSatisfiedClientsModal();
        closeExperienceModal();
        closeTestimonialModal();
        closeFeedbackModal();
        closeFeedbackCodesModal();
        closeAssetModal();
        closeAssetsManagerModal();
        closeImageLibraryModal();
        closeConfirmModal();
        closeSyncFilesModal();
      } else if (e.key === 'ArrowLeft') {
        navigateProjectModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateProjectModal(1);
      }
    });

    updateModeratorUI();
    renderProjectsGrid();
    renderExperiences();
    renderTestimonialsPreview();
    checkFeedbackUrlParam();
    checkAssetHashParam();
  });


  // ELYDEV_MOTION_ENHANCEMENTS_V1
  function initElyDevMotionEnhancements() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && document.getElementById('inicio') && !document.getElementById('ely-hero-particles')) {
      const hero = document.getElementById('inicio');
      hero.classList.add('ely-hero');
      const particles = document.createElement('div');
      particles.id = 'ely-hero-particles';
      particles.setAttribute('aria-hidden', 'true');
      for (let i = 0; i < 18; i++) {
        const dot = document.createElement('span');
        dot.className = 'ely-hero-particle';
        dot.style.setProperty('--particle-x', (Math.random() * 100) + '%');
        dot.style.setProperty('--particle-y', (Math.random() * 100) + '%');
        dot.style.setProperty('--particle-delay', (Math.random() * 5) + 's');
        dot.style.setProperty('--particle-duration', (5 + Math.random() * 7) + 's');
        particles.appendChild(dot);
      }
      hero.appendChild(particles);
    }
    const grid = document.getElementById('projects-grid');
    const revealTargets = document.querySelectorAll('#projects-grid > article, section > div.grid > article, section > div.grid > div, .group.cursor-pointer');
    
    document.querySelectorAll('button, a').forEach(function (el) {
      if (!el.classList.contains('ely-magnetic')) el.classList.add('ely-magnetic');
      if (el.dataset.elyMagneticBound !== '1') {
        el.dataset.elyMagneticBound = '1';
        el.addEventListener('pointermove', function (e) {
          if (reduceMotion || e.pointerType === 'touch' || window.innerWidth < 768) return;
          const rect = el.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width, 1);
          const dy = (e.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height, 1);
          el.style.transform = 'translate(' + (dx * 4) + 'px,' + (dy * 3) + 'px)';
        }, { passive: true });
        el.addEventListener('pointerleave', function () {
          el.style.transform = '';
        });
      }
    });
    
    document.querySelectorAll('#projects-grid > article').forEach(function (card) {
      card.classList.add('ely-interactive-card');
      if (!card.querySelector('.ely-spotlight')) {
        const spotlight = document.createElement('span');
        spotlight.className = 'ely-spotlight';
        card.appendChild(spotlight);
      }
      if (!card.querySelector('.ely-border-light')) {
        const borderLight = document.createElement('span');
        borderLight.className = 'ely-border-light';
        card.appendChild(borderLight);
      }
    });
    
    revealTargets.forEach(function (el, index) {
      if (!el.classList.contains('ely-motion-item')) {
        el.classList.add('ely-motion-item');
        el.style.setProperty('--ely-stagger', Math.min(index, 10) * 55 + 'ms');
      }
    });
    
    if (!reduceMotion) {
      document.querySelectorAll('.ely-motion-item:not(.ely-revealed)').forEach(function (el) {
        el.classList.add('ely-reveal-pending');
      });
    }
    
    document.querySelectorAll('#projects-grid > article').forEach(function (card) {
      if (card.dataset.elyMotionBound !== '1') {
        card.dataset.elyMotionBound = '1';
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        card.addEventListener('pointermove', function (e) {
          if (reduceMotion) return;
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          const rx = ((y - 50) / 50) * -4;
          const ry = ((x - 50) / 50) * 4;
          card.style.setProperty('--ely-mx', x + '%');
          card.style.setProperty('--ely-my', y + '%');
          card.style.setProperty('--ely-rx', rx + 'deg');
          card.style.setProperty('--ely-ry', ry + 'deg');
          card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(0) scale(1.015)';
        }, { passive: true });
        card.addEventListener('pointerleave', function () {
          card.style.removeProperty('--ely-mx');
          card.style.removeProperty('--ely-my');
          card.style.removeProperty('--ely-rx');
          card.style.removeProperty('--ely-ry');
          card.style.removeProperty('transform');
        });
      }
    });
    
    if (document.body.dataset.elyGlobalMotion !== '1') {
    document.body.dataset.elyGlobalMotion = '1';
    document.addEventListener('click', function (e) {
      const button = e.target.closest('button, a');
      if (!button || button.dataset.elyRipple === '1') return;
      button.dataset.elyRipple = '1';
      button.classList.add('ely-ripple-host');
      button.addEventListener('click', function (event) {
        if (reduceMotion) return;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ely-ripple';
        const size = Math.max(rect.width, rect.height) * 1.35;
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
        button.appendChild(ripple);
        setTimeout(function () { ripple.remove(); }, 520);
      }, true);
    }, true);
    
    document.addEventListener('click', function (e) {
      const likeButton = e.target.closest('#asset-modal-like-btn');
      if (likeButton && !reduceMotion) {
        likeButton.classList.remove('ely-heart-pop');
        void likeButton.offsetWidth;
        likeButton.classList.add('ely-heart-pop');
        for (let i = 0; i < 7; i++) {
          const heart = document.createElement('span');
          heart.className = 'ely-like-heart';
          heart.textContent = i % 2 ? '♥' : '❤';
          heart.style.setProperty('--heart-x', ((i - 3) * 14) + (Math.random() * 10 - 5) + 'px');
          heart.style.setProperty('--heart-y', (-24 - Math.random() * 18) + 'px');
          heart.style.setProperty('--heart-delay', (Math.random() * 80) + 'ms');
          likeButton.appendChild(heart);
          setTimeout(function () { heart.remove(); }, 900);
        }
      }
      const el = e.target.closest('#asset-modal-like-btn, #asset-modal-favorite-btn, #asset-modal-download-btn, [onclick*="toggleAssetLike"], [title*="favoritos"], [title*="Favorito"]');
      if (!el || reduceMotion) return;
      const isLike = el.id === 'asset-modal-like-btn';
      el.classList.remove('ely-pop-like', 'ely-pop-favorite', 'ely-pop-download', 'ely-pop-share');
      void el.offsetWidth;
      el.classList.add(isLike ? 'ely-pop-like' : el.id === 'asset-modal-download-btn' ? 'ely-pop-download' : 'ely-pop-favorite');
    }, true);
    }
    
    document.querySelectorAll('main > section').forEach(function (section) {
      section.classList.add('ely-section-transition');
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ely-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    
    if (!reduceMotion) {
      document.querySelectorAll('.ely-reveal-pending:not(.ely-revealed)').forEach(function (el) { observer.observe(el); });
    } else {
      document.querySelectorAll('.ely-motion-item').forEach(function (el) { el.classList.add('ely-revealed'); });
    }
    
    if (grid && !grid.dataset.elyObserver) {
      grid.dataset.elyObserver = '1';
      const mo = new MutationObserver(function () {
        setTimeout(initElyDevMotionEnhancements, 0);
      });
      mo.observe(grid, { childList: true });
    }
  }

  function addElyDevBackgroundMotion() {
    if (document.querySelector('.ely-ambient-bg')) return;
    const bg = document.createElement('div');
    bg.className = 'ely-ambient-bg';
    bg.setAttribute('aria-hidden', 'true');
    document.body.prepend(bg);
  }

  // Exponer API global para interactividad
  window.ElyPortfolio = {
    // Redes sociales
    openSkillCardEditor: openSkillCardEditor,
    closeSkillCardEditor: closeSkillCardEditor,
    saveSkillCardEditor: saveSkillCardEditor,
    renderSkillCards: renderSkillCards,
        openSocialNetworksModal: openSocialNetworksModal,
    closeSocialNetworksModal: closeSocialNetworksModal,
    editSocialNetwork: editSocialNetwork,
    deleteSocialNetwork: deleteSocialNetwork,
    closeSocialNetworkEditor: closeSocialNetworkEditor,
    refreshSocialNetworkCount: refreshSocialNetworkCount,
    refreshAllSocialNetworkCounts: refreshAllSocialNetworkCounts,
    copySocialNetworksLink: copySocialNetworksLink,
    // Confirmación In-App
    showConfirmModal: showConfirmModal,
    closeConfirmModal: closeConfirmModal,
    // Gestión y Sincronización de Archivos
    openSyncFilesModal: openSyncFilesModal,
    closeSyncFilesModal: closeSyncFilesModal,
    saveSheetsBackup: saveSheetsBackup,
    loadSheetsBackup: loadSheetsBackup,
    loadAllDataFromBackend: loadAllDataFromBackend,
    // Proyectos
    openProjectModal: openProjectModal,
    closeProjectModal: closeProjectModal,
    copyProjectCardLink: copyProjectCardLink,
    navigateProjectModal: navigateProjectModal,
    setModalMediaMode: setModalMediaMode,
    selectModalImage: selectModalImage,
    cycleModalImage: cycleModalImage,
    openAddProjectModal: openAddProjectModal,
    closeAddProjectModal: closeAddProjectModal,
    openEditProjectModal: openEditProjectModal,
    closeEditProjectModal: closeEditProjectModal,
    moveProjectOrder: moveProjectOrder,
    duplicateProject: duplicateProject,
    setProjectWorkCount: setProjectWorkCount,
    changeProjectWorkCount: changeProjectWorkCount,
    setCategoryWorkCount: setCategoryWorkCount,
    changeCategoryWorkCount: changeCategoryWorkCount,
    deleteProject: deleteProject,
    // Experiencias Laborales & Contratos
    renderExperiences: renderExperiences,
    toggleSortExperiencesByDate: toggleSortExperiencesByDate,
    moveExperienceOrder: moveExperienceOrder,
    duplicateExperience: duplicateExperience,
    deleteExperience: deleteExperience,
    openAddExperienceModal: openAddExperienceModal,
    openEditExperienceModal: openEditExperienceModal,
    closeExperienceModal: closeExperienceModal,
    // Feedback & Clientes Satisfechos
    renderTestimonialsPreview: renderTestimonialsPreview,
    renderSatisfiedClientsModalList: renderSatisfiedClientsModalList,
    openSatisfiedClientsModal: openSatisfiedClientsModal,
    openClientTestimonials: openClientTestimonials,
    toggleTestimonialMore: toggleTestimonialMore,
    closeSatisfiedClientsModal: closeSatisfiedClientsModal,
    moveTestimonialOrder: moveTestimonialOrder,
    duplicateTestimonial: duplicateTestimonial,
    deleteTestimonial: deleteTestimonial,
    openAddTestimonialModal: openAddTestimonialModal,
    openEditTestimonialModal: openEditTestimonialModal,
    closeTestimonialModal: closeTestimonialModal,
    // Feedback con Código Especial (Clientes)
    openFeedbackModal: openFeedbackModal,
    closeFeedbackModal: closeFeedbackModal,
    // Gestión de Códigos de Feedback (Moderador)
    openFeedbackCodesModal: openFeedbackCodesModal,
    closeFeedbackCodesModal: closeFeedbackCodesModal,
    generateRandomCodeInput: generateRandomCodeInput,
    openAssetModal: openAssetModal,
    closeAssetModal: closeAssetModal,
    copyAssetLink: copyAssetLink,
    copyAssetLinkById: copyAssetLinkById,
    openAssetsManagerModal: openAssetsManagerModal,
    closeAssetsManagerModal: closeAssetsManagerModal,
    deleteAsset: deleteAsset,
    openAssetImagePicker: openAssetImagePicker,
    closeAssetImagePicker: closeAssetImagePicker,
    editAsset: editAsset,
    duplicateAsset: duplicateAsset,
    moveAssetOrder: moveAssetOrder,
    toggleAssetPublished: toggleAssetPublished,
    toggleAssetFavorite: toggleAssetFavorite,
    toggleAssetLike: toggleAssetLike,
    refreshGlobalAssetCounters: refreshAllGlobalAssetCounters,
    addAssetComment: addAssetComment,
    copyAssetCode: copyAssetCode,
    toggleAssetViewMode: toggleAssetViewMode,
    filterAssetsByTag: filterAssetsByTag,
    refreshAssetsPageRuntime: refreshAssetsPageRuntime,
    openAssetFormPreview: openAssetFormPreview,
    closeAssetFormPreview: closeAssetFormPreview,
    getSelectedAssetId: function () { return selectedAsset ? selectedAsset.id : ''; },
    selectAssetImage: selectAssetImage,
    toggleDisableCode: toggleDisableCode,
    deleteFeedbackCode: deleteFeedbackCode,
    copyFeedbackLink: copyFeedbackLink,
    // Modales de contacto, auth, CV y utilidades
    showStatusNotification: showStatusNotification,
    openContactModal: openContactModal,
    closeContactModal: closeContactModal,
    openMessagesModal: openMessagesModal,
    setMessagesFilter: setMessagesFilter,
    closeMessagesModal: closeMessagesModal,
    renderMessagesModal: renderMessagesModal,
    toggleMessageRead: toggleMessageRead,
    openMessageReply: openMessageReply,
    closeMessageReply: closeMessageReply,
    sendMessageReply: sendMessageReply,
    openResumeModal: openResumeModal,
    closeResumeModal: closeResumeModal,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal,
    resetSampleData: resetSampleData,
    toggleTheme: toggleTheme,
    toggleVisitorPreview: toggleVisitorPreview,
    setVisitorPreviewMode: setVisitorPreviewMode,
    // Biblioteca de Imágenes & Multimedia (Drag and Drop & Assets)
    openImageLibraryModal: openImageLibraryModal,
    closeImageLibraryModal: closeImageLibraryModal,
    openLibraryImagePreview: openLibraryImagePreview,
    closeLibraryImagePreview: closeLibraryImagePreview,
    refreshElyImageLibrary: function () { return loadImagesFromMainElyFolder(true); },
    deleteCustomLibraryImage: deleteCustomLibraryImage,
    moveCustomLibraryImageOrder: moveCustomLibraryImageOrder,
    moveCustomLibraryImageTo: moveCustomLibraryImageTo,
    openImageLibraryForInput: openImageLibraryForInput,
    openVideoLibraryForInput: openVideoLibraryForInput,
    openImageLibraryForGallery: openImageLibraryForGallery,
    applySelectedGalleryLibraryImages: applySelectedGalleryLibraryImages,
    renderGalleryThumbnails: renderGalleryThumbnails,
    initElyDevMotionEnhancements: initElyDevMotionEnhancements
  };
})();
