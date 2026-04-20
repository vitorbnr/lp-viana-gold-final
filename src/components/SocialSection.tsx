import { Facebook, Instagram } from "lucide-react";

const SocialSection = () => (
  <section
    id="redes-sociais"
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #22402A 0%, #1a3321 60%, #22402A 100%)",
      borderTop: "1px solid rgba(240,211,123,0.15)",
      borderBottom: "1px solid rgba(240,211,123,0.15)",
    }}
  >
    {/* Decorative glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(214,175,69,0.07) 0%, transparent 100%)",
      }}
    />

    <div className="container relative mx-auto px-6 py-20 text-center max-w-2xl">
      <p
        className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-4"
        style={{ color: "#D6AF45" }}
      >
        Acompanhe
      </p>
      <h2
        className="font-heading font-bold mb-4"
        style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "#F5EDD8" }}
      >
        Nossas{" "}
        <span className="text-gold-gradient">redes sociais</span>
      </h2>
      <p className="font-body text-base mb-12" style={{ color: "rgba(240,211,123,0.6)" }}>
        Dicas jurídicas, novidades e muito mais — siga-nos nas redes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <a
          href="https://www.facebook.com/VaianaADV/?locale=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{ background: "#1877F2", color: "#fff", boxShadow: "0 6px 24px rgba(24,119,242,0.35)" }}
        >
          <Facebook size={22} />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/vianaadvocaciaba/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F56040)",
            color: "#fff",
            boxShadow: "0 6px 24px rgba(253,29,29,0.3)",
          }}
        >
          <Instagram size={22} />
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default SocialSection;
