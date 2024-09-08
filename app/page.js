import dynamic from 'next/dynamic';
import Link from 'next/link'
import { CodeBracketIcon, UserGroupIcon, LightBulbIcon, CpuChipIcon, CloudArrowUpIcon, ArrowPathIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"


const DynamicFooter = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="space-y-16 pt-20">
      {/* Hero Section */}
      <section className="text-center relative py-14">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <h1 className="leading-relaxed text-5xl md:text-6xl font-extrabold mb-8 p-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 relative ">
          Empowering Businesses Through Innovation
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto relative px-4">
          <span className="text-muted-foreground">We create cutting-edge software solutions tailored to your unique business challenges, driving growth and efficiency in the digital age.</span>
          <br />
          <Button asChild size="lg" variant="primary" className="rounded-full text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </p>
      </section>

      {/* Core Values */}
      <section className="pt-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {[ 
            { icon: CodeBracketIcon, title: "Innovative Solutions", description: "Leveraging cutting-edge technologies to build robust, scalable software that pushes boundaries." },
            { icon: UserGroupIcon, title: "Client-Centric Approach", description: "Your success is our priority. We collaborate closely to understand and exceed your unique needs." },
            { icon: LightBulbIcon, title: "Continuous Learning", description: "Staying at the forefront of industry trends to deliver state-of-the-art solutions that drive your business forward." },
          ].map((value, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-background to-background/90 border-t-4 border-blue-500">
              <value.icon className="h-20 w-20 text-blue-600 mb-6" />
              <CardTitle className="mb-4 text-2xl">{value.title}</CardTitle>
              <CardDescription className="text-base">{value.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {[
            { icon: CpuChipIcon, title: "Custom Software Development", description: "Tailor-made solutions that align perfectly with your business processes and goals." },
            { icon: CloudArrowUpIcon, title: "Cloud Solutions", description: "Scalable and secure cloud-based applications to enhance your business operations." },
            { icon: ArrowPathIcon, title: "Digital Transformation", description: "Comprehensive strategies to modernize your business and stay ahead of the competition." },
            { icon: RocketLaunchIcon, title: "AI & Machine Learning Integration", description: "Intelligent systems that learn and adapt, providing valuable insights and automation." },
          ].map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-teal-400/0 group-hover:from-blue-600/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
              <service.icon className="h-16 w-16 text-blue-600 mb-6 relative z-10" />
              <CardTitle className="mb-4 text-2xl relative z-10">{service.title}</CardTitle>
              <CardDescription className="text-base relative z-10">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" asChild className="rounded-full text-lg px-10 py-6 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-400 text-white p-8 rounded-lg text-center shadow-xl mx-2">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">Let&apos;s discuss how our innovative software solutions can propel your business forward in the digital landscape.</p>
        <Button asChild size="lg" variant="secondary" className="rounded-full text-lg px-10 py-7 bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}