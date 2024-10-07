import React, { useEffect } from 'react';

const VectorscaleLandingPage = () => {
  useEffect(() => {
    document.title = "Vectorscale Technologies";
  }, []);

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center relative overflow-hidden font-georgia">
      <div className="w-[98%] h-[95%] bg-gradient-to-br from-[#ebf4f5] to-[#b5c6e0] rounded-[30px] shadow-xl flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-6xl font-bold mb-4">Vectorscale Technologies</h1>
          <h2 className="text-2xl mb-8">Using AI to enhance human relationships</h2>
          <a
            href="mailto:ritik@heymigo.ai"
            className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
        
        <div className="absolute bottom-4 right-4 flex flex-col items-end">
          <p className="text-sm"> Vectorscale Technologies LLC</p>
        </div>
      </div>
    </div>
  );
};

export default VectorscaleLandingPage;