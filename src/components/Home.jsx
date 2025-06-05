import backgroundImage from '../assets/backgroundHome.jpg'; 


export default function Home() {
  return (
    <section id='home' className="h-screen bg-cover bg-center bg-no-repeat "
     style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundSize : 'cover',
    backgroundPosition: 'center center'
    }}
    >
    <div
      className="h-full flex items-center 
       px-6 md:px-30 justify-end "
      
    >
      <div className=" text-left font-poppins ">
        <h1 className=" bg-white text-black font-semibold px-4 py-2 inline-block mb-2 ">We Are Expert in</h1>
        <p className="mt-4  text-white font-bold text-1xl md:text-3xl leading-tight">Creative Services, Event <br/> Management, 
          Printing and <br /> Advertising.</p>
      </div>
    </div>
    </section>
    
  );
}



