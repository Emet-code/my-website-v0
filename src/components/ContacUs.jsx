import { motion } from "motion/react"
import { toast } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import Title from "./Title"
import assets from "../assets/assets";

const ContactUs = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        
        // EmailJS configuration
        const serviceId = 'service_5rvbejd'; // Replace with your EmailJS service ID
        const templateId = 'template_rp58jeq'; // Replace with your EmailJS template ID
        const publicKey = 'UCSmrkueY-DlXefIo'; // Replace with your EmailJS public key
        
        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                event.target,
                publicKey
            );
            
            console.log('Email sent successfully:', result.text);
            toast.success("Thank you for your message! We'll get back to you soon.");
            event.target.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{staggerChildren: 0.2}}
            id="contact-us" 
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <Title 
                title="Contact Us." 
                des="From strategy to execution, we deliver authentic digital solutions that drive your business forward"
            />

            <motion.form
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.4}}
                viewport={{once: true}}
                onSubmit={onSubmit} 
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
            >
                <div className="">
                    <p className="mb-2 text-sm font-medium">Your name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} className="w-5" alt="" />
                        <input 
                            type="text" 
                            name="from_name" 
                            placeholder="Enter Your Name" 
                            className="w-full p-3 text-sm outline-none bg-transparent" 
                            required 
                        />
                    </div>
                </div>

                <div className="">
                    <p className="mb-2 text-sm font-medium">Email</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} className="w-5" alt="" />
                        <input 
                            type="email" 
                            name="from_email" 
                            placeholder="Enter Your Email" 
                            className="w-full p-3 text-sm outline-none bg-transparent" 
                            required 
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea 
                        rows={8} 
                        placeholder="Enter Your Message" 
                        className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent" 
                        required 
                        name="message" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
                >
                    Send <img src={assets.arrow_icon} className="w-4" alt="" />
                </button>
            </motion.form>
        </motion.div>
    )
}

export default ContactUs