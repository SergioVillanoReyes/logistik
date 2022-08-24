import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Tech from "../components/Technologies";
import BannerServices from "../components/BannerServices";
import BannerBottom from "../components/BannerBottom";

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="SOLUTIONS WITH FREEDOM BUILT"
        bg="bg-hero"
        half
      />
      <AboutUs />
      <BannerServices />
      <Tech />
      <BannerBottom />
    </Layout>
  )
}
