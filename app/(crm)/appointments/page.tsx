"use client"

import { PageHeader } from "@/components/page-header"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data - will be replaced with Prisma API calls
const appointments = [
  {
    id: 1,
    client: "Sarah Johnson",
    therapist: "Dr. Emily Chen",
    date: "2024-12-15",
    time: "09:00",
    location: "Downtown Spa",
    status: "scheduled",
  },
  {
    id: 2,
    client: "Michael Brown",
    therapist: "James Wilson",
    date: "2024-12-15",
    time: "10:30",
    location: "Downtown Spa",
    status: "scheduled",
  },
  {
    id: 3,
    client: "Emma Davis",
    therapist: "Dr. Emily Chen",
    date: "2024-12-14",
    time: "14:00",
    location: "Westside Center",
    status: "completed",
  },
  {
    id: 4,
    client: "David Miller",
    therapist: "Lisa Anderson",
    date: "2024-12-13",
    time: "15:30",
    location: "Downtown Spa",
    status: "completed",
  },
  {
    id: 5,
    client: "Jennifer Wilson",
    therapist: "Rachel Green",
    date: "2024-12-12",
    time: "11:00",
    location: "Eastside Wellness",
    status: "cancelled",
  },
  {
    id: 6,
    client: "Robert Taylor",
    therapist: "James Wilson",
    date: "2024-12-16",
    time: "16:00",
    location: "Westside Center",
    status: "scheduled",
  },
]

interface Appointment {
  id: number
  client: string
  therapist: string
  date: string
  time: string
  location: string
  status: string
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "scheduled":
      return "default"
    case "completed":
      return "secondary"
    case "cancelled":
      return "destructive"
    default:
      return "outline"
  }
}

const columns = [
  { key: "client", header: "Client" },
  { key: "therapist", header: "Therapist" },
  {
    key: "date",
    header: "Date",
    render: (apt: Appointment) => new Date(apt.date).toLocaleDateString(),
  },
  { key: "time", header: "Time" },
  { key: "location", header: "Location" },
  {
    key: "status",
    header: "Status",
    render: (apt: Appointment) => (
      <Badge
        variant={getStatusVariant(apt.status) as "default" | "secondary" | "destructive" | "outline"}
        className={cn(
          apt.status === "scheduled" && "bg-blue-600 hover:bg-blue-600/90",
          apt.status === "completed" && "bg-green-600 hover:bg-green-600/90 text-white",
          apt.status === "cancelled" && "bg-red-600 hover:bg-red-600/90",
        )}
      >
        {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
      </Badge>
    ),
  },
]

export default function AppointmentsPage() {
  return (
    <div>
      <PageHeader
        title="Appointments"
        description="Schedule and manage client appointments."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            New Appointment
          </Button>
        }
      />

      <Card>
        <CardContent className="pt-6">
          <DataTable
            columns={columns}
            data={appointments}
            emptyState={{
              icon: <Calendar className="h-8 w-8" />,
              title: "No appointments yet",
              description: "Start by scheduling your first appointment.",
              action: (
                <Button>
                  <Plus className="h-4 w-4" />
                  New Appointment
                </Button>
              ),
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
