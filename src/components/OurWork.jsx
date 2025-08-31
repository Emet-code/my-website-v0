import { motion } from "motion/react"
import assets from "../assets/assets"
import Title from "./Title"

const OurWork = () => {

    const wordData = [
        {
            title: 'Marketing de aplicaciones móviles',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: assets.work_mobile_app      
        },
        {
            title: 'Gestión del tablero',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: assets.work_dashboard_management      
        },
        {
            title: 'Promoción de la aplicación de fitness',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: assets.work_fitness_app      
        },
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <Title title="Nuestro último trabajo." des="Desde la estrategia hasta la ejecución, elaboramos soluciones digitales que avanzan su negocio." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {wordData.map((work, index) => (
                <motion.div 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: index * 0.2}}
                viewport={{once: true}}

                key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer" >
                    <img src={work.image} className="w-full rounded-xl" alt="" />
                    <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                    <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default OurWork