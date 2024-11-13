"use client";
import { projects } from "@/utils/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Folder, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [projectStars, setProjectStars] = useState({});

  // Generate random stars after component mounts to avoid hydration mismatch
  useEffect(() => {
    const stars = {};
    projects?.forEach((project) => {
      stars[project.id] = Math.floor(Math.random() * 100) + 1;
    });
    setProjectStars(stars);
  }, []);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="text-blue-600">My</span> Projects
        </h1>
        <p className="text-gray-600">Explore my latest work and innovations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects?.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card className="h-full border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
              <CardHeader className="space-y-1 pb-4">
                <div className="flex items-center space-x-2">
                  <Folder
                    className={`w-5 h-5 transition-colors duration-300 ${
                      hoveredId === project.id
                        ? "text-blue-500"
                        : "text-gray-500"
                    }`}
                  />
                  <CardTitle className="text-xl font-bold">
                    {project.name}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600">
                        {projectStars[project.id] || 0} stars
                      </span>
                    </div>
                  </div>

                  <div
                    className={`transform transition-all duration-300 ${
                      hoveredId === project.id
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-blue-500">
                      <span className="font-medium">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-1 w-full bg-gray-100 rounded">
                  <div
                    className="h-1 bg-blue-500 rounded transition-all duration-500"
                    style={{
                      width: hoveredId === project.id ? "100%" : "0%",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/all-projects"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>View All Projects</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
