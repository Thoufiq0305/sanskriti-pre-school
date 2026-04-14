import { useState, useEffect, useRef } from "react"
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Trash2, Upload, Image as ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const ANNOUNCEMENT_DOC = doc(db, "settings", "announcement")

interface AnnouncementManageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AnnouncementManageModal({ open, onOpenChange }: AnnouncementManageModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imagePreview, setImagePreview] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [exists, setExists] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (open) fetchAnnouncement()
  }, [open])

  const fetchAnnouncement = async () => {
    setFetching(true)
    try {
      const snap = await getDoc(ANNOUNCEMENT_DOC)
      if (snap.exists()) {
        const data = snap.data()
        setTitle(data.title || "")
        setDescription(data.description || "")
        setImagePreview(data.imageUrl || "")
        setExists(true)
      } else {
        setTitle("")
        setDescription("")
        setImagePreview("")
        setExists(false)
      }
    } catch (e) {
      console.error("Error fetching announcement:", e)
    } finally {
      setFetching(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleSave = async () => {
    if (!title.trim()) {
      toast({ title: "Title is required", variant: "destructive" })
      return
    }
    setLoading(true)
    try {
      await setDoc(ANNOUNCEMENT_DOC, {
        title: title.trim(),
        description: description.trim(),
        imageUrl: imagePreview,
        createdAt: serverTimestamp(),
      })
      setExists(true)
      toast({ title: exists ? "Announcement updated!" : "Announcement created!" })
    } catch (e) {
      console.error(e)
      toast({ title: "Failed to save", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteDoc(ANNOUNCEMENT_DOC)
      setTitle("")
      setDescription("")
      setImagePreview("")
      setExists(false)
      toast({ title: "Announcement deleted" })
    } catch (e) {
      console.error(e)
      toast({ title: "Failed to delete", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{exists ? "Edit Announcement" : "Add Announcement"}</DialogTitle>
          <DialogDescription>
            {exists ? "Update or delete the current announcement." : "Create an announcement to display on the home page."}
          </DialogDescription>
        </DialogHeader>

        {fetching ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Summer Camp" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Description</label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Announcement details..." rows={3} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Image</label>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="h-40 w-full rounded-lg object-cover" />
                  <Button size="sm" variant="secondary" className="absolute bottom-2 right-2" onClick={() => fileRef.current?.click()}>
                    <Upload className="mr-1 size-3" /> Change
                  </Button>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <div className="flex flex-col items-center gap-1">
                    <ImageIcon className="size-6" />
                    <span className="text-xs">Click to upload</span>
                  </div>
                </button>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleSave} disabled={loading} className="flex-1">
                {loading ? <Loader2 className="mr-1 size-4 animate-spin" /> : null}
                {exists ? "Update Announcement" : "Add Announcement"}
              </Button>
              {exists && (
                <Button variant="destructive" onClick={handleDelete} disabled={loading}>
                  <Trash2 className="size-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
