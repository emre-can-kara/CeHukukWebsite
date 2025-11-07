import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const IsHukuku = () => {
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
        <div className="bg-white min-h-screen pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2">
                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-['Playfair_Display']">
                            İş Hukuku
                        </h1>

                        {/* Main Content */}
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Çavdar & Ersöz Hukuk Bürosu, kıdem ihbar tazminatı ve işçilerin yasal haklarının hesaplanması ve takibi, arabuluculuk süresinde çözüm odaklı etkin iş takibi, işe iade ve işe iadeden kaynaklı alacakların takibi, iş sözleşmelerinin düzenlenmesi, sona erdirilmesi, toplu sözleşmeler sürecinde hukuki destek verilmesi, üst düzey yöneticilere yönelik anlaşmalı fesih süreçlerinin yönetilmesi, yasal değişiklikler ışığında gerekli güncelleme ve bilgilendirmenin yapılması gibi birçok konuda işbirliği içerisinde çalışarak hızlı ve güvenilir hizmet vermektedir.
                            </p>
                            <p>
                                Bu kapsamda Bursa işçi avukatı danışmanlık hizmeti de sunuyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            {/* Contact Info Card */}
                            <div className="bg-gray-900 text-white p-6 mb-6">
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
                            <div className="bg-gray-50 border border-gray-200 p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
                                    Hukuki Destek Alın
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    İş hukuku konusunda profesyonel destek için formu doldurun, en kısa sürede size dönüş yapalım.
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
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
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
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
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
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
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
                                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 resize-none"
                                            placeholder="Hukuki konunuzu kısaca açıklayın..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-900 text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors"
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

export default IsHukuku;