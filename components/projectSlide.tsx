import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link'

interface ProjectSlideProps {
  img: string | StaticImport;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export default function ProjectSlide({ img, title, desc, tags, link }: ProjectSlideProps) {
  return (
    <Link href={link} target="_blank" className='w-[20vw] flex flex-col border bg-[#2D261F] border-[#3B3026] rounded-xl overflow-hidden hover:scale-105 transition shadow-xl'>
      <Image 
        src={img} 
        alt={title}
        width={500}
        height={400}
        sizes="100vw"
        className="w-full h-40 object-cover"
      />

      <div className='grid grid-cols-2 border-t py-3 px-4 border-[#3B3026]'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <p className='text-xs'>{desc}</p>
        </div>
        <div className='flex justify-end'>
          <div className='flex flex-row gap-2 h-fit'>
            {tags.map((tag, index) => {
              return(
                <div key={index} className='text-xs font-extralight px-1 border rounded-xl'>{tag}</div>
              )
            })}
          </div>
        </div>
      </div>
      
    </Link>
  )
}