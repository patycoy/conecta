'use client';

import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HomeWithLayout } from '@/components/Home';

/*
  Página principal (app/page)
  - Controla la pantalla de carga inicial mediante `LoadingSpinner`.
  - Cuando el spinner llega a 100% (onComplete), `isLoading` pasa a false y se renderiza `HomeWithLayout`.
  - Mantener la lógica de carga en la página raíz evita que el spinner se superponga sobre componentes internos.
*/
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <LoadingSpinner onComplete={() => setIsLoading(false)} />
  ) : (
    <HomeWithLayout />
  );
}
