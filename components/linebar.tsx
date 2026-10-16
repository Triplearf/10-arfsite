'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


interface Page {
	name: string,
	href: string,
}

const pagesList = [
	{name: "Me", href: "/about"},
	{name: "Hobbies", href: "/about/hobbies"},
	{name: "Education", href: "/about/education"},
	{name: "Contact", href: "/about/contact"}
]

export default function LineBar( {pages = pagesList}: {pages?: Page[]} ) {
	const currentURL = usePathname();
	const numPages = pages?.length ?? 0

	if ( numPages == 0 ) {
		return
	}
	
	return (
		<div 
		className="flex flex-col justify-center items-center transition">
			{pages.map((page, index) => {

				if (index >= numPages - 1) {
					return (
						<Link key={page.name} className="flex flex-col" href={page.href}>
						<Dot name={page.name} isActive={page.href === currentURL}></Dot>
						</Link>
					)
				}
				else {
					return(
						<div key={page.name} className="flex flex-col justify-center items-center">
							<Link href={page.href}>
								<Dot name={page.name} isActive={page.href === currentURL}></Dot>
							</Link>
							<VerticalLine></VerticalLine>
						</div>
					)
				}
			})}
		</div>
	)
}


interface DotProps {
	size?: number,
	name?: string,
	isActive: boolean,
}

function Dot({ size = 15, name = "hi", isActive}: DotProps) {
  return (
    <div className={`transition group relative flex flex-row items-center cursor-pointer 
			${isActive ? "scale-130" : "hover:scale-130"}`}>
      {/* Circle Dot */}
			{/* Make it change color when the group is hovered on */}
      <div
        className={`rounded-full transition-colors duration-200
					${isActive ? "bg-primary1 scale-110" : "bg-[#AB9163] group-hover:bg-primary1 group-hover:scale-110"}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />

      {/* Label Text */}
      
      <p className={`ml-1.5 absolute left-full underline-offset-2 whitespace-nowrap text-[20px] transition duration-200
				${isActive ? "text-primary1 underline font-bold" : "text-[#AB9163] font-extralight"}
				group-hover:underline group-hover:text-primary1 group-hover:font-bold`
			}>
        {name}
      </p>
    </div>
  );
}

function VerticalLine( { length=50, color="dead" }:{ length?: number, color?: string } ) {
	return (
		<div 
		className="-my-1 bg-[#AB9163]"
		style={{
			width: `2px`,
			height: `${length}px`,
		}}>

		</div>
	)
}