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
    imageUrl: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/328285011_505979468366091_3858198845865901488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGa9t4CUZ04fZK7b0R_TWB6LdjkvrYkYrIt2OS-tiRisjKibeyiHytZXmNkMZoxyRHCX5ip3Xctzq-0latllZOI&_nc_ohc=bjkUWj1JNbkQ7kNvgGurrFv&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=A3H6lW90RJPeo2wJPCIG0Tp&oh=00_AYCD1NUGBKaxSdsy4SiA7tV-t4JbKWRZymcmuNsB4CLocw&oe=6744B0BF",
    name: "Manu Rabearizaka",
    position: "Chef de projet",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/manu-rabeharizaka-160b65b1/" },
      {
        name: "Facebook",
        url: "https://web.facebook.com/manu.rabeharizaka",
      },
    ],
  },
  {
    imageUrl: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/467307592_2058003984640354_3065986169247869985_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-tkwBhByBMGy68tKXwfAdv8cn01aVkYC_xyfTVpWRgGawFIpxqUm1XmqxvHsOm8Pu6C6EXIF-87BO5h4ReEKL&_nc_ohc=Gp4JavZmQtEQ7kNvgHFtUjW&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=AiBbkIBdNzZOL8CKlZ4hJL4&oh=00_AYCspswI8vFuOByxZyOTcYKfJEUCu4aPrOU265qC3qxFTw&oe=6744C655",
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
    imageUrl: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/456484591_3665861410410271_7763130300723754321_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEAbROY_q0UagKGEnKLSa8QozVQUC9U-aijNVBQL1T5qPeZ9JqeRGesC4HSlBWztPkak1l0BYKeNdigXxEekzWD&_nc_ohc=7jt1kN9EjeEQ7kNvgGwJjmb&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=A5UOaoEhQ8OLPr1lRyGerkQ&oh=00_AYDeKjYIdHEjrVCk7dgCpSGvCrhWISXwrE2AtEkW6SHbvA&oe=6744C590",
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
    imageUrl: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/336912770_248604900950237_3596308060253383343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=669761&_nc_eui2=AeE-nt530d9kGMFLBUEOK27QlTKD3yCSWgGVMoPfIJJaAYE81EuXHKCL_ufn778DLD2eGtfgVuNGRYsdMifRiw3S&_nc_ohc=W2Xzl87Z5xEQ7kNvgHB4YhV&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=AhS9LYinP0fuBSRPIeexx_e&oh=00_AYAGhpEQ5ubeWfe9S0NifxjbxAG89zuF0dILRzJnTG2KPg&oe=6744B221",
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