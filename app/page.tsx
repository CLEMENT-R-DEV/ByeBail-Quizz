'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Rediriger automatiquement vers la première question
    router.push('/quiz/1');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Quiz ByeBail</h1>
        <p className="text-gray-500">Chargement...</p>
      </div>
    </div>
  );
}
