"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Palette, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, text: "Clean Code" },
    { icon: <Laptop className="w-6 h-6" />, text: "Responsive Design" },
    { icon: <Palette className="w-6 h-6" />, text: "UI/UX" },
    { icon: <Zap className="w-6 h-6" />, text: "Performance" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        </div>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Hello! I'm a Front-End Developer with 3 years of experience in
              building responsive, user-friendly web applications. I specialize
              in creating visually appealing and highly functional interfaces
              that prioritize both design and performance.
            </motion.p>
          </CardContent>
        </Card>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-gray-600 text-center"
        >
          <p className="text-sm">
            Always learning, always growing, always coding.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
