import { ArrowUp } from "lucide-react";
import Container from "@/components/Container";

const imgExternal = "/figma-assets/a909915c92d48e7bbd6ff81562f224d6886ece80.svg";
const imgVector = "/figma-assets/41f0bcf0299840cbea41e75b5ccb835328938e39.svg";
const imgScrollUpButton = "/figma-assets/3e21b90a1531e3d053b00c524ba36b3cb837445e.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#172719] relative">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <h2 className="text-[#91ffae] text-3xl font-bold font-[Rethink_Sans] uppercase mb-6">
                TRIGMA AI
              </h2>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-1">
              <h3 className="text-[#91ffae] text-base font-poppins uppercase tracking-wider mb-6">
                Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg font-poppins">For applicants</span>
                  <span className="text-[#91ffae]">/</span>
                  <span className="text-white text-lg font-poppins">For Customer</span>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-lg font-poppins">Contact Us</p>
                  <p className="text-white text-lg font-poppins">Shipping Information</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-poppins">FAQs</span>
                    <img src={imgExternal} alt="external" className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-[#91ffae] text-base font-poppins uppercase tracking-wider mb-6">
                Additional Link
              </h3>
              <div className="space-y-3">
                <p className="text-white text-lg font-poppins">Product Customization</p>
                <p className="text-white text-lg font-poppins">Community</p>
                <p className="text-white text-lg font-poppins">Corporate Responsibility</p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <div className="bg-[rgba(145,255,174,0.14)] border border-[#91ffae] rounded-[30px] p-6">
                <h3 className="text-white text-2xl font-[Rethink_Sans] mb-8">
                  Subscribe to our newsletter
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-poppins">obscura@email.ru</span>
                    <img src={imgVector} alt="arrow" className="w-3 h-2.5" />
                  </div>
                  <div className="bg-white h-px w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Up Button */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="w-22 h-22 rounded-full bg-[rgba(145,255,174,0.14)] border border-[#91ffae] flex items-center justify-center hover:bg-[rgba(145,255,174,0.2)] transition-colors"
            >
              <ArrowUp className="w-8 h-8 text-[#91ffae]" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}



