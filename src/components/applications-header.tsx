import { useState } from "react"
import { GraduationCap, Sparkles, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnnouncementManageModal from "@/components/AnnouncementManageModal"

interface ApplicationsHeaderProps {
  totalApplications: number
}

export function ApplicationsHeader({ totalApplications }: ApplicationsHeaderProps) {
  const [announcementOpen, setAnnouncementOpen] = useState(false)

  return (
    <>
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
          <Button variant="outline" onClick={() => setAnnouncementOpen(true)}>
            <Megaphone className="mr-1 size-4" /> Manage Announcement
          </Button>
          <div className="flex items-center gap-2 rounded-xl bg-[#e6f7ec] px-4 py-2">
            <Sparkles className="size-4 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">
              {totalApplications} Total Applications
            </span>
          </div>
        </div>
      </header>
      <AnnouncementManageModal open={announcementOpen} onOpenChange={setAnnouncementOpen} />
    </>
  )
}
