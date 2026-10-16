'use client'

import PageAnimatePresence from '@/components/pageAnimatePresence';
import Image from 'next/image';
import { useState } from 'react'

export default function Hobbies() {
	return (
		<div>
			<h1 className="text-center"><span className="text-primary1">Things</span> I Like Doing</h1>
			<div className="mt-0.5 flex gap-4">
				<HobbiesSelection></HobbiesSelection>
			</div>
		</div>
	)
}

const selections = [
	{title: "Gaming", page: <VideoGames></VideoGames>},
	{title: "Books", page: <div>books</div>},
]

function HobbiesSelection() {
	const [curIdx, setCurIdx] = useState(0)

	return (
		<div className="flex flex-col w-full">
		{/* Area Selection */}
		<div className="flex flex-row w-full justify-center">
			{selections.map( (selection, idx) => {
				var selected = curIdx == idx

				return (
					<button  key={idx} className={`font-light text-2xs opacity-50 px-3 hover:cursor-pointer transition border-b
						${selected ? "text-primary1 opacity-100 border-primary1" : ""}`}
						onClick={() => setCurIdx(idx)}>
						{selection.title}
					</button>
				)
			})}
		</div>
		{/* Actual Content */}
		<div className='mt-2 rounded-xl border bg-[#1B1714] p-2'>
			{selections[curIdx].page}
		</div>
		</div>
	)
}

function VideoGames() {
	return (
		<div className='grid grid-cols-3'>
      {/* Images */}
      <div></div>
      {/* Text */}
      <div>
        <h2>Fav Games</h2>
        <ul className='list-disc list-inside'>
          <li>Factorio</li>
          <li>Disco Elysium</li>
          <li>Baba Is You</li>
          <li>Dead Cells</li>
          <li>STS 1/2</li>
          <li>FTL</li>
        </ul>
      </div>
      <div>
        <h2>Fav Genres</h2>
        <ul className='list-disc list-inside'>
          <li>Colony/Manage Sim</li>
          <li>Puzzle Games</li>
          <li>Rouguelikes</li>
        </ul>
      </div>

		</div>
	)
}
