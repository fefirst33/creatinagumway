import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    name: "Mariana S.",
    title: "Finalmente um suplemento gostoso!",
    text: "Odiava tomar creatina em pó. Agora com os gummies, virou o melhor momento do dia. Sabor de frutas vermelhas é viciante!",
    image: testimonial1,
    stars: 5,
  },
  {
    name: "Rafael M.",
    title: "Praticidade total na academia",
    text: "Levo na mochila e tomo antes do treino. Sem shaker, sem bagunça. Performance top e sabor incrível!",
    image: testimonial2,
    stars: 5,
  },
  {
    name: "Juliana C.",
    title: "Recomendo muito!",
    text: "Comprei o kit de 3 potes e valeu muito a pena. Meu namorado e eu usamos juntos. Sabor perfeito!",
    image: null,
    stars: 5,
  },
  {
    name: "Mari P.",
    title: "Comprei o kit e não me arrependo",
    text: "Peguei o kit com 3 potes. Economia boa e recebi super rápido. Os gummies são deliciosos e funcionam de verdade.",
    image: null,
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem...
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Milhares de pessoas já transformaram sua rotina de suplementação com Gumway.
          </p>
          <p className="text-primary font-display font-bold mt-2">
            ⭐ Avaliado 4.8/5 por 1.319+ Clientes Satisfeitos
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="overflow-hidden h-full bg-card border-border">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    {t.image && (
                      <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: t.stars }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-foreground mb-2">{t.title}</h3>
                      <p className="text-muted-foreground font-body text-sm italic mb-3">"{t.text}"</p>
                      <p className="font-display font-semibold text-sm text-foreground">— {t.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
