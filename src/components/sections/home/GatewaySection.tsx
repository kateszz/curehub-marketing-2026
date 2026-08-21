"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useGateway } from "@/components/providers/GatewayProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";


//make the small glowing spots follow cursor lightly around

export function GatewaySection() {
  const { gatewayIsActive, setGatewayIsActive } = useGateway();

  type OptionAreaProps = {
  side: "left" | "right";
  category: string;
};

  function OptionArea({ side, category }: OptionAreaProps) {
   let catWords = category.split(' ')
  return (
    <div
      className="flex-row items-start max-w-min relative"
    >
        <div className={cn("absolute w-5 h-5 bg-glow top-[10%] z-1 blur-sm", side === "right" && "left-[-20%]", side === "left" && "right-[-20%]")}></div>
         <div className={cn("absolute w-20 h-20 bg-brand-500 top-[1%] z-0 blur-xl", side === "right" && "left-[-30%]", side === "left" && "right-[-30%]")}></div>

        <div className={cn("flex flex-col gap-fluid-lg items-start relative z-5", side === "left" && "items-end")}>
      <p className={cn("font-display text-body-sm uppercase tracking-[0.06em] text-snow/70", side === "left" && "text-right")}>
       <span className="text-snow font-bold"> {catWords[0]}</span> {catWords[1]}
      </p>
    
        {
            category === "Genomic Biointelligence" &&
                (<div className="flex flex-col items-end gap-fluid-md">
                    <p className="text-snow text-sm text-right font-extralight w-[30ch]">
                        Transforming genetic variation into deeper, pathway-level biological insight and personalized guidance.
                    </p>
                    <Button className="text-glow" onClick={()=>setGatewayIsActive(false)}>
                        [ ENTER ]
                    </Button>
                    </div>
                )
                
        }
        {
            category === "Ocular Biointelligence" &&
                (<div className="flex flex-col items-start gap-fluid-md">
                    <p className="text-snow text-sm font-extralight w-[30ch]">
                        Exploring how retinal imaging and artificial intelligence can reveal systemic biological states non-invasively.
                    </p>
                       <Button className="text-glow" onClick={()=>setGatewayIsActive(false)}>
                        [ ENTER ]
                    </Button>
                    </div>
                )
                
        }
      
      </div>
    </div>
  );
}


  return (
    <AnimatePresence>
      {gatewayIsActive && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 z-50 flex flex-col h-dvh w-full items-center pt-40 justify-start gap-60 bg-[url(/images/blue-dark-mesh.svg)] bg-cover bg-center"
        >
          <div>
            <h1 className="text-h1 text-snow text-center"><span className="text-snow/70 font-light">The </span>Future<span className="text-snow/70 font-light"> of</span> Biointelligence</h1>
            <p className="font-extralight text-snow text-center">
              Understanding the human body from signals we could never fully
              interpret before.
            </p>
          </div>
          <div className="flex w-auto items-start gap-fluid-3xl">
            <OptionArea side="left" category="Genomic Biointelligence" />
           <Image src="/images/logomark-blue.svg" alt="The Curehub logo-mark" width={400} height={400} className="w-40"/>
            <OptionArea side="right" category="Ocular Biointelligence" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
