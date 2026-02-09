import { Negocio } from './types';

export const negocios: Negocio[] = [
  // ================= COMIDA RÁPIDA =================
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
      direccion: "Av. Reforma 123",
      mapa:""
    },
    contacto: {
      telefono: "5512345678",
      whatsapp: "5512345678",
      sitio: "https://burgermax.com"
    },
    redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
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
      direccion: "Calle Juárez 88",
      mapa:""
    },
    contacto: { telefono: "5598765432" },
    horario: { abre: "12:00", cierra: "02:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
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
      direccion: "Av. Insurgentes 456",
      mapa:""
    },
    contacto: { whatsapp: "5511122233" },
    horario: { abre: "11:00", cierra: "23:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
 
  // ================= ENTRETENIMIENTO =================
  {
    id: "4",
    nombre: "Cine Star",
    slug: "cine-star",
    categoria: "entretenimiento",
    descripcion: "Cine con salas VIP y tecnología 4D.",
    imagen: "/img/cine.jpg",
    calificacion: 4.8,
    resenas: 1200,
    rango_precio: "$$",
    etiquetas: ["cine", "películas", "4D"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Centro Comercial Plaza Norte",
      mapa:""
    },
    contacto: { sitio: "https://cinestar.com" },
    horario: { abre: "10:00", cierra: "01:00" },
    destacado: true ,
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "5",
    nombre: "Game Zone",
    slug: "game-zone",
    categoria: "entretenimiento",
    descripcion: "Arcade y videojuegos para todas las edades.",
    imagen: "/img/arcade.jpg",
    calificacion: 4.6,
    resenas: 300,
    rango_precio: "$$",
    etiquetas: ["arcade", "videojuegos"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Central 22",
      mapa:""
    },
    contacto: { telefono: "5544444444" },
    horario: { abre: "12:00", cierra: "00:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },

  },
  {
    id: "6",
    nombre: "Karaoke Night",
    slug: "karaoke-night",
    categoria: "entretenimiento",
    descripcion: "Salas privadas de karaoke con bebidas.",
    imagen: "/img/karaoke.jpg",
    calificacion: 4.4,
    resenas: 210,
    rango_precio: "$$",
    etiquetas: ["karaoke", "bar", "fiesta"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Zona Rosa 99",
      mapa:""
    },
    contacto: { telefono: "5533333333" },
    horario: { abre: "18:00", cierra: "03:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },

  // ================= RESTAURANTES =================
  {
    id: "7",
    nombre: "La Toscana",
    slug: "la-toscana",
    categoria: "restaurantes",
    descripcion: "Restaurante italiano de alta cocina.",
    imagen: "/img/italian.jpg",
    calificacion: 4.9,
    resenas: 980,
    rango_precio: "$$$",
    etiquetas: ["italiano", "pasta", "vino"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Polanco 45",
      mapa:""
    },
    contacto: { sitio: "https://latoscana.com" },
    horario: { abre: "13:00", cierra: "23:00" },
    destacado: true,
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "8",
    nombre: "Sushi World",
    slug: "sushi-world",
    categoria: "restaurantes",
    descripcion: "Sushi premium y comida japonesa.",
    imagen: "/img/sushi.jpg",
    calificacion: 4.6,
    resenas: 560,
    rango_precio: "$$$",
    etiquetas: ["sushi", "japonés"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Asia 12",
      mapa:""
    },
    contacto: { telefono: "5510101010" },
    horario: { abre: "12:00", cierra: "22:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "9",
    nombre: "El Asador",
    slug: "el-asador",
    categoria: "restaurantes",
    descripcion: "Carnes a la parrilla estilo argentino.",
    imagen: "/img/steak.jpg",
    calificacion: 4.7,
    resenas: 700,
    rango_precio: "$$$",
    etiquetas: ["carne", "parrilla", "argentino"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Sur 300",
      mapa:""
    },
    contacto: { telefono: "5522222222" },
    horario: { abre: "13:00", cierra: "23:30" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },

  // ================= SERVICIOS =================
  {
    id: "10",
    nombre: "Digital Pro",
    slug: "digital-pro",
    categoria: "servicios",
    descripcion: "Agencia de marketing digital.",
    imagen: "/img/marketing.jpg",
    calificacion: 4.5,
    resenas: 90,
    rango_precio: "$$",
    etiquetas: ["marketing", "seo", "publicidad"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Tech 101",
      mapa:""
    },
    contacto: { correo: "info@digitalpro.com" },
    horario: { abre: "09:00", cierra: "18:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "11",
    nombre: "Legal MX",
    slug: "legal-mx",
    categoria: "servicios",
    descripcion: "Servicios legales y asesoría jurídica.",
    imagen: "/img/law.jpg",
    calificacion: 4.2,
    resenas: 40,
    rango_precio: "$$$",
    etiquetas: ["abogados", "legal"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Justicia 77",
      mapa:""
    },
    contacto: { telefono: "5555555555" },
    horario: { abre: "09:00", cierra: "17:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "12",
    nombre: "Finanzas Plus",
    slug: "finanzas-plus",
    categoria: "servicios",
    descripcion: "Consultoría financiera y contable.",
    imagen: "/img/finance.jpg",
    calificacion: 4.4,
    resenas: 60,
    rango_precio: "$$",
    etiquetas: ["contabilidad", "finanzas"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Centro Financiero 1",
      mapa:""
    },
    contacto: { correo: "contacto@finanzasplus.com" },
    horario: { abre: "09:00", cierra: "18:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },

  // ================= MANTENIMIENTO =================
  {
    id: "13",
    nombre: "Fix Home",
    slug: "fix-home",
    categoria: "mantenimiento",
    descripcion: "Reparaciones del hogar y plomería.",
    imagen: "/img/plumber.jpg",
    calificacion: 4.6,
    resenas: 150,
    rango_precio: "$$",
    etiquetas: ["plomería", "hogar"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Col. Roma 12",
      mapa:""
    },
    contacto: { whatsapp: "5599999999" },
    horario: { abre: "08:00", cierra: "20:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "14",
    nombre: "Electro Fix",
    slug: "electro-fix",
    categoria: "mantenimiento",
    descripcion: "Servicio técnico de electrodomésticos.",
    imagen: "/img/electronics.jpg",
    calificacion: 4.3,
    resenas: 110,
    rango_precio: "$$",
    etiquetas: ["reparación", "electrodomésticos"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Técnica 500",
      mapa:""
    },
    contacto: { telefono: "5512340000" },
    horario: { abre: "09:00", cierra: "19:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  },
  {
    id: "15",
    nombre: "Clean Pro",
    slug: "clean-pro",
    categoria: "mantenimiento",
    descripcion: "Limpieza residencial y oficinas.",
    imagen: "/img/cleaning.jpg",
    calificacion: 4.8,
    resenas: 300,
    rango_precio: "$$",
    etiquetas: ["limpieza", "hogar", "oficina"],
    ubicacion: {
      ciudad: "Ciudad de México",
      direccion: "Av. Limpio 9",
      mapa:""
    },
    contacto: { whatsapp: "5588888888" },
    horario: { abre: "07:00", cierra: "18:00" },
     redessociales: {
      facebook: "",
      instagram: "",
      massenger: ""
    },
  }
];
