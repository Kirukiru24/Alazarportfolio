// src/components/About.tsx

import React from "react";
import { motion } from "framer-motion";
// Icons for visual flair
import { RocketLaunchIcon, CodeBracketIcon, AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

// Data from the Profile PDF
const summaryParagraphs: string[] = [
  "I am currently pursuing a PhD in Electrical and Computer Engineering specializing in Electromagnetics and Photonics, with research focused on novel design, simulation, fabrication, and testing of antenna arrays, metamaterials, and metasurfaces. (cite: 17)",
  "Alongside my academic research, I bring industry experience in IT, telecom, and satellite communications (satcom), where I have successfully designed and implemented advanced systems that align technology with business goals. (cite: 18)",
  "My expertise extends beyond technical innovation to include project management, business development, partnership building, and delivering end-to-end IT solutions tailored to organizational needs. (cite: 19)",
  "I thrive at the intersection of cutting-edge technology and strategic business outcomes, driving impactful solutions in both research and industry settings. (cite: 20)"
];

const topSkills: string[] = [
  "Keysight ADS (cite: 5)",
  "Cellular Communications (cite: 6)",
  "Cisco Networking (cite: 7)",
];

export default function About(): React.ReactElement {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger the appearance of internal elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // Added vertical padding for better spacing and removed min-h-screen to let content dictate height
    <section id="about" className="py-20 md:py-32 bg-gray-50"> 
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Title */}
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-indigo-600 inline-block pb-1"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          {/* Summary Text Section */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            {summaryParagraphs.map((text, index) => (
              <motion.p 
                key={index} 
                variants={itemVariants}
              >
                {/* Highlight the main focus areas */}
                {index === 0 && <AcademicCapIcon className="w-6 h-6 inline mr-2 text-indigo-500" />}
                {index === 1 && <RocketLaunchIcon className="w-6 h-6 inline mr-2 text-indigo-500" />}
                {text}
              </motion.p>
            ))}
          </div>

          {/* Key Skills Callout Section */}
          <motion.div 
            className="mt-12 p-6 bg-white border border-gray-200 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CodeBracketIcon className="w-7 h-7 mr-3 text-indigo-600" />
              Core Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {topSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full flex items-center shadow-md hover:shadow-lg transition duration-300"
                  variants={itemVariants}
                >
                  <CheckBadgeIcon className="w-4 h-4 mr-1.5 text-indigo-600" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}