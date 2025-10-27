import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import Footer from './components/Footer'
import PracticeAreaDetail from './components/PracticeAreaDetail'

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
            </Routes>
            <Footer />
        </div>
    )
}

export default App
