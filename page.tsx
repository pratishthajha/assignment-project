'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  ]);

  const handleAddImage = () => {
    // Sample images array to cycle through when adding
    const sampleImages = [
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
    ];
    
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setImages([...images, randomImage]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Empty Panel */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-100"></div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-[#1F1F1F] p-10 space-y-8 overflow-y-auto">
        
        {/* Tabs */}
        <div className="flex gap-8 border-b-2 border-gray-700">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-4 text-lg transition-all ${
              activeTab === 'about'
                ? 'text-white border-b-4 border-white font-semibold'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab('experiences')}
            className={`pb-4 text-lg transition-all ${
              activeTab === 'experiences'
                ? 'text-white border-b-4 border-white font-semibold'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`pb-4 text-lg transition-all ${
              activeTab === 'recommended'
                ? 'text-white border-b-4 border-white font-semibold'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Recommended
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-300 text-base leading-relaxed">
          {activeTab === 'about' && (
            <p>
              Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been working at 
              this awesome company for 3 years now.<br /><br />
              I was born and raised in Albany, NY & have been living in Santa Carla for 
              the past 10 years with my wife Tiffany and my 4 year old twin daughters - 
              Emma and Ella. Both of them are just starting school, so my calendar is 
              usually blocked between 9-10 AM. This is a...
            </p>
          )}
          {activeTab === 'experiences' && (
            <p>My professional experience includes working with Fortune 500 companies and helping them achieve their sales goals through strategic partnerships and innovative solutions.</p>
          )}
          {activeTab === 'recommended' && (
            <p>I highly recommend focusing on building long-term customer relationships and understanding client needs before proposing solutions. Technology is important, but human connection is what truly drives success.</p>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Gallery Section */}
        <div className="bg-[#2A2A2A] rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-2xl font-bold">Gallery</h2>
            <button 
              onClick={handleAddImage}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm font-semibold border border-gray-600 transition-all hover:scale-105 active:scale-95"
            >
              + ADD IMAGE
            </button>
          </div>
          
          <div className="flex gap-4 items-center">
            <button className="bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-3 text-white text-xl transition-all flex-shrink-0">
              ←
            </button>
            
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-52 h-44 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform relative"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <button className="bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-3 text-white text-xl transition-all flex-shrink-0">
              →
            </button>
          </div>

          {/* Image count indicator */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            {images.length} {images.length === 1 ? 'image' : 'images'} in gallery
          </div>
        </div>
      </div>
    </div>
  );
}
