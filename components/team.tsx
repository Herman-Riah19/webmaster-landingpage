import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/assets/profile/manou.jpg",
    name: "Manu Rabearizaka",
    position: "Chef de projet",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/manu-rabeharizaka-160b65b1/" },
      {
        name: "Facebook",
        url: "https://web.facebook.com/manu.rabeharizaka",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mrabeharizaka/",
      },
    ],
  },
  {
    imageUrl: "/assets/profile/herman.jpg",
    name: "Herman Christian",
    position: "Développeur Full stack",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://web.facebook.com/riah.hermann/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/hermannriah/",
      },
    ],
  },
  {
    imageUrl: "/assets/profile/faniry.jpeg",
    name: "Faniry Rabemananjara",
    position: "Développeur Mobile",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/faniry-zo-rabemananjara-9560a8221/" },
      { name: "Facebook", url: "https://web.facebook.com/faniry.zo.rabemananjara"},
      {
        name: "Instagram",
        url: "https://www.instagram.com/faniry.___/",
      },
    ],
  },
  {
    imageUrl: "/assets/profile/boniface.PNG",
    name: "Boniface",
    position: "Développeur IA",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://web.facebook.com/sitrakiniaina.boniface.7",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Notre équipe d'experts{" "}
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      Nous sommes une équipe passionnée de développeurs et designers prêts à relever tous vos défis 
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};