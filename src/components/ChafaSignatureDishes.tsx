'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Leaf } from 'lucide-react';

const dishes = [
  {
    name: 'Pink Smoothie Bowl',
    description: 'A vibrant, antioxidant-rich blend topped with fresh fruits, granola, and seeds. Our most Instagram-worthy creation.',
    image: '/images/chafa/smoothie-bowl.png',
    tag: 'Popular',
    tagColor: 'bg-coral/10 text-coral',
  },
  {
    name: 'Grilled Chicken Steak',
    description: 'Tender grilled chicken paired with cauliflower rice — hearty, clean, and incredibly satisfying.',
    image: '/images/chafa/grilled-chicken.png',
    tag: 'Must-Try',
    tagColor: 'bg-forest-mid/10 text-forest-mid',
  },
  {
    name: 'Banana Pancakes',
    description: 'Whole wheat banana pancakes — fluffy, naturally sweetened, and perfect for a wholesome brunch.',
    image: '/images/chafa/pancakes.png',
    tag: 'Favourite',
    tagColor: 'bg-gold/10 text-gold',
  },
  {
    name: 'Artisan Cappuccino',
    description: 'Rich, velvety cappuccino crafted with care — the perfect companion to any meal or moment.',
    image: '/images/chafa/cappuccino.png',
    tag: 'Classic',
    tagColor: 'bg-sage/20 text-forest',
  },
  {
    name: 'Fresh Garden Salad',
    description: 'Crisp, colourful, and bursting with seasonal goodness — our salads are a meal in themselves.',
    image: '/images/chafa/salad.png',
    tag: 'Healthy',
    tagColor: 'bg-forest-mid/10 text-forest-mid',
  },
  {
    name: 'GF Chocolate Cake',
    description: 'Indulgent gluten-free chocolate cake — rich, moist, and proof that healthy can be decadent.',
    image: '/images/chafa/cake.png',
    tag: 'Must-Try',
    tagColor: 'bg-coral/10 text-coral',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function ChafaSignatureDishes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="py-20 sm:py-28 section-gradient-green">
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
            <Sparkles className="w-4 h-4 text-gold" />
            <div className="section-separator-chafa" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Signature Dishes
          </h2>
          <p className="font-body text-sage-grey text-base sm:text-lg max-w-2xl mx-auto">
            Gourmet, wholesome, tasty and healthy — every dish is made with love and
            the freshest ingredients.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="card-lift-soft group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sage/10">
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Tag */}
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold ${dish.tagColor} backdrop-blur-sm`}
                  >
                    {dish.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                    <h3 className="font-display text-lg sm:text-xl text-charcoal">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-sage-grey leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra menu items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sage-grey text-sm mb-4">
            Also on our menu
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tangy Matcha Moringa Bowl',
              'Yogi Nut Pot',
              'Green Cheese Omelette',
              'Salmon Croissant',
              'Charcoal Chicken Burger',
              'Berry Smoothie',
              'Hazelnut Balls',
              'Charcoal Lemonade',
              'Chafa Special Muffin',
              'Spaghetti',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white rounded-full text-sm font-body text-charcoal-mid border border-sage/20 hover:border-forest-mid/30 hover:bg-forest-mid/5 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
