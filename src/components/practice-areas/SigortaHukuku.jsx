import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const SigortaHukuku = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

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
                        Sigorta Hukuku
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
                                Trafik kazasından kaynaklanan maddi ve manevi tazminat, destekten yoksun kalma tazminatı, iş kazasından kaynaklı tazminatlar hususunda uzman ekibimiz anında tespit ve öngörüsü ile müvekkillere etkin hukuk hizmeti vermektedir. Mağdurlarla bire bir görüşme ve yakın temas ile süreç içerisinde hak kaybına uğramaları engellenmekte ve maksimum fayda sağlamaları amaçlanmaktadır.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 mt-16">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold text-white mb-6">
                            Sigorta Hukuku Hizmetlerimiz
                        </h2>

                        {/* Services List */}
                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Maddi Tazminat Davaları
                                </h3>
                                <p className="text-gray-300">
                                    Trafik kazalarında meydana gelen maddi zararların tespiti ve tazmini konusunda uzman kadromuzla hizmetinizdeyiz.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Manevi Tazminat Davaları
                                </h3>
                                <p className="text-gray-300">
                                    Kazazedelerin yaşadığı manevi zararların tazmini için hukuki destek sağlıyoruz.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Destekten Yoksun Kalma Tazminatı
                                </h3>
                                <p className="text-gray-300">
                                    Kazalarda hayatını kaybedenlerin yakınları için destekten yoksun kalma tazminatı taleplerinde bulunuyoruz.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    İş Kazası Tazminatları
                                </h3>
                                <p className="text-gray-300">
                                    İş kazası geçiren bireylerin maddi ve manevi tazminat taleplerinin takibi için yanınızdayız.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            {/* Contact Info Card */}
                            <div className="bg-gray-900 text-white p-6 mb-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">İletişim Bilgileri</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Phone size={18} className="mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold mb-1">Telefon</div>
                                            <a href="tel:+905551234567" className="hover:text-gray-300">
                                                +90 555 123 45 67
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail size={18} className="mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold mb-1">E-posta</div>
                                            <a href="mailto:info@cavdarersoz.com" className="hover:text-gray-300">
                                                info@cavdarersoz.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} className="mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold mb-1">Adres</div>
                                            <p className="text-gray-300">
                                                Bursa, Türkiye
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
                                    Hukuki Destek Alın
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    Sigorta hukuku konusunda profesyonel destek için formu doldurun, en kısa sürede size dönüş yapalım.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Ad Soyad *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 rounded-lg"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            E-posta *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 rounded-lg"
                                            placeholder="ornek@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Telefon *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 rounded-lg"
                                            placeholder="+90 555 123 45 67"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Mesajınız *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 rounded-lg resize-none"
                                            placeholder="Hukuki konunuzu kısaca açıklayın..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-900 text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors rounded-lg"
                                    >
                                        Gönder
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default SigortaHukuku;