// components/Hero.tsx
import { motion } from 'framer-motion' // Install framer-motion: npm install framer-motion

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center text-center">  {/* Add w-full here */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Abhay Singh Chauhan
                </h1>
                <h2 className="text-2xl md:text-3xl text-blue-600">
                    Backend Development Expert
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600">
                    {['Node.js', 'Express', 'MySQL', 'TypeScript', 'Firebase', 'PostgreSQL'].map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Hero