import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Truck, Clock, Shield, Package, Navigation, Wrench, CheckCircle } from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Truck,
      title: 'Long-haul Freight',
      description: 'Cross-country transportation for all cargo types.',
      details: [
        'Interstate route expertise',
        'Full insurance coverage',
        'GPS tracking available',
        'Climate-controlled options',
        ' 24/7 customer support',
        'Competitive pricing',
      ],
    },
    {
      icon: Clock,
      title: 'Regional Delivery',
      description: 'Fast delivery within 500-mile radius.',
      details: [
        'Quick turnaround times',
        'Flexible scheduling',
        'Same-day pickup available',
        'Reliable routing',
        'Professional handling',
        'Frequent routes',
      ],
    },
    {
      icon: Shield,
      title: 'Specialized Hauling',
      description: 'Expert handling of hazmat, oversized, and specialty cargo.',
      details: [
        'Hazmat certification',
        'Oversized cargo capability',
        'Specialized equipment',
        'Safety compliance verified',
        'Expert crew trained',
        'Full liability coverage',
      ],
    },
    {
      icon: Package,
      title: 'Freight Management',
      description: 'Complete logistics and freight management solutions.',
      details: [
        'Shipment coordination',
        'Documentation handling',
        'Customs clearance support',
        'Multiple pickup/delivery',
        'Consolidation services',
        'Real-time visibility',
      ],
    },
    {
      icon: Navigation,
      title: 'Direct Routes',
      description: 'Point-to-point transportation without transshipment.',
      details: [
        'No intermediate stops',
        'Reduced damage risk',
        'Faster delivery times',
        'Lower costs',
        'Dedicated service',
        'Full control of cargo',
      ],
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored transportation solutions for unique needs.',
      details: [
        'Custom logistics planning',
        'Problem-solving expertise',
        'Flexible arrangements',
        'Volume discounts',
        'Long-term partnerships',
        'Personalized service',
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/95 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive truck driving and freight transportation solutions for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="mb-4 w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-card-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What's Included</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Standard Features</h3>
              <ul className="space-y-4">
                {[
                  'Professional driver with 15+ years experience',
                  'Well-maintained, modern truck',
                  'Comprehensive insurance coverage',
                  'Real-time GPS tracking',
                  'Flexible pickup and delivery',
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Premium Options</h3>
              <ul className="space-y-4">
                {[
                  'Climate-controlled transport',
                  'Expedited delivery (rush rates)',
                  'White glove service',
                  'Dedicated return loads',
                  'Volume discounts available',
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Competitive Pricing</h3>
          <p className="text-muted-foreground mb-6">
            Rates vary based on cargo type, distance, and special requirements. We offer competitive pricing with no hidden fees and transparent quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Request a Quote
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Right Solution</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Not sure which service is right for you? Contact us for a consultation.
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
