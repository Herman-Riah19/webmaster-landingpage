import { Statistics } from "@/components/Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/assets/pilot.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Chez Mada Web Master, nous transformons vos idées en réalité digitale. 
              Que vous soyez une petite entreprise, une start-up ou une grande organisation, 
              nous sommes là pour vous accompagner dans la création, la gestion et l'optimisation de votre présence en ligne.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};