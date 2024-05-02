
import Navbar from '../components/navbar';
import HeroSection from '@/components/heroimage';
import ServicesSection from '@/components/servicesection';
import WhyChooseUs from '@/components/whychoose';
import PortfolioSection from '@/components/portfolio';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <WhyChooseUs/>
      <PortfolioSection/>
    </div>
  );
}
