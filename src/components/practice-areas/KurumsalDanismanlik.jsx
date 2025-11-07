const KurumsalDanismanlik = () => {
    return (
        <div className="min-h-screen bg-[#0B0C10] pt-24 pb-16">
            {/* Bokeh Lights Background */}
            <div className="practice-areas-bokeh">
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
                <div className="practice-areas-bokeh-light"></div>
            </div>
            <div className="practice-areas-gradient"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Kurumsal Danışmanlık Hizmetleri
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div 
                        className="bg-white/5 backdrop-blur-md rounded-lg p-8 md:p-12 border border-white/10"
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Sürekli danışmanlık hizmetleri müvekkillerimizin ihtiyaçları ve mevcut durum şartlarına göre şekillendirilebilmektedir. Koruyucu ve önleyici hukuk danışmanlığı çerçevesinde şirket organizasyonu, insan kaynakları süreçlerinin takibi, sözleşmelerin hazırlanması, fesih aşamasında hukuki yardım gibi konularda sürekli, etkin, güvenilir ve ulaşılabilir danışmanlık anlayışı ile müvekkillere hizmet verilmektedir.

                                İşveren müvekkiller nezdinde büromuzun en temel amacı, hukuki ihtilaf meydana gelmeden önleyici hizmet vermektir. Bu bağlamda verilen hukuki danışmanlık hizmeti, zarar meydana gelmeden tespit ve analiz yaparak riskleri en aza indirmek etrafında toplanmaktadır. Hukuki süreçler kanunlar çerçevesinde takip edilerek müvekkillerin hak ve menfaatlerinin korunması sağlanmaktadır. Açılan veya açılacak davalarda hukuki yardım, sözleşmelerin hazırlanması ve düzenlenmesi noktasında toplanmaktadır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KurumsalDanismanlik;