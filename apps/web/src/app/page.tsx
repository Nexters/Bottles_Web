'use client';

import { Footer } from '../components/footer/Footer';
import { Guide } from '../components/guide/Guide';
import { Header } from '../components/header/Header';
import { Info } from '../components/info/Info';
import { layoutStyle, mainStyle } from './layout.css';

export default function Home() {
  return (
    <div className={layoutStyle}>
      <main className={mainStyle}>
        <Header />
        <Info />
        <Guide />
      </main>
      <Footer />
    </div>
  );
}
