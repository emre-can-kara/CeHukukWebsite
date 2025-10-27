import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PracticeAreaDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [practiceArea, setPracticeArea] = useState(null);

    const practiceAreasData = [
        {
            id: 1,
            title: "Ticaret Hukuku",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            description: "Şirket kuruluşu, birleşme ve devralma işlemleri konularında uzman hizmet",
            longDescription: "Ticaret hukuku alanında, şirket kuruluşu süreçlerinden başlayarak, birleşme ve devralma işlemleri, ticari sözleşmeler, şirket ortaklığı uyuşmazlıkları ve ticari dava takipleri konularında kapsamlı hukuki hizmet sunuyoruz. Deneyimli ekibimizle, ticari faaliyetlerinizin hukuki altyapısını güçlendiriyoruz.",
            services: [
                "Şirket kuruluşu ve yasal düzenlemeler",
                "Birleşme ve devralma işlemleri",
                "Ticari sözleşme hazırlama ve inceleme",
                "Şirket ortaklığı uyuşmazlıkları",
                "Ticari dava takipleri"
            ]
        },
        {
            id: 2,
            title: "Ceza Hukuku", 
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            description: "Ceza davalarında savunma ve hukuki destek hizmetleri",
            longDescription: "Ceza hukuku alanında, soruşturma aşamasından itibaren müvekkillerimizin yanında yer alıyor, profesyonel savunma hizmeti sunuyoruz. Deneyimli ceza hukuku ekibimizle, hakları koruma altına alıyor ve adil yargılanma ilkesi çerçevesinde en iyi savunmayı yapıyoruz.",
            services: [
                "Soruşturma aşamasında hukuki danışmanlık",
                "Ceza davalarında müdafilik",
                "Suç mağduru hakları korunması",
                "İfade tutanaklarının hazırlanması",
                "Temyiz ve itiraz süreçleri"
            ]
        },
        {
            id: 3,
            title: "Aile Hukuku",
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
            description: "Boşanma, velayet ve nafaka davalarında uzman hizmet",
            longDescription: "Aile hukuku alanında, boşanma süreçlerinden velayet davalarına, nafaka hesaplamalarından mal paylaşımı konularına kadar geniş bir yelpazede hizmet veriyoruz. Hassas konularda anlayışlı yaklaşımımızla, ailenizin hukuki haklarını koruyoruz.",
            services: [
                "Boşanma davaları ve süreçleri",
                "Velayet ve kişisel ilişki düzenleme",
                "Nafaka hesaplama ve takibi",
                "Mal rejimi ve paylaşım davası",
                "Evlilik öncesi sözleşmeler"
            ]
        },
        {
            id: 4,      
            title: "İş Hukuku",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
            description: "İşçi ve işveren hakları, iş sözleşmeleri konularında danışmanlık",
            longDescription: "İş hukuku alanında hem işçi hem de işveren tarafı için kapsamlı hukuki hizmetler sunuyoruz. İş sözleşmelerinden işten çıkarma süreçlerine, iş kazalarından mobbing davalarına kadar geniş bir alanda uzman desteği sağlıyoruz.",
            services: [
                "İş sözleşmesi hazırlama ve inceleme",
                "İşten çıkarma süreçleri",
                "İş kazası ve meslek hastalığı davaları",
                "Mobbing ve ayrımcılık davaları",
                "Toplu iş sözleşmesi müzakereleri"
            ]
        },
        {
            id: 5,
            title: "Gayrimenkul Hukuku",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
            description: "Tapu işlemleri, gayrimenkul alım-satım sözleşmeleri",
            longDescription: "Gayrimenkul hukuku alanında, tapu işlemlerinden inşaat sözleşmelerine, kiralama uyuşmazlıklarından imar planı değişikliklerine kadar her türlü gayrimenkul hukuki sorununuzda yanınızdayız. Yatırımlarınızı güvence altına alıyoruz.",
            services: [
                "Tapu işlemleri ve devir süreçleri",
                "Gayrimenkul alım-satım sözleşmeleri",
                "Kira sözleşmeleri ve uyuşmazlıkları",
                "İnşaat sözleşmeleri",
                "İmar planı ve ruhsat işlemleri"
            ]
        },
        {
            id: 6,
            title: "Vergi Hukuku",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
            description: "Vergi uyuşmazlıkları ve vergi planlaması danışmanlığı",
            longDescription: "Vergi hukuku alanında, vergi uyuşmazlıklarının çözümünden vergi planlaması danışmanlığına, vergi denetimi süreçlerinden ceza davalarına kadar kapsamlı hizmet sunuyoruz. Vergi yükümlülüklerinizi optimize ediyoruz.",
            services: [
                "Vergi uyuşmazlıkları çözümü",
                "Vergi planlaması danışmanlığı",
                "Vergi denetimi süreçleri",
                "Vergi ceza davaları",
                "Transfer fiyatlandırması"
            ]
        },
        {
            id: 7,
            title: "Sigorta Hukuku",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
            description: "Sigorta talepleri ve uyuşmazlık çözümleri",
            longDescription: "Sigorta hukuku alanında, sigorta şirketleriyle yaşanan uyuşmazlıklarda haklarınızı koruyoruz. Tazminat taleplerinden poliçe yorumlamalarına, sigorta sözleşmesi uyuşmazlıklarından ekspertiz raporlarına kadar her aşamada yanınızdayız.",
            services: [
                "Sigorta tazminat talepleri",
                "Poliçe yorumlama ve uyuşmazlıkları",
                "Ekspertiz raporu değerlendirme",
                "Sigorta sözleşmesi hazırlama",
                "Sigorta dava takipleri"
            ]
        },
        {
            id: 8,
            title: "Fikri Mülkiyet",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            description: "Patent, marka ve telif hakları korunması",
            longDescription: "Fikri mülkiyet hakları alanında, marka tescilinden patent başvurularına, telif hakları korunmasından tasarım tescillerine kadar geniş bir yelpazede hizmet veriyoruz. Yaratıcı çalışmalarınızı ve ticari varlıklarınızı koruyoruz.",
            services: [
                "Marka tescili ve korunması",
                "Patent başvuruları",
                "Telif hakları korunması",
                "Tasarım tescili",
                "Fikri mülkiyet ihlali davaları"
            ]
        },
        {
            id: 9,
            title: "Anayasa Hukuku",
            image: "https://images.unsplash.com/photo-1589578662600-eaa4a5b2e3d3?w=400&h=300&fit=crop",
            description: "Anayasal haklar ve özgürlükler alanında danışmanlık",
            longDescription: "Anayasa hukuku alanında, temel hak ve özgürlüklerin korunması, anayasal şikayetler, kamu hukuku uyuşmazlıkları ve idari yargı süreçlerinde uzman hukuki destek sağlıyoruz. Demokratik haklarınızı savunuyoruz.",
            services: [
                "Anayasal şikayet başvuruları",
                "Temel hak ve özgürlükler korunması",
                "Kamu hukuku uyuşmazlıkları",
                "İdari yargı süreçleri",
                "Ombudsmanlık başvuruları"
            ]
        }
    ];

    useEffect(() => {
        const area = practiceAreasData.find(area => area.id === parseInt(id));
        setPracticeArea(area);
    }, [id]);

    if (!practiceArea) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Sayfa bulunamadı</h1>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="practice-areas-detail text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Linear Bokeh Effect */}
            <div className="practice-areas-bokeh">
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col relative z-10">
                <button 
                    onClick={() => navigate('/')}
                    className="mb-6 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded hover:from-gray-500 hover:to-gray-700 transition-all duration-300 self-start"
                >
                    ← Ana Sayfaya Dön
                </button>
                
                <div className="flex-1 flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-6">
                            <img 
                                src={practiceArea.image} 
                                alt={practiceArea.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{practiceArea.title}</h1>
                        
                        <p className="text-lg text-gray-300 leading-relaxed">{practiceArea.longDescription}</p>
                        
                        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Sunduğumuz Hizmetler</h3>
                            <ul className="space-y-2">
                                {practiceArea.services.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span className="text-gray-300">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Bizimle İletişime Geçin</h3>
                            <p className="text-gray-200 mb-4">
                                {practiceArea.title} konusunda profesyonel hukuki destek almak için bizimle iletişime geçin.
                            </p>
                            <button className="px-6 py-2 bg-white text-blue-900 rounded font-semibold hover:bg-gray-100 transition-colors">
                                İletişim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticeAreaDetail;