import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <CategorySection />

        </div>
    );

}

export default HomePage;