import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";




const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r to-black shadow-md">
      <div className="flex items-center">
      <Link href="/">
        <Image
          src="/AVATAQ.svg"
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </Link>
      </div>
      <div className="flex items-center space-x-9 text-white">
      <Link href="/Home" className="hover:text-gray-300">
        Home
      </Link>
      <Link href="/Features" className="hover:text-gray-300">
        Features
      </Link>
      <Link href="/Pricing" className="hover:text-gray-300">
        Pricing 
      </Link>
      <Link href="/signin" className="hover:text-gray-300">
        Sign In
      </Link>
      <Link href="/Howitworks" className="hover:text-gray-300">
        How it works 
      </Link>
      <Link
        href="/get-started"
        className="px-3 py-1 bg-white text-blue-500 rounded hover:bg-gray-100"
      >
        Get Started for Free
      </Link>
      
      </div>
  </nav>
  );
};

export { Navbar };


const Page: React.FC = () => {
  return (
    <>
      
      <div className="bg-black min-h-screen">
      <Navbar />
      <TypewriterEffect
        words={[
        { text: "Empowering" },
        { text: "Agentic" },
        { text: "AI" },
        { text: "for" },
        { text: "Everyone" },
        ]}
        className="mt-8 text-white"
        cursorClassName="bg-white" // or customize as needed
      />
      <div className="flex justify-center mt-9">
        <InteractiveHoverButton> Know More </InteractiveHoverButton>
      </div>
      </div>
      
    </>
  );
};
export default Page;

