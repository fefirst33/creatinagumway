import { motion } from "framer-motion";

const logos = ["Gumway", "TikTok Shop", "4creators"];

const LogoMarquee = () => {
  return (
    <div className="py-6 bg-background border-y border-border overflow-hidden">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 10 }).map((_, i) =>
          logos.map((logo, j) => (
            <span
              key={`${i}-${j}`}
              className="mx-10 font-display font-bold text-xl text-muted-foreground/40"
            >
              {logo}
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
