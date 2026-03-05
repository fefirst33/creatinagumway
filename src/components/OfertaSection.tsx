import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ofertaBg from "@/assets/oferta-bg.png";

const BUY_LINK = "https://gumway.com.br/products/gummies-de-creatina-frutas-vermelhas-gumway";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OfertaSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 14, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ofertaBg})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Oferta por Tempo Limitado
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 font-body">
            Aproveite condições especiais na Creatina Gumway. Parcele em até 6x sem juros!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { value: timeLeft.days, label: "Dias" },
              { value: timeLeft.hours, label: "Horas" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Seg" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background/20 backdrop-blur-sm rounded-xl p-4 min-w-[70px]"
              >
                <p className="font-display text-3xl font-black text-primary-foreground">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-primary-foreground/70 text-xs font-body">{item.label}</p>
              </div>
            ))}
          </div>
          <a href={BUY_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-display font-bold text-base px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              APROVEITAR OFERTA
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OfertaSection;
