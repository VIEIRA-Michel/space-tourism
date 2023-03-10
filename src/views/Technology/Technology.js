import { useState } from "react";
import data from '../../data/data.json';

const Technology = () => {
    const [launch, spaceport, space] = data.technology;
    const [currentSelection, setCurrentSelection] = useState(launch);

    return (
        <main className='w-full xl:w-90of100 max-[767px]:h-90vh h-86vh flex flex-col justify-center xl:ml-auto'>
            <div className='h-1/6 max-[767px]:h-10of100 md:w-4/5 xl:w-full xl:h-1/4 flex flex-row items-center justify-center xl:justify-start md:mx-auto xl:mx-0'>
                <div className="md:w-full xl:w-full flex flex-row items-center xl:ml-auto">
                    <div>
                        <span className="text-xl md:text-2xl text-slate-600 tracking-widest">03</span>
                    </div>
                    <div className="ml-4 flex justify-start">
                        <h1 className="text-xl md:text-2xl text-white font-light tracking-widest">SPACE LAUNCH 101</h1>
                    </div>
                </div>
            </div>
            <div className='h-5/6 max-[767px]:h-90of100 xl:h-3/4 flex flex-col-reverse xl:flex-row xl:items-center'>
                <div className='w-full h-2/3 max-[413px]:h-3/4 xl:w-4/6 xl:h-full flex flex-col xl:justify-evenly'>
                    <div className="h-full xl:h-3/5 xl:w-4/5 flex flex-col xl:flex-row">
                        <div className="w-9/12 md:w-2/5 mx-auto xl:m-0 h-1/4 xl:h-auto xl:w-1/6 flex flex-row items-center xl:items-start xl:flex-col justify-evenly xl:justify-evenly">
                            <div onClick={() => setCurrentSelection(launch)} className={`max-[413px]:h-12 max-[413px]:w-12 h-16 w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Launch vehicle" ? "bg-white" : "bg-transparent text-white border border-slate-600 "} transition-all hover:border-white`}><span className="font-bellefair text-3xl">1</span></div>
                            <div onClick={() => setCurrentSelection(spaceport)} className={`max-[413px]:h-12 max-[413px]:w-12 h-16 w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Spaceport" ? "bg-white" : "bg-transparent text-white border border-slate-600 "} transition-all hover:border-white`}><span className="font-bellefair text-3xl">2</span></div>
                            <div onClick={() => setCurrentSelection(space)} className={`max-[413px]:h-12 max-[413px]:w-12 h-16 w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Space capsule" ? "bg-white" : "bg-transparent text-white border border-slate-600 "} transition-all hover:border-white`}><span className="font-bellefair text-3xl">3</span></div>
                        </div>
                        <div className="w-full max-[413px]:h-auto md:h-3/4 xl:h-auto xl:w-5/6 flex flex-col justify-evenly">
                            <div className="text-center xl:text-left text-white text-xl font-thin tracking-widest">THE TERMINOLOGY</div>
                            <div className="text-center xl:text-left text-white text-3xl md:text-5xl font-bellefair">LAUNCH VEHICLE</div>
                            <div className="w-3/5 max-[413px]:w-full min xl:w-1/2 text-center xl:text-left text-white text-xl font-thin mx-auto xl:m-0">{currentSelection.description}</div>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:h-3/5 max-[413px]:h-1/4 h-1/3 xl:w-2/6 xl:h-full flex justify-center items-center'>
                    <img className={`w-full h-full bg-no-repeat bg-cover bg-center ${currentSelection.name === "Launch vehicle" ? "launchPicture" : currentSelection.name === "Spaceport" ? "spaceportPicture" : "spacePicture"}`} alt="" />
                </div>
            </div>
        </main>
    )
};

export default Technology;