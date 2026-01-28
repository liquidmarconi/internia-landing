import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Automações com IA",
    description: "Liberte sua equipe do trabalho manual. Desenvolvemos automações personalizadas que otimizam fluxos de trabalho e integram sistemas.",
    icon: "/images/automation-icon.png",
    features: ["Integração de Sistemas", "Processamento de Dados", "Workflows Inteligentes"]
  },
  {
    title: "Atendimento WhatsApp",
    description: "Esteja presente 24/7. Chatbots inteligentes que qualificam leads, realizam vendas e oferecem suporte técnico diretamente no WhatsApp.",
    icon: "/images/whatsapp-bot.png",
    features: ["Disponibilidade 24/7", "Qualificação de Leads", "Vendas Automatizadas"]
  },
  {
    title: "Governança de TI",
    description: "Garanta uma base tecnológica sólida. Consultoria para otimizar infraestrutura, garantir governança de dados e preparar para o crescimento.",
    icon: "/images/governance-icon.png",
    features: ["Segurança de Dados", "Consultoria Estratégica", "Escalabilidade"]
  }
];

export default function Services() {
  return (
    <section id="solutions" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A Inteligência que seu <span className="text-primary">Negócio Precisa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A Internia é sua parceira estratégica na jornada de transformação digital. Criamos soluções de IA que geram resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
              
              <CardHeader>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-3 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,194,255,0.3)]" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
