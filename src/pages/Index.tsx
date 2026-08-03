import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CourseSection from "@/components/CourseSection";
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
        <title>CV · Red Hat Enterprise Linux JR | Selling One</title>
        <meta name="description" content="Portafolio profesional certificado en Red Hat Enterprise Linux JR: RHEL, LVM, firewalld, Podman, DNS, reverse proxy y hardening SSH." />
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="profile" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CourseSection />
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
