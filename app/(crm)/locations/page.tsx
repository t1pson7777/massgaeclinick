"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmptyState } from "@/components/empty-state"
import { MapPin, Plus, Phone, Mail } from "lucide-react"

// Mock data - will be replaced with Prisma API calls
const locations = [
  {
    id: 1,
    name: "Downtown Spa",
    address: "123 Main Street, Suite 100, New York, NY 10001",
    phone: "+1 (555) 100-1000",
    email: "downtown@crmmassage.com",
  },
  {
    id: 2,
    name: "Westside Center",
    address: "456 West Avenue, Floor 2, New York, NY 10023",
    phone: "+1 (555) 200-2000",
    email: "westside@crmmassage.com",
  },
  {
    id: 3,
    name: "Eastside Wellness",
    address: "789 East Boulevard, New York, NY 10028",
    phone: "+1 (555) 300-3000",
    email: "eastside@crmmassage.com",
  },
]

export default function LocationsPage() {
  return (
    <div>
      <PageHeader
        title="Locations"
        description="Manage your spa and massage center locations."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Location
          </Button>
        }
      />

      {locations.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <EmptyState
              icon={<MapPin className="h-8 w-8" />}
              title="No locations yet"
              description="Add your first spa or massage center location."
              action={
                <Button>
                  <Plus className="h-4 w-4" />
                  Add Location
                </Button>
              }
            />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card key={location.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{location.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{location.address}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {location.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {location.email}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
