import BestSellers from "../components/BestSellers";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NewstellerSection from "../components/NewstellerSection";
import PromotionBanner from "../components/PromotionBanner";

function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <CategorySection />
            <BestSellers />
            <PromotionBanner />
            <NewstellerSection />
            <Footer />

        </div>
    );

}

export default HomePage;