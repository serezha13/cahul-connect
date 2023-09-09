import { forecast, newsList } from '@/mock/home/mock';
import Image from 'next/image';
import React from 'react';


export default function Home() {
	return (
		<main className='flex flex-col gap-4'>
			<div className='text-center'>
				<div className='text-7xl leading-none'>CAHUL</div>
				<div className='text-3xl tracking-widest leading-none'>CONNECT</div>
			</div>
			<WeatherSection />
			<NewsSection />
		</main>
	)
}




const WeatherSection = () => {

	return (
		<div className='my-6'>
			<div className='rounded-xl p-4 bg-gradient-to-b from-gray-900 to-gray-700 text-white'>
				<div className='flex justify-between '>
					<div className='text-4xl font-semibold'>34°</div>
					<div className='flex flex-col items-center'>
						<Image width={50} height={50} src="/weather-icons/fill/openweathermap/01d.svg" alt='weather-icon' />
						<div className='font-semibold'>însorit</div>
					</div>
				</div>
				<div className='border-gray-300 border-t my-4'></div>
				<div className='grid grid-cols-5'>
					{forecast.map((item, index) => (
						<div key={index} className='flex flex-col items-center text-center'>
							<div className='text-gray-500 text-sm font-semibold'>{item.tempNight}°</div>
							<Image width={40} height={40} src={item.iconSrc} alt='weather-icon' />
							<div className='text-sm font-semibold'>{item.tempDay}°</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const NewsSection = () => {

	return (
		<div>
			<div className='text-4xl font-semibold mb-4'>Ultimele știri:</div>
			<div className='flex flex-col gap-4'>
				{newsList.map((item, index) => (
					<div key={index} className='border p-4 rounded overflow-hidden'>
						<div className='relative aspect-video -mx-4 -mt-4'>
							<Image className='object-cover' fill src={item.img} alt='news-image' />
						</div>
						<div className='mt-4 text-lg font-bold leading-none'>{item.title}</div>
						<div className='mt-4 text-sm'>{item.description}</div>
					</div>
				))}
			</div>
		</div>
	)
}