import SmartHeader from '@/components/SmartHeader';
import HeroHybrid from '@/components/HeroHybrid';
import SocialProof from '@/components/SocialProof';
import BenefitsSection from '@/components/BenefitsSection';
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

                {/* Spacer for bottom dock */}
                <div className="h-40 flex items-center justify-center text-white/10 text-sm">
                    © 2024 CIPRO. Elite Consulting.
                </div>
            </div>

            <GlassDock />
        </main>
    );
}
