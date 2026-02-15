export interface Ubicacion {
    ciudad: string;
    direccion: string;
    mapa?: string;
  }
  
  export interface Contacto {
    telefono?: string;
    whatsapp?: string;
    sitio?: string;
    correo?: string;
  }
  
  export interface RedesSociales {
    facebook?: string;
    instagram?: string;
    messenger?: string;
  }
  
  export interface Horario {
    abre: string;
    cierra: string;
  }
  
  export interface Negocio {
    id: string;
    nombre: string;
    slug: string;
    categoria: string;
    descripcion: string;
    imagen: string;
    banner?: string; // Mantener como opcional
    calificacion: number;
    resenas: number;
    rango_precio: string;
    etiquetas: string[];
    ubicacion: Ubicacion;
    contacto: Contacto;
    horario: Horario;
    destacado?: boolean;
    redessociales?: RedesSociales;
    vip?: boolean;
  }
  