import { BsGithub } from "react-icons/bs";
const navitems =[
     {'id':"1" , 'title': 'Products'},
     {"id": "2", 'title': "Solutions"},
     {"id": "3", 'title': "Resources"},
     {"id": "4", 'title': "Open Source"},
     {"id": "5", 'title': "Enterprise"},
     {"id": "6", 'title': "Pricing"},
]

export default function Navbar(){
    return (
        <div className="flex py-6 px-1 max-w-[1480px] m-auto  justify-between items-center">
            <div className="flex px-2 items-center justify-evenly  gap-8 ">
              <BsGithub className="text-3xl cursor-pointer"/>
                {navitems.map(({id,title}) => {
                    return (
                        <span className="text-md cursor-pointer" key={id}>{title}</span>
                    )
                })}
            </div> 
            <div className="flex px-2 justify-evenly  gap-8 ">
                <div>searchbar</div>
                <div>signin</div>
                <div>signup</div>
            </div> 
        </div>
    )
}