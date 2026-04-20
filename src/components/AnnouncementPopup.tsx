import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface Announcement {
  title: string
  description: string
  imageUrl?: string
}

export default function AnnouncementPopup() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null)
  const [open, setOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

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
    <>
      {/* Main Announcement Dialog */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-h-[90vh] max-w-2xl gap-0 overflow-hidden rounded-3xl p-0 shadow-2xl sm:max-w-3xl flex flex-col animate-in fade-in-50 zoom-in-95 duration-300">
          {/* Close Button */}
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white transition-colors">
            <X className="h-5 w-5 text-foreground" />
            <span className="sr-only">Close announcement</span>
          </DialogClose>

          {/* Image Section - Fixed at top, does not shrink */}
          {announcement.imageUrl && (
            <div className="relative overflow-hidden flex-shrink-0">
              <img
                src={announcement.imageUrl}
                alt={announcement.title}
                className="h-64 w-full object-cover object-top transition-transform duration-300 hover:scale-105 cursor-pointer sm:h-72"
                onClick={() => setLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLightboxOpen(true)
                  }
                }}
              />
            </div>
          )}

          {/* Content Section - Scrollable */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="space-y-4 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
                {announcement.title}
              </h2>

              {announcement.description && (
                <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                  {announcement.description}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox Preview Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-2xl p-4 sm:p-6 bg-black/95 border-0">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 hover:bg-white/30 transition-colors">
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Close lightbox</span>
          </DialogClose>

          <div className="flex items-center justify-center">
            <img
              src={announcement.imageUrl}
              alt={announcement.title}
              className="max-h-[80vh] w-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
