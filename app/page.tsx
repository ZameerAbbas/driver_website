import Link from 'next/link'
import { Truck, Clock, Shield, MapPin, Users, BarChart3 } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: 'Long-haul Freight',
      description: 'Cross-country transportation for all cargo types with full insurance coverage.',
      features: ['Interstate routes', 'Climate controlled', 'Real-time tracking'],
    },
    {
      icon: Clock,
      title: 'Regional Delivery',
      description: 'Fast and reliable regional delivery services within 500 miles.',
      features: ['Quick turnaround', 'Flexible scheduling', 'Same-day pickup'],
    },
    {
      icon: Shield,
      title: 'Specialized Hauling',
      description: 'Handling hazmat, oversized, and specialty cargo with expert care.',
      features: ['Certified equipment', 'Safety compliance', 'Expert handling'],
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'ABC Manufacturing',
      text: 'Outstanding service! Our shipments arrived perfectly on time and in excellent condition. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Tech Logistics Inc.',
      text: 'Professional, reliable, and always communicative. The best freight partner we have found.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Retail Distributors Co.',
      text: 'Consistent quality and competitive pricing. We trust them with our most important shipments.',
      rating: 5,
    },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive coverage for all cargo and liability protection',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: '15+ years of experience with safety as our top priority',
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Serving routes across North America with reliability',
    },
    {
      icon: BarChart3,
      title: '98% On-Time',
      description: 'Industry-leading delivery punctuality rate',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver more than just freight. We deliver reliability, professionalism, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4 group hover:bg-accent transition-all">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses for reliable, professional freight services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get a free quote today. Our team will respond within 24 hours with competitive pricing and flexible options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Request a Quote Now
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
