import InLineLink from "@/components/inLineLink"
import Image from "next/image"
import Arf from "@/public/about/me/Arf.jpeg"

export default function Me() {
  return (
    <div className="flex w-[35vw]">
      {/* Text */}
      <div className="mx-3 my-3">
      <h1>
          Hi! I'm <span className="text-primary1">Arf</span>
      </h1>
      <p className="text-justify">
          I'm a computer science student!
          I love making fun <InLineLink color="primary2" href="/projects">little projects</InLineLink> on the side.
          In my free time I play video games, make lil projects, and <InLineLink color="primary3" href="/blog">write</InLineLink> about whatever I fancy.
      </p>
      <br></br>
      <p className="text-justify">
          This site is mostly for me to have a bit more organization when it comes to documenting what I've done thus far. A form of self expression, in a sense.
      </p>
      </div>
      {/* Image */}
      <Image className="rounded-2xl ml-5 drop-shadow-2xl object-contain" src={Arf} alt="arf" width={200} height={200}></Image>
    </div>
  )
}