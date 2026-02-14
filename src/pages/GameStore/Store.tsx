import Images from '@/constants/images.constants'

const Store = () => {
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

         <section className="px-[3vw] md:px-[4vw] py-[4vh] mb-10">
          <div className="p-9 text-center">
            <h1 className="text-3xl px-9 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit mx-auto">Your Gateway to Real World Rewards</h1>
            <p className="pt-5 my-6 text-muted-foreground">The <span className='text-neutral-800 font-[600]'>Gudu Store Mobile App</span> is an innovative marketplace designed to bridge the gap between virtual achievements and real-world benefits. It allows users to redeem the coins they earn while playing Gudu games for a variety of tangible products and services.</p>
          </div>
        </section>

        <section className="px-[3vw] relative flex flex-wrap gap-4 md:px-[4vw] py-[4vh] bg-[#E3E5FF80]/50 h-screen overflow-hidden bg-fixed">
            <img src={Images.phone1} className='h-[85%] md:w-fit w-full relative mx-auto md:top-[9vh]' alt="" />
            <img src={Images.phone8} className='h-[85%] md:w-fit w-full mx-auto' alt="" />
            <img src={Images.phone46} className='h-[85%] md:w-fit w-full relative md:top-[20vh] mx-auto' alt="" />
             <div className="flex absolute bottom-4 right-1/2 translate-x-1/2 flex-wrap items-center justify-center gap-10 mt-[6vh]">
                <img data-aos="zoom-in-up" src={Images.GooglePlay} alt="" />
                <img data-aos="zoom-in-up" data-a src={Images.IosStore} alt="" />
              </div>
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh] ">
            <div className="p-9">
                <h1 className='font-[500] text-3xl text-center'>Key Features</h1>
                
                <ul className="mt-[8vh] w-fit list-disc mx-auto">
                    <li>Wide Product Selection: Shop electronics, fashion, home essentials, and services—all curated for Gudu players.</li> <br />
                    <li>Easy Redemption: Log in, view your tokens, and redeem rewards with real-time order tracking.</li> <br />
                    <li>Integrated Wallet: See your token balance, redemption history, and remaining rewards—all synced with your game profile.</li> <br />
                    <li>Partner Fulfilment: Enjoy fast delivery or pick-up from Gudu partner centres i.e. Melcom stores.</li> <br />
                </ul>
                {/* <ul className='list-decimal text-muted-foreground mt-4 pl-4'>
                    <li>Diverse Product Range
                        <br />
                        <ul className='list-disc pl-5'>
                            <li>The store offers a curated selection of products that cater to different needs and preferences.</li>
                            <li>Categories include: <br />
                                <ul className='list-disc pl-5'>
                                    <li>Electronics: Headphones, chargers, and smart devices.</li>
                                    <li>Fashion: Apparel, accessories, and footwear.</li>
                                    <li>Home Essentials: Kitchen gadgets, furniture, and decor.</li>
                                    <li>Services: Discount vouchers, subscriptions, and experiences.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Seamless Redemption Process <br />
                        <ul className='list-disc pl-5'>
                            <li>Players simply log into the store using their Gudu account, view their available tokens, and redeem their chosen rewards.</li>
                            <li>A real-time tracking system allows users to monitor their orders and delivery status.</li>
                        </ul>
                    </li>
                    <li>
                        Integrated Wallet System <br />
                        <ul className='list-disc pl-5'>
                            <li>The Gudu Wallet is synced with the user's game profile to show their balance of redeemable tokens.</li>
                            <li>Players can also view a history of their redemptions and remaining balances</li>
                        </ul>
                    </li>
                    <li>
                        Partner Center Integration <br />
                        <ul className='list-disc pl-5'>
                            <li>The Gudu Store connects seamlessly with partner centers to ensure easy fulfillment of orders.</li>
                            <li>Players can choose delivery to their doorstep or pick-up options at partner locations for added convenience.</li>
                        </ul>
                    </li>
                </ul> */}
            </div>
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[2vh] ">
            <div className="p-9">
             <h1 className="text-3xl text-center md:text-4xl font-[500] mt-[2vh] border-b-8 border-b-[#3C49C0] pb-3 mb-3 w-[80%] mx-auto">More Than a Store – The Heart of Gudu Rewards</h1>
              <p className='text-muted-foreground text-center'>The <span className='text-neutral-800 font-[600]'>Gudu Store App</span> turns gameplay into real-world rewards, creating a powerful loop of motivation and satisfaction.</p>
             <ul className='list-decimal w-fit mx-auto text-muted-foreground mt-3 pl-4'>
                <li>
                    Motivating Gameplay: Earn coins, redeem real items—keeping players engaged and excited.
                </li>
                <li>
                    Partner-Driven: Regularly updated with diverse products through strong partner collaborations.
                </li>
                <li>
                   Global Access: Available worldwide with multi-currency support and localized shipping.
                </li>
             </ul>
            </div>
        </section>
    </main>
  )
}

export default Store