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
		className="flex flex-row items-center transition">
			{pages.map((page, index) => {

				if (index >= numPages - 1) {
					return (
						<Link key={page.name} className="flex flex-row items-center" href={page.href}>
						<Dot name={page.name} isActive={page.href === currentURL}></Dot>
						</Link>
					)
				}
				else {
					return(
						<div key={page.name} className="flex flex-row items-center">
							<Link href={page.href}>
								<Dot name={page.name} isActive={page.href === currentURL}></Dot>
							</Link>
							<HorizontalLine></HorizontalLine>
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
		// Group can be called later
		// "transition group relative flex flex-col items-center cursor-pointer hover:scale-140"
    <div className={`transition group relative flex flex-col items-center cursor-pointer 
			${isActive ? "scale-130" : "hover:scale-130"}`}>
      {/* Circle Dot */}
			{/* Make it change color when the group is hovered on */}
      <div
        className={`rounded-full transition-colors duration-200
					${isActive ? "bg-primary1" : "bg-[#AB9163] group-hover:bg-primary1"}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />

      {/* Label Text */}
      
      <p className={`absolute top-full underline-offset-2 whitespace-nowrap text-[14px] font-light transition duration-200
				${isActive ? "text-primary1 underline " : "text-[#AB9163]"}
				group-hover:underline group-hover:text-primary1`
			}>
        {name}
      </p>
    </div>
  );
}

function HorizontalLine( { length=75, color="dead" }:{ length?: number, color?: string } ) {
	return (
		<div 
		className="-mx-1 bg-[#AB9163]"
		style={{
			width: `${length}px`,
			height: `2px`,
		}}>

		</div>
	)
}