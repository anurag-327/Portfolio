import { projects } from "@/data/data";
import ProjectCard from "../ui/ProjectCard";
import Grid from "../ui/Grid";
export function Project() {
  const projectsList = projects.slice(0, 4);
  return (
    <div className="">
      <Grid>
        {projectsList.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </Grid>
    </div>
  );
}
