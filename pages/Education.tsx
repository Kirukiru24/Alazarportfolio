// src/components/Education.tsx

import React from 'react';
// Import the motion component from framer-motion
import { motion } from "framer-motion";
// Icons
import { AcademicCapIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'; 
import { CheckBadgeIcon } from '@heroicons/react/24/solid'; 
// Imported Logo Assets (Ensure these paths are correct relative to your project structure)
import addis from "../src/assets/addis_ababa_university.png"
import trento from "../src/assets/trento.jpeg"
import aastu from "../src/assets/aastul.png"
import delaware from "../src/assets/delaware.jpg"

// 1. Define the TypeScript interface for a single education entry
interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location?: string;
  logo?: string; // Key to map to the logo assets
}

// 2. Define the Logo Map for easy lookup
const logoMap: { [key: string]: string } = {
  trento: trento,
  addis: addis,
  aastu: aastu,
  delaware: delaware,
};

// 3. Data Definition based on the profile (Updated with correct logo keys)
const academicData: EducationEntry[] = [
  {
    institution: "Università di Trento",
    degree: "Master of Science - MS",
    field: "Information and Communication Engineering",
    duration: "September 2022 - March 2024",
    location: "Italy",
    logo: "trento"
  },
  {
    institution: "Addis Ababa University",
    degree: "Master of Business Administration - MBA",
    field: "Business Administration and Management, General",
    duration: "October 2021 - August 2022",
    location: "Addis Ababa, Ethiopia",
    logo: "addis" // Mapped to the 'addis' import
  },
  {
    institution: "Addis Ababa Science and Technology University",
    degree: "Bachelor's degree",
    field: "Electrical, Electronics and Communications Engineering",
    duration: "2014-2019",
    location: "Addis Ababa, Ethiopia",
    logo: "aastu" // Mapped to the 'aastu' import
  },
  // Assuming 'delaware' is the institution for the PhD based on the image name
  {
    institution: "PhD Program (Currently Pursuing)",
    degree: "PhD (In Progress)",
    field: "Electrical and Computer Engineering, specializing in Electromagnetics and Photonics",
    duration: "Ongoing",
    location: "United States",
    logo: "delaware" // Mapped to the 'delaware' import
  },
];

const Education: React.FC = () => {
  return (
    // Section wrapper
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-indigo-500 pb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative space-y-10">
          
          {/* Timeline Bar (The clean, subtle vertical line) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block"></div>
          
          {academicData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-16 pr-4 sm:pr-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-1.5 transform -translate-x-1/2 hidden sm:block">
                <CheckBadgeIcon className="w-5 h-5 text-indigo-600 bg-white rounded-full border-2 border-white" />
              </div>

              {/* Education Card Container */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                
                {/* LOGO AND MAIN DETAILS CONTAINER */}
                <div className="flex justify-between items-start mb-3">
                  
                  {/* Institution and Degree (Left Side) */}
                  <div className="flex-1 min-w-0 pr-4"> 
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1 flex items-center">
                        <AcademicCapIcon className="w-4 h-4 mr-1 text-indigo-500" />
                        {edu.degree}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {edu.institution}
                    </h3>
                  </div>

                  {/* LOGO DISPLAY (Right Side) */}
                  {edu.logo && logoMap[edu.logo] && (
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 p-2 border border-gray-100 rounded-lg bg-white">
                      <img 
                        src={logoMap[edu.logo]} 
                        alt={`${edu.institution} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
                
                {/* Duration, Location, and Field of Study */}
                <div className="border-t pt-3 mt-3">
                    <p className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mb-2">
                        <span className="flex items-center font-medium">
                            <CalendarDaysIcon className="w-4 h-4 mr-1" />
                            {edu.duration}
                        </span>
                        {edu.location && (
                            <span className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-1" />
                                {edu.location}
                            </span>
                        )}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-800">Field:</span> {edu.field}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;