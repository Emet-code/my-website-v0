import { motion } from "motion/react"
import assets from "../assets/assets"
import Title from "./Title"

const OurWork = () => {

    
    const workData = [
        {
          title: "Health and Wellness Technology Company",
          description: "Designed and developed a modern website to elevate the digital presence and showcase the innovative services of a leading health and wellness technology company.",
          image: "/anywherehealing.png",
          link: "https://anywherehealing.com/"
        },
        {   
          title: "Cyber Security Firm",
          description: "Created a compelling brand website for a Canadian-based cyber security firm, enhancing their credibility and strengthening their online identity.",
          image: "/0day.png",
          link: "https://www.0daysecurity.io"
        },
        {
          title: "Car Rental Application",
          description: "Built an intuitive car rental application that streamlines the booking process and automates operations for a seamless user experience.",
          image: "/stryde.png"
        },
        {
          title: "Veterinary Clinic",
          description: "Developed an engaging website for a veterinary clinic, improving client interaction and driving greater customer engagement.",
          image: "/polaris.png",
          link: "https://www.polarisVetConsult.com.ng"
          
        },
        {
          title: "Drone Logistics Company",
          description: "Engineered a comprehensive full-stack dashboard for a drone logistics company, empowering them to efficiently manage operations and customer relationships.",
          image: "/flysmart.png",
          link: "https://www.flysmartapp.in"
        },
        {
          title: "Tech Startup",
          description: "Launched a dynamic brand website for a tech startup, amplifying their market presence and supporting their growth ambitions.",
          image: "/reispar.png",
          link: "https://www.reispartechnologies.com"
        },
        {
          title: "Social Media Application",
          description: "Created a feature-rich social media application designed to foster community and streamline user interactions.",
          image: "/hira.png"
        },
      ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id="work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <Title 
            title="Our Latest Work at Emet Tech Solutions." 
            des="From strategy to execution, we craft digital solutions that drive your business forward." 
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {workData.map((work, index) => (
                <motion.div 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: index * 0.2}}
                viewport={{once: true}}
                onClick={() => work.link && window.open(work.link, '_blank')}

                key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer" >
                    <img src={work.image} className="w-full rounded-xl h-[154px] object-cover" alt="" />
                    <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                    <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default OurWork