import useWorkspaces from "../../hooks/useWorkspaces";
import ProjectBtns from "./ProjectBtns/ProjectBtns";
import TaskSidebar from "../TaskSidebar";
const Workspaces: React.FC = (): JSX.Element => {
  const { workspaces } = useWorkspaces();

  return (
<div className="flex">
  <TaskSidebar />
  <section className="p-8 font-iranyekan w-[1100px] overflow-x-hidden">
    {workspaces?.map((workspace, index) => (
      <div key={workspace.id} className="flex-col custom-scrollbar" style={{ width: 'calc(1100px - 17px)' }}>
        <h2 className="mb-8 mt-8 text-2xl font-black">{workspace.name}</h2>
        <div className="flex" style={{ overflowX: 'auto' }}>
          <ProjectBtns workspaceId={workspace.id} color={workspace.color} />
        </div>
        {index !== workspaces.length - 1 && <hr className="mt-8" />}
      </div>
    ))}
  </section>
</div>
  );
};

export default Workspaces;
