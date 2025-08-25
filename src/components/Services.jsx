import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {

    const servicesData = [
        {
            title: 'Publicidad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: assets.ads_icon      
        },
        {
            title: 'Marketing de contenidos',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: assets.marketing_icon      
        },
        {
            title: 'Redacción de contenido',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: assets.content_icon      
        },
        {
            title: 'Redes sociales',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: assets.social_icon      
        }
    ]
  return (
    <div id="services" className="relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <img src={assets.bgImage2} className="absolute -top-110 -left-70 -z-1 daik-hidden" alt="" />

        <Title title="¿Cómo podemos ayudar?" des="Desde la estrategia hasta la ejecución, elaboramos una soluciones digitales que mueven su negocio Forwad" />
    </div>
  )
}

export default Services