import Images from '@/constants/images.constants'

const ContactUs = () => {
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh] mb-[12vh] bg-[#E3E5FF80]/20">
          <div className="p-9">
            <h1 className="text-3xl px-9 md:text-4xl font-[500] pb-3 w-fit">Want to have <span className='text-[#3C49C0] md:text-4xl text-3xl'>Fun</span> Lets talk!</h1>
          </div>
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[2vh]">
            <div className="p-9">
                <h3 className='text-2xl mb-3'>Contact Sales</h3>
                <p className='text-sm text-muted-foreground mb-6'>Talk to our team about your needs.</p>
                use dodo widgets
                {/* <form action="" className='flex flex-wrap'>
                    <div className="w-[48%] mx-auto my-3 flex-col flex">
                        <label htmlFor="firstname">Firstname</label>
                        <input required type='text' name='firstname' placeholder='Firstname' className='outline-none p-2 border border-[#94A3B8] rounded-md w-full]'/>
                    </div>
                    <div className="w-[48%] mx-auto my-3 flex-col flex">
                        <label htmlFor="lastname">Lastname</label>
                        <input required type='text' name='lastname' placeholder='Lastname' className='outline-none p-2 border border-[#94A3B8] rounded-md w-full]'/>
                    </div>
                    <div className="w-[48%] mx-auto my-3 flex-col flex">
                        <label htmlFor="email">Email</label>
                        <input required type='email' name='email' placeholder='Email' className='outline-none p-2 border border-[#94A3B8] rounded-md w-full]'/>
                    </div>
                    <div className="w-[48%] mx-auto my-3 flex-col flex">
                        <label htmlFor="phone">Phone</label>
                        <input required type='tel' name='phone' placeholder='Phone' className='outline-none p-2 border border-[#94A3B8] rounded-md w-full]'/>
                    </div>
                    
                    <div className="w-full mx-auto my-3 flex-col flex">
                        <label htmlFor="message">How can we help</label>
                        <textarea required name='message' rows={5} placeholder='Tell us more about your needs' className='outline-none p-2 border border-[#94A3B8] rounded-md w-full]'></textarea>
                    </div>
                    <><button className='py-2 mt-4 px-10 rounded-md bg-[#F43F5E] text-white'>Submit</button></>
                </form> */}
            </div>
        </section>
    </main>
  )
}

export default ContactUs