import * as React from 'react';
import HeroFragment from '../fragments/HeroFragment';
import AboutFragment from '../fragments/AboutFragment';
import FavoriteCarousel from './tes';
import favoriteItems from '../../assets/data';
import MusicPlayer from './MusicPlayer';
import MusicData from '../../assets/music';
import GalleryFragment from '../fragments/GalleryFragment';
import dataImage from '../../assets/image';
import NotePlayer from './NotePlayer';
import audioSrc from '../../assets/audio';

const MuseumAzizah = () => {

    return (
        <>
            <section className='pt-48 pb-28'>
                <HeroFragment></HeroFragment>
            </section>
            <section className='pt-48 pb-28' id='tentang'>
                <div className='w-full container mx-auto scale-90 p-5'>
                    <h1 className='text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>Overview</h1>
                    <div className='w-full grid grid-rows-2 gap-3 mt-7'>
                        <AboutFragment></AboutFragment>
                    </div>
                </div>
            </section>
            <section className='pt-48 pb-28' id='favorit'>
                <div className="container mx-auto w-full scale-90 p5">
                    <h1 className='text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>kesukaan azizah</h1>
                    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
                        <FavoriteCarousel items={favoriteItems}/>
                    </div>
                </div>
        <div className="min-h-screen bg-black p-5">
            <h2 className="text-white text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center my-16">
                Dan inilah warna kesukaan Azizah! Iya, warna kesukaan Azizah adalah warna <span className="text-gray-400">HITAM</span>.
            </h2>
            <h3 className="text-white text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center my-16">
                Dan karena itu, Azizah terus mengenakan pakaian berwarna <span className="text-gray-400">hitam</span>.
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="bg-slate-100 rounded overflow-hidden shadow-md">
                <img
                    src="zizah-1.jpg"
                    alt="azizah"
                    className="w-full h-auto"
                />
                </div>
                <div className="bg-slate-100 rounded overflow-hidden shadow-md">
                <img
                    src="zizah-2.jpg"
                    alt="azizah"
                    className="w-full h-auto"
                />
                </div>
                <div className="bg-slate-100 rounded overflow-hidden shadow-md">
                <img
                    src="zizah-3.jpg"
                    alt="azizah"
                    className="w-full h-auto"
                />
                </div>
                <div className="bg-slate-100 rounded overflow-hidden shadow-md">
                <img
                    src="zizah-4.jpg"
                    alt="azizah"
                    className="w-full h-auto"
                />
                </div>
            </div>
        </div>
        <div className='container mx-auto w-full scale-90 p5 my-16'>
            <h2 className='text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>Musik Kesukaan Azizah</h2>
            {MusicData.map((music, index) => (
                <MusicPlayer
                key={index}
                coverImage={music.coverImage}
                audioSrc={music.audioSrc}
                songTitle={music.songTitle}
                />
            ))}
        </div>
            </section>
            <section className='pb-28'>
                <div className="container mx-auto w-full scale-90 p-5">
                    <h1 className='text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>dan terakhir, mari lihat galeri yang berisi foto dan video kamu</h1>
                    <p className='text-2xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>wahai sayangkuu azizah!</p>
                    <hr className='border-2 border-pink-500'/>
                    <div className="w-full grid grid-cols-2 gap-5 my-28">
                        <GalleryFragment data={dataImage}></GalleryFragment>
                    </div>
                </div>
            </section>
            <section className=' bg-black'>
                <div className="container scale-90 w-full mx-auto p-5">
                    <h2 className='text-white text-3xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>akhirnya perjalanan mu selesai, Azizah!</h2>
                    <p className='text-white text-2xl font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>ayoo, rayakanlah ulang tahun mu yang ke 18, Azizah!</p>
                    <div className='container scale-75 w-full mx-auto p-5 my-28'>
                        <h3 className='text-white text-lg font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>dan inilah pesan dari developer pembuat museum azizah</h3>
                        <NotePlayer audioSrc="rekaman-developer.m4a"></NotePlayer>
                    </div>
                    <h1 className='text-white text-sm font-bold max-w-xs tracking-tight mx-auto mb-6 text-center transition duration-300 ease-in-out hover:scale-105 hover:text-pink-500'>terimakasih sudah berkunjung di museum azizah</h1>
                </div>
            </section>
        </>
    )
}



export default MuseumAzizah;