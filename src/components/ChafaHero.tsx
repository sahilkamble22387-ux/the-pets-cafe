'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Leaf } from 'lucide-react';

const floatingElements = [
  { className: 'leaf-1', style: { left: '10%', bottom: '30%' }, size: 20 },
  { className: 'leaf-2', style: { left: '20%', bottom: '40%' }, size: 16 },
  { className: 'petal-1', style: { left: '70%', bottom: '35%' }, size: 14 },
  { className: 'leaf-3', style: { left: '80%', bottom: '25%' }, size: 18 },
  { className: 'petal-2', style: { left: '50%', bottom: '45%' }, size: 12 },
  { className: 'petal-3', style: { left: '90%', bottom: '40%' }, size: 15 },
  { className: 'leaf-1', style: { left: '35%', bottom: '50%' }, size: 10 },
  { className: 'leaf-2', style: { left: '60%', bottom: '20%' }, size: 13 },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function ChafaHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/chafa/hero.png')" }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient-chafa" />

      {/* Floating Botanical Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className={`absolute ${el.className}`}
            style={el.style}
          >
            <Leaf
              size={el.size}
              className="text-sage-light/40"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
      >
        {/* Botanical decoration above title */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <div className="flex items-center gap-3 text-sage-light/70">
            <div className="w-8 h-[1px] bg-sage-light/50" />
            <Leaf size={16} className="rotate-45" />
            <div className="w-8 h-[1px] bg-sage-light/50" />
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-shadow-green mb-3"
        >
          Chafá
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-xl sm:text-2xl md:text-3xl text-white/90 text-shadow-green mb-2"
        >
          Café & Studio
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="botanical-divider my-4"
        >
          <span className="text-sage-light/80 text-sm font-body tracking-[0.3em] uppercase">
            Gourmet · Wholesome · Healthy
          </span>
        </motion.div>

        <motion.p
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-body text-base sm:text-lg text-white/80 max-w-lg mb-8 text-shadow-green"
        >
          Where wellness meets flavour
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-coral hover:bg-coral-dark text-white font-body font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          <a
            href="#locations"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#locations')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border-2 border-white/40 hover:border-white/70 text-white font-body font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Visit Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
}
