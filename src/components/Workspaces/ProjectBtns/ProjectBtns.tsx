import { useEffect} from "react";
import useProjects from "../../../hooks/useProjects";
import Icon from "../../ui/Icon";

const ProjectBtn: React.FC<{ workspaceId: number,color:string }> = ({ workspaceId, color }) => {
  const { getProjects, projects } = useProjects();

  useEffect(() => {
    getProjects(workspaceId);
  }, [workspaceId]);

  return (
    <>
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <button
            key={project.id}
            className="ml-8 workspaces_project_box text-white font-black fontWeight-black h-[80px] min-w-[200px] text-center rounded-2xl text-base"
            style={{
              background: `linear-gradient(249.83deg, ${color} 0%, ${color}80 100%)`,
            }}
          >
            {project.name}
          </button>
        ))
      ) : (
        <button className="ml-8 workspaces_project_box bg-transparent rounded-2xl font-black fontWeight-black h-[80px] min-w-[200px] text-center text-base" style={{border:`solid 4px ${color}`,color:`${color}`}}>
        <span className="flex items-center justify-center">
          <Icon iconName="SquarePlus" stroke={color} />
          ساختن پروژه جدید
        </span>
      </button>
      )}
    </>
  );
};

export default ProjectBtn;
