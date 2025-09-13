import techInterface1 from "@/assets/tech-interface-1.jpg";
import techInterface2 from "@/assets/tech-interface-2.jpg";
import techInterface3 from "@/assets/tech-interface-3.jpg";

const ImageGallery = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* First Gallery - Top */}
        <div className="relative mb-32">
          <div className="relative w-full max-w-3xl mx-auto h-[400px] border border-border rounded-lg overflow-hidden">
            {/* Gallery frame with decorative corners */}
            <div className="absolute top-4 left-4 w-2 h-2 border border-border"></div>
            <div className="absolute top-4 right-4 w-2 h-2 border border-border"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border border-border"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border border-border"></div>
            
            {/* Images */}
            <div className="absolute top-8 left-8 w-32 h-32 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface1} alt="Tech Interface 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface2} alt="Tech Interface 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface3} alt="Tech Interface 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Background effect for first gallery */}
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[300px] bg-gradient-neon opacity-20 blur-3xl rounded-full rotate-45"></div>
        </div>

        {/* Second Gallery - Bottom */}
        <div className="relative">
          <div className="relative w-full max-w-4xl mx-auto ml-auto mr-0 h-[480px] border border-border rounded-lg overflow-hidden">
            {/* Gallery frame with decorative corners */}
            <div className="absolute top-4 left-4 w-2 h-2 border border-border"></div>
            <div className="absolute top-4 right-4 w-2 h-2 border border-border"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border border-border"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border border-border"></div>
            
            {/* Images */}
            <div className="absolute top-8 left-8 w-36 h-36 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface3} alt="Tech Interface 3" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface1} alt="Tech Interface 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-8 right-8 w-36 h-36 rounded-lg overflow-hidden border border-border/30">
              <img src={techInterface2} alt="Tech Interface 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Background effect for second gallery */}
          <div className="absolute bottom-0 left-0 -z-10 w-[700px] h-[400px] bg-cyber-cyan/20 blur-3xl rounded-full -rotate-45"></div>
        </div>
      </div>

      {/* Additional background graphics */}
      <div className="absolute top-1/2 left-0 -z-20 w-[400px] h-[800px] opacity-30">
        <div className="w-full h-24 bg-neon-green/10 blur-xl rounded-full mb-8"></div>
        <div className="w-full h-16 bg-cyber-cyan/10 blur-xl rounded-full mb-8"></div>
        <div className="w-full h-20 bg-neon-green/10 blur-xl rounded-full"></div>
      </div>
    </section>
  );
};

export default ImageGallery;