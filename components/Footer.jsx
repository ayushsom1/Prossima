import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Prossima</h3>
            <p className="text-muted-foreground">Providing innovative software solutions for your business needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Button variant="link" asChild className="p-0 h-auto font-normal">
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-muted-foreground not-italic">
              <p>123 Tech Street, Silicon Valley, CA 94000</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@prossima.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-muted-foreground hover:text-primary transition duration-300">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social.toLowerCase()}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Prossima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}