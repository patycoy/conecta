'use client';
/*
import { useAppContext } from '@/context/AppContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import Home from '@/components/Home';

export default function Page() {
  const { isInitialLoading, finishInitialLoad } = useAppContext();

  return isInitialLoading ? (
    <LoadingSpinner onComplete={finishInitialLoad} />
  ) : (
    <Home />
  );
}
*/
import Pruebas from '@/components/LandigVistas'; 

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Pruebas />
    </div>
  );
} 