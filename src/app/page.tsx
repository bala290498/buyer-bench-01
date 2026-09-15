"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamCommunitySection from "@/components/TeamCommunitySection";
import ProtectionBanner from "@/components/ProtectionBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState("Property");

  const handleOpenModal = (category: string = "Property") => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenModal={() => handleOpenModal("Property")} />

      <main className="flex-1">
        <HeroSection onOpenModal={() => handleOpenModal("Property")} />
        <ServicesSection onOpenModal={(cat) => handleOpenModal(cat)} />
        <HowItWorksSection />
        <WhyUsSection />
        <TeamCommunitySection />
        <ProtectionBanner onOpenModal={(cat) => handleOpenModal(cat)} />
        <ContactSection onOpenModal={() => handleOpenModal("Property")} />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultCategory={modalCategory}
      />
    </div>
  );
}
