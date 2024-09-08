import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform Overhaul",
      description: "Redesigned and optimized a major e-commerce platform, resulting in a 40% increase in conversion rates and improved user experience.",
      image: "/portfolio/ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "AI-Powered Customer Service Bot",
      description: "Developed an intelligent chatbot using natural language processing, reducing customer service response times by 60%.",
      image: "/portfolio/ai-chatbot.jpg",
      technologies: ["Python", "TensorFlow", "DialogFlow", "Google Cloud"]
    },
    {
      title: "Blockchain-based Supply Chain Solution",
      description: "Implemented a transparent and secure supply chain management system using blockchain technology for a global manufacturing company.",
      image: "/portfolio/blockchain-supply-chain.jpg",
      technologies: ["Ethereum", "Solidity", "React", "Node.js"]
    },
    {
      title: "Mobile Health Tracking App",
      description: "Created a cross-platform mobile app for health tracking and personalized wellness recommendations, garnering over 1 million downloads.",
      image: "/portfolio/health-app.jpg",
      technologies: ["React Native", "Firebase", "TensorFlow Lite", "HealthKit"]
    }
  ];

  return (
    <div className="space-y-24">
      <section className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 relative z-10">
          Our Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto relative z-10">
          Explore our showcase of innovative solutions that have transformed businesses across industries.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}