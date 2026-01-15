
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PreviewModal from './components/PreviewModal';

const App: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />
        <FeatureSection />
        <GallerySection />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  );
};

export default App;
