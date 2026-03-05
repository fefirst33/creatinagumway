import { motion } from "framer-motion";
import { Truck, CreditCard, RotateCcw, Star } from "lucide-react";

const benefits = [
  { icon: Truck, title: "Frete Grátis", desc: "Para todo o Brasil." },
  { icon: CreditCard, title: "Parcele Sem Juros", desc: "Em até 6x no cartão de crédito." },
  { icon: RotateCcw, title: "Troca Facilitada", desc: "Devolução em até 30 dias." },
  { icon: Star, title: "Clientes Satisfeitos", desc: "Avaliação 4.8/5 estrelas." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const BenefitsBar = () => {
  return (
    <section className="py-12 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto">
                <b.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="font-display font-bold text-foreground text-sm">{b.title}</p>
              <p className="text-muted-foreground text-xs font-body">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsBar;
