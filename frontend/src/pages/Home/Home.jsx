import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import CareerCategories from "../../components/CareerCategories/CareerCategories";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import QuizCard from "../../components/QuizCard/QuizCard";
import RoadmapPreview from "../../components/RoadmapPreview/RoadmapPreview";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CareerCategories />
      <HowItWorks />
      <QuizCard />
      <RoadmapPreview />
      <Footer />
      
    </>
  );
};

export default Home;