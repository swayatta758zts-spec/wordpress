import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import Categories from '@/components/sections/Categories';
import BestSellers from '@/components/sections/BestSellers';
import DiscountBanner from '@/components/sections/DiscountBanner';
import AboutUs from '@/components/sections/AboutUs';
import USP from '@/components/sections/USP';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';
import InstagramFeed from '@/components/sections/InstagramFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <BestSellers />
        <DiscountBanner />
        <AboutUs />
        <USP />
        <Testimonials />
        <BlogSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
