
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Image 
        src="/logosanjuan.png" 
        alt="Logo de San Juan" 
        width={200} 
        height={200}
        className="mb-8"
      />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4 mb-2">Página No Encontrada</h2>
      <p className="text-gray-500 mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
