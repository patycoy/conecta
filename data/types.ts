export interface Ubicacion {
  ciudad: string;
  direccion: string;
}

export interface Contacto {
  telefono?: string;
  whatsapp?: string;
  sitio?: string;
  correo?: string;
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
  calificacion: number;
  resenas: number;
  rango_precio: string;
  etiquetas: string[];
  ubicacion: Ubicacion;
  contacto: Contacto;
  horario: Horario;
  destacado?: boolean;
}
