import { UserGroupIcon, LightBulbIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function About() {
  const values = [
    { icon: UserGroupIcon, title: "Client-Centric", description: "We prioritize our clients&apos; success, working closely to understand and meet their unique needs." },
    { icon: LightBulbIcon, title: "Innovation", description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions." },
    { icon: ChartBarIcon, title: "Excellence", description: "We strive for excellence in every project, ensuring the highest quality in our deliverables." },
    { icon: GlobeAltIcon, title: "Global Perspective", description: "We bring a global perspective to local challenges, leveraging diverse experiences and insights." },
  ];

  const teamMembers = [
    {
      name: "Jane Doe",
      designation: "CEO & Founder",
      image: "/team/jane-doe.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/janedoe",
        twitter: "https://twitter.com/janedoe",
        github: "https://github.com/janedoe"
      }
    },
    {
      name: "John Smith",
      designation: "CTO",
      image: "/team/john-smith.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        github: "https://github.com/johnsmith"
      }
    },
    {
      name: "Emily Brown",
      designation: "Lead Designer",
      image: "/team/emily-brown.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/emilybrown",
        twitter: "https://twitter.com/emilybrown",
        github: "https://github.com/emilybrown"
      }
    },
    {
      name: "Michael Lee",
      designation: "Senior Developer",
      image: "/team/michael-lee.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/michaellee",
        twitter: "https://twitter.com/michaellee",
        github: "https://github.com/michaellee"
      }
    }
  ];

  return (
    <div className="py-8">
      <section className="text-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 relative z-10">
          About Prossima
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto relative z-10 px-4">
          Empowering businesses through innovative software solutions and a commitment to excellence.
        </p>
      </section>

      <section className=''>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Company</h2>
        <Card className="p-12 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 overflow-hidden relative group mx-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-teal-400/0 group-hover:from-blue-600/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
          <CardContent className="relative z-10 space-y-6">
            <p className="text-lg">Prossima is a leading software development company dedicated to empowering businesses through innovative technology solutions. Founded in 2010, we have grown from a small startup to a global team of over 200 passionate technologists, designers, and problem solvers.</p>
            <p className="text-lg">Our mission is to bridge the gap between complex business challenges and cutting-edge technology. We specialize in creating custom software solutions, cloud applications, and digital transformation strategies that help our clients stay ahead in today&apos;s rapidly evolving digital landscape.</p>
            <p className="text-lg">With a track record of successful projects across various industries, including finance, healthcare, e-commerce, and manufacturing, we have built a reputation for delivering high-quality, scalable, and user-centric solutions that drive real business value.</p>
          </CardContent>
        </Card>
      </section>

      <section className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {values.map((value, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-background to-background/90 border-t-4 border-blue-500">
              <value.icon className="h-20 w-20 text-blue-600 mb-6" />
              <CardTitle className="mb-4 text-2xl">{value.title}</CardTitle>
              <CardDescription className="text-base">{value.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-all duration-300">
              <Image
                src={member.image}
                alt={member.name}
                width={180}
                height={180}
                className="rounded-full mb-6"
              />
              <CardTitle className="mb-3 text-2xl">{member.name}</CardTitle>
              <CardDescription className="text-base mb-6">{member.designation}</CardDescription>
              <div className="flex space-x-6">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={28} />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={28} />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                  <FaGithub size={28} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Approach</h2>
        <Card className="p-12 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 overflow-hidden relative group mx-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-teal-400/0 group-hover:from-blue-600/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
          <CardContent className="relative z-10 space-y-6">
            <p className="text-lg">At Prossima, we believe in a collaborative and agile approach to software development. Our team works closely with clients to understand their unique challenges and deliver tailored solutions that drive business growth and efficiency.</p>
            <p className="text-lg">We foster a culture of innovation, continuous learning, and open communication. Our team members are encouraged to think creatively, share ideas, and stay up-to-date with the latest industry trends and technologies.</p>
            <p className="text-lg">With years of experience in developing software for various business needs, we specialize in creating scalable, secure, and user-friendly applications. From web and mobile apps to enterprise solutions, we have the skills and knowledge to tackle complex projects across different industries.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}