import { useState } from 'react';

const PracticeAreas = () => {
    const [selectedArea, setSelectedArea] = useState(null);

    const practiceAreasData = [
        {
            id: 1,
            title: "Ticaret Hukuku",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            description: "Şirket kuruluşu, birleşme ve devralma işlemleri konularında uzman hizmet"
        },
        {
            id: 2,
            title: "Ceza Hukuku", 
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            description: "Ceza davalarında savunma ve hukuki destek hizmetleri"
        },
        {
            id: 3,
            title: "Aile Hukuku",
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
            description: "Boşanma, velayet ve nafaka davalarında uzman hizmet"
        },
        {
            id: 4,      
            title: "İş Hukuku",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
            description: "İşçi ve işveren hakları, iş sözleşmeleri konularında danışmanlık"
        },
        {
            id: 5,
            title: "Gayrimenkul Hukuku",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
            description: "Tapu işlemleri, gayrimenkul alım-satım sözleşmeleri"
        },
        {
            id: 6,
            title: "Vergi Hukuku",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
            description: "Vergi uyuşmazlıkları ve vergi planlaması danışmanlığı"
        },
        {
            id: 7,
            title: "Sigorta Hukuku",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
            description: "Sigorta talepleri ve uyuşmazlık çözümleri"
        },
        {
            id: 8,
            title: "Fikri Mülkiyet",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            description: "Patent, marka ve telif hakları korunması"
        },
        {
            id: 9,
            title: "Anayasa Hukuku",
            image: "https://images.unsplash.com/photo-1589578662600-eaa4a5b2e3d3?w=400&h=300&fit=crop",
            description: "Anayasal haklar ve özgürlükler alanında danışmanlık"
        }
    ];

    const handleAreaClick = (area) => {
        setSelectedArea(area);
        console.log(`Navigating to ${area.title} component`);
    };

    if (selectedArea) {
        return (
            <section className="practice-areas-detail text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col relative overflow-hidden">
                {/* Background Linear Bokeh Effect - REDUCED */}
                <div className="practice-areas-bokeh">
                    <div className="practice-areas-bokeh-light"></div>
                    <div className="practice-areas-bokeh-light"></div>
                    <div className="practice-areas-bokeh-light"></div>
                    <div className="practice-areas-bokeh-light"></div>
                </div>

                <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col relative z-10">
                    <button 
                        onClick={() => setSelectedArea(null)}
                        className="mb-6 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded hover:from-gray-500 hover:to-gray-700 transition-all duration-300 self-start"
                    >
                        ← Geri Dön
                    </button>
                    
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">{selectedArea.title}</h1>
                        <div className="w-full max-w-2xl h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden mb-6">
                            <img 
                                src={selectedArea.image} 
                                alt={selectedArea.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl">{selectedArea.description}</p>
                        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg max-w-2xl w-full">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">Hizmet Detayları</h3>
                            <p className="text-gray-300 text-sm sm:text-base">
                                Bu alanda size sunduğumuz profesyonel hukuki hizmetler hakkında daha detaylı bilgi için bizimle iletişime geçin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="practice-areas-section text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Linear Bokeh Background Effect - REDUCED */}
            <div className="practice-areas-bokeh">
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
            </div>

            {/* Linear Gradient Overlay */}
            <div className="practice-areas-gradient"></div>
                
            {/* Content with higher z-index */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Side - Text Content - UNTOUCHED */}
                        <div className="space-y-8">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Çalışma Alanlarımız
                            </h2>
                            
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Çeşitli ve adil bir kültürü ilerletmeye, hukukun üstünlüğünü desteklemeye, 
                                adalete erişimi artırmaya ve toplumun en savunmasız kesimlerinin 
                                müvekkilerimiz, toplum ortaklarımız ve hukuk sektörü meslektaşlarımızla 
                                ortaklık halinde kritik yasal yardım almasını sağlamaya derinden bağlıyız.
                            </p>
                            
                            
                        </div>

                        {/* Right Side - Law Fields Grid - 3x3 */}
                        <div className="grid grid-cols-3 gap-4">
                            {practiceAreasData.map((area, index) => (
                                <div
                                    key={area.id}
                                    onClick={() => handleAreaClick(area)}
                                    className="aspect-square cursor-pointer group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900"
                                >
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-60"
                                    />
                                    
                                    {/* Always visible overlay with title */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
                                        <h3 className="text-white text-sm font-bold leading-tight">{area.title}</h3>
                                    </div>
                                    
                                    {/* Hover overlay with description */}
                                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                                        <h3 className="text-white text-sm font-bold mb-2">{area.title}</h3>
                                        <p className="text-gray-300 text-xs leading-tight">{area.description}</p>
                                        <div className="mt-3">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                                                Detaylar →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas