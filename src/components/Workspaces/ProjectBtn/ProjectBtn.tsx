import { ReactNode } from "react";

interface IProjectBtnProps{
    color:string,
    children:ReactNode
}

const ProjectBtn:React.FC<IProjectBtnProps>=({children,color}):JSX.Element=>{    
    return(
        <button className={`ml-8 workspaces_project_box workspaces_project_box bg-gradient-to-bl text-white font-black fontWeight-black h-[80px] min-w-[200px] text-center rounded-2xl text-base`} style={{background: `linear-gradient(249.83deg, ${color} 0%, ${color}80 100%)`
        }}>
              {children}
            </button>
    )
}
export default ProjectBtn;