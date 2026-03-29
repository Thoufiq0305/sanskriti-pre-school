import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApplicationsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ApplicationsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ApplicationsPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="gap-1 bg-card hover:bg-sky-blue/30"
      >
        <ChevronLeft className="size-4" />
        Previous
      </Button>

      <div className="flex items-center gap-1 px-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex size-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-sky-blue/30"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="gap-1 bg-card hover:bg-sky-blue/30"
      >
        Next
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}
