
import Navbar from '../components/navbar';
import HeroSection from '@/components/heroimage';
import ServicesSection from '@/components/servicesection';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection/>
    </div>
  );
}
