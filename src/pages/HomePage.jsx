import BestSellers from "../components/BestSellers";
import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PromotionBanner from "../components/PromotionBanner";

function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <CategorySection />
            <BestSellers />
            <PromotionBanner />

        </div>
    );

}

export default HomePage;