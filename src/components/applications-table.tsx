import { User, Phone, Calendar, Baby, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Application } from "@/pages/Applications"

type SortField = "studentName" | "createdAt" | null
type SortDir = "asc" | "desc"

interface ApplicationsTableProps {
  applications: Application[]
  onStatusChange: (id: string, status: Application["status"]) => void
  sortField: SortField
  sortDir: SortDir
  onSort: (field: SortField) => void
}

function SortIcon({ field, sortField, sortDir }: { field: SortField; sortField: SortField; sortDir: SortDir }) {
  if (sortField !== field) return <ArrowUpDown className="size-3 text-muted-foreground" />
  return sortDir === "asc" ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />
}

function StatusBadge({ status }: { status: Application["status"] }) {
  const styles = {
    pending: "bg-[#fff4d6] text-[#b7791f] border-[#ffe58f]",
    approved: "bg-[#e6f7ec] text-[#2f855a] border-[#b7ebc6]",
    waitlisted: "bg-[#fdecea] text-[#c53030] border-[#f5c6cb]",
  }

  const labels = {
    pending: "Under Review",
    approved: "Approved",
    waitlisted: "waitlisted",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}

export function ApplicationsTable({
  applications,
  onStatusChange,
  sortField,
  sortDir,
  onSort,
}: ApplicationsTableProps) {
  return (
    <Card className="border border-border/50 shadow-lg rounded-3xl overflow-hidden bg-white">
      <CardContent className="p-0">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#dff4ff] hover:bg-[#cceeff]">
                <TableHead
                  className="font-semibold text-foreground cursor-pointer select-none hover:bg-[#cceeff]"
                  onClick={() => onSort("studentName")}
                >
                  <div className="flex items-center gap-2">
                    <Baby className="size-4" />
                    Student Name
                    <SortIcon field="studentName" sortField={sortField} sortDir={sortDir} />
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    Parent Name
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    Phone
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-foreground">Age</TableHead>
                <TableHead className="font-semibold text-foreground">Status</TableHead>
                <TableHead className="font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    Date
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-foreground">Update Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app, index) => (
                <TableRow
                  key={app.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f9fbfc]"}
                >
                  <TableCell className="font-medium">{app.studentName}</TableCell>
                  <TableCell>{app.parentName}</TableCell>
                  <TableCell className="font-mono text-sm">{app.phone}</TableCell>
                  <TableCell>
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#fff3c4] text-[#b58900] text-sm font-semibold">
                      {app.age}
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={app.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                   {app.createdAt?.seconds
  ? new Date(app.createdAt.seconds * 1000).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  : "-"}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={app.status}
                      onValueChange={(value) =>
                        onStatusChange(app.id, value as Application["status"])
                      }
                    >
                      <SelectTrigger className="w-[130px] h-8 text-xs bg-card">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Under Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="waitlisted">waitlisted</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-border">
          {applications.map((app) => (
            <div key={app.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{app.studentName}</h3>
                  <p className="text-sm text-muted-foreground">{app.parentName}</p>
                </div>
                <StatusBadge status={app.status} />
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-3" />
                  {app.phone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="size-3" />
                  {app.createdAt?.seconds
                    ? new Date(app.createdAt.seconds * 1000).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                      })
                    : "-"}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-sm">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#fff3c4] text-[#b58900] text-xs font-semibold">
                    {app.age}
                  </span>
                  years old
                </span>
                <Select
                  value={app.status}
                  onValueChange={(value) =>
                    onStatusChange(app.id, value as Application["status"])
                  }
                >
                  <SelectTrigger className="w-[120px] h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Under Review</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="waitlisted">waitlisted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
        </div>

        {applications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Baby className="size-12 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">No applications found</p>
            <p className="text-sm text-muted-foreground/70">
              Try adjusting your filters
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
