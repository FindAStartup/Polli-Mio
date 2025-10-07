'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

interface FormData {
    firstName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const about = {
        falledChicken: '/assets/falledChicken.png',
    }

    console.log(process.env.NEXT_PUBLIC_EMAILJS_KEY);

    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY 
    });

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const sendEmail = async (formData: FormData) => {
        try {
            console.log(formData);
            
            const emailing = await emailjs.send("service_2qn29wh", "template_27qqqk7", {
                name: formData.firstName,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            });

            if (!emailing) {
                console.log("Email not sent");
            }
            console.log("Email sent successfully", emailing);

        } catch (error) {
            console.log("Unable to send email", error);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        await sendEmail(formData);
        alert('Thank you for your message! We will get back to you soon.')
      
        setFormData({
            firstName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }

    return (
        <>
            <Navbar/>
            
            {/* Hero Section - Fully Responsive */}
           <div className="relative bg-gradient-to-r from-orange-500 to-red-500 min-h-[400px] flex items-center">
                  <div className="container mx-auto pr-5 flex items-center justify-between">
                    <div className="flex-2">
                      <Image
                        src={about.falledChicken}
                        alt="Fried Chicken"
                        width={500}
                        height={400}
                        className="object-contain w-600 md:w-150 "
                      />
                    </div>
                    <div className="flex-1 text-right">
                      <h1 className="text-white justify-center text-4xl md:text-6xl md:text: font-bold">
                        CONTACT US
                      </h1>
                    </div>
                  </div>
                </div>

            {/* Contact Info Section - Fully Responsive */}
            <div className="py-8 xs:py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
                        {/* Logo */}
                        <div className="flex justify-center w-full lg:w-auto">
                            <Image 
                                src="/logo.png"
                                height={300}
                                alt="Pollo Mio Logo"
                                width={300}
                                className="object-contain w-32 h-16 xs:w-40 xs:h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 xl:w-72 xl:h-36"
                            />
                        </div>
                        
                        {/* Contact Details */}
                        <div className="text-center lg:text-left w-full lg:w-auto">
                            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-tr from-[#d42027] to-[#f15a24] bg-clip-text text-transparent">
                                CONTACT POLLO MIO 
                            </h2>

                            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg lg:text-xl">
                                    <span className="text-[#f15a24] text-base xs:text-lg sm:text-xl lg:text-2xl flex-shrink-0">
                                        <FaLocationDot/>
                                    </span>  
                                    <span className="break-words">Thazava Jn, Kattanam</span>
                                </div>
                                
                                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg lg:text-xl">
                                    <span className="text-[#f15a24] text-base xs:text-lg sm:text-xl lg:text-2xl flex-shrink-0">
                                        <MdOutlineMail/>
                                    </span>  
                                    <span className="break-all">pollomio@gmail.com</span>
                                </div>
                                
                                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg lg:text-xl">
                                    <span className="text-[#f15a24] text-base xs:text-lg sm:text-xl lg:text-2xl flex-shrink-0">
                                        <FaPhoneAlt/>
                                    </span> 
                                    <a 
                                        href="tel:+919207777331" 
                                        className="hover:text-[#f15a24] transition-colors duration-300 break-words"
                                    >
                                        +91 92077 77331
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keep In Touch Section - Fully Responsive */}
            <div className="bg-gray-50 py-8 xs:py-12 sm:py-16 lg:py-20 xl:py-24">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-center lg:text-left mb-6 sm:mb-8 lg:mb-12 text-gray-800">
                        Keep In Touch
                    </h2>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                        {/* Contact Form */}
                        <div className="bg-white p-4 xs:p-6 sm:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg order-2 xl:order-1">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                {/* First Row - Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="w-full">
                                        <label htmlFor="firstName" className="block text-gray-700 text-xs xs:text-sm sm:text-base font-medium mb-1 sm:mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="email" className="block text-gray-700 text-xs xs:text-sm sm:text-base font-medium mb-1 sm:mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                {/* Second Row - Phone and Subject */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="w-full">
                                        <label htmlFor="phone" className="block text-gray-700 text-xs xs:text-sm sm:text-base font-medium mb-1 sm:mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="subject" className="block text-gray-700 text-xs xs:text-sm sm:text-base font-medium mb-1 sm:mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="w-full">
                                    <label htmlFor="message" className="block text-gray-700 text-xs xs:text-sm sm:text-base font-medium mb-1 sm:mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-vertical min-h-[100px] sm:min-h-[120px]"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-2 sm:pt-4">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden order-1 xl:order-2">
                            <div className="h-64 xs:h-80 sm:h-96 lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-full">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7463988671316!2d76.55369307502076!3d9.177333790890044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061bf26dae1df5%3A0x5fb12b6da6648eb8!2sPollo%20Mio!5e0!3m2!1sen!2sin!4v1758825163118!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{border:0}} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="Pollo Mio Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default ContactPage
