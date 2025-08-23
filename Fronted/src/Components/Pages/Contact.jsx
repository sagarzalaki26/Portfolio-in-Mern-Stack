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
        <section id="contact" className="bg-gray-950 text-white py-16" data-aos="fade-up">
            <div className="max-w-6xl mx-auto px-6 lg:px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h2>
                <p className="text-lg mb-10 opacity-80">Let’s connect and collaborate </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl">
                    
                    {/* Left - Contact Info */}
                    <div className="space-y-6 text-left">
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-2xl text-green-400" />
                            <span className="font-semibold">+91 7028158371</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-2xl text-green-400" />
                            <a
                                href="mailto:sagarzalaki26@gmail.com"
                                className="text-blue-400 hover:text-blue-300 font-semibold"
                            >
                                sagarzalaki26@gmail.com
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-6 mt-6 text-2xl">
                            <a href="https://in.linkedin.com/in/sagar-zalaki-403339285" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/sagarzalaki26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/sagar.zalaki.9/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://en-gb.facebook.com/sagar.zalaki.9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <form
                        className="space-y-4"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        <input type="hidden" name="access_key" value="1c563886-45d1-4030-91b3-3d7399af283e" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-purple-400 focus:outline-none placeholder-gray-400"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-purple-400 focus:outline-none placeholder-gray-400"
                            required
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-purple-400 focus:outline-none placeholder-gray-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                        >
                            Send Message ✉️
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
