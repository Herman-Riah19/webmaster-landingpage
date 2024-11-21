import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose des solutions sur mesure pour répondre à vos besoins numériques : <ul>" +
      "<li>Développement de sites web modernes (vitrines, e-commerce, etc.).</li>" +
      "<li>Développement d&apos;applications mobiles</li>" +
      "<li>Maintenance et optimisation de sites existants</li>" +
      "<li>Intégration d&apos;outils digitaux adaptés à votre entreprise</li>" +
      "<li>Conception UX/UI pour une expérience utilisateur optimale.</li></ul>",
    value: "item-1",
  },
  {
    question: "Nos services sont-ils adaptés aux petites entreprises ?",
    answer:
      "Oui ! Nous travaillons avec des entreprises de toutes tailles, des start-ups aux grandes organisations.",
    value: "item-2",
  },
  {
    question: "Travaillez-vous uniquement avec des entreprises ou aussi avec des particuliers ?",
    answer:
      "Je travaille principalement avec des entreprises (TPE, PME, start-ups, grandes organisations), mais je peux également collaborer avec des particuliers ayant des projets numériques concrets.",
    value: "item-3",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Les délais dépendent de la complexité de votre projet. Par exemple : <ul>" +
      "<li>Un site vitrine peut être livré en 2 à 4 semaines.</li>" +
      "<li>Une boutique en ligne ou une application nécessite généralement 4 à 8 semaines.</li>" +
      "<li>Je m&apos;engage toujours à respecter les échéances définies ensemble.</li></ul>",
    value: "item-4",
  },
  {
    question: "Offrez-vous une garantie après livraison ?",
    answer:
      "Oui, une garantie de suivi est incluse après la livraison pour résoudre les éventuels bugs ou ajustements nécessaires. La durée de cette garantie dépend du type de projet.",
    value: "item-5",
  },
  {
    question: "Quels outils et technologies utilisez-vous ?",
    answer:
      "Je maîtrise les technologies modernes pour garantir des solutions performantes :<ul>" +
      "<li>Développement Frontend : React.js, Next.js.</li>" +
      "<li>Développement Backend : Node.js, AdonisJS, Flask.</li>" +
      "<li>CMS : WordPress, Shopify.</li>" +
      "<li>Outils de design : Figma, Adobe XD.</li>" +
      "<li>Hébergement : AWS, Vercel, Firebase.</li></ul>",
    value: "item-6",
  },
];

/* eslint-disable react/no-unescaped-entities */
export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Vous avez d'autre question?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactez nous
        </a>
      </h3>
    </section>
  );
};