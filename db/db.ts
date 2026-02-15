import { Negocio } from '@/data/types';

export const negocios: Negocio[] = [
  {
    id: "1",
    nombre: "Burger Max",
    slug: "burger-max",
    categoria: "comida-rapida",
    descripcion: "Hamburguesas gourmet con ingredientes frescos.",
    imagen: "/img/burger.jpg",
    calificacion: 4.5,
    resenas: 230,
    rango_precio: "$$",
    etiquetas: ["hamburguesas", "delivery", "comida rápida"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Reforma 123"
    },
    contacto: {
      telefono: "5512345678",
      whatsapp: "5512345678",
      sitio: "https://burgermax.com"
    },
    horario: { abre: "10:00", cierra: "23:00" },
    destacado: true
  },
  {
    id: "2",
    nombre: "Taco Express",
    slug: "taco-express",
    categoria: "restaurantes",
    descripcion: "Tacos al pastor y carnitas con servicio rápido.",
    imagen: "/img/tacos.jpg",
    calificacion: 4.7,
    resenas: 540,
    rango_precio: "$",
    etiquetas: ["tacos", "mexicano", "pastor"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Calle Juárez 88"
    },
    contacto: { telefono: "5598765432" },
    horario: { abre: "12:00", cierra: "02:00" }
  },
  {
    id: "3",
    nombre: "Pizza Flash",
    slug: "pizza-flash",
    categoria: "comida-rapida",
    descripcion: "Pizzas artesanales en menos de 10 minutos.",
    imagen: "/img/pizza.jpg",
    calificacion: 4.3,
    resenas: 120,
    rango_precio: "$$",
    etiquetas: ["pizza", "italiano", "delivery"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Insurgentes 456"
    },
    contacto: { whatsapp: "5511122233" },
    horario: { abre: "11:00", cierra: "23:00" }
  },
  {
    id: "4",
    nombre: "El Sabor Criollo",
    slug: "el-sabor-criollo",
    categoria: "comida-rapida",
    descripcion: "Auténtica comida criolla con los mejores ingredientes de la región.",
    imagen: "/img/criollo.jpg",
    calificacion: 4.8,
    resenas: 450,
    rango_precio: "$$$",
    etiquetas: ["criollo", "tradicional", "gourmet"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Calle Madero 20"
    },
    contacto: {
      telefono: "5555555555",
      sitio: "https://elsaborcriollo.com"
    },
    horario: { abre: "13:00", cierra: "22:00" },
    destacado: true
  },
  {
    id: "5",
    nombre: "Cine Estrella",
    slug: "cine-estrella",
    categoria: "entretenimiento",
    descripcion: "Los últimos estrenos de Hollywood en la mejor calidad.",
    imagen: "/img/cine.jpg",
    calificacion: 4.6,
    resenas: 890,
    rango_precio: "$$",
    etiquetas: ["cine", "películas", "estrenos"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Plaza Central, Local 10"
    },
    contacto: { sitio: "https://cineestrella.com" },
    horario: { abre: "10:00", cierra: "00:00" }
  },
  {
    id: "6",
    nombre: "Fix It Taller",
    slug: "fix-it-taller",
    categoria: "mantenimiento",
    descripcion: "Reparación de automóviles de todas las marcas.",
    imagen: "/img/taller.jpg",
    calificacion: 4.9,
    resenas: 150,
    rango_precio: "$$$",
    etiquetas: ["autos", "mecánica", "reparación"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Taller 45"
    },
    contacto: { telefono: "5544332211" },
    horario: { abre: "09:00", cierra: "18:00" }
  },
  {
    id: "7",
    nombre: "Lava Rápido",
    slug: "lava-rapido",
    categoria: "servicios",
    descripcion: "Lavado de autos y camionetas con cera.",
    imagen: "/img/lavado.jpg",
    calificacion: 4.4,
    resenas: 320,
    rango_precio: "$",
    etiquetas: ["lavado", "autos", "cera"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Calle del Sol 11"
    },
    contacto: { whatsapp: "5588776655" },
    horario: { abre: "08:00", cierra: "20:00" }
  }
];