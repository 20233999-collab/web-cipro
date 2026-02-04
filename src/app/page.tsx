import SmartHeader from '@/components/SmartHeader';
import HeroHybrid from '@/components/HeroHybrid';
import SocialProof from '@/components/SocialProof';
import BenefitsSection from '@/components/BenefitsSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';
import GlassDock from '@/components/GlassDock';

export default function Home() {
    return (
        <main className="min-h-screen bg-void-black selection:bg-electric-orange selection:text-white">
            <SmartHeader />

            {/* Hero Section */}
            <div id="inicio">
                <HeroHybrid />
            </div>

            {/* Content Flow */}
            <div className="relative z-10 bg-void-black">
                {/* Social Proof */}
                <SocialProof />

                {/* Benefits / Services */}
                <div id="nosotros">
                    <BenefitsSection />
                </div>

                {/* Projects / Portfolio */}
                <PortfolioSection />

                {/* Footer */}
                <Footer />
            </div>

            <GlassDock />
        </main>
    );
}
