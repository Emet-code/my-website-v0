import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {

    const servicesData = [
        {
            title: 'Website Development',
            description: 'Custom, high-performance websites built with the latest technologies to help your business stand out online.',
            icon: assets.ads_icon // Consider replacing with a more relevant icon if available
        },
        {
            title: 'Mobile App Development',
            description: 'End-to-end mobile app solutions for iOS and Android, designed for seamless user experiences and robust performance.',
            icon: assets.marketing_icon // Consider replacing with a more relevant icon if available
        },
        {
            title: 'UI/UX Design',
            description: 'Intuitive and engaging user interfaces crafted to maximize usability and delight your customers.',
            icon: assets.content_icon // Consider replacing with a more relevant icon if available
        },
        {
            title: 'AI Agents',
            description: 'Intelligent AI-powered agents to automate tasks, enhance customer support, and drive innovation in your business.',
            icon: assets.social_icon // Consider replacing with a more relevant icon if available
        }
    ]
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    id="services" className="relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <img src={assets.bgImage2} className="absolute -top-110 -left-70 -z-1 daik-hidden" alt="" />

        <Title title="How can we help?" des="From strategy to execution, we deliver authentic digital solutions that drive your business forward" />

        <div className="flex flex-col md:grid grid-cols-2">
            {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    </motion.div>
  )
}

export default Services