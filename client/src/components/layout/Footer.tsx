import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="block mb-6">
              <img src="/images/logo.png" alt="Internia Logo" className="h-16 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando empresas através da Inteligência Artificial, automação e governança de TI. O futuro da sua operação começa aqui.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Soluções</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#solutions" className="hover:text-primary transition-colors">Automação com IA</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Atendimento WhatsApp</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Governança de TI</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Consultoria Estratégica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#cases" className="hover:text-primary transition-colors">Casos de Sucesso</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-white/50">Para compras</span>
                  <a href="mailto:comercial@internia.com.br" className="hover:text-white transition-colors">comercial@internia.com.br</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-white/50">Suporte e Atendimento</span>
                  <a href="mailto:atendimento@internia.com.br" className="hover:text-white transition-colors">atendimento@internia.com.br</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Internia Tecnologia e IA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <p>CNPJ: 15.647.694/0001-20</p>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
