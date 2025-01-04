import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { VscIssues } from "react-icons/vsc";
import { VscCodeReview } from "react-icons/vsc";
import { LuSearchCode } from "react-icons/lu";
import { GoDiscussionClosed } from "react-icons/go";
 
 export const PricingContent = () => {
 
  const description = [
    {
      "id": "1",
      "icon": <TbBrandGithubCopilot/>,
      "title": "GitHub Copilot",
      "desc": "Write better code with AI",
    },
    {
      "id": "2",
      "icon":<MdOutlineSecurity/>,
      "title": "Security",
      "desc": "Write better code with AI",
    },
    {
      "id": "3",
      "icon":<TbBrandGithubCopilot/>,
      "title": "Actions",
      "desc": "Automate your workflow",
    },
    {
      "id": "4",
      "icon":<GoCodespaces/>,
      "title": "Codespaces",
      "desc": "Instant dev environments",
    },
    {
      "id": "5",
      "icon":<VscIssues/>,
      "title": "Issues",
      "desc": "Plan and track work",
    },
    {
      "id": "6",
      "icon":<VscCodeReview/>,
      "title": "Code Review",
      "desc": "Plan and track work",
    },
    {
      "id": "7",
      "icon":<GoDiscussionClosed/>,
      "title": "Discussions",
      "desc": "Collaborate outside of code",
    },
    {
      "id": "8",
      "icon":<LuSearchCode/>,
      "title": "Code Search",
      "desc": "Find more, search less",
    },
  ]
    return (
      <div className="w-[20vw]  bg-transparent rounded-lg  p-4 shadow-xl">
        <div className=" flex flex-col rounded-lg   space-y-3">
             <div className="flex  flex-col justify-between "> 
                {description.map(({id,icon,title,desc}) =>(
                    <div className="flex flex-col gap-2 px-2 py-2 " key={id}> 
                        <div className="grid grid-cols-6  justify-center items-center"> 
                            <div className = "text-2xl text-black/50  inline-flex justify-center items-center text-center ">
                              {icon} 
                            </div>
                            <div> </div>
                            <div className = "col-span-4  "> 
                              <h1 className =" ">
                                {title} 
                              </h1>
                              <p className ="text-sm text-black/50  "> 
                                {desc}
                              </p>
                            </div>
                        </div>
                    </div>
                  ))}

             </div>

              
        </div>
      </div>
    );
  };


