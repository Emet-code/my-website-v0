import { motion } from "motion/react"
import assets from "../assets/assets";
const Footer = ({theme}) => {
  return (
    <motion.div 
    initial={{y: 50, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8}}
    viewport={{once: true}}

    className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
            <motion.div 
            initial={{x: -30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}

            className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                <div className="flex items-center gap-2"><img src={assets.logo} className="h-[30px]" alt="" /> <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Emet</h1></div>
                <p className="max-w-md">From strategy to execution, we craft innovative tech solutions that drive your business forward in the digital age.</p>

                <ul className="flex gap-8">
                    <li><a className="hover:text-primary" href="#hero">Home</a></li>
                    <li><a className="hover:text-primary" href="#services">Services</a></li>
                    <li><a className="hover:text-primary" href="#work">Our Work</a></li>
                    <li><a className="hover:text-primary" href="#contact">Contact</a></li>
                </ul>
            </motion.div>
{/*
            <motion.div 
            initial={{x: 30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            viewport={{once: true}}

            className="text-gray-600 dark:text-gray-400">
                <h3 className="font-semibold">Subscribe to our newsletter</h3>
                <p className="text-sm mt-2 mb-6">The latest tech insights, industry updates, and solutions delivered to your inbox weekly.</p>
                <div className="flex gap-2 text-sm">
                    <input type="email" placeholder="Enter your email address" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-600" />
                    <button className="bg-primary text-white rounded px-6 hover:scale-103">Subscribe</button>
                </div>
            </motion.div>
            */}
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}

        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
            <p>Copyright © 2025 Emet Tech Solutions - All rights reserved.</p>
            {/* Social Media Icons 
            <div className="flex items-center justify-between gap-4">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div> */}
        </motion.div>
    </motion.div>
  )
}

export default Footer