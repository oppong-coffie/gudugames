import Images from '@/constants/images.constants'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Policies = () => {
    const policies = [
        {
            policyid:"1",
            title:"Terms and Policies",
            displaymsg:"Get familiar with the terms and policies that apply to our products, services, and properties.",
            desc_Title:"",
            contact:"legal@gudustudios.com",
            policy:`Welcome to Gudu!

These Terms of Use govern your access to and use of all Gudu apps, games, websites, and services (“Gudu Services”). By using any part of Gudu, you agree to be bound by these terms.

1.⁠ ⁠Eligibility
Gudu Services are intended for users aged 13 and above. Users under 18 must have parental or guardian consent. Some content or features may be restricted based on age.

2.⁠ ⁠Account Responsibility
•⁠  ⁠You are responsible for all activity that occurs under your Gudu account.
•⁠  ⁠Keep your login information secure.
•⁠  ⁠Notify us immediately if you suspect unauthorized access to your account.

3.⁠ ⁠Acceptable Use
You agree not to:
•⁠  ⁠Use Gudu for any unlawful or harmful purpose.
•⁠  ⁠Harass, abuse, or harm other players.
•⁠  ⁠Upload or share offensive, discriminatory, or inappropriate content.
•⁠  ⁠Attempt to hack, reverse-engineer, or cheat in Gudu games.

4.⁠ ⁠In-Game Items & Rewards
•⁠  ⁠Virtual items and rewards earned through gameplay are not real-world currency.
•⁠  ⁠Gudu may modify, suspend, or discontinue reward systems at any time.
•⁠  ⁠In-game purchases are non-refundable unless required by local law.

5.⁠ ⁠Intellectual Property
All game assets, graphics, characters, music, and branding are the property of Gudu Studios Ltd.
You may not copy, distribute, or commercialize any content from Gudu without permission.

6.⁠ ⁠Suspension or Termination
We reserve the right to suspend or terminate your account if:
•⁠  ⁠You violate these Terms of Use.
•⁠  ⁠Your actions threaten the safety or fairness of the game environment.

7.⁠ ⁠Changes to the Terms
We may update these Terms at any time. You’ll be notified of material changes, and continued use of Gudu means you accept the new terms.
`
        },
        {
            policyid:"2",
            title:"Gudu Privacy Policy",
            displaymsg:"Get familiar with the terms and policies that apply to our products, services, and properties.",
            desc_Title:"",
            contact:"privacy@gudustudios.com",
            policy:`At Gudu, your privacy matters. This policy explains what data we collect, how we use it, and how we protect it.

1.⁠ ⁠What We Collect
When you use Gudu, we may collect the following:
•⁠  ⁠Basic Account Info: Username, email, age range
•⁠  ⁠Gameplay Data: Scores, achievements, progress
•⁠  ⁠Device Info: Device type, OS, location (approximate), IP address
•⁠  ⁠Optional: Profile images or linked social accounts (with permission)

2.⁠ ⁠How We Use Your Data
We use your data to:
•⁠  ⁠Personalize your gameplay experience
•⁠  ⁠Save and sync game progress
•⁠  ⁠Deliver rewards, notifications, and updates
•⁠  ⁠Improve our products and services

3.⁠ ⁠Data Sharing
We do not sell your data. We may share it with:
•⁠  ⁠Third-party services for analytics or customer support
•⁠  ⁠Partners for reward fulfillment
•⁠  ⁠Authorities when legally required

4.⁠ ⁠Data Security
•⁠  ⁠Your data is stored on secure servers.
•⁠  ⁠We use encryption, firewalls, and regular audits to protect your information.

5.⁠ ⁠Your Rights
You have the right to:
•⁠  ⁠Request access to your data
•⁠  ⁠Correct or delete your data
•⁠  ⁠Withdraw consent at any time
To make a data request, email: 📧 privacy@gudustudios.com

6.⁠ ⁠Children’s Privacy
We do not knowingly collect personal data from children under 13 without parental consent. Parents can review or request deletion of their child’s data.
Last Updated: June 2025
`
        },
        {
            policyid:"3",
            title:"Gudu for Parents",
            desc_Title:"",
            contact:"parents@gudustudios.com",
            policy:`At Gudu, we’re committed to making gaming safe, positive, and empowering for everyone — especially younger players. Here’s what parents and guardians need to know:

1.⁠ ⁠Safety First
•⁠  ⁠We design all Gudu games with a safe, non-toxic gaming environment.
•⁠  ⁠In-game communication (if any) is moderated and filtered to block offensive language and behavior.

2.⁠ ⁠Parental Controls
•⁠  ⁠In-app purchases can be disabled through your phone’s settings.
•⁠  ⁠Time limits can be enforced through device-level screen time settings.
•⁠  ⁠Age-appropriate content is labeled and reviewed regularly.

3.⁠ ⁠Skill-Based Learning
Gudu games are designed to help players:
•⁠  ⁠Improve focus, reflexes, and decision-making
•⁠  ⁠Learn teamwork and problem-solving
•⁠  ⁠Engage with African-inspired stories and characters
Examples:
•⁠  ⁠Gudu FX teaches economic concepts in a fun, gamified setting.
•⁠  ⁠Gudu Warfront encourages critical thinking and strategic planning.
•⁠  ⁠Gudu Crush builds pattern recognition and logical reasoning.

4.⁠ ⁠Privacy for Young Players
•⁠  ⁠We comply with data protection laws, including COPPA and Ghana’s Data Protection Act.
•⁠  ⁠We do not collect personal information from players under 13 without verified parental consent.

5.⁠ ⁠Communication with Parents
We encourage open communication with parents and guardians. If you want to:
•⁠  ⁠Review your child’s data
•⁠  ⁠Report inappropriate behavior
•⁠  ⁠Request deletion or access to an account`
        },
    ]
    const routerPath = useParams()
    const [memberPos,setmemberPos]=useState(0)
    useEffect(()=>{
        const selectedInd = policies.findIndex(item=>item.policyid==routerPath.id)
        setmemberPos(selectedInd)
    },[routerPath.teamName,policies])
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

         <section className="px-[3vw] md:px-[6vw] py-[4vh]">
          {/* <div className="p-9 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-[500] w-fit">News </h1>
            </div> */}

            <div className="p-9 mt-9">
                <h1 className='text-3xl text-center'>{policies[memberPos]?.title}</h1>
                <h3 className='text-2xl text-center my-4'>{policies[memberPos]?.desc_Title}</h3>
                <p className='text-muted-foreground mx-auto whitespace-pre-wrap text-[20px] text-left max-w-[70%]'>{policies[memberPos]?.policy}</p>
                {policies[memberPos]?.contact &&<p className='my-8 text-muted-foreground mx-auto whitespace-pre-wrap text-[20px] text-left max-w-[70%]'>Contact: <a href={"mailto:"+policies[memberPos]?.contact}>{policies[memberPos]?.contact}</a></p>}
            </div>
        </section>


    </main>
  )
}

export default Policies