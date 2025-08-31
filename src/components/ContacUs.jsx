import Title from "./Title"
import assets from "../assets/assets";
import { toast } from "react-hot-toast";

const ContacUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        formData.append("access_key", "9221578a-3f4b-4f7b-b50a-9a32872b3016");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                toast.success("¡Gracias por su envío!.");
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        
    };

  return (
    <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <Title title="Comuníquese con nosotros." des="Desde la estrategia hasta la ejecución, elaboramos soluciones digitales que avanzan su negocio."/>

        <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
            <div className="">

                <p className="mb-2 text-sm font-medium">Su nombre</p>
                <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <img src={assets.person_icon} className="w-5" alt="" />
                    <input type="text" name="name" placeholder="Ingrese Su nombre" className="w-full p-3 text-sm outline-none" required />
                </div>
            </div>

            <div className="">

                <p className="mb-2 text-sm font-medium">Correo electrónico</p>
                <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <img src={assets.email_icon} className="w-5" alt="" />
                    <input type="email" name="email" placeholder="Ingrese Su correo electrónico" className="w-full p-3 text-sm outline-none" required />
                </div>
            </div>

            <div className="sm:col-span-2">
                <p className="mb-2 text-sm font-medium">Mensaje</p>
                <textarea rows={8} placeholder="Ingrese Su mensaje" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required name="message" id=""></textarea>
            </div>

            <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">Enviar <img src={assets.arrow_icon} className="w-4" alt="" /></button>

        </form>
    </div>
  )
}

export default ContacUs