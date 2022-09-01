import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Tech from "../components/Technologies";
import BannerServices from "../components/BannerServices";
import BannerBottom from "../components/BannerBottom";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="SOLUTIONS WITH FREEDOM BUILT IN"
        bg="bg-hero"
        half
        carousel
      />
      <AboutUs />
      <BannerServices />
      <Tech />
      <BannerBottom />
      <Contact />
    </Layout>
  )
}
