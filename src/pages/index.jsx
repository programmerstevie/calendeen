import TagSEO from "@/components/TagSEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TagSEO canonicalSlug="" />
      {/* 
        <TagSchema />
       */}

      <main>
        <Header></Header>
        <Hero></Hero>
        <Pricing></Pricing>
        <Footer></Footer>
      </main>
    </>
  );
}
