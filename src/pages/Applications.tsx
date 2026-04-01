"use client"

import { useEffect, useState } from "react"
import { collection, onSnapshot, doc, updateDoc, query, orderBy } from "firebase/firestore"
import { db } from "@/firebase"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"

import { ApplicationsHeader } from "@/components/applications-header"
import { ApplicationsFilters } from "@/components/applications-filters"
import { ApplicationsTable } from "@/components/applications-table"
import { ApplicationsPagination } from "@/components/applications-pagination"

export type SortField = "studentName" | "createdAt" | null

export type Application = {
  id: string
  studentName: string
  parentName: string
  phone: string
  age: number
  status: "pending" | "approved" | "waitlisted"
  createdAt?: any
}

const ITEMS_PER_PAGE = 10

export default function ApplicationsPage() {
  const [allApplications, setAllApplications] = useState<Application[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [fromDate, setFromDate] = useState<string>("")
  const [toDate, setToDate] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [sortField, setSortField] = useState<SortField>("createdAt")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // FETCH DATA FROM FIREBASE (REALTIME)
  useEffect(() => {
    const q = query(
      collection(db, "applications"),
      orderBy("createdAt", "desc") // IMPORTANT
    )
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Application[]

      setAllApplications(data)
      setApplications(data)
    })

    return () => unsubscribe()
  }, [])

  // UPDATE STATUS IN FIREBASE
  const handleStatusChange = async (id: string, newStatus: Application["status"]) => {
    try {
      // update in firestore
      await updateDoc(doc(db, "applications", id), {
        status: newStatus,
      })

      // update UI instantly
      setApplications((prev) =>
        prev.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app
        )
      )
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }
  // FILTER LOGIC (WORKS ON FIREBASE DATA)
  const handleSearch = () => {
    let filtered = [...allApplications]

    // SEARCH FILTER
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter((app) =>
        app.studentName?.toLowerCase().includes(q) ||
        app.parentName?.toLowerCase().includes(q) ||
        app.phone?.toLowerCase().includes(q)
      )
    }

    // STATUS FILTER
    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter)
    }

    // FROM DATE
    if (fromDate) {
      const from = new Date(fromDate)
      filtered = filtered.filter((app) => {
        if (!app.createdAt?.seconds) return false
        const appDate = new Date(app.createdAt.seconds * 1000)
        return appDate >= from
      })
    }

    // TO DATE
    if (toDate) {
      const to = new Date(toDate)
      to.setHours(23, 59, 59, 999)
      filtered = filtered.filter((app) => {
        if (!app.createdAt?.seconds) return false
        const appDate = new Date(app.createdAt.seconds * 1000)
        return appDate <= to
      })
    }

    // SORT
    filtered.sort((a, b) => {
      if (!sortField) return 0
      if (sortField === "createdAt") {
        const aTime = a.createdAt?.seconds || 0
        const bTime = b.createdAt?.seconds || 0
        return sortOrder === "asc" ? aTime - bTime : bTime - aTime
      }
      if (sortField === "studentName") {
        const aName = (a.studentName || "").toLowerCase()
        const bName = (b.studentName || "").toLowerCase()
        return sortOrder === "asc" ? aName.localeCompare(bName) : bName.localeCompare(aName)
      }
      if(sortField === "status") {
        const aStatus = (a.status || "").toLowerCase()
        const bStatus = (b.status || "").toLowerCase()
        return sortOrder === "asc" ? aStatus.localeCompare(bStatus) : bStatus.localeCompare(aStatus)
      }
      if(sortField === "phone") {
        const aPhone = (a.phone || "").toLowerCase()
        const bPhone = (b.phone || "").toLowerCase()
        return sortOrder === "asc" ? aPhone.localeCompare(bPhone) : bPhone.localeCompare(aPhone)
      }
      if(sortField === "parentName") {
        const aParentName = (a.parentName || "").toLowerCase()
        const bParentName = (b.parentName || "").toLowerCase()
        return sortOrder === "asc" ? aParentName.localeCompare(bParentName) : bParentName.localeCompare(aParentName)
      }
      if(sortField === "age") {
        const aAge = a.age || 0
        const bAge = b.age || 0
        return sortOrder === "asc" ? aAge - bAge : bAge - aAge
      }
      return 0
    })

    setApplications(filtered)
    setCurrentPage(1)
  }

  const handleColumnSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const handleReset = () => {
    setSearchQuery("")
    setStatusFilter("all")
    setFromDate("")
    setToDate("")
    setApplications(allApplications)
    setCurrentPage(1)
  }

  // Re-run search when sort order, field, or search query changes
  useEffect(() => {
    handleSearch()
  }, [sortOrder, sortField])

  // Auto-reset when search is cleared
  useEffect(() => {
    if (searchQuery === "") {
      handleSearch()
    }
  }, [searchQuery])

  // PAGINATION
  const totalPages = Math.ceil(applications.length / ITEMS_PER_PAGE)

  const paginatedApplications = applications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  const handleExportExcel = () => {
    if (applications.length === 0) {
      alert("No data to export")
      return
    }

    // Format data
    const exportData = applications.map((app) => ({
      "Student Name": app.studentName,
      "Parent Name": app.parentName,
      "Phone": app.phone,
      "Age": app.age,
      "Status": app.status,
      "Created Date": app.createdAt?.seconds
        ? new Date(app.createdAt.seconds * 1000).toLocaleString()
        : "",
    }))

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData)

    // Create workbook
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications")

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    })

    // Save file
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    })

    saveAs(data, "Applications.xlsx")
  }
  return (
    <main className="min-h-screen bg-[#f6fbff] p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        <ApplicationsHeader totalApplications={applications.length} />

        <ApplicationsFilters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          onReset={handleReset}
          onExport={handleExportExcel}
        />

        <ApplicationsTable
          applications={paginatedApplications}
          onStatusChange={handleStatusChange}
          sortField={sortField}
          sortDir={sortOrder}
          onSort={handleColumnSort}
        />

        <ApplicationsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  )
}