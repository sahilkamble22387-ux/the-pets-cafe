'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Dog } from 'lucide-react';

const locations = [
  {
    name: 'Koregaon Park',
    address: 'A1, Aadit Enclave Building, Lane No.5, South Main Road, Koregaon Park, Pune',
    icon: MapPin,
    accent: 'border-forest-mid/20',
    dotColor: 'bg-forest-mid',
  },
  {
    name: 'Salunke Vihar / Wanowrie',
    address: 'Unit 14 & 15, Lower Ground, A Wing, One Place, Salunke Vihar Road, Oxford Village, Wanowrie, Pune 411040',
    icon: MapPin,
    accent: 'border-coral/20',
    dotColor: 'bg-coral',
  },
  {
    name: 'Bavdhan',
    address: 'Near Suryadatta College, Bavdhan, Pune',
    icon: MapPin,
    accent: 'border-gold/30',
    dotColor: 'bg-gold',
    badge: 'Pet Friendly 🐾',
  },
];

export default function ChafaLocations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="locations" className="py-20 sm:py-28 section-gradient-warm">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="section-separator-chafa" />
            <MapPin className="w-4 h-4 text-forest-mid" />
            <div className="section-separator-chafa" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Find Us in Pune
          </h2>
          <p className="font-body text-sage-grey text-base sm:text-lg max-w-2xl mx-auto">
            Three beautiful locations, each with its own charm. Visit the one nearest to you.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((location, i) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card-lift-soft"
            >
              <div className={`bg-white rounded-2xl p-6 sm:p-8 border ${location.accent} h-full`}>
                {/* Location Dot */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-3 h-3 rounded-full ${location.dotColor} mt-2 flex-shrink-0`} />
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-1">
                      {location.name}
                    </h3>
                    {location.badge && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-forest-mid/10 text-forest-mid text-xs font-body font-semibold rounded-full mb-2">
                        <Dog className="w-3 h-3" />
                        {location.badge}
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-body text-sm text-sage-grey leading-relaxed mb-5 pl-7">
                  {location.address}
                </p>

                <div className="flex items-center gap-2 pl-7 text-sage-grey">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="font-body text-sm">8:00 AM – 10:00 PM</span>
                </div>

                {/* Decorative line */}
                <div className={`mt-6 h-0.5 w-12 rounded-full ${location.dotColor} opacity-30`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border border-sage/10">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-gold text-lg">★</span>
              ))}
            </div>
            <p className="font-body text-charcoal-mid text-sm italic mb-1">
              &ldquo;The place has such a calm, green vibe, perfect for a laid-back brunch&rdquo;
            </p>
            <p className="font-body text-sage-grey text-xs">
              TripAdvisor 4.7/5 · Ranked #213 of 2753 restaurants in Pune
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
