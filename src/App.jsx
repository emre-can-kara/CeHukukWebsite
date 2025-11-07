import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import Avukatlarimiz from './components/Avukatlarimiz';
import AileBosanmaHukuku from './components/practice-areas/AileBosanmaHukuku';
import IsHukuku from './components/practice-areas/IsHukuku';
import GayrimenkulMirasHukuku from './components/practice-areas/GayrimenkulMirasHukuku';
import SigortaHukuku from './components/practice-areas/SigortaHukuku';
import IcraIflasHukuku from './components/practice-areas/IcraIflasHukuku';
import Arabuluculuk from './components/practice-areas/Arabuluculuk';
import KVKKDanismanligi from './components/practice-areas/KVKKDanismanligi';
import KurumsalDanismanlik from './components/practice-areas/KurumsalDanismanlik';
import ScrollToTop from './components/ScrollToTop';

function MainPage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <ExperienceSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/avukatlarimiz" element={<Avukatlarimiz />} />
        <Route path="/aile-bosanma-hukuku" element={<AileBosanmaHukuku />} />
        <Route path="/is-hukuku" element={<IsHukuku />} />
        <Route path="/gayrimenkul-miras-hukuku" element={<GayrimenkulMirasHukuku />} />
        <Route path="/sigorta-hukuku" element={<SigortaHukuku />} />
        <Route path="/icra-iflas-hukuku" element={<IcraIflasHukuku />} />
        <Route path="/arabuluculuk" element={<Arabuluculuk />} />
        <Route path="/kvkk-danismanligi" element={<KVKKDanismanligi />} />
        <Route path="/kurumsal-danismanlik" element={<KurumsalDanismanlik />} />
      </Routes>
    </>
  )
}

export default App
