import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BUY_LINK = "https://gumway.com.br/products/gummies-de-creatina-frutas-vermelhas-gumway";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const FooterCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold mb-6"
          >
            Não perca mais tempo com shakes!
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto font-body"
          >
            Experimente a forma mais gostosa de tomar creatina. Garanta já a sua Gumway!
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href={BUY_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-display font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              >
                COMPRAR AGORA
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
