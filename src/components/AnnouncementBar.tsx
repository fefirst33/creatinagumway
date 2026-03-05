import { motion } from "framer-motion";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mx-8 text-sm font-body flex items-center gap-2">
            🚚 Frete Grátis para todo o Brasil
            <span className="mx-4">•</span>
            🍬 Sabor Irresistível: Suplementos que você quer comer
            <span className="mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
