import React from 'react';
import Link from 'next/link';
import { AuroraText as ImportedAuroraText } from '@/components/magicui/aurora-text';



const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-white to-black shadow-md">
      <div className="flex items-center">
      <Link href="/">
        <img
        src="/AVATAQ.svg"
        alt="Logo"
        className="w-20 h-20 cursor-pointer"
        />
      </Link>
      </div>
      <div className="flex items-center space-x-4 text-white">
      <Link href="/features" className="hover:text-gray-300">
        Features
      </Link>
      <Link href="/pricing" className="hover:text-gray-300">
        Pricing
      </Link>
      <Link href="/blogs" className="hover:text-gray-300">
        Blogs
      </Link>
      <Link href="/signin" className="hover:text-gray-300">
        Sign In
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
const MainTitle: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-black to-white text-transparent bg-clip-text text-center mb-4">
        Welcome to AVATAQ-AI
      </h1>
      <p className="text-lg font-semibold bg-gradient-to-r from-black to-white text-transparent bg-clip-text mt-4">
        Your journey starts here with the new era of Agentic AI
      </p>
    </div>
  );
};

export { MainTitle };

interface AuroraTextProps {
  text: string;
  className?: string;
}

const LocalAuroraText: React.FC<AuroraTextProps> = ({ text, className }) => {
  return (
    <div className={`flex justify-center mt-6 ${className}`}>
      {text}
    </div>
  );
};

export { Navbar };
export { LocalAuroraText, ImportedAuroraText };
const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainTitle />
    </>
  );
};

export default Page;


