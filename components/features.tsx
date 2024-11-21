import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Des designs modernes et réactifs",
    description: "Nous concevons des sites web esthétiques et performants, accessibles sur tous les appareils.",
    image: "/assets/landing-page.png",
  },
  {
    title: "Expertise technique de pointe",
    description: "Notre équipe maîtrise les dernières technologies pour garantir des performances optimales.",
    image: "/assets/dev-web.jpg",
  },
  {
    title: "Une approche personnalisé",
    description: "Chaque projet est unique, tout comme nos solutions. Nous nous adaptons à votre vision et à vos objectifs.",
    image: "/assets/test-web.jpg",
  },
];

const featureList: string[] = [
  "Développement",
  "Déploiement",
  "Design",
  "UI/UX",
  "Teste",
  "Workflow",
  "Responsive design",
  "Newsletter",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Pourquoi choisir{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Mada Web Masters ?
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};