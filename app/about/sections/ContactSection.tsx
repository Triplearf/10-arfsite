import fb from "@/public/contact_icons/fb.svg"
import ig from "@/public/contact_icons/ig.svg"
import github from "@/public/contact_icons/github.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from 'next/image'
import Link from "next/link";

const ContactLinks = [
	[fb, "https://www.facebook.com/arfarf.37910"],
	[ig, "https://www.instagram.com/barkbarkwoof70/"],
	[github, "https://github.com/Triplearf"]
]

export default function Contact() {
	return (
		<div>
		<h1>Where <span className="text-primary1"> I'm @</span></h1>
		<div className="flex gap-5 items-center justify-center">
			{
				ContactLinks.map(([icon, url], index) => (
					<IconLink key={index} icon={icon} link={url}></IconLink>
				))
			}
		</div>
		</div>
	)
}

interface IconLinkProps {
	icon: StaticImport | string,
	link: string
}

function IconLink ({ icon, link }: IconLinkProps) {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<Image className="hover:scale-110 transition" src={icon} alt={link} width={25}></Image>
		</Link>
	)
}

function SendMessageModal () {
	return (
		<div>

		</div>
	)
}
