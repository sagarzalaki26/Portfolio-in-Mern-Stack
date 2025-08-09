import React from 'react';
import {
    FaPhone,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaFacebook,
} from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-950 text-white" data-aos="fade-up">
            <div className='max-w-4xl mx-auto p-8 text-center'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                    <p className="text-lg mb-6">Let's connect and discuss opportunities!</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-2xl text-green-400" />
                                <span className="font-semibold">+91 7028158371</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-2xl text-green-400" />
                                <a
                                    href="mailto:sagarzalaki26@gmail.com"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
                                >
                                    sagarzalaki26@gmail.com
                                </a>
                            </div>

                            <div className="flex space-x-4 mt-6 text-2xl">
                                <a href="https://in.linkedin.com/in/sagar-zalaki-403339285" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/sagarzalaki26" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/sagar.zalaki.9/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <FaInstagram />
                                </a>
                                <a href="https://en-gb.facebook.com/sagar.zalaki.9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form
                            className="space-y-4 mt-6 md:mt-0"
                            action="https://api.web3forms.com/submit"
                            method="POST"
                        >
                            <input type="hidden" name="access_key" value="1c563886-45d1-4030-91b3-3d7399af283e" />

                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                                required
                            />

                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Message"
                                className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold w-full transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
