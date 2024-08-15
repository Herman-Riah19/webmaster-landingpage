import { About } from "@/components/about";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import { Newsletter } from "@/components/newsletter";
import { Services } from "@/components/services";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Features />
        <Services />
        <Team />
        <Newsletter />
        <FAQ />
      </div>
      <Footer  />
    </main>
  );
}
