import { GraduationCap, Sparkles } from "lucide-react"

interface ApplicationsHeaderProps {
  totalApplications: number
}

export function ApplicationsHeader({ totalApplications }: ApplicationsHeaderProps) {
  return (
    <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <GraduationCap className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Applications
          </h1>
          <p className="text-sm text-muted-foreground">
            Sanskriti Kindergarten
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl bg-[#e6f7ec] px-4 py-2">
          <Sparkles className="size-4 text-secondary-foreground" />
          <span className="text-sm font-medium text-secondary-foreground">
            {totalApplications} Total Applications
          </span>
        </div>
      </div>
    </header>
  )
}
