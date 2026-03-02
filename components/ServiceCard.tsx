import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
}: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group">
      <div className="mb-4 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
        <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
      </div>

      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>

      <p className="text-muted-foreground mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-accent font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
