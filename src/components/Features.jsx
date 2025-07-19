import { Code2, Rocket, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Rocket size={32} className="text-[#80cbc4]" />,
    title: "Seamless Collaboration",
    description: "Effortless video and AV integration for teams.",
  },
  {
    icon: <Code2 size={32} className="text-[#80cbc4]" />,
    title: "Custom Solutions",
    description: "Tailored AV setups for every industry.",
  },
  {
    icon: <Lightbulb size={32} className="text-[#80cbc4]" />,
    title: "Expert Delivery",
    description: "On-time, reliable project execution.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0e0e0e] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-[#80cbc4]"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-400">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
