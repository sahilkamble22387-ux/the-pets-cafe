'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Flower2, Music, Palette, Briefcase, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: Flower2,
    title: 'Yoga Classes',
    description: 'Find your center with guided yoga sessions in our serene, AC studio space.',
    color: 'bg-forest-mid/10',
    iconColor: 'text-forest-mid',
  },
  {
    icon: Dumbbell,
    title: 'HIIT Training',
    description: 'High-intensity interval training organized thrice a week for maximum burn.',
    color: 'bg-coral/10',
    iconColor: 'text-coral',
  },
  {
    icon: Music,
    title: 'Dance Classes',
    description: 'Express yourself through movement with our vibrant dance sessions.',
    color: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  {
    icon: Palette,
    title: 'Art & Workshops',
    description: 'Creative workshops, art events, and skill-building sessions for the community.',
    color: 'bg-sage/20',
    iconColor: 'text-forest',
  },
  {
    icon: Briefcase,
    title: 'Business Networking',
    description: 'Connect, collaborate, and grow at our curated business networking events.',
    color: 'bg-forest-mid/10',
    iconColor: 'text-forest-mid',
  },
];

export default function ChafaStudio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="studio" className="py-20 sm:py-28 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="section-separator-chafa" />
              <span className="text-forest-mid font-body text-sm font-semibold tracking-widest uppercase">
                The Studio
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
              Move Well,
              <br />
              <span className="text-forest-mid">Live Well</span>
            </h2>

            <p className="font-body text-sage-grey text-base sm:text-lg leading-relaxed mb-8">
              Our integrated AC studio space inside the café is where wellness goes beyond
              the plate. Available for rent for yoga, fitness, dance classes, demos, and
              events — it&apos;s a holistic approach to health. Eat well + move well.
            </p>

            {/* Offering Cards */}
            <div className="space-y-3 mb-8">
              {offerings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors duration-300 group"
                >
                  <div
                    className={`w-10 h-10 ${offering.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <offering.icon className={`w-5 h-5 ${offering.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm sm:text-base text-charcoal">
                      {offering.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-sage-grey leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="tel:+919767100022"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest-mid hover:bg-forest text-white font-body font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-mid/20 hover:-translate-y-0.5"
            >
              Book the Studio
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/chafa/studio.png"
                alt="Chafá fitness studio space with natural light"
                className="w-full h-[400px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/10 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral/10 rounded-xl flex items-center justify-center breathe">
                  <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg text-charcoal">HIIT 3x/Week</p>
                  <p className="text-xs sm:text-sm text-sage-grey font-body">+ Yoga & Dance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
