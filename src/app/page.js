
import Navbar from '../components/navbar';
import HeroSection from '@/components/heroimage';
import ServicesSection from '@/components/servicesection';
import WhyChooseUs from '@/components/whychoose';
import PortfolioSection from '@/components/portfolio';
import TestimonialsSection from '@/components/testimonial';
import ContactForm from '@/components/contactform';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <WhyChooseUs/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
