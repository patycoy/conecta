'use client';

import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Home from '@/components/Home';


export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <LoadingSpinner onComplete={() => setIsLoading(false)} />
  ) : (
    
      <Home />
    
  );
}
