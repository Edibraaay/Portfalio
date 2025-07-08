"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  
    navigator.clipboard.writeText("edibraybecerra@gmail.com")
      .then(() => toast.success("Acabas de copiar mi correo, ¡espero tu mensaje! :)"))
      .catch(() => toast.error("No se pudo copiar el correo"));
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Photo */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
                <img
                  src="/yo.jpg"
                  alt="Profile"
                  className="relative w-full max-w-md mx-auto h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right side - Description */}
            <div className="animate-on-scroll">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Hello, I'm Edibray
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">Full Stack Developer</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I'm a passionate developer with over 3 years of experience creating digital experiences that combine
                  beautiful design with powerful functionality. I specialize in React, Python, and modern web
                  technologies, always striving to build products that make a difference.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies
                </p>
                <div className="flex gap-6 pt-4">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                  >
                    View My Work
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Skills Section - Code Style */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-center text-lg">My technical toolkit</p>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Code Editor Header */}
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">skills.js</div>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-8 font-mono text-sm">
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-gray-500 w-8">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-white ml-2">skills</span>
                    <span className="text-gray-400 ml-2">=</span>
                    <span className="text-yellow-400 ml-2">{"{"}</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">2</span>
                    <span className="text-blue-400 ml-4">frontend</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-green-400 ml-2">[</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">3</span>
                    <span className="text-orange-400 ml-8">'React'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Next.js'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Vue.js'</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">4</span>
                    <span className="text-orange-400 ml-8">'JavaScript'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'TypeScript'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'CSS'</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">5</span>
                    <span className="text-green-400 ml-4">]</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">6</span>
                    <span className="text-blue-400 ml-4">backend</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-green-400 ml-2">[</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">7</span>
                    <span className="text-orange-400 ml-8">Python'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Flask'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'C#'</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">8</span>
                    <span className="text-orange-400 ml-8">'Mysql'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Microsoft SQL Server'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'MongoDB'</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">9</span>
                    <span className="text-green-400 ml-4">]</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">10</span>
                    <span className="text-blue-400 ml-4">tools</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-green-400 ml-2">[</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">11</span>
                    <span className="text-orange-400 ml-8">'Git'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Docker'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'AWS'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Nginx'</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">12</span>
                    <span className="text-orange-400 ml-8">'Linux'</span>
                    <span className="text-gray-400">,</span>
                    <span className="text-orange-400 ml-2">'Gunicorn'</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">13</span>
                    <span className="text-green-400 ml-4">]</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">14</span>
                    <span className="text-yellow-400">{"}"}</span>
                  </div>

                  <div className="flex mt-6">
                    <span className="text-gray-500 w-8">15</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">16</span>
                    <span className="text-gray-500">// Always learning and exploring new technologies</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-500 w-8">17</span>
                    <span className="text-purple-400">export</span>
                    <span className="text-purple-400 ml-2">default</span>
                    <span className="text-white ml-2">skills</span>
                    <span className="text-gray-400">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-gray-400 text-center text-lg">My journey in tech</p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Software Engineer",
                company: "Inventec.",
                period: "July 2025 - Present",
                description:
                  "Developed full stack web applications using dot-net and microsoft sql server ocusing on performance optimization and maintaining a clean codebase.",  
                achievements: [
                  "Developed full stack web application to manage inventory of buys",
                  "Refactored and optimizied code to improve performance and maintainability",
                  "Innovated new features to enhance user experience",
                ],
              },
              {
                title: "Lead Full Stack Developer",
                company: "Fideapech",
                period: "October 2024 - July 2025",
                description:
                  " Provided technical leadership in the development of new ERP modules, coordinated the development team, and made key architectural decisions.",
                achievements: [
                  "Redesigned and implemented a new ERP module, utilizing modern React and Python technologies.",
                  "Fully automated and streamlined the development process",
                  "Led the development team and managed the project's timeline",
                ],
              },
              {
                title: "Full Stack Developer",
                company: "Fideapech",
                period: "Setpember 2023 - October 2024",
                description:
                  "Designed and implemented an internal ERP system,transforming administrative processes into fully digital workflows.",
                achievements: [
                  "Developed and managed an external ERP system that automated processes across multiple government departments.",
                  "Deployed and maintained high-performance web applications using Nginx and Gunicorn, ensuring scalability andreliability",
                  "Managed and optimized the database infrastructure, ensuring data integrity and security",
                ],
              },
            ].map((job, index) => (
              <div key={index} className="animate-on-scroll">
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <p className="text-blue-400 text-lg font-semibold">{job.company}</p>
                      </div>
                      <div className="text-gray-400 font-medium mt-2 lg:mt-0">{job.period}</div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Alternating Layout */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-center text-lg">Some of my recent work</p>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "Bella Vista Restaurant",
                description:
                  "A landing page for a new restaurant, showcasing a sleek and modern design with a focus on user experience. The page is optimized for mobile devices and includes a fast loading speed.",
                image: "/rest.png",
                
              },
              {
                title: "Top Dental Clinic",
                description:
                  "A responsive and user-friendly website for a dental clinic, featuring a clean and modern design with a focus on accessibility and SEO. The site includes a blog section, contact form, and is built with React and Tailwind CSS.",
                image: "/dental.png",
                
              },
              {
                title: "Alex Noir Photography",
                description:
                  "A comprehensive website for a photographer, showing his work and providing a platform for his clients to book shoots. The site is built with React and Tailwind CSS.",
                image: "/foto.png",
                
              },
            ].map((project, index) => (
              <div key={index} className="animate-on-scroll">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Project Image */}
                  <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            <div className="flex justify-center gap-6 mb-12">
            <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
  Get In Touch
</h1>

            </div>
            <div className="flex justify-center gap-8">
              <a href="https://github.com/Edibraaay" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/edibray-bg/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
              <a
  href="#"
  onClick={(e) => handleCopyEmail(e)} 
  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 cursor-pointer"
>
  <Mail className="w-8 h-8" />
</a>


      {/* Agrega esto solo una vez, probablemente en tu App.jsx o layout */}
      <ToastContainer position="bottom-right" autoClose={3000} />

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Edibray. Built with React and ❤️.</p>
        </div>
      </footer>
    </div>
  )
}
