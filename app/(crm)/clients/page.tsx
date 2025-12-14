"use client"

import { PageHeader } from "@/components/page-header"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Plus } from "lucide-react"

// Mock data - will be replaced with Prisma API calls
const clients = [
  { id: 1, name: "Sarah Johnson", phone: "+1 (555) 123-4567", createdAt: "2024-01-15" },
  { id: 2, name: "Michael Brown", phone: "+1 (555) 234-5678", createdAt: "2024-01-18" },
  { id: 3, name: "Emma Davis", phone: "+1 (555) 345-6789", createdAt: "2024-02-01" },
  { id: 4, name: "David Miller", phone: "+1 (555) 456-7890", createdAt: "2024-02-10" },
  { id: 5, name: "Jennifer Wilson", phone: "+1 (555) 567-8901", createdAt: "2024-02-15" },
  { id: 6, name: "Robert Taylor", phone: "+1 (555) 678-9012", createdAt: "2024-03-01" },
]

interface Client {
  id: number
  name: string
  phone: string
  createdAt: string
}

const columns = [
  { key: "name", header: "Name" },
  { key: "phone", header: "Phone" },
  {
    key: "createdAt",
    header: "Created At",
    render: (client: Client) => new Date(client.createdAt).toLocaleDateString(),
  },
]

export default function ClientsPage() {
  return (
    <div>
      <PageHeader
        title="Clients"
        description="Manage your client database and contact information."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Client
          </Button>
        }
      />

      <Card>
        <CardContent className="pt-6">
          <DataTable
            columns={columns}
            data={clients}
            emptyState={{
              icon: <Users className="h-8 w-8" />,
              title: "No clients yet",
              description: "Start by adding your first client to the system.",
              action: (
                <Button>
                  <Plus className="h-4 w-4" />
                  Add Client
                </Button>
              ),
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
