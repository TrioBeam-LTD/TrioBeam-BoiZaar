import React from "react";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          বাংলাদেশের সবচেয়ে বড় <br />
          <span className="text-yellow-300">একাডেমিক বই</span> মার্কেটপ্লেস
        </motion.h1>
      </div>
    </section>
  );
}

export default HeroSection;
