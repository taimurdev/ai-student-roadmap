import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import CareerCategories from "../../components/CareerCategories/CareerCategories";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RoadmapPreview from "../../components/RoadmapPreview/RoadmapPreview";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CareerCategories />
      <HowItWorks />
      <RoadmapPreview />
    </>
  );
};

export default Home;