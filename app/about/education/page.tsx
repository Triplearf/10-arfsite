import React from 'react';
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Education() {
  return (
    <div className="flex flex-col h-[45vh] max-w-[50vw] gap-3">
      <h1>What I've <span className="text-primary1">Done</span></h1>
      <div className="flex-1 min-h-0 overflow-y-auto
			scrollbar- [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <Period start="2025" event="Bachelor of Science: Computer Science" location="UP Diliman"></Period>
				<Period start="2019" end="2025" event="High School" location="Agusan del Sur National High School" icon="/education/asnhs.png"></Period>
      </div>
    </div>
  )
}

interface PeriodProps {
	start: string,
	end?: string,
	event: string,
	location?: string,
	icon?: string | StaticImport,
	children?: React.ReactNode,
}

function Period({ 
  start, 
  end = "Present", 
  event, 
  location, 
  icon = "/education/University_of_The_Philippines_seal.svg", 
  children 
}: PeriodProps) {
  return (
    <div className="mb-5">
			<div className="rounded-t-xl bg-primary1/16 px-5 py-2 text-[#D7C0A3] border-t border-r border-l border-primary1">
      <p className="text-[20px] font-bold">• {start} - {end}</p>
			</div>
      <div className="px-3 py-2 flex items-center gap-3 bg-[#1B1714] rounded-b-xl shadow-2xl border border-primary1">
        <Image 
          src={icon} 
          alt={event} 
          width={60} 
          height={60} 
          className="object-contain"
        />
        <div>
          <h3 className="text-sm font-bold">{event}</h3>
          <p className="text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
}
