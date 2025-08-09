import React from 'react';

const skills = [
    { name: 'C', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'Python', level: 65 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 60 },
    {name:'React',level:50},
    {name:'Node Js',level:30},
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Bootstrap CSS', level: 70 },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-950" data-aos="fade-up">
            <div className='max-w-4xl mx-auto p-8 text-white'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400 text-center">My Skills</h2>
                <p className="text-lg mb-8 opacity-80 text-center">Technologies I work with</p>

                <div className="space-y-6">
                    {skills.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="opacity-70">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 h-3 rounded-full">
                                <div
                                    className="h-3 bg-green-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Skills;
