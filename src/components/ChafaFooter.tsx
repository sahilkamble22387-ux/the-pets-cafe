'use client';

import { Leaf, Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Studio', href: '#studio' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' },
];

export default function ChafaFooter() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-sage-light" />
              <span className="font-display text-2xl text-white">Chafá</span>
            </div>
            <p className="font-body text-sage-light/70 text-sm leading-relaxed mb-4">
              Café & Studio — where wellness meets flavour. Gourmet, wholesome, tasty
              and healthy food made with love.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/chafacafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/chafacafeandstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleClick(link.href)}
                    className="font-body text-sm text-sage-light/70 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-base text-white mb-4">Locations</h3>
            <ul className="space-y-3">
              {[
                'Koregaon Park',
                'Salunke Vihar / Wanowrie',
                'Bavdhan',
              ].map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sage-light/50 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-sage-light/70">{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+919767100022"
                className="flex items-center gap-2 font-body text-sm text-sage-light/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 97671 00022
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-sage-light/70">
                <span className="text-lg">⏰</span>
                8 AM – 10 PM Daily
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-sage-light/50">
            © {new Date().getFullYear()} Chafá Café & Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-sage-light/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-coral inline" /> in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
