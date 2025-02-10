// components/Hero.tsx
import { motion } from 'framer-motion'
import profileImage from '../assets/profileImage.png' // Add your image to assets folder

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Profile Image with Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="relative w-64 h-64 md:w-80 md:h-80"
                >
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />

                    {/* Image Container */}
                    <motion.div
                        className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={profileImage}
                            alt="Abhay Singh Chauhan"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        Abhay Singh Chauhan
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
                        Backend Development Expert
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {['Node.js', 'Express', 'MySQL', 'TypeScript', 'Firebase', 'PostgreSQL'].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 
                                         transition-colors shadow-md hover:shadow-lg"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero