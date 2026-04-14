import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Announcement {
  title: string
  description: string
  imageUrl?: string
}

export default function AnnouncementPopup() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("announcement_dismissed")
    if (alreadyShown) return

    const fetch = async () => {
      try {
        const snap = await getDoc(doc(db, "settings", "announcement"))
        if (snap.exists()) {
          setAnnouncement(snap.data() as Announcement)
          setOpen(true)
        }
      } catch (e) {
        console.error("Error fetching announcement:", e)
      }
    }
    fetch()
  }, [])

  const handleClose = (val: boolean) => {
    if (!val) sessionStorage.setItem("announcement_dismissed", "true")
    setOpen(val)
  }

  if (!announcement) return null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{announcement.title}</DialogTitle>
          <DialogDescription className="sr-only">Announcement details</DialogDescription>
        </DialogHeader>
        {announcement.imageUrl && (
          <img src={announcement.imageUrl} alt={announcement.title} className="h-48 w-full rounded-lg object-cover" />
        )}
        {announcement.description && (
          <p className="text-sm text-muted-foreground whitespace-pre-line">{announcement.description}</p>
        )}
      </DialogContent>
    </Dialog>
  )
}
