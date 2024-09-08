import { CpuChipIcon, CloudArrowUpIcon, ArrowPathIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    { 
      icon: CpuChipIcon, 
      title: "Custom Software Development", 
      description: "We create tailor-made solutions that align perfectly with your business processes and goals. Our team of expert developers crafts scalable, efficient, and innovative software to solve your complex business challenges.",
      details: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    { 
      icon: CloudArrowUpIcon, 
      title: "Cloud Solutions", 
      description: "Leverage the power of cloud computing with our scalable and secure cloud-based applications. We help you enhance your business operations, improve collaboration, and reduce infrastructure costs.",
      details: ["Cloud Migration", "Serverless Architecture", "Cloud-Native Development", "DevOps Implementation"]
    },
    { 
      icon: ArrowPathIcon, 
      title: "Digital Transformation", 
      description: "Embark on a journey of digital transformation with our comprehensive strategies. We help you modernize your business processes, adopt new technologies, and stay ahead of the competition in the digital age.",
      details: ["Process Automation", "Legacy System Modernization", "Data Analytics", "IoT Integration"]
    },
    { 
      icon: RocketLaunchIcon, 
      title: "AI & Machine Learning Integration", 
      description: "Harness the power of artificial intelligence and machine learning to gain valuable insights and automate complex tasks. Our intelligent systems learn and adapt to provide cutting-edge solutions for your business.",
      details: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    },
    { 
      icon: ShieldCheckIcon, 
      title: "Cybersecurity Solutions", 
      description: "Protect your digital assets with our robust cybersecurity solutions. We implement cutting-edge security measures to safeguard your data and systems from evolving threats.",
      details: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Compliance Management"]
    },
    { 
      icon: ChartBarIcon, 
      title: "Business Intelligence", 
      description: "Transform your data into actionable insights with our business intelligence solutions. We help you make data-driven decisions to optimize operations and drive growth.",
      details: ["Data Warehousing", "Dashboard Development", "Predictive Analytics", "Data Visualization"]
    },
    { 
      icon: DevicePhoneMobileIcon, 
      title: "Mobile App Development", 
      description: "Create engaging and user-friendly mobile applications for iOS and Android platforms. We develop native and cross-platform apps tailored to your specific needs.",
      details: ["iOS Development", "Android Development", "Cross-Platform Apps", "Mobile UI/UX Design"]
    },
    { 
      icon: GlobeAltIcon, 
      title: "E-commerce Solutions", 
      description: "Build and optimize your online presence with our comprehensive e-commerce solutions. We help you create seamless shopping experiences and maximize your online sales potential.",
      details: ["Custom E-commerce Platforms", "Payment Gateway Integration", "Inventory Management", "Customer Analytics"]
    },
  ];

  return (
    <div className="py-8">
      <section className="text-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 relative z-10">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto relative z-10 px-4">
          Discover how our innovative solutions can transform your business and drive growth in the digital era.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-teal-400/0 group-hover:from-blue-600/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
              <service.icon className="h-16 w-16 text-blue-600 mb-6 relative z-10" />
              <CardTitle className="mb-4 text-2xl relative z-10">{service.title}</CardTitle>
              <CardDescription className="text-base relative z-10 mb-4">{service.description}</CardDescription>
              <ul className="list-disc list-inside text-sm text-muted-foreground relative z-10">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}