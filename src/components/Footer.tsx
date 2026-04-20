import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import logoViana from "@/assets/logo-viana.png";

const Footer = () => (
  <footer style={{ background: "#080F09", borderTop: "1px solid rgba(214,175,69,0.15)" }}>
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Col 1 — brand */}
        <div className="space-y-5">
          <img
            src={logoViana}
            alt="Viana Advocacia"
            className="h-16 w-auto"
            style={{
              filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 6px rgba(214,175,69,0.25))',
            }}
          />
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(240,211,123,0.5)" }}>
            Há mais de 19 anos atuando na defesa dos direitos de nossos clientes com excelência e compromisso.
          </p>
          <div className="flex gap-5 pt-1">
            <a
              href="https://www.facebook.com/VaianaADV/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: "rgba(240,211,123,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F0D37B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,211,123,0.5)")}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/vianaadvocaciaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: "rgba(240,211,123,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F0D37B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,211,123,0.5)")}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Col 2 — links */}
        <div className="space-y-5">
          <h4 className="font-heading text-lg font-bold" style={{ color: "#F0D37B" }}>
            Links Rápidos
          </h4>
          <div className="divider-gold w-8" style={{ opacity: 0.5 }} />
          <nav className="flex flex-col gap-2.5 font-body text-sm">
            {[
              { label: "O Escritório", href: "#sobre" },
              { label: "Equipe",        href: "#equipe" },
              { label: "Áreas de Atuação", href: "#areas" },
              { label: "Unidades",     href: "#unidades" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors duration-200"
                style={{ color: "rgba(240,211,123,0.55)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F0D37B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,211,123,0.55)")}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — contact */}
        <div className="space-y-5">
          <h4 className="font-heading text-lg font-bold" style={{ color: "#F0D37B" }}>
            Contato
          </h4>
          <div className="divider-gold w-8" style={{ opacity: 0.5 }} />
          <div className="space-y-3 font-body text-sm">
            <p className="flex items-center gap-2.5" style={{ color: "rgba(240,211,123,0.55)" }}>
              <Phone size={14} style={{ color: "#D6AF45" }} />
              (77) 99965-7852
            </p>
            <p className="flex items-center gap-2.5" style={{ color: "rgba(240,211,123,0.55)" }}>
              <Mail size={14} style={{ color: "#D6AF45" }} />
              wally.viana@hotmail.com
            </p>
            <p className="flex items-start gap-2.5" style={{ color: "rgba(240,211,123,0.55)" }}>
              <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#D6AF45" }} />
              Carinhanha e Cocos, BA
            </p>
            <a
              href="https://wa.me/5577999657852"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 mt-2"
              style={{
                background: "linear-gradient(135deg,#D6AF45,#C89E3F)",
                color: "#0D1A10",
                boxShadow: "0 4px 16px rgba(140,102,34,0.3)",
              }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{ borderTop: "1px solid rgba(214,175,69,0.08)" }}>
      <div className="container mx-auto px-6 py-4">
        <p className="font-body text-xs text-center" style={{ color: "rgba(240,211,123,0.3)" }}>
          © {new Date().getFullYear()} Viana Advocacia — CNPJ: 17.723.608/0001-47. Todos os direitos reservados.{" "}
          Em conformidade com o Provimento nº 205/2021 da OAB.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
