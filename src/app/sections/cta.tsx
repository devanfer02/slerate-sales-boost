import Image from 'next/image';
import { Button } from '@/components/ui/button'; 

export default function CTA() {
  return (
    <section className="bg-slate-50" id='get-started'>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slerate-primary">
              Ready to See Your Sales Soar?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Stop guessing and start growing. Get instant access to all our AI-powered features and see the results for yourself. No credit card required.
            </p>
            <Button size="lg" className="mt-8">
              Start Your 14-Day Free Trial
            </Button>
          </div>
          <div className="w-full">
            <Image
              src='/assets/hero/hero3.jpg'
              alt="A confident business owner, happy with their sales growth"
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              width={500}
              height={500}
            />
          </div>

        </div>
      </div>
    </section>
  );
};