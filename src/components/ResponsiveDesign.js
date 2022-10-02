import { useState } from 'react';
import living_rich from '../image/Living_Rich.png';

function ResponsiveDesign() {
	return (
		<>
			<p className="lg:text-8xl md:text-6xl text-4xl text-center">
				Responsive Hello World
			</p>
			<br />

			<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					{/* md:flex to make sure from md to xl the size will remain flex and columnal */}
					<div className="md:shrink-0">
						{/* md:shrink-0 make sure the size of md resolution is not responsive */}
						<img
							className="h-48 w-full object-cover md:h-full md:w-48"
							src={living_rich}
							alt="Modern building architecture"
						/>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							Company retreats
						</div>
						<p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
							Incredible accomodation for your team
						</p>
						<p className="mt-2 text-slate-500">
							Looking to take your team away on a retreat to enjoy awesome food
							and take in some sunshine? We have a list of places to do just
							that.
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
				<div className="md:flex">
					{/* md:flex to make sure from md to xl the size will remain flex and columnal */}
					<div className="md:shrink-0">
						{/* md:shrink-0 make sure the size of md resolution is not responsive */}
						<img
							className="h-48 w-full object-cover md:h-full md:w-48"
							src={living_rich}
							alt="Modern building architecture"
						/>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							Company retreats
						</div>
						<p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
							Incredible accomodation for your team
						</p>
						<p className="mt-2 text-slate-500">
							Looking to take your team away on a retreat to enjoy awesome food
							and take in some sunshine? We have a list of places to do just
							that.
						</p>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							Company retreats
						</div>
						<p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
							Incredible accomodation for your team
						</p>
						<p className="mt-2 text-slate-500">
							Looking to take your team away on a retreat to enjoy awesome food
							and take in some sunshine? We have a list of places to do just
							that.
						</p>
					</div>
				</div>
			</div>
			<br />
		</>
	);
}

export default ResponsiveDesign;
