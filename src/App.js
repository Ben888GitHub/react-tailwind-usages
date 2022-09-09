import './App.css';
import { useState } from 'react';

function App() {
	const [payment, setPayment] = useState(false);

	const handlePayment = () => {
		console.log('Payment Paid');
		setPayment(true);
	};

	return (
		<>
			<div className="text-center">
				<h1 className="text-3xl font-bold underline">React Tailwind Usages</h1>
				<br />
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Pay $200
				</button>
				<br />
				<button
					disabled={payment}
					type="button"
					className={`text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2 ${
						payment && `cursor-not-allowed`
					}`}
					onClick={handlePayment}
				>
					{payment ? `Loading` : `Check out with Apple Pay`}
					{payment ? (
						<svg
							aria-hidden="true"
							role="status"
							className="inline ml-2 w-4 h-4 text-white animate-spin"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="#E5E7EB"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentColor"
							/>
						</svg>
					) : (
						<svg
							className="ml-2 -mr-1 w-5 h-5"
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="apple"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
						>
							<path
								fill="currentColor"
								d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
							></path>
						</svg>
					)}
				</button>
				<br />
				<button
					disabled
					type="button"
					className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					<svg
						aria-hidden="true"
						role="status"
						className="inline mr-3 w-4 h-4 text-white animate-spin"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="#E5E7EB"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentColor"
						/>
					</svg>
					Loading...
				</button>
				<br />
				<h1 className="text-3xl font-bold">Card</h1>
			</div>
			<br />
			<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
				<img
					className="rounded-t-lg"
					src="https://flowbite.com/docs/images/blog/image-1.jpg"
					alt=""
				/>

				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
					<a
						href="#"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</div>
			<br />
			<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
				<a href="#">
					<img
						className="p-8 rounded-t-lg"
						src="https://flowbite.com/docs/images/products/apple-watch.png"
						alt="product image"
					/>
				</a>
				<div className="px-5 pb-5">
					<a href="#">
						<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
						</h5>
					</a>
					<div className="flex items-center mt-2.5 mb-5">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>First star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Second star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Third star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Fourth star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-yellow-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Fifth star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							5.0
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							$599
						</span>
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Add to cart
						</button>
					</div>
				</div>
			</div>
			<br />

			<div id="default-carousel" className="relative" data-carousel="static">
				<div className="overflow-hidden relative h-56 rounded-lg md:h-96">
					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
						data-carousel-item=""
					>
						<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
							First Slide
						</span>
						<img
							src="/docs/images/carousel/carousel-1.svg"
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>

					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
						data-carousel-item=""
					>
						<img
							src="/docs/images/carousel/carousel-2.svg"
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>

					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
						data-carousel-item=""
					>
						<img
							src="/docs/images/carousel/carousel-3.svg"
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
				</div>

				<div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
					<button
						type="button"
						className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
						aria-current="true"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
						aria-current="false"
						aria-label="Slide 3"
						data-carousel-slide-to="2"
					></button>
				</div>

				<button
					type="button"
					className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
					data-carousel-prev=""
				>
					<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
					data-carousel-next=""
				>
					<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
		</>
	);
}

export default App;
