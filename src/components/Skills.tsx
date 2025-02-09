// components/Skills.tsx
import { motion } from 'framer-motion'

const Skills = () => {
    const skills = [
        "Node.js", "Express.js", "MySQL", "TypeScript", "JavaScript",
        "MongoDB", "Firebase", "PostgreSQL", "REST APIs",
        "Backend Development", "Web Development", "Debugging"
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="skills" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Skills
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white rounded-lg shadow-md p-4 text-center 
                        hover:bg-blue-600 hover:text-white transition-all duration-300
                        transform hover:-translate-y-1 cursor-pointer"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills