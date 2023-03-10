import europaImage from '../../assets/destination/image-europa.png';
import marsImage from '../../assets/destination/image-mars.png';
import moonImage from '../../assets/destination/image-moon.png';
import titanImage from '../../assets/destination/image-titan.png';

import data from '../../data/data.json';
import { useState } from 'react';

const Destination = () => {
    const [moon, mars, europa, titan] = data.destinations;
    const [currentSelection, setCurrentSelection] = useState(moon);

    return (
        <main className="w-full md:w-4/5 max-[767px]:h-90vh h-86vh flex flex-col justify-evenly items-center m-auto">
            <div className="w-full h-10of100 md:h-1/6 xl:h-1/4 flex flex-row w-full justify-center md:justify-start">
                <div className='flex flex-row items-center'>
                    <div>
                        <span className="text-xl md:text-2xl text-slate-600 tracking-widest">01</span>
                    </div>
                    <div className="ml-4 flex justify-start">
                        <h1 className="text-xl md:text-2xl text-white font-light tracking-widest">PICK YOUR DESTINATION</h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-90of100 md:h-5/6 xl:h-3/4 flex flex-col xl:flex-row'>
                <div className='w-full xl:w-3/5 xl:h-full flex flex-col justify-evenly items-center xl:items-start'>
                    <div className="flex w-3/5 xl:w-4/5 xl:h-90of100 justify-center">
                        <img src={currentSelection === moon ? moonImage : currentSelection === mars ? marsImage : currentSelection === europa ? europaImage : titanImage} alt="" className={`xl:w-auto max-[1279px]:h-90of100 object-contain appear`} />
                    </div>
                </div>
                <div className='max-[767px]:w-11/12 m-auto w-full h-3/5 md:h-2/4 xl:w-2/5 xl:h-full flex flex-col justify-between xl:justify-around'>
                    <div className='w-full max-[413px]:mb-7 md:w-4/5 md:mx-auto xl:w-full xl:mx-0'>
                        <nav className='w-full'>
                            <ul className='flex flex-row w-full justify-around xl:justify-start'>
                                <li className='text-white font-thin text-xl tracking-widest xl:mr-8'><a href="#Destination" onClick={() => setCurrentSelection(moon)} className={`cursor-pointer pb-2.5  border-b-2 ${currentSelection.name === "Moon" ? "border-white" : "border-transparent"} hover:border-[#A6AAB5] transition-all`}>MOON</a></li>
                                <li className='text-white font-thin text-xl tracking-widest xl:mr-8'><a href="#Destination" onClick={() => setCurrentSelection(mars)} className={`cursor-pointer pb-2.5  border-b-2 ${currentSelection.name === "Mars" ? "border-white" : "border-transparent"} hover:border-[#A6AAB5] transition-all`}>MARS</a></li>
                                <li className='text-white font-thin text-xl tracking-widest xl:mr-8'><a href="#Destination" onClick={() => setCurrentSelection(europa)} className={`cursor-pointer pb-2.5  border-b-2 ${currentSelection.name === "Europa" ? "border-white" : "border-transparent"} hover:border-[#A6AAB5] transition-all`}>EUROPA</a></li>
                                <li className='text-white font-thin text-xl tracking-widest xl:mr-8'><a href="#Destination" onClick={() => setCurrentSelection(titan)} className={`cursor-pointer pb-2.5  border-b-2 ${currentSelection.name === "Titan" ? "border-white" : "border-transparent"} hover:border-[#A6AAB5] transition-all`}>TITAN</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className=''>
                        <h2 className='text-5xl max-[413px]:mb-5 max-[767px]:text-5xl md:text-7xl xl:text-8xl text-white text-center xl:text-left font-bellefair'>{currentSelection.name.toUpperCase()}</h2>
                    </div>
                    <div className='w-full xl:w-full'>
                        <p className='max-[413px]:mb-5 text-slate-200 text-2xl text-center xl:text-left font-thin tracking-wide'>{currentSelection.description}</p>
                    </div>
                    <div className='w-full xl:w-4/6 border-t border-slate-700 flex flex-row justify-between'>
                        <div className='w-full xl:w-11/12 flex flex-row justify-between md:justify-evenly xl:justify-between m-7 xl:m-0 xl:mt-7'>
                            <div>
                                <div className='text-white text-sm font-thin tracking-widest'>AVG. DISTANCE</div>
                                <div className='text-white text-xl md:text-2xl font-bellefair mt-2'>{currentSelection.distance.toUpperCase()}</div>
                            </div>
                            <div>
                                <div className='text-white text-sm font-thin tracking-widest'>EST. TRAVEL TIME</div>
                                <div className='text-white text-xl md:text-2xl font-bellefair mt-2'>{currentSelection.travel.toUpperCase()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Destination;