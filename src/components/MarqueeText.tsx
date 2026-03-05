import { motion } from "framer-motion";

const MarqueeText = () => {
  return (
    <div className="py-6 bg-primary overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="mx-6 font-display text-lg font-bold text-primary-foreground">
            Sabor <em className="font-body italic font-normal">que</em> Transforma
            <span className="mx-6">•</span>
            Rotina <em className="font-body italic font-normal">sem</em> Complicação
            <span className="mx-6">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
