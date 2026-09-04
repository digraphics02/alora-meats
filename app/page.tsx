import Hero from "@/components/home/Hero";
import CategoryStrip from "@/components/home/CategoryStrip";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Specialties from "@/components/home/Specialties";
import Testimonials from "@/components/home/Testimonials";
import BlogTeaser from "@/components/home/BlogTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <About />
      <WhyChooseUs />
      <Specialties />
      <Testimonials />
      <BlogTeaser />
      <CtaBanner />
    </>
  );
}
