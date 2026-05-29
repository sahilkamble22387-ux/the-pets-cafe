'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Clock, Instagram, Facebook, ExternalLink, Mail } from 'lucide-react';

export default function ChafaContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="section-separator-chafa" />
            <Phone className="w-4 h-4 text-forest-mid" />
            <div className="section-separator-chafa" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Visit Us Today
          </h2>
          <p className="font-body text-sage-grey text-base sm:text-lg max-w-2xl mx-auto">
            We&apos;d love to welcome you. Drop by, call us, or order online.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-forest-mid/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-forest-mid" />
                </div>
                <h3 className="font-display text-lg text-charcoal">Opening Hours</h3>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-sage/10">
                <span className="font-body text-sm text-sage-grey">Every Day</span>
                <span className="font-body text-sm font-semibold text-charcoal-mid">8:00 AM – 10:00 PM</span>
              </div>
              <p className="font-body text-xs text-sage-grey mt-3">
                Open all week including weekends and holidays
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-coral" />
                </div>
                <h3 className="font-display text-lg text-charcoal">Call Us</h3>
              </div>
              <a
                href="tel:+919767100022"
                className="font-body text-lg font-semibold text-forest-mid hover:text-coral transition-colors"
              >
                +91 97671 00022
              </a>
              <p className="font-body text-xs text-sage-grey mt-1">
                Reservations, studio bookings, and enquiries
              </p>
            </div>

            {/* Social & Online Order Card */}
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg text-charcoal">Connect & Order</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://www.instagram.com/chafacafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full font-body text-sm font-medium text-charcoal-mid hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  @chafacafe
                </a>
                <a
                  href="https://www.facebook.com/chafacafeandstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 rounded-full font-body text-sm font-medium text-charcoal-mid hover:bg-blue-500/20 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 rounded-full font-body text-sm font-semibold text-red-600 transition-colors duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Order on Zomato
                </a>
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 rounded-full font-body text-sm font-semibold text-orange-600 transition-colors duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Order on Swiggy
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-sage/10 h-full min-h-[400px] sm:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0896789639475!2d73.8936!3d18.5365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f5f5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sChafa%20Cafe%20%26%20Studio!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chafá Café & Studio Location"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
