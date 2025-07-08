import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24" id='about'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="w-full h-full">
            <Image
              src='/assets/hero/hero1.jpg'
              alt="The Slerate Sales Boost team collaborating with a client"
              className="rounded-lg object-cover w-full h-full"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slerate-primary mb-6">
              About Sales Boost
            </h1>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Slerate Sales Boost was born from a simple observation: too many e-commerce businesses were flying blind. They had access to data, but not the right tools to turn that data into meaningful growth. Decisions were based on guesswork, not guidance.
              </p>
              <p>
                Our mission is to change that. We believe that powerful, AI-driven analytics shouldn't be reserved for corporate giants. We're a passionate team of developers, marketers, and data scientists dedicated to creating an intuitive platform that acts as a co-pilot for your business.
              </p>
              <p className="font-semibold text-slerate-primary">
                We're not just selling software; we're offering clarity and confidence to help you build a thriving online business.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};