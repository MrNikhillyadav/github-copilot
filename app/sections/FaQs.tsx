import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Ques = [
    {
        "id": "1",
        "trigger": "What is GitHub Copilot?",
        "content": "GitHub Copilot transforms the developer experience. Backed by the leaders in AI, Copilot provides contextualized assistance throughout the software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to docs in GitHub and more. With Copilot elevating their workflow, developers can focus on more: value, innovation, and happiness.",
    },
    {
        "id": "2",

        "trigger": "Who is eligible to access GitHub Copilot for free?",
        "content": "GitHub Copilot transforms the developer experience. Backed by the leaders in AI, Copilot provides contextualized assistance throughout the software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to docs in GitHub and more. With Copilot elevating their workflow, developers can focus on more: value, innovation, and happiness.",
    },
    {
        "id": "3",
        "trigger": "What languages, IDEs, and platforms does GitHub Copilot support?",
        "content": "GitHub Copilot transforms the developer experience. Backed by the leaders in AI, Copilot provides contextualized assistance throughout the software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to docs in GitHub and more. With Copilot elevating their workflow, developers can focus on more: value, innovation, and happiness.",
    },
    {
        "id": "4",
        "trigger": "What data has GitHub Copilot been trained on?",
        "content": "GitHub Copilot transforms the developer experience. Backed by the leaders in AI, Copilot provides contextualized assistance throughout the software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to docs in GitHub and more. With Copilot elevating their workflow, developers can focus on more: value, innovation, and happiness.",
    },
];

export default function FaQs(){
    return (
        <div>
            <div className="px-6 bg-[#0C0C0C]  md:px-[8rem] py-[96px]">
                <h1 className="text-[28px] my-4 md:text-[48px] text-white font-semibold">Frequently <br className="hidden md:block"/> asked questions</h1>
                <div className='grid grid-cols-12 py-8'>
                    <div className=" col-span-4 flex flex-col gap-4 pr-8 text-center">
                        {["General","Plans & Pricing","Privacy","Responsible AI"].map((item,index) =>{
                            return (
                                <div key={index} className="px-4 py-4 text-[#aaaeb6] rounded-md hover:border text-start">
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className=" col-span-1 text-[#646c76] "> </div>
                    <div className=" flex flex-col col-span-7 px-8 rounded-md  ">
                        <h1 className="py-4 text-lg font-semibold text-[#aaaeb6]">General</h1>
                        <div className="mt-4"> 
                            {Ques.map(({id,trigger,content}) =>{
                                return (
                                    <div  key={id}>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value={`item-${id}`}>
                                                <AccordionTrigger className=" text-white">{trigger}</AccordionTrigger>
                                                <AccordionContent className="text-[#aaaeb6]">
                                                    {content}
                                                </AccordionContent>
                                            </AccordionItem >
                                        </Accordion>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
