import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  company: string
  text: string
  rating?: number
}

export function TestimonialCard({
  name,
  company,
  text,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-card-foreground mb-6 italic">"{text}"</p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-card-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </div>
  )
}
