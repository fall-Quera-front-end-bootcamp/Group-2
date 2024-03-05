import Icon from "../ui/Icon";
import ProjectBtn from "./ProjectBtn/ProjectBtn";
const Workspaces: React.FC = (): JSX.Element => {
  return (
    <div className="flex">
      <section className="p-8 font-iranyekan w-[1100px] overflow-x-scroll">
        <div className="flex-col">
          <h2 className="mb-8 mt-8 text-2xl font-black">درس مدیریت پروژه</h2>
          <div className="flex">
            <ProjectBtn color="#40C057">پروژه اول</ProjectBtn>
            <ProjectBtn color="#40C057">پروژه اول</ProjectBtn>
            <ProjectBtn color="#40C057">پروژه اول</ProjectBtn>
            <ProjectBtn color="#40C057">پروژه اول</ProjectBtn>
            <ProjectBtn color="#40C057">پروژه اول</ProjectBtn>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex-col">
          <h2 className="mb-8 mt-8 text-2xl font-black">درس مدیریت پروژه</h2>
          <div className="flex">
            <ProjectBtn color="#228BE6">پروژه اول</ProjectBtn>
            <ProjectBtn color="#228BE6">پروژه اول</ProjectBtn>
            <ProjectBtn color="#228BE6">پروژه اول</ProjectBtn>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex-col">
          <h2 className="mb-8 mt-8 text-2xl font-black">درس مدیریت پروژه</h2>
          <div className="flex">
            <button className="ml-8 workspaces_project_box flex items-center justify-center bg-transparent rounded-2xl border-red-primary border-4 text-red-primary font-black fontWeight-black h-[80px] min-w-[200px] text-center text-base">
              <Icon iconName="SquarePlus" stroke="red" />
              ساختن پروژه جدید
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Workspaces;
