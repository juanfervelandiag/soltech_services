export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  technologies: string[];
  estimatedTime: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Desarrollo Web",
    category: "Desarrollo",
    description: "Creación de sitios web modernos, responsivos y optimizados para tu negocio.",
    fullDescription: "Desarrollamos sitios web personalizados que destacan tu marca y convierten visitantes en clientes. Utilizamos las últimas tecnologías para garantizar rendimiento, seguridad y escalabilidad.",
    benefits: [
      "Diseño responsive adaptado a todos los dispositivos",
      "Optimización SEO para mejorar tu posicionamiento",
      "Carga rápida y rendimiento optimizado",
      "Código limpio y mantenible",
      "Integración con herramientas de análisis"
    ],
    technologies: ["React", "Angular", "Vue.js", "Node.js", "TypeScript"],
    estimatedTime: "4-8 semanas",
    imageUrl: "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0MDE5NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Tiendas Virtuales",
    category: "E-commerce",
    description: "Plataformas de comercio electrónico completas para vender tus productos online.",
    fullDescription: "Creamos tiendas virtuales intuitivas y seguras que facilitan la experiencia de compra de tus clientes y maximizan tus ventas online.",
    benefits: [
      "Pasarela de pagos integrada y segura",
      "Gestión de inventario en tiempo real",
      "Panel administrativo completo",
      "Diseño atractivo y fácil de navegar",
      "Sistema de cupones y promociones"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
    estimatedTime: "6-10 semanas",
    imageUrl: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzQwMDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Integración de APIs",
    category: "Desarrollo",
    description: "Conecta tus sistemas y automatiza procesos mediante integraciones personalizadas.",
    fullDescription: "Implementamos integraciones robustas que conectan diferentes plataformas y servicios, permitiendo el flujo automático de información entre tus herramientas de negocio.",
    benefits: [
      "Automatización de procesos empresariales",
      "Sincronización de datos en tiempo real",
      "Reducción de trabajo manual",
      "Mayor eficiencia operativa",
      "Escalabilidad garantizada"
    ],
    technologies: ["REST API", "GraphQL", "Webhooks", "OAuth", "JSON"],
    estimatedTime: "2-4 semanas",
    imageUrl: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBpbnRlZ3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0MDIxODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Automatización con Chatbots",
    category: "Automatización",
    description: "Chatbots inteligentes para atender a tus clientes 24/7 y automatizar consultas.",
    fullDescription: "Desarrollamos chatbots conversacionales que mejoran la atención al cliente, responden preguntas frecuentes y capturan leads de manera automática.",
    benefits: [
      "Atención al cliente 24/7",
      "Respuestas instantáneas",
      "Reducción de costos operativos",
      "Captura automática de leads",
      "Integración con WhatsApp, Messenger y web"
    ],
    technologies: ["Dialogflow", "WhatsApp API", "Messenger", "ChatGPT", "Botpress"],
    estimatedTime: "3-5 semanas",
    imageUrl: "https://images.unsplash.com/photo-1620429948700-24e48a41d5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzQwMjE4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Soporte Técnico Remoto",
    category: "Soporte",
    description: "Asistencia técnica especializada para resolver problemas de forma remota.",
    fullDescription: "Ofrecemos soporte técnico profesional para mantener tus sistemas funcionando correctamente, resolver incidencias y prevenir problemas futuros.",
    benefits: [
      "Respuesta rápida ante incidencias",
      "Mantenimiento preventivo",
      "Monitoreo continuo de sistemas",
      "Actualizaciones de seguridad",
      "Documentación de soluciones"
    ],
    technologies: ["TeamViewer", "AnyDesk", "Zoom", "SSH", "VPN"],
    estimatedTime: "Servicio continuo",
    imageUrl: "https://images.unsplash.com/photo-1748932123709-7a340870408c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwcmVtb3RlfGVufDF8fHx8MTc3NDAyMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Diseño UI/UX",
    category: "Diseño",
    description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales.",
    fullDescription: "Creamos diseños centrados en el usuario que combinan estética y funcionalidad para ofrecer experiencias digitales memorables y efectivas.",
    benefits: [
      "Investigación de usuarios",
      "Prototipos interactivos",
      "Diseño responsive",
      "Pruebas de usabilidad",
      "Sistema de diseño consistente"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
    estimatedTime: "3-6 semanas",
    imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWdufGVufDF8fHx8MTc3NDAyMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    name: "Ciberseguridad para Pymes",
    category: "Seguridad",
    description: "Protección integral de tus sistemas y datos contra amenazas digitales.",
    fullDescription: "Implementamos medidas de seguridad robustas para proteger tu negocio de ciberataques, vulnerabilidades y pérdida de información crítica.",
    benefits: [
      "Auditoría de seguridad completa",
      "Protección contra malware y ransomware",
      "Backups automáticos y seguros",
      "Certificados SSL/TLS",
      "Capacitación del equipo"
    ],
    technologies: ["Firewalls", "VPN", "SSL/TLS", "Antivirus", "SIEM"],
    estimatedTime: "2-4 semanas",
    imageUrl: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzM5ODI4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    name: "Mantenimiento Web",
    category: "Soporte",
    description: "Mantenimiento continuo para mantener tu sitio web actualizado y seguro.",
    fullDescription: "Servicio de mantenimiento integral que asegura el funcionamiento óptimo, seguridad y actualización constante de tu sitio web.",
    benefits: [
      "Actualizaciones regulares de contenido",
      "Monitoreo de rendimiento",
      "Corrección de errores",
      "Optimización continua",
      "Reportes mensuales"
    ],
    technologies: ["WordPress", "Git", "Monitoring Tools", "Analytics", "CDN"],
    estimatedTime: "Servicio mensual",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc0MDIxODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const categories = [
  "Todos",
  "Desarrollo",
  "E-commerce",
  "Automatización",
  "Soporte",
  "Diseño",
  "Seguridad"
];
