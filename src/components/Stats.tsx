import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/AnimatedSection"
import { AnimatedListItem } from "@/components/AnimatedListItem"
import type { StatMetric } from "@/data/stats"

type StatsProps = {
  metrics: StatMetric[]
}

export function Stats({ metrics }: StatsProps) {
  return (
    <AnimatedSection id="stats" className="mx-auto max-w-6xl py-16">
      {(isInView) => (
        <>
          <h2 className="mb-8 text-2xl font-semibold">Statistics & Insights</h2>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <AnimatedListItem
                key={metric.id}
                index={index}
                isInView={isInView}
                className="h-full"
              >
                <Card className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </Card>
              </AnimatedListItem>
            ))}
          </div>
        </>
      )}
    </AnimatedSection>
  )
}
