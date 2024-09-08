'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 relative z-10">
          Contact Us
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have a project in mind or want to learn more about our services? We&apos;re here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span>info@prossima.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Consultation</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ready to discuss your project in detail? Schedule a free consultation with one of our experts. We&apos;ll analyze your needs and provide tailored recommendations for your business.
        </p>
        <Button size="lg" className="rounded-full">Book a Consultation</Button>
      </div>
    </div>
  )
}