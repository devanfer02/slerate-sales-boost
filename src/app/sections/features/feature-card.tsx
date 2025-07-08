"use client"

import Link from 'next/link';
import { BrainCircuit, Rocket, UserCheck, AreaChart } from 'lucide-react';
import { motion } from 'framer-motion';

export const featureItems = [
  {
    icon: BrainCircuit,
    title: "AI-POWERED INSIGHTS",
    description: "Our AI analyzes customer behavior to uncover hidden revenue opportunities and predict future sales trends.",
    isOffset: false,
  },
  {
    icon: Rocket,
    title: "AUTOMATED CAMPAIGNS", 
    description: "Launch targeted email, SMS, and social media campaigns that trigger automatically based on customer actions.",
    isOffset: true,
  },
  {
    icon: UserCheck,
    title: "PERSONALIZATION ENGINE",
    description: "Engage every visitor with personalized product recommendations and offers that boost conversion rates.",
    isOffset: false,
  },
  {
    icon: AreaChart,
    title: "ACTIONABLE ANALYTICS",
    description: "Go beyond vanity metrics with a clear, intuitive dashboard that shows you exactly what's working and why.",
    isOffset: true,
  },
];

export default function FeatureCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={
        {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {featureItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            variants={
              {
                hidden: { y: 100, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "tween",        
                    duration: 0.7,        
                    ease: "easeOut",      
                  },
                },
              }
            }
            className={`bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center transition-transform duration-300 ${item.isOffset ? 'lg:-translate-y-8' : ''
              }`}
          >
            <div className="bg-slerate-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <p className="text-gray-600 mb-6 flex-grow">
              {item.description}
            </p>

            <Link
              href="#"
              className="font-bold tracking-wider border-b-2 border-gray-400 hover:border-red-400 transition-colors"
            >
              MORE
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  )
}