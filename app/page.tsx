"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from 'next/image';

// Type for NavLink props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const handleScrollToSection = (event: React.MouseEvent) => {
    event.preventDefault(); // Voorkom standaard gedrag van de link
    const targetElement = document.querySelector(href); // Zoek het doel element op basis van de href
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Voegt een vloeiende scroll toe
        block: 'start', // Scrolt naar de bovenkant van het element
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleScrollToSection} // Voeg de click-handler toe
      className="relative text-gray-600 hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
};

// Type for StatCard props
interface StatCardProps {
  number: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <Card className="bg-white/80 backdrop-blur-lg border-none shadow-xl">
    <CardContent className="p-6 text-center">
      <div className="text-4xl font-bold text-orange-500 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </CardContent>
  </Card>
);

// Type for project items
interface Project {
  imgSrc: string;
  title: string;
  description: string;
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      imgSrc: 'https://ggzecademy.nl/web/uploads/2024/09/Monique-Kavelaar_113-scaled.jpg',
      title: '113',
      description: "Wij steunen 113 zelfmoordpreventie, een organisatie die zich inzet voor het voorkomen van suïcide en het bieden van hulp aan mensen in crisis. Dankzij onze inspanningen kunnen wij maandelijks meer dan 3.000 euro doneren aan deze belangrijke zaak. Dit financiële steuntje stelt 113 in staat om hun essentiële programma’s en diensten uit te breiden, zoals het bieden van luisterend oor, professionele begeleiding en crisisinterventie.",
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7QZPCc97rJBOkYXVMt0gjfpyraqqluUMFQ&s',
      title: 'NIHM',
      description: "Nihm (Nationale Instituten voor Geestelijke Gezondheid) doet belangrijk onderzoek naar geestelijke gezondheidsproblemen, met een bijzondere focus op jongeren. Hun werk omvat het bestuderen van de oorzaken en gevolgen van mentale aandoeningen, evenals het ontwikkelen en evalueren van effectieve behandelingen en preventiestrategieën",
    },
    {
      imgSrc: 'https://wijzijnmind.nl/assets/images/mind_corporate/vertical_logo.png?v2',
      title: 'Mind',
      description: 'MIND wil de psychische gezondheid verbeteren en iedereen die te maken heeft met psychische klachten ondersteunen. Wij strijden voor een samenleving die investeert in mentale gezondheid en er alles aan doet om onnodig psychisch leed te voorkomen. MIND geeft een stem aan alle mensen met (beginnende) psychische klachten en hun naasten en biedt informatie.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image src="/openarms.png" alt="ee" width={200} height={200} />
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['Over ons', 'Missie', 'Community', 'Steun ons'].map((item) => (
                  <li key={item}>
                    <NavLink href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Over ons', 'Missie', 'Community', 'Steun ons'].map((item) => (
                <li key={item}>
                  <NavLink href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 mix-blend-multiply" />
            <img
              src="https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="tracking-tighter text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elke 30 seconden verliezen we iemand aan zelfmoord.
            </h1>
            <p className="tracking-tight text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Samen kunnen we een verschil maken. Sluit je aan bij onze missie.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Ik wil bijdragen
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Onze missie leren kennen
              </Button>
            </div>
          </div>
        </section>
        <section id="community" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Projecten die wij steunen.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="mission" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Onze Missie
            </h2>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Bij OpenArms voelen we een sterke roeping vanuit ons christelijk geloof om jongeren in nood bij te staan. Wij begrijpen dat de uitdagingen waarmee zij worden geconfronteerd overweldigend kunnen zijn, en daarom investeren we niet alleen in onszelf, maar ook in projecten en organisaties die de cruciale zorg bieden die jongeren zo hard nodig hebben.

Elke donatie die je doet, wordt met de grootste zorg toegewezen aan programma’s die bewezen effectief zijn in het bieden van mentale ondersteuning, begeleiding en liefde aan jongeren in crisis. Jouw bijdrage gaat rechtstreeks naar initiatieven die jongeren nieuwe hoop bieden en hun levens ingrijpend kunnen veranderen.

Door samen te werken met bestaande programma’s en organisaties kunnen we samen met jou blijvende veranderingen teweegbrengen. Jouw steun stelt ons in staat om een gemeenschap te vormen waarin liefde, begrip en hulp centraal staan. We zetten ons in voor projecten die jongeren de zorg en aandacht geven die zij verdienen, zodat ze met vertrouwen de toekomst tegemoet kunnen treden.

Sluit je aan bij onze missie en maak het verschil in het leven van jongeren. Samen kunnen we hen de liefde en steun bieden die hen helpt om te bloeien
            </p>
            <div className="flex justify-center">
             
            </div>
          </div>
        </section>
        <section id="donate" className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6">Jouw donatie kan een leven redden. </h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              Jouw bijdrage kan een groot verschil maken. Help ons om de levens van degenen die
              worstelen met geestelijke gezondheidsproblemen te verbeteren.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Doneer nu
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo en bedrijfsinformatie */}
      <div className="mb-6 md:mb-0">
        <img src="/openarms.png" alt="Open Arms Logo" className="w-32 mb-4" />
        <p className="text-sm mb-2">Onze missie is om een veilige en ondersteunende omgeving te creëren voor iedereen.</p>
        <p className="text-sm">Telefoon: +31 6 43441206</p>
        <p className="text-sm">Email: info@openarms.nl</p>
      </div>

      {/* Links sectie */}
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold mb-2">Belangrijke Links</h3>
        <ul className="space-y-1">
          <li>
            <a href="/about" className="hover:underline">Over Ons</a>
          </li>
          <li>
            <a href="/services" className="hover:underline">Onze Diensten</a>
          </li>
          <li>
            <a href="/faq" className="hover:underline">Veelgestelde Vragen</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      {/* Contactsectie */}
      <div className="mb-6 md:mb-0">
        <h3 className="font-semibold mb-2">Neem Contact Op</h3>
        <form className="flex flex-col space-y-2">
          <input 
            type="email" 
            placeholder="Jouw e-mailadres" 
            className="px-4 py-2 rounded border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-300" 
            required 
          />
          <textarea 
            placeholder="Jouw bericht" 
            className="px-4 py-2 rounded border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-300" 
            required
          />
          <button 
            type="submit" 
            className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded transition duration-300"
          >
            Verzenden
          </button>
        </form>
      </div>
    </div>

    {/* Onderaan sectie voor juridische links */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Open Arms. Alle rechten voorbehouden. | 
        <a href="/privacy-policy" className="hover:underline"> Privacybeleid</a> | 
        <a href="/terms-of-service" className="hover:underline"> Gebruiksvoorwaarden</a>
      </p>
    </div>
  </div>
</footer>



    </div>
  );
}
