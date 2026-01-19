"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Database, Code, Server, Layout, Terminal, Cpu, Sparkles } from "lucide-react";

export default function Skills() {
    // Get items safely from each skill category
    const getSkillItems = (category: string): string[] => {
        switch (category) {
            case "languages":
                return skills.languages || [];
            case "frontend":
                return skills.frontend?.items || [];
            case "backend":
                return skills.backend?.items || [];
            case "databases":
                return [
                    ...(skills.databases?.sql || []),
                    ...(skills.databases?.nosql || []),
                    ...(skills.databases?.vector || []),
                ];
            case "devops":
                return skills.devops?.items || [];
            case "aiml":
                return skills.aiml?.items || [];
            default:
                return [];
        }
    };

    const skillCategories = [
        {
            name: "Languages",
            key: "languages",
            icon: <Code size={24} />,
            color: "from-blue-500 to-indigo-600",
            iconBg: "bg-blue-500/10 text-blue-500"
        },
        {
            name: "Frontend",
            key: "frontend",
            icon: <Layout size={24} />,
            color: "from-purple-500 to-pink-600",
            iconBg: "bg-purple-500/10 text-purple-500"
        },
        {
            name: "Backend & APIs",
            key: "backend",
            icon: <Server size={24} />,
            color: "from-emerald-500 to-teal-600",
            iconBg: "bg-emerald-500/10 text-emerald-500"
        },
        {
            name: "Databases",
            key: "databases",
            icon: <Database size={24} />,
            color: "from-orange-500 to-red-600",
            iconBg: "bg-orange-500/10 text-orange-500"
        },
        {
            name: "AI & Machine Learning",
            key: "aiml",
            icon: <Cpu size={24} />,
            color: "from-rose-500 to-pink-600",
            iconBg: "bg-rose-500/10 text-rose-500"
        },
        {
            name: "DevOps & Tools",
            key: "devops",
            icon: <Terminal size={24} />,
            color: "from-slate-500 to-zinc-600",
            iconBg: "bg-slate-500/10 text-slate-500"
        },
    ];

    return (
        <section id="skills" className="section-padding bg-bg-secondary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-copper-500/10 to-teal-500/10 border border-copper-500/20 text-copper-600 dark:text-copper-400 text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>Technical Skills</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit for building scalable, intelligent distributed systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const items = getSkillItems(category.key);

                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-bg-primary rounded-2xl overflow-hidden border border-border hover:border-copper-500/30 transition-all duration-500 hover:shadow-xl"
                            >
                                {/* Gradient top accent */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${category.color}`}></div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-xl ${category.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="font-display text-xl font-bold">{category.name}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
                                                className="px-3 py-1.5 bg-bg-secondary text-sm font-medium rounded-lg text-text-secondary hover:text-copper-500 hover:bg-copper-500/10 transition-all cursor-default border border-transparent hover:border-copper-500/20"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
