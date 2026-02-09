import { Negocio } from './types';

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
    categoria: "comida-rapida",
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
  }
];
