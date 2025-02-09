// components/Contact.tsx
import { motion } from 'framer-motion'
import { FiMail, FiMapPin } from 'react-icons/fi'

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add form submission logic here
    }

    return (
        <section id="contact" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600">
                        Let's connect and explore opportunities to collaborate on exciting projects!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white rounded-xl shadow-lg p-8"
                >
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                     transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-col items-center space-y-4"
                >
                    <div className="flex items-center space-x-2 text-gray-600">
                        <FiMail className="text-blue-600" />
                        <span>
                            <a href="mailto:contact@abhaysinghchauhan.com" className="hover:text-blue-600 transition-colors">
                                contact@abhaysinghchauhan.com
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <FiMapPin className="text-blue-600" />
                        <span>Delhi, India</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact