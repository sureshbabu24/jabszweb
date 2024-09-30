
import React from 'react';
import './ImageGallery.css'; 
import logo3 from './3.png';
import logo2 from './2.png';
import logo4 from './4.png';
 function Game_content ()  {


  return (
    <>
    <div className='container-fluid text-center text-white p-5 bg'><hr></hr>
              <h1>EXPLORE MORE GAMES</h1>
      </div>      
    <div className=" container-fluid  bg">
        <div className='row'>
            <div className='col-md-4 p-5 '> 
            <img className='Img  ' src={logo2} alt="car"  />
            <h2 className='text-center text-white'>     UP-COMMING.... </h2>
            <p className=' text-white'> In your real-life track racing game, players experience the adrenaline of high-speed competition on intricately designed circuits. Mastering each turn and strategy is key to crossing the finish line first and claiming victory.</p>

            </div>
            
            <div className='col-md-4 p-5'>
            <img className='Img ' src={logo3} alt="Snipper"  />
            <h2 className='text-center text-white'>     UP-COMMING... </h2>
            <p className=' text-white'>In Sniper Soldier, players take on the role of a skilled marksman, tasked with eliminating high-value targets from a distance. The game features a variety of missions set in diverse environments, requiring precision and stealth to succeed.</p>

            </div>
           
            <div className='col-md-4 p-5'>
            <img className='Img ' src={logo4} alt="Shadow"  />
            <h2 className='text-center text-white'>     UP-COMMING... </h2>
            <p className=' text-white'>In the Ninja Game, players step into the shoes of a stealthy warrior, mastering agility and precision to navigate through vibrant, perilous environments. With immersive gameplay and intricate level design, every move is crucial in the quest for honor and victory.</p>
            </div>
        </div>
      
    </div>
    </>
  );
};

export default Game_content;
