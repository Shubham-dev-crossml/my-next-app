import { projects } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: 15 }}>
      <ul>
        {projects?.map((val) => (
          <Link href={`projects/${val.id}`}>
            <li>{val.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
