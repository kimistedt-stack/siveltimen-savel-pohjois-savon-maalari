const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Siveltimen Sävel</h3>
                <p className="text-sm opacity-80">Talojen huoltomaalaus</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ammattitaitoista ja laadukasta huoltomaalausta Pohjois-Savon alueella. 
              Yli 15 vuoden kokemus talojen ulkomaalauksesta.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Palvelut</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Talojen ulkomaalaus</li>
              <li>Huoltomaalaus</li>
              <li>Pintojen suojaus</li>
              <li>Viimeistely ja siistiminen</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Yhteystiedot</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Puhelin: +358 40 123 4567</p>
              <p>Sähköposti: info@siveltimensavel.fi</p>
              <p>Toiminta-alue: Pohjois-Savo</p>
              <p>Työajat: Ma-Pe 8:00-17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Siveltimen Sävel. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;