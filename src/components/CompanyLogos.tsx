const CompanyLogos = () => {
  const logos = [
    "ViiV Healthcare",
    "GSK",
    "Bayer",
    "Evolet"
  ];

  return (
    <section className="relative py-16 px-6 bg-grownetic-bg -mt-6 md:-mt-10">
      <div className="container mx-auto text-center">
        {/* Rating Section */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-yellow-400"
                viewBox="0 0 24 22"
              >
                <path d="M12.9318 0.553765L15.8741 6.23179C15.941 6.37591 16.0463 6.50075 16.1794 6.59385C16.3125 6.68696 16.4689 6.74509 16.6328 6.76245L23.1281 7.68226C23.3162 7.70536 23.4935 7.77914 23.6393 7.89497C23.7852 8.0108 23.8935 8.16391 23.9517 8.3364C24.01 8.5089 24.0156 8.69367 23.9681 8.86913C23.9205 9.04458 23.8218 9.20349 23.6833 9.32729L19.0015 13.7671C18.882 13.8738 18.7923 14.0074 18.7406 14.1557C18.6889 14.304 18.6768 14.4623 18.7054 14.6162L19.8342 20.8602C19.8669 21.0397 19.8462 21.2242 19.7746 21.393C19.7029 21.5617 19.5832 21.7079 19.4289 21.8148C19.2747 21.9217 19.0921 21.985 18.902 21.9977C18.712 22.0103 18.522 21.9717 18.3538 21.8862L12.5062 18.9322C12.3564 18.8619 12.1918 18.8254 12.025 18.8254C11.8582 18.8254 11.6936 18.8619 11.5439 18.9322L5.69626 21.8862C5.52803 21.9717 5.33807 22.0103 5.148 21.9977C4.95793 21.985 4.77539 21.9217 4.62114 21.8148C4.46689 21.7079 4.34712 21.5617 4.27547 21.393C4.20382 21.2242 4.18316 21.0397 4.21585 20.8602L5.34466 14.5454C5.37327 14.3915 5.36117 14.2332 5.30946 14.0849C5.25775 13.9367 5.16807 13.8031 5.04858 13.6964L0.311261 9.32729C0.171107 9.20011 0.0725438 9.0368 0.02751 8.85716C-0.0175239 8.67752 -0.00709576 8.48924 0.0575309 8.31515C0.122158 8.14106 0.23821 7.98861 0.39163 7.87628C0.54505 7.76395 0.729255 7.69656 0.921931 7.68226L7.41724 6.76245C7.58119 6.74509 7.73752 6.68696 7.87064 6.59385C8.00376 6.50075 8.10903 6.37591 8.17595 6.23179L11.1183 0.553765C11.1984 0.388392 11.3263 0.248382 11.487 0.15026C11.6477 0.0521379 11.8344 0 12.025 0C12.2157 0 12.4024 0.0521379 12.563 0.15026C12.7237 0.248382 12.8516 0.388392 12.9318 0.553765Z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Trusted by text */}
        <h2 className="text-2xl md:text-3xl font-rethink mb-12 text-white">
          Already powering decision intelligence at leading pharma and consumer brands.
        </h2>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="relative bg-grownetic-card-bg/20 backdrop-blur-sm px-8 py-4 rounded-lg border border-grownetic-border/30 hover:border-grownetic-green/50 transition-all duration-300">
                <span className="font-poppins text-gray-400 group-hover:text-white transition-colors text-lg font-medium filter grayscale">
                  {logo}
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-grownetic-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-auto -z-10 pointer-events-none top-1/2 left-4 w-1 h-8 bg-grownetic-green opacity-50"></div>
        <div className="absolute inset-auto -z-10 pointer-events-none top-1/2 right-4 w-1 h-8 bg-grownetic-green opacity-50"></div>
      </div>
    </section>
  );
};

export default CompanyLogos;