import * as React from "react";

interface HeroBannerProps {
  imageUrl?: string;
  alt?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  imageUrl = "/herobackround.png",
  alt = "Hero background image"
}) => {
  return (
    <div className="w-full h-full" role="banner" aria-label="Hero section">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
};

export default HeroBanner; 