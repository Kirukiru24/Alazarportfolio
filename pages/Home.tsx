import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import alex from "../src/assets/alex.jpg"
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-20 gap-10">
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I’m <span className="text-indigo-600">Alazar G/Hiwot</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            <strong>PhD Scholar</strong> ,{" "}
            <strong>IT & Telecom Engineer</strong> My expertise extends beyond technical innovation to include project management, business development, partnership building, and delivering end-to-end IT solutions tailored to organizational needs. I thrive at the intersection of cutting-edge technology and strategic business outcomes, driving impactful solutions in both research and industry settings.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 transition flex items-center gap-2"
            >
              Let’s Talk <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={alex} // replace with your actual image
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
