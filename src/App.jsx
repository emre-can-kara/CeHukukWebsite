import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import Footer from './components/Footer'
import PracticeAreaDetail from './components/PracticeAreaDetail'
import HukukBuromuz from './components/HukukBuromuz'
import Avukatlarimiz from './components/Avukatlarimiz'

// Practice Area Components - All from practice-areas folder
import KurumsalDanismanlik from './components/practice-areas/KurumsalDanismanlik'
import IsHukuku from './components/practice-areas/IsHukuku'
import SigortaHukuku from './components/practice-areas/SigortaHukuku'
import GayrimenkulMirasHukuku from './components/practice-areas/GayrimenkulMirasHukuku'
import CezaHukuku from './components/practice-areas/CezaHukuku'
import AileBosanmaHukuku from './components/practice-areas/AileBosanmaHukuku'
import IcraIflasHukuku from './components/practice-areas/IcraIflasHukuku'
import Arabuluculuk from './components/practice-areas/Arabuluculuk'
import KVKKDanismanligi from './components/practice-areas/KVKKDanismanligi'

const App = () => {
    return ( 
        <div className="bg-[#0B0C10] min-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <PracticeAreas />
                    </>
                } />
                <Route path="/practice-area/:id" element={<PracticeAreaDetail />} />
                
                {/* Kurumsal Routes */}
                <Route path="/hukuk-buromuz" element={<HukukBuromuz />} />
                <Route path="/avukatlarimiz" element={<Avukatlarimiz />} />
                
                {/* Practice Area Routes */}
                <Route path="/kurumsal-danismanlik" element={<KurumsalDanismanlik />} />
                <Route path="/is-hukuku" element={<IsHukuku />} />
                <Route path="/sigorta-hukuku" element={<SigortaHukuku />} />
                <Route path="/gayrimenkul-miras-hukuku" element={<GayrimenkulMirasHukuku />} />
                <Route path="/ceza-hukuku" element={<CezaHukuku />} />
                <Route path="/aile-bosanma-hukuku" element={<AileBosanmaHukuku />} />
                <Route path="/icra-iflas-hukuku" element={<IcraIflasHukuku />} />
                <Route path="/arabuluculuk" element={<Arabuluculuk />} />
                <Route path="/kvkk-danismanligi" element={<KVKKDanismanligi />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
