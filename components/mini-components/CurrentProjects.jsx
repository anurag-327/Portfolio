import { currentProjects } from "@/data/data";
import ProjectCard from "../ui/ProjectCard";
import Grid from "../ui/Grid";

export default function () {
  return (
    <Grid>
      {currentProjects.map((data, index) => (
        <ProjectCard key={index} data={data} />
      ))}
    </Grid>
  );
}
