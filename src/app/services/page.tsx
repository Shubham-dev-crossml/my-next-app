"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Cpu,
  Gauge,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.js.",
      features: [
        "Custom UI/UX",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "Building scalable web applications with focus on performance and user experience.",
      features: [
        "SPA Development",
        "PWA Implementation",
        "Cross-browser Compatibility",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Developing mobile-responsive websites that work flawlessly across all devices.",
      features: [
        "Adaptive Layouts",
        "Touch-friendly UI",
        "Mobile Optimization",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "API Integration",
      description:
        "Seamlessly connecting your frontend with backend services and third-party APIs.",
      features: ["RESTful APIs", "GraphQL", "Real-time Updates"],
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, efficiency, and better user experience.",
      features: [
        "Load Time Optimization",
        "Code Splitting",
        "Caching Strategies",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintenance & Support",
      description:
        "Providing ongoing support and maintenance for your web applications.",
      features: ["Bug Fixes", "Feature Updates", "Security Patches"],
    },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-800">My Services</h1>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-purple-100 text-purple-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <Card className="bg-purple-600 text-white p-8">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">
                Ready to Start a Project?
              </h2>
              <p className="text-purple-100">
                Let's collaborate to bring your ideas to life with modern web
                solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
