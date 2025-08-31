import assets from "../assets/assets";
const Footer = ({theme}) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
            <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
                <p className="max-w-md">Desde la estrategia hasta la ejecución, elaboramos soluciones digitales que avanzan su negocio.</p>

                <ul className="flex gap-8">
                    <li><a className="hover:text-primary" href="#hero">Inicio</a></li>
                    <li><a className="hover:text-primary" href="#services">Servicios</a></li>
                    <li><a className="hover:text-primary" href="#our_work">Nuestro Trabajo</a></li>
                    <li><a className="hover:text-primary" href="#contact">Contacto</a></li>
                </ul>
            </div>

            <div className="text-gray-600 dark:text-gray-400">
                <h3 className="font-semibold">Suscríbete a nuestro boletín</h3>
                <p className="text-sm mt-2 mb-6">Las últimas noticias, artículos y recursos, enviados a su bandeja de entrada semanalmente.</p>
                <div className="flex gap-2 text-sm">
                    <input type="email" placeholder="Ingrese su correo electrónico" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-600" />
                    <button className="bg-primary text-white rounded px-6 hover:scale-103">Suscribirse</button>
                </div>
            </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
            <p>Copyright © 2025 MATQ - Todos los derechos reservados.</p>
            <div className="flex items-center justify-between gap-4">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer