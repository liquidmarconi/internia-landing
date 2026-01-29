import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="AI Network Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">Tecnologia do Futuro Agora</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Transforme Sua Empresa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Inteligência Artificial</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Aumente a eficiência, reduza custos e acelere o crescimento com automações inteligentes, atendimento via WhatsApp e governança de TI de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 rounded-full neon-glow text-lg group"
              onClick={() => window.open("https://wa.me/5511988236228", "_blank")}
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/5 text-white h-14 rounded-full px-8 text-lg backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-bold text-white/50">U{i}</span>
                </div>
              ))}
            </div>
            <p>+500 empresas transformadas</p>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in zoom-in duration-1000 fade-in delay-200">
          <div className="relative z-10 glass-card p-6 rounded-2xl border-l-4 border-l-primary max-w-md ml-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">IA</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Análise de Custos</h3>
                  <p className="text-xs text-primary">Processamento Concluído</p>
                </div>
              </div>
              <span className="text-emerald-400 font-mono font-bold">+31% ROI</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Eficiência Operacional</span>
                <span>85%</span>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-12 z-20 glass-card p-4 rounded-xl border-l-4 border-l-secondary max-w-xs transform translate-y-12 hover:-translate-y-2 transition-transform duration-500">
             <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
               </div>
               <div>
                 <p className="text-xs text-muted-foreground">Atendimento WhatsApp</p>
                 <p className="text-sm font-medium text-white">"Gostaria de agendar uma demo"</p>
                 <p className="text-xs text-primary mt-1">Respondido em 0.5s via IA</p>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
