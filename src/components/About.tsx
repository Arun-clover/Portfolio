import { Code, Palette, Zap } from "lucide-react";
import hero from "../img/hero.jpg";
const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that follows best practices and industry standards.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description:
        "Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless functionality across all devices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="w-full h-[fit-content] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={hero}
                    alt="photo"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              I’m a passionate Full-Stack Developer with hands-on experience in
              building modern, responsive, and efficient applications. Over the
              years, I’ve worked on projects ranging from management systems to
              fitness platforms, always focusing on clean code, user-friendly
              design, and high performance.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I enjoy exploring new technologies like React, React Native, and
              Tailwind CSS, and I’m constantly improving my skills to stay ahead
              in the ever-evolving tech world. Beyond development, I love
              contributing to open-source projects, experimenting with new
              ideas, and creating solutions that make an impact. My goal is
              simple: turn complex problems into seamless digital experiences
              while ensuring scalability, accessibility, and performance.
            </p>

            <div className="grid gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
