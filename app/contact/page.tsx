import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QuoteForm } from '@/components/QuoteForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(337) 492-6772',
      action: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'rago_d1@icloud.com',
      action: 'mailto:rago_d1@icloud.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '1234 Highway Rd, City, ST 12345',
      action: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '24/7 Available',
      action: null,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/95 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions or ready to get a quote? We're here to help. Contact us today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Service Area */}
              <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Service Area</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We provide services across North America with primary coverage in:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cross-country routes (all US states)</li>
                  <li>• Canada border regions</li>
                  <li>• Regional routes up to 500 miles</li>
                  <li>• International freight coordination</li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll respond with a competitive quote within 24 hours.
                </p>

                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">15+</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Years of Experience</h3>
              <p className="text-muted-foreground">
                Proven track record of reliable, professional freight services
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">98%</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                Industry-leading delivery punctuality and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Available Support</h3>
              <p className="text-muted-foreground">
                Always available for urgent shipments and emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you respond to a quote request?',
                answer:
                  'We typically respond within 24 hours with a competitive quote. For urgent shipments, call us directly for immediate quotes.',
              },
              {
                question: 'Do you offer emergency/rush delivery?',
                answer:
                  'Yes! We have expedited services available 24/7. Rush fees apply, but we can usually accommodate urgent shipments.',
              },
              {
                question: 'What cargo types do you handle?',
                answer:
                  'We handle standard freight, hazmat, oversized cargo, specialized materials, and more. Contact us about your specific needs.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major payment methods including credit cards, wire transfers, and ACH payments. Invoicing available for established customers.',
              },
              {
                question: 'Can I track my shipment?',
                answer:
                  "Yes! Real-time GPS tracking is available for most shipments. You'll receive tracking information upon shipment confirmation.",
              },
              {
                question: 'Do you provide insurance?',
                answer:
                  'Yes, comprehensive insurance is included with all shipments. Additional coverage options are available upon request.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <p className="text-foreground mb-4">
              Have a question we didn't answer? Feel free to reach out directly!
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Us Now
              <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
