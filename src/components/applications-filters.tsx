import { Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ApplicationsFiltersProps {
  statusFilter: string
  setStatusFilter: (value: string) => void
  fromDate: string
  setFromDate: (value: string) => void
  toDate: string
  setToDate: (value: string) => void
  onSearch: () => void
  onExport: () => void
}

export function ApplicationsFilters({
  statusFilter,
  setStatusFilter,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  onSearch,
  onExport,
}: ApplicationsFiltersProps) {
  return (
    <Card className="border border-border/50 shadow-lg rounded-3xl bg-white">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              From Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="pl-10 bg-muted/30"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              To Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="pl-10 bg-muted/30"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Status
            </label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full bg-muted/30">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Under Review</SelectItem>
                <SelectItem value="approved">Accepted</SelectItem>
                <SelectItem value="waitlisted">Waitlisted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={onSearch}
            className="h-9 gap-2 bg-primary hover:bg-primary/90"
          >
            <Search className="size-4" />
            Search
          </Button>
          <Button
            onClick={onExport}
            variant="outline"
            className="h-9 gap-2 border-primary text-primary hover:bg-primary/10"
          >
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
