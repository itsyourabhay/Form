// components/Experience.tsx
import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            company: "Language and Learning Foundation",
            role: "Backend Developer",
            duration: "Aug 2024 - Present",
            location: "Delhi, India",
            type: "Full-time • Hybrid"
        },
        {
            company: "iDesign.Market",
            role: "Backend Developer",
            duration: "Jun 2024 - Aug 2024",
            location: "Delhi, India",
            type: "Full-time • On-site"
        },
        {
            company: "LeadMint",
            role: "Backend Developer",
            duration: "May 2024 - Jun 2024",
            location: "Noida, Uttar Pradesh, India",
            type: "Full-time • On-site"
        },
        {
            company: "LeadMint",
            role: "Backend Developer Intern",
            duration: "Feb 2024 - May 2024",
            location: "Noida, Uttar Pradesh, India",
            type: "Internship"
        }
    ]

    return (
        <section id="experience" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Work Experience
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                            <h4 className="text-lg text-blue-600 mt-2">{exp.company}</h4>
                            <p className="text-gray-600 mt-2">{exp.duration}</p>
                            <p className="text-gray-500">{exp.location}</p>
                            <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                                {exp.type}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience