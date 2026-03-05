import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import porqueImg from "@/assets/porque-gummies.webp";
import lifestyleImg from "@/assets/lifestyle.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BUY_LINK = "https://gumway.com.br/products/gummies-de-creatina-frutas-vermelhas-gumway";

const PorQueGummies = () => {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative min-h-[400px] md:min-h-[500px]"
        >
          <img
            src={porqueImg}
            alt="Por que gummies"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center p-8 md:p-16 bg-secondary"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por Que Gummies?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
            Chega de pó, água e shaker. Os gummies Gumway são práticos, saborosos e cabem na sua bolsa, mochila ou bolso. Suplementação de creatina nunca foi tão fácil.
          </p>
          <a href={BUY_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="font-display font-bold rounded-full px-8 py-6 text-base w-fit">
              CONHEÇA O PRODUTO
            </Button>
          </a>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center p-8 md:p-16 bg-background order-2 md:order-1"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sem Água, Sem Shaker
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            Leve para a academia, para o trabalho ou para onde quiser. A creatina Gumway em gummies de frutas vermelhas é a forma mais prática de manter sua suplementação em dia.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative min-h-[400px] md:min-h-[500px] order-1 md:order-2"
        >
          <img
            src={lifestyleImg}
            alt="Lifestyle Gumway"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PorQueGummies;
