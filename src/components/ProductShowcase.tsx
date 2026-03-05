import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import creatina1 from "@/assets/creatina-1.webp";
import creatina2 from "@/assets/creatina-2.webp";
import creatina3 from "@/assets/creatina-3.webp";
import creatina4 from "@/assets/creatina-4.webp";
import creatina5 from "@/assets/creatina-5.webp";

const BUY_LINK = "https://gumway.com.br/products/gummies-de-creatina-frutas-vermelhas-gumway";

const images = [creatina1, creatina2, creatina3, creatina4, creatina5];

const kits = [
  {
    label: "1 Pote",
    price: "R$ 159,00",
    originalPrice: null,
    perUnit: "R$ 159,00 / Unidade",
    discount: null,
    bestSeller: false,
  },
  {
    label: "2 Potes",
    price: "R$ 302,10",
    originalPrice: "R$ 318,00",
    perUnit: "R$ 151,05 / Unidade",
    discount: "5%",
    bestSeller: true,
  },
  {
    label: "3 Potes",
    price: "R$ 429,30",
    originalPrice: "R$ 477,00",
    perUnit: "R$ 143,10 / Unidade",
    discount: "10%",
    bestSeller: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedKit, setSelectedKit] = useState(1);

  return (
    <section className="py-16 md:py-24 px-4 bg-background" id="produto">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
              <img
                src={images[selectedImage]}
                alt="Gumway Creatina Gummies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground font-body text-sm">Gumway</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Gummies De Creatina Frutas Vermelhas Gumway
            </h2>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-black text-primary">
                {kits[selectedKit].price}
              </span>
              {kits[selectedKit].originalPrice && (
                <span className="text-muted-foreground line-through text-lg">
                  {kits[selectedKit].originalPrice}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-display font-semibold text-foreground">
                Compre mais e pague menos
              </p>
              {kits.map((kit, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedKit(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    selectedKit === i
                      ? "border-primary bg-accent"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={creatina1}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-display font-bold text-foreground">{kit.label}</p>
                    <div className="flex items-center gap-2 text-sm">
                      {kit.originalPrice && (
                        <span className="text-muted-foreground line-through">{kit.originalPrice}</span>
                      )}
                      <span className="font-semibold text-foreground">{kit.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body">{kit.perUnit}</p>
                  </div>
                  <div className="text-right">
                    {kit.bestSeller && (
                      <Badge className="bg-primary text-primary-foreground text-xs">Mais Vendido</Badge>
                    )}
                    {kit.discount && (
                      <p className="text-sm font-display font-bold text-primary mt-1">
                        Ganha {kit.discount}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <a href={BUY_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full font-display font-bold rounded-full py-6 text-lg">
                ADICIONAR AO CARRINHO
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
