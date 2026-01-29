import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Animated Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para Desbloquear o <br/>
            <span className="text-primary">Potencial da sua Empresa?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Não espere a concorrência ditar o ritmo. O futuro é agora. Fale com um de nossos especialistas e descubra como a Internia pode revolucionar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 rounded-full text-lg neon-glow w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/5511988236228", "_blank")}
            >
              Agendar Demonstração Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/5 text-white h-14 rounded-full px-8 text-lg w-full sm:w-auto"
              onClick={() => window.location.href = "mailto:comercial@internia.com.br"}
            >
              Enviar E-mail
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Resposta em até 15 minutos durante horário comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
