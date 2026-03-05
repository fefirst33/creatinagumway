import { motion } from "framer-motion";
import { Star, Check, Zap, Droplets, Wheat, Dumbbell, Cherry, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import gumwayLogo from "@/assets/gumway-logo.jpeg";
import product1 from "@/assets/gumway-product-1.png";
import product2 from "@/assets/gumway-product-2.png";
import product3 from "@/assets/gumway-product-3.png";
import heroBg from "@/assets/gumway-hero-bg.png";
import gumwayPot from "@/assets/gumway-pot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const BUY_LINK = "#"; // Substitua pelo link externo de compra

const benefits = [
  { icon: Zap, text: "1,5g de creatina por goma" },
  { icon: Package, text: "Sem preparo, sem copo" },
  { icon: Droplets, text: "Textura macia" },
  { icon: Cherry, text: "Sabor frutas vermelhas" },
  { icon: Dumbbell, text: "Pré ou pós-treino" },
  { icon: Check, text: "Sem lactose" },
  { icon: Wheat, text: "Sem glúten" },
];

const kits = [
  {
    name: "1 Pote",
    units: "60 gomas",
    pots: 1,
    price: "R$ 89,90",
    originalPrice: null,
    perUnit: null,
    freeShipping: false,
    bestSeller: false,
    link: BUY_LINK,
  },
  {
    name: "2 Potes",
    units: "120 gomas",
    pots: 2,
    price: "R$ 159,90",
    originalPrice: "R$ 179,80",
    perUnit: "R$ 79,95/un",
    freeShipping: true,
    bestSeller: false,
    link: BUY_LINK,
  },
  {
    name: "3 Potes",
    units: "180 gomas",
    pots: 3,
    price: "R$ 219,90",
    originalPrice: "R$ 269,70",
    perUnit: "R$ 73,30/un",
    freeShipping: true,
    bestSeller: true,
    link: BUY_LINK,
  },
];

const testimonials = [
  {
    name: "Mariana S.",
    text: "Simplesmente incrível! O sabor é muito bom e a praticidade de levar pra academia é ótima. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Lucas R.",
    text: "Eu odiava tomar creatina em pó. Essas gomas mudaram minha suplementação. Sabor de frutas vermelhas perfeito!",
    stars: 5,
  },
  {
    name: "Camila F.",
    text: "Comprei o kit de 3 e valeu muito a pena. Meu marido e eu usamos juntos. Frete grátis foi a cereja do bolo!",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Como devo tomar?",
    a: "Consuma 2 gomas ao dia, de preferência antes ou após o treino, ou conforme orientação de um profissional de saúde.",
  },
  {
    q: "Quantas gomas vêm em cada pote?",
    a: "Cada pote contém 60 gomas, o que equivale a 30 porções (1 mês de uso).",
  },
  {
    q: "Contém glúten ou lactose?",
    a: "Não! A Gumway Creatina Gummies é livre de glúten e lactose.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo de entrega varia de acordo com a sua região. Após a postagem, o prazo médio é de 5 a 12 dias úteis.",
  },
  {
    q: "Posso tomar mesmo sem treinar?",
    a: "A creatina é indicada para quem pratica atividades físicas. Consulte um profissional antes de iniciar qualquer suplementação.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end justify-start px-4 py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-lg bg-white/70 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl mb-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-display font-semibold tracking-widest uppercase text-sm mb-2"
            >
              Suplementação Reinventada
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-none mb-4"
            >
              Gumway
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-primary text-lg md:text-xl font-body mb-6 leading-relaxed"
            >
              Gummies que cabem na sua rotina. Sabor irresistível, zero preparo, uma sobremesa anabólica.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={BUY_LINK}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                >
                  DESCUBRA OS GUMMIES
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            Por que escolher a <span className="text-primary">Gumway</span>?
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-border bg-card h-full">
                  <CardContent className="p-0 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <b.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <p className="font-display font-semibold text-sm text-card-foreground">{b.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOBRE O PRODUTO */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div variants={fadeUp} className="flex-1">
              <img
                src={product2}
                alt="Gumway Creatina Gummies lifestyle"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Gumway Creatina Gummies
                <span className="block text-primary">Frutas Vermelhas — 60un</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                Mais energia, mais constância e mais praticidade na sua rotina.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                A Gumway Creatina Frutas Vermelhas transforma a suplementação tradicional em uma experiência moderna, saborosa e prática. Com textura macia e sabor levemente adocicado de frutas vermelhas, ela elimina a necessidade de misturas e shakes, facilitando o consumo diário.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Cada porção entrega a quantidade ideal de creatina para complementar sua rotina de treinos, ajudando no desempenho físico, força e explosão muscular. Ideal para quem busca consistência sem abrir mão do sabor.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PARA QUEM É INDICADA */}
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
              💪 Para quem é indicada?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-primary-foreground/90 font-body"
            >
              Perfeita para quem treina, pratica atividades físicas ou busca melhorar sua performance no dia a dia de forma simples e consistente. Se você quer resultados sem complicação, a Gumway é pra você.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMO CONSUMIR */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              📦 Como consumir
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 bg-card rounded-2xl px-8 py-6 shadow-lg border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-black text-2xl">
                2
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-lg">gomas ao dia</p>
                <p className="text-muted-foreground text-sm font-body">
                  ou conforme orientação profissional
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KITS COM PREÇOS */}
      <section className="py-16 md:py-24 px-4 bg-background" id="kits">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          >
            Escolha seu <span className="text-primary">Kit</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted-foreground text-center mb-12 font-body"
          >
            Quanto mais potes, maior o desconto!
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {kits.map((kit, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                {kit.bestSeller && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-primary text-primary-foreground px-4 py-1 font-display text-sm">
                    ⭐ Mais Vendido
                  </Badge>
                )}
                <Card
                  className={`text-center p-8 h-full flex flex-col justify-between transition-all hover:scale-[1.02] ${
                    kit.bestSeller
                      ? "border-2 border-primary shadow-xl ring-2 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-end justify-center gap-1 h-36">
                      {Array.from({ length: kit.pots }).map((_, j) => (
                        <img
                          key={j}
                          src={gumwayPot}
                          alt={kit.name}
                          className={`object-contain ${kit.pots === 1 ? 'w-32 h-32' : kit.pots === 2 ? 'w-24 h-24' : 'w-20 h-20'}`}
                        />
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{kit.name}</h3>
                    <p className="text-muted-foreground text-sm font-body">{kit.units}</p>
                    {kit.originalPrice && (
                      <p className="text-muted-foreground line-through text-sm">{kit.originalPrice}</p>
                    )}
                    <p className="font-display text-3xl font-black text-primary">{kit.price}</p>
                    {kit.perUnit && (
                      <p className="text-sm text-muted-foreground font-body">{kit.perUnit}</p>
                    )}
                    {kit.freeShipping && (
                      <Badge variant="secondary" className="font-body">
                        🚚 Frete Grátis
                      </Badge>
                    )}
                    <a href={kit.link} className="block">
                      <Button className="w-full font-display font-bold rounded-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        COMPRAR
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="p-6 h-full bg-card border-border">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-body italic">"{t.text}"</p>
                    <p className="font-display font-semibold text-foreground">{t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="font-display font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
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
              <a href={BUY_LINK}>
                <Button
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 font-display font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                >
                  COMPRAR AGORA
                </Button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-12 flex justify-center gap-6"
            >
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm">
                TikTok
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm">
                WhatsApp
              </a>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-primary-foreground/50 text-xs font-body"
            >
              © 2026 Gumway. Todos os direitos reservados.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
