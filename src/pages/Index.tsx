import Header from "@/components/Header";
import FullScreenHero from "@/components/FullScreenHero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="etusivu">
        <FullScreenHero />
        <BeforeAfter />
        <Services />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
