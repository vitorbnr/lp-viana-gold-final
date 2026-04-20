import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    date: "15 Mar 2026",
    category: "Previdenciário",
    title: "Novas regras de aposentadoria: o que muda em 2026?",
    excerpt: "Entenda as alterações nas regras de transição e como elas podem afetar o seu benefício junto ao INSS.",
  },
  {
    img: blog2,
    date: "02 Fev 2026",
    category: "Direito Civil",
    title: "Usucapião: quem tem direito e como funciona",
    excerpt: "Saiba quais são os requisitos legais para a regularização de imóveis por meio da ação de usucapião.",
  },
  {
    img: blog3,
    date: "20 Jan 2026",
    category: "Família",
    title: "Guarda compartilhada: direitos e deveres dos pais",
    excerpt: "Conheça os aspectos jurídicos da guarda compartilhada e como ela impacta a rotina familiar.",
  },
];

const BlogSection = () => (
  <section className="bg-card">
    <div className="container mx-auto px-6 py-16 lg:py-24">
      <div className="text-center mb-12 space-y-3">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Blog</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Artigos e Notícias Jurídicas</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="bg-background border border-highlight rounded-lg overflow-hidden">
            <img src={p.img} alt={p.title} loading="lazy" width={768} height={512} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{p.category}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground leading-snug">{p.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{p.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline">
                Ler mais <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
