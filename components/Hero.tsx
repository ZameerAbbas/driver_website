import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Reliable Professional Truck Driver Services
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Over 15 years of trusted experience in freight transportation and logistics. Delivering your cargo safely and on time, every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-all"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-sm md:text-base text-primary-foreground/80">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10,000+</div>
            <p className="text-sm md:text-base text-primary-foreground/80">Miles Driven Safely</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-sm md:text-base text-primary-foreground/80">On-Time Delivery Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
