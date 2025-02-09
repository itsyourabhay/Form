// components/About.tsx
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        About Me
                    </h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p className="text-lg">
                            I'm a passionate and results-driven backend developer based in Delhi, India.
                            Born in 2002, I bring a fresh perspective to the ever-evolving world of technology.
                        </p>
                        <p className="text-lg">
                            My expertise lies in crafting robust web applications and backend systems using
                            Node.js, MongoDB, Express.js, JavaScript, MySQL, and TypeScript.
                        </p>
                        <p className="text-lg">
                            I thrive on challenges and am committed to continuous learning, whether it's
                            optimizing performance, enhancing user experiences, or solving complex problems.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About