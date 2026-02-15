'use client';

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
