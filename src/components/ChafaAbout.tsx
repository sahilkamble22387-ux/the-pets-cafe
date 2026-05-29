'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Clean Eating',
    description: 'Wholesome, nutritious food made with love — no compromise on taste.',
  },
  {
    icon: Heart,
    title: 'Move Well',
    description: 'An integrated studio for yoga, HIIT, and dance — nurture your body and soul.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'A gathering place for workshops, events, and connections that inspire.',
  },
];

export default function ChafaAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/chafa/exterior.png"
                alt="Chafá Café exterior with lush greenery"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-lg green-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-mid/10 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-forest-mid" />
                </div>
                <div>
                  <p className="font-display text-lg sm:text-xl text-forest">Chafá</p>
                  <p className="text-xs sm:text-sm text-sage-grey font-body">Parijat Flower</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="section-separator-chafa" />
              <span className="text-forest-mid font-body text-sm font-semibold tracking-widest uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Where Wellness
              <br />
              <span className="text-forest-mid">Meets Flavour</span>
            </h2>

            <p className="font-body text-sage-grey text-base sm:text-lg leading-relaxed mb-4">
              Chafá — named after the beautiful Parijat flower — is a space where gourmet,
              wholesome food and holistic wellness come together. Founded by Vishal Seth and
              led by Executive Chef Debabrata Mondal, we believe that clean eating should
              never mean compromising on taste.
            </p>

            <p className="font-body text-sage-grey text-base sm:text-lg leading-relaxed mb-8">
              Our café is an airy, breezy sanctuary adorned with subtle earthen tones and
              lush greenery, designed by STOA Design. With an integrated fitness studio,
              we offer a holistic approach — eat well, move well, live well.
            </p>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <value.icon className="w-6 h-6 text-forest-mid mx-auto mb-2" />
                  <h3 className="font-display text-sm sm:text-base text-charcoal mb-1">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sage-grey font-body leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
