import { Clock, Users, Building, Briefcase, ShieldAlert, Scale, ArrowRight } from "lucide-react";

const areas = [
  { icon: Clock,      title: "Direito Previdenciário",      desc: "Aposentadoria, auxílio-doença, pensões e benefícios do INSS." },
  { icon: Users,      title: "Direito de Família e Sucessões", desc: "Divórcio, guarda, pensão alimentícia, inventário e partilha." },
  { icon: Building,   title: "Direito Civil e Imobiliário",  desc: "Contratos, usucapião, ações possessórias e indenizações." },
  { icon: Briefcase,  title: "Direito Trabalhista",          desc: "Rescisões, horas extras, assédio e reclamações trabalhistas." },
  { icon: ShieldAlert,title: "Direito Criminal",             desc: "Defesa criminal, audiências de custódia e inquéritos policiais." },
  { icon: Scale,      title: "Direito Eleitoral e Público",  desc: "Campanhas eleitorais, impugnações e direito administrativo." },
];

const AreasSection = () => (
  <section
    id="areas"
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #111D14 0%, #0D1A10 100%)" }}
  >
    {/* Top light divider */}
    <div className="divider-gold absolute top-0 left-0 right-0" style={{ opacity: 0.25 }} />

    {/* Background glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,64,42,0.5) 0%, transparent 100%)",
      }}
    />

    <div className="container relative mx-auto px-6 py-20 lg:py-28">
      {/* Section header */}
      <div className="text-center mb-16 space-y-4">
        <p
          className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#D6AF45" }}
        >
          Áreas de Atuação
        </p>
        <h2
          className="font-heading font-bold"
          style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
        >
          Atuamos nas principais áreas do{" "}
          <span className="text-gold-gradient">Direito</span>
        </h2>
        <div className="divider-gold w-16 mx-auto" style={{ opacity: 0.6 }} />
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a, i) => (
          <div
            key={a.title}
            className="group relative rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(34,64,42,0.3)",
              border: "1px solid rgba(214,175,69,0.1)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(214,175,69,0.28)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3), 0 0 24px rgba(214,175,69,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(214,175,69,0.1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
            }}
          >
            {/* Icon container */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ background: "rgba(214,175,69,0.1)", border: "1px solid rgba(214,175,69,0.2)" }}
            >
              <a.icon size={22} style={{ color: "#D6AF45" }} />
            </div>

            <h3
              className="font-heading font-bold text-xl leading-snug"
              style={{ color: "#F5EDD8" }}
            >
              {a.title}
            </h3>
            <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "rgba(240,211,123,0.6)" }}>
              {a.desc}
            </p>

            <a
              href="https://wa.me/5577999657852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold transition-all duration-200 group-hover:gap-3"
              style={{ color: "#D6AF45" }}
            >
              Consultar Caso <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
