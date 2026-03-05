const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background/60">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-background text-lg">Gumway</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-body hover:text-background transition-colors">Instagram</a>
          <a href="#" className="text-sm font-body hover:text-background transition-colors">TikTok</a>
          <a href="#" className="text-sm font-body hover:text-background transition-colors">WhatsApp</a>
        </div>
        <p className="text-xs font-body">© 2026 Gumway. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
