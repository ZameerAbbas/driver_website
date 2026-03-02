import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Award, Truck, Users, Zap } from 'lucide-react'

export default function About() {
  const milestones = [
    {
      year: '2010',
      title: 'Started Operations',
      description: 'Founded POLO BOYZ TRANSPORT LLC with a commitment to reliable freight services',
    },
    {
      year: '2015',
      title: 'Expanded Fleet',
      description: 'Grew to multiple trucks and expanded service territory across regions',
    },
    {
      year: '2019',
      title: '50,000+ Shipments',
      description: 'Reached milestone of 50,000 successful shipments delivered on time',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as trusted partner for freight and logistics solutions',
    },
  ]

  const fleetInfo = [
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art trucks with latest safety and tracking technology',
      icon: Truck,
    },
    {
      title: 'Professional Team',
      description: 'Highly trained drivers with years of experience and safety records',
      icon: Users,
    },
    {
      title: 'Certified Standards',
      description: 'Fully licensed, insured, and compliant with all DOT regulations',
      icon: Award,
    },
    {
      title: 'Quick Response',
      description: 'Available 24/7 for urgent shipments and custom scheduling',
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/95 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Over 15 years of professional truck driving and logistics expertise, built on a foundation of reliability, safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                POLO BOYZ TRANSPORT LLC was founded with a simple mission: to provide reliable, professional freight transportation services that businesses can trust. What started as a single truck operation has grown into a respected name in the logistics industry.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that successful logistics is built on three pillars: reliability, professionalism, and customer service. Every shipment is handled with care, and every commitment is kept. Our customers aren't just clients—they're partners in success.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to grow while maintaining the values that made us successful: putting safety first, delivering on our promises, and treating every shipment as if it were our own.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-12 border border-accent/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <p className="text-foreground font-semibold">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50,000+</div>
                  <p className="text-foreground font-semibold">Successful Shipments</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-foreground font-semibold">On-Time Delivery Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-foreground font-semibold">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-24 bg-accent/20 mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-accent font-bold text-lg mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & Capabilities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Fleet & Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Current Fleet</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>2 Full-size Refrigerated Trucks (40ft trailers)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>2 Standard Flatbed Trailers (53ft)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>1 Specialized Hauling Unit with climate control</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>1 Regional Delivery Truck for local routes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>All equipped with GPS tracking and communication systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Regularly inspected and maintained to highest standards</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Safety First</h3>
              <p className="text-muted-foreground">
                Every shipment is handled with safety as our top priority. We follow all DOT regulations and industry best practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                We keep our commitments. When we say we'll be somewhere, we're there. On time, every time.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Transparent communication, fair pricing, and honest dealings with every customer, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Ready to partner with a trusted truck driver? Contact us for a consultation or quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get in Touch
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
