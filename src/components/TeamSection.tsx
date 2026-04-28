import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";
import lawyer4 from "@/assets/lawyer-4.jpg";
import lawyer5 from "@/assets/lawyer-5.jpg";
import lawyer6 from "@/assets/lawyer-6.jpg";
import lawyer7 from "@/assets/lawyer-7.jpg";
import React, { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const team = [
  {
    name: "Wallysson Viana Silva",
    role: "Advogado Sócio-Fundador",
    oab: "OAB/BA 23.825",
    desc: "Especialista em Direito Processual Civil e Direito Público.",
    img: lawyer1,
    featured: true,
  },
  { name: "Dr.",  role: "Advogado",  oab: "OAB/BA 00.000", desc: "Especialista em Direito.",                          img: lawyer2 },
  { name: "Dra.", role: "Advogada",  oab: "OAB/BA 00.000", desc: "Especialista em Direito Previdenciário.",             img: lawyer3 },
  { name: "Dr.",  role: "Advogado",  oab: "OAB/BA 00.000", desc: "Atuação em Direito Trabalhista.",                   img: lawyer4 },
  { name: "Dra.", role: "Advogada",  oab: "OAB/BA 00.000", desc: "Atuação em Direito Civil e Imobiliário.",           img: lawyer5 },
  { name: "Dr.",  role: "Advogado",  oab: "OAB/BA 00.000", desc: "Especialista em Direito Criminal.",                 img: lawyer6 },
  { name: "Dra.", role: "Advogada",  oab: "OAB/BA 00.000", desc: "Atuação em Direito Eleitoral e Público.",          img: lawyer7 },
];

const TeamSection = () => {
  const plugin = useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section
      id="equipe"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1A10 0%, #111D14 100%)" }}
    >
    <div className="divider-gold absolute top-0 left-0 right-0" style={{ opacity: 0.2 }} />

    <div className="container relative mx-auto px-6 py-20 lg:py-28">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <p
          className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#D6AF45" }}
        >
          Nossa Equipe
        </p>
        <h2
          className="font-heading font-bold"
          style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
        >
          Conheça nossos{" "}
          <span className="text-gold-gradient">profissionais</span>
        </h2>
        <div className="divider-gold w-16 mx-auto" style={{ opacity: 0.6 }} />
      </div>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {team.map((t) => (
            <CarouselItem key={t.oab + t.name} className="pl-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                style={{
                  border: t.featured ? "1px solid rgba(214,175,69,0.4)" : "1px solid rgba(214,175,69,0.1)",
                  boxShadow: t.featured
                    ? "0 0 32px rgba(214,175,69,0.15), 0 8px 32px rgba(0,0,0,0.4)"
                    : "0 4px 24px rgba(0,0,0,0.25)",
                  background: "rgba(34,64,42,0.25)",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden shrink-0" style={{ height: "260px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={512}
                    height={640}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "saturate(0.75) brightness(0.85)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,26,16,0.85) 0%, transparent 55%)" }}
                  />
                  {/* Featured badge */}
                  {t.featured && (
                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-body font-semibold"
                      style={{ background: "linear-gradient(135deg,#D6AF45,#C89E3F)", color: "#0D1A10" }}
                    >
                      
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 space-y-1.5 grow">
                  <h3 className="font-heading font-bold text-lg leading-tight" style={{ color: "#F5EDD8" }}>
                    {t.name}
                  </h3>
                  <p className="font-body text-sm font-semibold text-gold-gradient">{t.role}</p>
                  <p className="font-body text-xs" style={{ color: "rgba(240,211,123,0.45)" }}>{t.oab}</p>
                  <p className="font-body text-sm pt-1.5 leading-relaxed" style={{ color: "rgba(240,211,123,0.65)" }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-transparent border-[rgba(214,175,69,0.3)] text-[#D6AF45] hover:bg-[#D6AF45]/10 hover:text-[#D6AF45]" />
          <CarouselNext className="static translate-y-0 h-12 w-12 bg-transparent border-[rgba(214,175,69,0.3)] text-[#D6AF45] hover:bg-[#D6AF45]/10 hover:text-[#D6AF45]" />
        </div>
      </Carousel>
    </div>
  </section>
  );
};

export default TeamSection;
