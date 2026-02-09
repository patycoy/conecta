import { Negocio } from './types';

export const negocios: Negocio[] = [
  // ================= NEGOCIOS V.I.P =================
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
    vip: true
  },
]