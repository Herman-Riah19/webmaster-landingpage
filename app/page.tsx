import { About } from "@/components/about";
import { CardPresentation } from "@/components/card/cardPresentation";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import { Services } from "@/components/services";
import { Statistics } from "@/components/Statistics";
import { Team } from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <div className="m-20 p-20">
          <CardPresentation>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About{" "}
              </span>
              Company
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Statistics />
          </CardPresentation>
        </div>
        <Features />
        <Services />
        <Team />
        <FAQ />
      </div>
      <Footer  />
    </main>
  );
}
