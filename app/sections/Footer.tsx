import { Button  } from "../components/buttonVariants";
import { TiSocialYoutube } from "react-icons/ti";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";


export function Footer(){
    const socials = [
        {"id":"1", "icon":<TiSocialYoutube/>, "to" : "https://x.com/github"},
        {"id":"2", "icon":<GrLinkedin/>, "to" : "https://www.linkedin.com/company/github"},
        {"id":"3", "icon":<SlSocialInstagram/>, "to" : "https://www.instagram.com/"},
        {"id":"4", "icon":<FaXTwitter/>, "to" : "https://x.com/github"},
        {"id":"5", "icon":<FaGithub/>, "to" : "https://github.com/github"},
        {"id":"6", "icon":<FaMedium/>, "to" : "/"},
    ]
    
    const defaultStyles = { 
        "largeSize" : "text-white/50 text-3xl p-1 ",   
        "default" : "text-white/50 text-xl p-1 ",   
    }

    return (
        <div> 
            <div className =" bg-[#0d1117] flex-col px-6 md:px-[8rem]  py-[96px] ">
                <div className=" grid  grid-cols-1 md:grid-cols-2 gap-16  w-full">
                    <div className="grid   md:grid-cols-3  gap-16">
                        <div className="col-span-2 pr-2  ">
                            <h1 className="font-bold pb-8 text-[26px]">GitHub</h1>
                            <div className='flex pb-8 flex-col'>
                                <p className="text-sm">Subscribe to our developer newsletter</p>
                                <p className="text-sm font-light text-white/50">Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
                            </div>
                            <Button title={'Subscribe'} size="md" variant="secondary" />
                        </div>
                        <div className="grid gap-3">
                            {col1.map(({id,title}) => {
                                return (
                                    <span className="  md:block cursor-pointer text-sm font-light text-white/60 hover:underline hover:text-blue-400 " key={id}>{title}</span>
                                )
                            })}
                        </div>
                        <div className="md:hidden  flex flex-col gap-3">
                                {col2.map(({id,title}) => {
                                    return (
                                        <span className="  md:block cursor-pointer text-sm font-light text-white/60 hover:underline hover:text-blue-400 " key={id}>{title}</span>
                                    )
                                })}
                        </div>
                    </div>
                        <div className="  grid grid-cols-2 md:grid-cols-3 text-start gap-3">
                            <div className=" hidden md:flex flex-col gap-4">
                                {col2.map(({id,title}) => {
                                    return (
                                        <span className="  md:block cursor-pointer text-sm font-light text-white/60 hover:underline hover:text-blue-400 " key={id}>{title}</span>
                                    )
                                })}
                            </div>
                            <div className=" flex flex-col gap-4">
                                {col3.map(({id,title}) => {
                                    return (
                                        <span className="  md:block cursor-pointer text-sm font-light text-white/60 hover:underline hover:text-blue-400 " key={id}>{title}</span>
                                    )
                                })}
                            </div>
                            <div className=" grid gap-4">
                                {col4.map(({id,title}) => {
                                    return (
                                        <span className="  md:block cursor-pointer text-sm font-light text-white/60 " key={id}>{title}</span>
                                    )
                                })}
                            </div>       
                    </div>
                </div>
            </div>
            <div className ="bg-[rgba(21,26,33,255)]  px-4 overflow-x-hidden md:px-[8rem] py-6 text-xs font-thin ">
                <div className=" text-white/60 font-thinner grid md:grid-cols-3 gap-2 items-center justify-center ">
                       <div className=" col-span-2">
                            <div className=" md:flex    cursor-pointer md:gap-4">
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">© 2024 GitHub, Inc.</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">Terms</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">Privacy (Updated 02/2024)</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">Sitemap</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">What is Git?</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">Manage cookies</span>
                                <span className="hover:underline px-2 md:px-0 hover:text-blue-400">Do not share my personal information</span>
                            </div>
                       </div>
                        <div className=" cursor-pointer hover:underline flex gap-1 items-center justify-center text-center ">
                               
                            {socials.map(({ id, icon, to }) => (
                                <div 
                                    className={`icon == "TiSocialYoutube" ? ${defaultStyles['largeSize']}
                                    : ${defaultStyles['default']}`} 
                                    key={id}>
                                        <a href={to}>{icon} </a>
                                </div>
                            ))}
                               
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

const col1 = [
    { "id" : "1", "title" : "Product"},
    { "id" : "2", "title" : "Features"},
    { "id" : "3", "title" : "Enterprise"},
    { "id" : "4", "title" : "Copilot"},
    { "id" : "5", "title" : "Security"},
    { "id" : "6", "title" : "Pricing"},
    { "id" : "7", "title" : "Teams"},
    { "id" : "8", "title" : "Resources"},
    { "id" : "9", "title" : "Roadmap"},
    { "id" : "10", "title" : "Compare GitHub"},
]
const col2 = [
    { "id" : "1", "title" : "Platform"},
    { "id" : "2", "title" : "Developer API"},
    { "id" : "3", "title" : "Partners"},
    { "id" : "4", "title" : "Education"},
    { "id" : "5", "title" : "GitHub CLI"},
    { "id" : "6", "title" : "GitHub Desktop"},
    { "id" : "7", "title" : "GitHub Mobile"},

]
const col3 = [
    { "id" : "1", "title" : "Support"},
    { "id" : "2", "title" : "Docs"},
    { "id" : "3", "title" : "Community Forum"},
    { "id" : "4", "title" : "Professional Services"},
    { "id" : "5", "title" : "Premium Support"},
    { "id" : "6", "title" : "Skills"},
    { "id" : "7", "title" : "Status"},
    { "id" : "8", "title" : "Contact GitHub"},
]
const col4 = [
    { "id" : "1", "title" : "Company"},
    { "id" : "2", "title" : "About"},
    { "id" : "3", "title" : "Customer stories"},
    { "id" : "4", "title" : "Blog"},
    { "id" : "5", "title" : "The ReadME Project"},
    { "id" : "6", "title" : "Careers"},
    { "id" : "7", "title" : "Newsroom"},
    { "id" : "8", "title" : "Inclusion"},
    { "id" : "9", "title" : "Social Impact"},
    { "id" : "10", "title" : "Shop"},
]
