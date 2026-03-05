import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroMascot from "@/assets/hero-mascot.png";

const BUY_LINK = "https://gumway.com.br/products/gummies-de-creatina-frutas-vermelhas-gumway";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMascot})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10 px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/80 font-display font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Suplementação Reinventada
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-none mb-6"
          >
            Gumway
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/90 text-lg md:text-xl font-body leading-relaxed mb-8"
          >
            Creatina em Gummies que cabe na sua rotina. Sabor irresistível, zero preparo, uma sobremesa anabólica.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href={BUY_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-display font-bold text-base px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              >
                DESCUBRA OS GUMMIES
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
