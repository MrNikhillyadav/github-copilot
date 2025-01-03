import {ResponsibleAI,Privacy,PlansAndPricing,General} from "@/app/lib/Questions"
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion";

interface getContentInterface {
    SelectedContentCategory : string,
}

export const GetContent = ({SelectedContentCategory}:getContentInterface) => {
    switch(SelectedContentCategory){
        
        case "General":
            return General.map(({id,trigger,content}) =>{
                return (
                    <div  key={id}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${id}`}>
                                <AccordionTrigger className=" text-white inline-flex justify-between md:gap-[10rem] text-start md:text-[20px]  ">{trigger}</AccordionTrigger>
                                <AccordionContent className="text-[#aaaeb6] text-[16px] ">
                                    {content}
                                </AccordionContent>
                            </AccordionItem >
                        </Accordion>
                    </div>
                );
        });

        case "Plans & Pricing":
            return PlansAndPricing.map(({id,trigger,content}) =>{
                return (
                    <div  key={id}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${id}`}>
                                <AccordionTrigger className=" text-white inline-flex justify-between md:gap-[10rem] text-start md:text-[20px] ">{trigger}</AccordionTrigger>
                                <AccordionContent className="text-[#aaaeb6] text-[16px] ">
                                    {content}
                                </AccordionContent>
                            </AccordionItem >
                        </Accordion>
                    </div>
                );
        });

        case "Privacy":
            return Privacy.map(({id,trigger,content}) =>{
                return (
                    <div  key={id}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${id}`}>
                                <AccordionTrigger className=" text-white inline-flex justify-between md:gap-[10rem] text-start md:text-[20px] ">{trigger}</AccordionTrigger>
                                <AccordionContent className="text-[#aaaeb6] text-[16px] ">
                                    {content}
                                </AccordionContent>
                            </AccordionItem >
                        </Accordion>
                    </div>
                );
        });
          
        case "Responsible AI":
            return ResponsibleAI.map(({id,trigger,content}) =>{
                return (
                    <div  key={id}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${id}`}>
                                <AccordionTrigger className=" text-white inline-flex justify-between md:gap-[10rem] text-start md:text-[20px] ">{trigger}</AccordionTrigger>
                                <AccordionContent className="text-[#aaaeb6] text-[16px] ">
                                    {content}
                                </AccordionContent>
                            </AccordionItem >
                        </Accordion>
                    </div>
                );
        });  
        default : 
            return null;
        };
}