'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-bold text-lg">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">P</span>
              </div>
              <span>POLO BOYZ TRANSPORT LLC</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional truck driver providing reliable freight and logistics services with years of proven experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services" className="hover:text-accent transition-colors">
                  Long-haul Freight
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">
                  Regional Delivery
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">
                  Specialized Hauling
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (337) 492-6772
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:rago_d1@icloud.com" className="hover:text-accent transition-colors">
                  rago_d1@icloud.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>129 SAN SEBASTIAN DR, YOUNGSVILLE, LA, 705925</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} POLO BOYZ TRANSPORT LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
