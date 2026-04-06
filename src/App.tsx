import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Heart,
  ShieldCheck,
  Flower2
} from "lucide-react";
import { useState } from "react";
import { SERVICES } from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = "https://wasap.my/60126396785/spakerumah";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EADED2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#D4A373]/10 rounded-xl">
                <Flower2 className="w-6 h-6 text-[#D4A373]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-[#1A2E35]">I N A Z</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {["Services", "Packages", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-[#4A4A4A] hover:text-[#D4A373] transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A373] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C39262] transition-all shadow-sm"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#1A2E35]"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-[#EADED2] px-4 py-6 space-y-4"
          >
            {["Services", "Packages", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-lg font-medium text-[#4A4A4A]"
              >
                {item}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#D4A373] text-white text-center py-3 rounded-xl font-semibold"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDF1E6] rounded-l-[100px] opacity-50" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 border border-[#D4A373]/10 rounded-full" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A373]/10 text-[#D4A373] text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>Premium Mobile Spa Experience</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1A2E35] leading-tight mb-6">
                Luxury Spa <br />
                <span className="text-[#D4A373]">At Your Doorstep</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] mb-8 max-w-lg leading-relaxed">
                Professional spa services delivered to the comfort of your home in KL & Selangor. 
                Syariah-compliant treatments designed for your ultimate relaxation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1A2E35] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2D454E] transition-all shadow-lg"
                >
                  <Phone size={20} />
                  Book via WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection("services")}
                  className="flex items-center justify-center gap-2 bg-white text-[#1A2E35] border-2 border-[#EADED2] px-8 py-4 rounded-full text-lg font-bold hover:border-[#D4A373] transition-all"
                >
                  View Services
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#1A2E35]">KL & SEL</span>
                  <span className="text-sm text-[#4A4A4A]">Service Area</span>
                </div>
                <div className="w-px h-10 bg-[#EADED2]" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#1A2E35]">100%</span>
                  <span className="text-sm text-[#4A4A4A]">Syariah Compliant</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
                  alt="Spa Treatment" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4A373] rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#EADED2] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Syariah Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-[#D4A373]/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#D4A373]" size={32} />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E35] mb-6">
                Syariah-Compliant Spa
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                We are committed to modesty and comfort. Our services are designed to provide 
                a safe and respectful environment for all our clients.
              </p>
              <ul className="space-y-4">
                {[
                  "Strictly female therapists for female clients",
                  "Modesty-focused treatment protocols",
                  "No eyebrow shaping or Brazilian/Bikini waxing",
                  "High hygiene standards with private tool kits available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#4A4A4A]">
                    <CheckCircle2 size={20} className="text-[#D4A373] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500" 
                alt="Spa Detail" 
                className="rounded-2xl h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=500" 
                alt="Spa Detail" 
                className="rounded-2xl h-64 w-full object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2E35] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#D4A373] mx-auto mb-6" />
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Indulge in our wide range of professional treatments, from traditional massages to modern nail care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SERVICES).map(([key, category]) => (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-[#EADED2]"
              >
                <h3 className="font-serif text-2xl font-bold text-[#1A2E35] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] text-sm">
                    {key === 'massage' ? 'M' : key === 'nailCare' ? 'N' : key === 'facial' ? 'F' : key === 'waxing' ? 'W' : 'P'}
                  </span>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-[#1A2E35] group-hover:text-[#D4A373] transition-colors">
                          {item.name}
                        </span>
                        <span className="font-bold text-[#D4A373] whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-[#7F8C8D] leading-relaxed italic">
                          {item.description}
                        </p>
                      )}
                      {item.duration && (
                        <div className="flex items-center gap-1 text-xs text-[#95A5A6] mt-1">
                          <Clock size={12} />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {category.note && (
                  <p className="mt-8 text-xs text-[#95A5A6] italic border-t border-[#EADED2] pt-4">
                    {category.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#1A2E35] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A373] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A373] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Heart className="mx-auto mb-8 text-[#D4A373]" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Ready for Relaxation?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Book your session today and let us bring the spa experience to you. 
            Available daily in KL and Selangor area.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <MapPin className="mx-auto mb-4 text-[#D4A373]" />
              <h4 className="font-bold mb-2">Service Area</h4>
              <p className="text-gray-400">Kuala Lumpur & Selangor</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Clock className="mx-auto mb-4 text-[#D4A373]" />
              <h4 className="font-bold mb-2">Operating Hours</h4>
              <p className="text-gray-400">Daily: 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4A373] text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-[#C39262] transition-all shadow-xl hover:scale-105"
          >
            <Phone size={24} />
            Book via WhatsApp
          </a>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <p className="text-sm text-gray-400">SSM: 002835396-P</p>
              <p className="text-sm text-gray-400">© 2026 INAZ Mobile Spa. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/inaz.mobilespa/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4A373] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#D4A373] transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
