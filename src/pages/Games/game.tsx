import Images from '@/constants/images.constants'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Games = () => {
  const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
              const element = document.getElementById(location.hash.slice(1));
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 500);
        }
    }, [location]);

  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh] mb-[12vh]">
          <div className="p-9 text-center">
            <h1 className="text-3xl px-9 md:text-4xl font-[500] pb-3 w-fit mx-auto">We <span className='text-[#3C49C0] md:text-4xl text-3xl'>deliver joy</span> through player-focused games crafted with passion.</h1>
          </div>
        </section>

             <section className="px-[3vw] md:px-[6vw]">
            <section className="my-[17vh] min-h-[80vh]" id='guduRun'>
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.guduRunCover} className="h-[79vh] rounded-md min-w-[23rem] object-cover mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3">Gudu Run</h1>
                  <p className="leading-[2.3rem] my-6 text-muted-foreground"> <span className='text-neutral-800 font-[600]'>Gudu Run</span> is an exhilarating endless runner game where players dash through vibrant streets filled with challenges and surprises. Players collect coins while dodging obstacles, testing their reflexes and strategy in an immersive, fast-paced environment.
                    <br />
                    <br />
                    <ul className='list-disc'>
                      <li><span className='text-neutral-800 font-[600]'>Dynamic Gameplay:</span> Players navigate through ever-changing levels with increasing difficulty, keeping the experience fresh and exciting.</li>
                      <li><span className='text-neutral-800 font-[600]'>Rewards System:</span> Coins collected during gameplay can be converted into tokens, redeemable for real-world products at Gudu’s partner centers.</li>
                      <li><span className='text-neutral-800 font-[600]'>Customization Options:</span> Unlock skins, outfits, and power-ups to enhance your character’s performance and style.</li>
                      <li><span className='text-neutral-800 font-[600]'>Leaderboards:</span> Compete with friends and players globally to top the charts and earn bragging rights.</li>
                      <li><span className='text-neutral-800 font-[600]'>Accessible Fun:</span> Easy to learn but challenging to master, making it ideal for players of all skill levels.</li>
                    </ul>
                  </p>
                </div>
              </section>


            <section className="flex flex-wrap gap-4 my-[17vh] min-h-[80vh]" id='guduRace'>
                <div className="w-full md:w-[48%]">
                    <img src={Images.guduRunRace} className="h-[79vh] rounded-md min-w-[23rem] object-cover mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Gudu FX</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground"><span className='text-neutral-800 font-[600]'>Gudu FX</span> is a high-octane endless driving game that puts players behind the wheel, navigating through bustling streets, collecting coins, and avoiding obstacles. It’s a thrilling ride where your skills are tested at every turn.
                     <br />
                    <br />
                    <ul className='list-disc'>
                      <li><span className='text-neutral-800 font-[600]'>Immersive Driving Experience:</span> Realistic yet fun driving mechanics that allow players to weave through traffic and conquer challenging roads.</li>
                      <li><span className='text-neutral-800 font-[600]'>Reward Integration:</span> Gather coins during gameplay, which can be redeemed for real-world products, giving players a reason to keep driving.</li>
                      <li><span className='text-neutral-800 font-[600]'>Multiple Vehicles:</span> Unlock and customize various cars with unique attributes to suit your driving style.</li>
                      <li><span className='text-neutral-800 font-[600]'>Power-Ups and Boosts:</span> Use nitro boosts, shields, and other power-ups to extend your journey and maximize rewards.</li>
                      <li><span className='text-neutral-800 font-[600]'>Stunning Visuals:</span> Vibrant and dynamic environments that capture the excitement of a high-speed urban adventure.</li>
                    </ul>
                  </p>
                </div>
              </section>
            
            
            {/* Gudu Warfront Section */}
            <section className="my-[17vh] min-h-[80vh]" id='guduWar'>
                <div className="w-full md:float-end md:w-[48%]">
                    <img src={Images.guduwarFront} className="h-[79vh] object-cover rounded-md min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Gudu Warfront</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground"><span className='text-neutral-800 font-[600]'>Gudu FX</span> is an action-packed endless shooting game where players battle through hostile streets, eliminating enemies, collecting coins, and surviving against all odds. It’s a high-stakes adventure that rewards quick reflexes and strategic thinking.
                    <br />
                    <br />
                    <ul className='list-disc'>
                      <li><span className='text-neutral-800 font-[600]'>Intense Combat:</span> Engage in non-stop action, taking on waves of enemies with various weapons and skills.</li>
                      <li><span className='text-neutral-800 font-[600]'>Reward-Based Gameplay:</span> Earn coins for every successful mission, which can be converted into tokens and redeemed for real-world rewards.</li>
                      <li><span className='text-neutral-800 font-[600]'>Customizable Arsenal:</span> Unlock and upgrade weapons, gear, and characters to enhance your combat abilities.</li>
                      <li><span className='text-neutral-800 font-[600]'>Dynamic Levels:</span> Each level introduces new challenges, enemy types, and environments to keep players on their toes.</li>
                      <li><span className='text-neutral-800 font-[600]'>Team Play Mode:</span> Collaborate with other players in multiplayer mode to tackle bigger challenges and earn greater rewards.</li>
                      <li><span className='text-neutral-800 font-[600]'>High Replayability:</span> Procedurally generated levels ensure that no two playthroughs are the same.</li>
                    </ul>
                  </p>
                </div>
              </section>
           
           

             <section className="flex flex-wrap gap-4 my-[17vh] min-h-[80vh]" id='guduCrush'>
                <div className="w-full md:w-[48%]">
                    <img src={Images.GuduCrush} className="h-[79vh] rounded-md min-w-[23rem] object-cover mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Gudu Crush</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground"><span className='text-neutral-800 font-[600]'>Gudu Crush</span>  is an addictive endless match-3 puzzle game where players combine colorful jewels to rack up high scores and unlock exciting rewards. With each swipe and match, players dive deeper into a world of fun, challenge, and real-world value.
                     <br />
                    <br />
                    <ul className='list-disc'>
                      <li><span className='text-neutral-800 font-[600]'>Engaging Gameplay:</span> Players match jewels in continuous levels with increasing difficulty, keeping the experience endlessly entertaining and rewarding.</li>
                      <li><span className='text-neutral-800 font-[600]'>Reward System:</span> Points earned during gameplay are converted into tokens, which can be redeemed for real-life prizes at Gudu’s partner centers, bridging digital play with real-world rewards.</li>
                      <li><span className='text-neutral-800 font-[600]'>Power-Ups & Boosters: </span> Unlock unique boosters and combos to clear the board faster, multiply your points, and outsmart each level’s challenges.</li>
                      <li><span className='text-neutral-800 font-[600]'>Leaderboards:</span> Compete with friends and players worldwide to climb the ranks and showcase your puzzle-solving mastery.</li>
                      <li><span className='text-neutral-800 font-[600]'>Vibrant Design: </span> Stunning visuals, satisfying sound effects, and smooth animations make every match a thrill.</li>
                      <li><span className='text-neutral-800 font-[600]'>Accessible Fun: </span> Easy to play yet challenging to master—perfect for both casual players and puzzle enthusiasts alike.</li>
                    </ul>
                  </p>
                </div>
              </section>
        </section>
    </main>
  )
}

export default Games