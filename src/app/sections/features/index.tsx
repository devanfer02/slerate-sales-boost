import FeatureCards from "./feature-card";

export default function Features() {
  return (
    <section className="bg-slerate-primary-2 pt-20 pb-24" id='features'>
      <div className="container mx-auto px-4">
        <div className='mb-16'>
          <h1 className='text-center text-5xl font-extrabold drop-shadow-2xl text-white border-b-4 border-red-400 w-fit mx-auto'>
            Our Features
          </h1>
        </div>
        <FeatureCards/>        
      </div>
    </section>
  );
};