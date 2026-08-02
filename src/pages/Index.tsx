import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProfileSection from "@/components/ProfileSection";
import TopicsSection from "@/components/TopicsSection";
import ToolsSlider from "@/components/ToolsSlider";
import EvidenceSection from "@/components/EvidenceSection";
import InstructorSection from "@/components/InstructorSection";
import CompanySection from "@/components/CompanySection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CV · SysAdmin Linux Cloud JR | Selling One</title>
        <meta name="description" content="Portafolio profesional certificado en SysAdmin Linux Cloud JR por Selling One. Linux, Cloud, Docker e infraestructura TI." />
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="profile" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProfileSection />
        <TopicsSection />
        <ToolsSlider />
        <EvidenceSection />
        <InstructorSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
