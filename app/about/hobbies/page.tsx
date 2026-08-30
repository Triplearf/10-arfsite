import ImagesCarousel from '@/components/scrollableImages';
import styles from '../about.module.css';
import Image from "next/image"

const factorio = [
	"/about/hobbies/factorio/cost7dvtbzzCz3Wvwhp9mK.jpg",
	"/about/hobbies/factorio/screenshot-1.jpg",
	"/about/hobbies/factorio/factorio-cover-gds-2019-rgb.jpg"
]

export default function Hobbies() {
	return (
		<div className={styles.aboutWrapper}>
			<h1><span className="text-primary1">Things</span> I Like Doing</h1>
			<div className="flex gap-4">
				{/* Video Games */}
				<div>
					<h2>Fav Game</h2>
						<h3>Factorio</h3>
							<div className="w-[50vw]">
						<ImagesCarousel>
							{factorio.map((link, index) => {
								return (
									<div key={index} className="relative h-64 w-80 shrink-0 overflow-hidden rounded-lg">
										<Image src={link} alt={link} fill className="object-cover"></Image>
									</div>
								)
							})}
						</ImagesCarousel>
						</div>
					{/* <h2>Playing</h2>
						<h3>Peak</h3> */}
				</div>

				{/* <div className="border"></div> */}

				{/* Series */}
				{/* <div>
					<h2>Fav Media</h2>
						<h3></h3>
					<h2>Watching</h2>
				</div>

				<div className="border"></div> */}
				
				{/* Board Games */}
				{/* <div>
					<h2>Fav Hobby</h2>
						<h3>Origami</h3>

					<h2>Learning</h2>
						<h3>Crochet</h3>
				</div> */}
			</div>
		</div>
	)
}
