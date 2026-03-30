import CTA from "@/components/Home/CTA";
import Destinations from "@/components/Home/Destinations";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import ItemCard from "@/components/Home/ItemCard";
import Packages from "@/components/Home/Packages";
import Statistics from "@/components/Home/Statistics";
import Testimonials from "@/components/Home/Testimonials";
import ListingSection from "@/components/ListingSection";
const sampleItem = {
  _id: "1",
  name: "Luxury Event Hall",
  price: 5000,
  category: "Event",
  image: "https://example.com/hall.jpg",
};
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ListingSection />
      <Features />
      <Destinations />
      <Packages />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
      {/* <ItemCard item={sampleItem} /> */}
    </div>
  );
};

export default HomePage;
