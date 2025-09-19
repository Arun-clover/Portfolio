
const Skills = () => {
  // Add the animation keyframes
  const animationStyle = `
    @keyframes fillBar {
      from { width: 0; }
      to { width: var(--skill-level); }
    }
  `;
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level:85 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 50 },
        { name: "Vite", level: 50 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 89 },
        { name: "Express", level: 89 },
        { name: "MongoDB", level: 75 },
        { name: "Mongoose", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Github", level: 85 },
       ]
    }
  ];

  return (
    <>
      <style>{animationStyle}</style>
      <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          width: `${skill.level}%`,
                          animation: `fillBar 1s ease-out ${skillIndex * 0.1}s both`
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning and staying up-to-date with the latest trends and best practices.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
 );
};

export default Skills;