"use client"
import React from "react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AppWindow, Globe, Search, Settings, Workflow } from "lucide-react";

const features = [
  {
    Icon: Globe,
    name: "Conception et développement de sites web",
    description: "Des sites modernes, réactifs et entièrement personnalisés pour refléter votre marque et captiver votre audience.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: AppWindow,
    name: "Développement d'applications web",
    description: "Simplifiez vos processus avec des solutions sur mesure.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Settings,
    name: "Maintenance et support ",
    description: "Gardez votre site sécurisé, à jour et fonctionnel.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Search,
    name: "Optimisation SEO",
    description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Workflow,
    name: "Collaboration transparente",
    description: "Vous êtes impliqué à chaque étape, de la conception au lancement.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function Services() {
  return (
    <div id="services" className="lg:m-20 lg:p-20 sm:p-2 sm:m-2 text-center">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nos Services{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Découvrez notre gamme complète de services pour donner vie à vos projets 
      </p>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
