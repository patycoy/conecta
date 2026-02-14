
import { db } from './firebase';
import { negocios } from '../db/db';
import { collection, doc, writeBatch } from 'firebase/firestore';

async function seedDatabase() {
  const batch = writeBatch(db);
  const negociosCollection = collection(db, 'negocios');

  console.log('Iniciando el proceso de siembra de datos...');

  negocios.forEach((negocio) => {
    // Usamos el 'slug' como ID del documento para tener URLs amigables
    const docRef = doc(negociosCollection, negocio.slug);
    batch.set(docRef, negocio);
  });

  try {
    await batch.commit();
    console.log('¡La base de datos se ha poblado exitosamente con los datos de negocios!');
  } catch (error) {
    console.error('Error al intentar poblar la base de datos:', error);
  }
}

seedDatabase();
