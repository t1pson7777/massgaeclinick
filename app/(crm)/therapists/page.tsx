"use client"

import { PageHeader } from "@/components/page-header"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserCog, Plus } from "lucide-react"

// Mock data - will be replaced with Prisma API calls
const therapists = [
  { id: 1, name: "Dr. Emily Chen", phone: "+1 (555) 111-2222", specialization: "Deep Tissue, Hot Stone", active: true },
  { id: 2, name: "James Wilson", phone: "+1 (555) 222-3333", specialization: "Swedish, Aromatherapy", active: true },
  { id: 3, name: "Lisa Anderson", phone: "+1 (555) 333-4444", specialization: "Sports Massage", active: true },
  { id: 4, name: "Dr. Mark Thompson", phone: "+1 (555) 444-5555", specialization: "Rehabilitation", active: false },
  { id: 5, name: "Rachel Green", phone: "+1 (555) 555-6666", specialization: "Prenatal Massage", active: true },
]

interface Therapist {
  id: number
  name: string
  phone: string
  specialization: string
  active: boolean
}

const columns = [
  { key: "name", header: "Name" },
  { key: "phone", header: "Phone" },
  { key: "specialization", header: "Specialization" },
  {
    key: "active",
    header: "Status",
    render: (therapist: Therapist) => (
      <Badge variant={therapist.active ? "default" : "secondary"}>{therapist.active ? "Active" : "Inactive"}</Badge>
    ),
  },
]

export default function TherapistsPage() {
  return (
    <div>
      <PageHeader
        title="Therapists"
        description="Manage your team of massage therapists."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Therapist
          </Button>
        }
      />

      <Card>
        <CardContent className="pt-6">
          <DataTable
            columns={columns}
            data={therapists}
            emptyState={{
              icon: <UserCog className="h-8 w-8" />,
              title: "No therapists yet",
              description: "Start by adding your first therapist to the team.",
              action: (
                <Button>
                  <Plus className="h-4 w-4" />
                  Add Therapist
                </Button>
              ),
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
