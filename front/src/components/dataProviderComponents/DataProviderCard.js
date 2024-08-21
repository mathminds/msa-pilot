import React from 'react';
import DataCard from './DataCard';

const DataProviderCard = ({ title, count, details, button1, button2 }) => {
    return (
        <div className="w-full h-full grid place-content-center ">
      <div className='w-[290px] h-[190px] bg-transparent cursor-pointer group rounded-2xl perspective-1000'>
        <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>

{/* back card */}
          <div className='w-full h-full absolute rounded-2xl rotate-y-180 overflow-hidden'>
            <img src='/c.png' className='w-fill h-fill overflow-visible'/>
          </div>    

{/* front card */}
          <div className='relative  w-full h-full bg-blue-300 bg-opacity-95 rounded-2xl overflow-hidden p-1 text-neutral-300 space-y-5 backface-hidden'>
            <DataCard title={title} count={count} details={details} button1={button1} button2={button2} />

            {/* <div>
              <span className='font-bold text-3xl'>정보전송자</span>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='font-bold'>
                // BIOGRAPHY
              </span>
              <span>
                A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.
              </span>
            </div> */}
          </div>

          
        </div>
      </div>
    </div>
    );
};

export default DataProviderCard;

// import React from 'react';
// import './Card.css';

// const DataCard = () => {
//     const [isFlipped, setIsFlipped] = React.useState(false);
//     const [isUnflipped, setIsUnflipped] = React.useState(false);

//     const handleMouseEnter = () => {
//         setIsFlipped(true);
//         setIsUnflipped(false);
//     };

//     const handleMouseLeave = () => {
//         setIsFlipped(false);
//         setIsUnflipped(true);
//     };

//     return (
//         <div
//             className={`max-w-sm rounded overflow-hidden hover:bg-slate-400 shadow-lg ${isFlipped ? 'flipped' : ''} `}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
// <div className="group w-[350px] h-[590px] bg-transparent cursor-pointer perspective-1000  bg-green-600 ">
//     <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
//             {!isFlipped ? 
            
//             <div className="front bg-blue-200">
//                 <img
//                     className="w-full"
//                     src="https://raw.githubusercontent.com/mathminds-sd/public-assets/main/f.png"
//                     alt="Sunset in the mountains"
//                 />
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
//                         eaque, exercitationem praesentium nihil.
//                     </p>
//                 </div>
//                 <div className="px-6 pt-4 pb-2">
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #photography
//                     </span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #travel
//                     </span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #winter
//                     </span>
//                 </div>
//             </div> : 
//             <div className="back bg-red-200">
//                 <img
//                     className="w-full"
//                     src="https://raw.githubusercontent.com/mathminds-sd/public-assets/main/f.png"
//                     alt="Sunset in the mountains"
//                 />
//                 <div className="px-6 py-4 ">
//                     <div className="font-bold text-xl mb-2">The Warmest Sunset</div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
//                         eaque, exercitationem praesentium nihil.
//                     </p>
//                 </div>

//                 <div className="px-6 pt-4 pb-2">
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #photography
//                     </span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #travel
//                     </span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         #winter
//                     </span>
//                 </div>
//             </div>
//             }
//             </div>
//         </div>
//         </div>
//     );
// };

// export default DataCard;
