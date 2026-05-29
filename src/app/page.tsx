'use client';

import ChafaNavbar from '@/components/ChafaNavbar';
import ChafaHero from '@/components/ChafaHero';
import ChafaAbout from '@/components/ChafaAbout';
import ChafaSignatureDishes from '@/components/ChafaSignatureDishes';
import ChafaStudio from '@/components/ChafaStudio';
import ChafaLocations from '@/components/ChafaLocations';
import ChafaContact from '@/components/ChafaContact';
import ChafaFooter from '@/components/ChafaFooter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ChafaNavbar />
      <main className="flex-1">
        <ChafaHero />
        <ChafaAbout />
        <ChafaSignatureDishes />
        <ChafaStudio />
        <ChafaLocations />
        <ChafaContact />
      </main>
      <ChafaFooter />
    </div>
  );
}
