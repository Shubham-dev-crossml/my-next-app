"use client";
import { boldTextStyle, btnStyle, projects } from "@/utils/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface Params {
  params: {
    slug: string;
  };
}

interface Project {
  id: number;
  name: string;
  description: string;
  year: {
    from: number;
    to: number;
  };
}

const Project = ({ params }: Params) => {
  console.log(params);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const project: Project | undefined = projects.find(
    (proj) => parseInt(params.slug) === proj.id
  );

  const updateQueryParam = () => {
    const params = new URLSearchParams(searchParams.toString());
    // params.set("name", project.name);
    // params.set("id", project.id.toString());
    const newParams = {
      name: project?.name ?? "",
      id: project?.id.toString(),
      // Add any other parameters you want to include
      timestamp: new Date().toISOString(),
    };

    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value ?? "");
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    updateQueryParam();
  }, []);

  return (
    <div
      style={{
        padding: 15,
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p style={boldTextStyle}>Welcome to Projects Section!!!</p>
      <p>
        <span>Project Details below-</span>
        <br />
        <span>Project Name: {project?.name}</span>
        <br />
        <span>Project Id: {project?.id}</span>
        <br />
        <span>Project Description: {project?.description}</span>
        <br />
        <span>Project Start Date: {project?.year.from}</span>
        <br />
        <span>Project End Date: {project?.year.to}</span>
      </p>
      <button style={btnStyle} onClick={() => router.push("/projects")}>
        Click to go back
      </button>
    </div>
  );
};

export default Project;
