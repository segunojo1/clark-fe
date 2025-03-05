import AboutClark from "@/components/about-clark";
import Collab from "@/components/collab";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import WhyClark from "@/components/why-clark";

export default function Home() {
  return (
    <div className="">
      <main className="bg-[#F8F8F8]">
        <Hero />
        <WhyClark />
        <AboutClark />
        <Collab />
      </main>
      <Footer />
    </div>
  );
}
