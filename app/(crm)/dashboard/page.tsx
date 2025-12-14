import { PageHeader } from "@/components/page-header"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, UserCog, Clock } from "lucide-react"

// Mock data - will be replaced with Prisma API calls
const stats = {
  totalClients: 248,
  upcomingAppointments: 12,
  activeTherapists: 8,
  todayAppointments: 5,
}

const upcomingAppointments = [
  { id: 1, client: "Sarah Johnson", therapist: "Dr. Emily Chen", time: "09:00 AM", service: "Deep Tissue Massage" },
  { id: 2, client: "Michael Brown", therapist: "James Wilson", time: "10:30 AM", service: "Swedish Massage" },
  { id: 3, client: "Emma Davis", therapist: "Dr. Emily Chen", time: "02:00 PM", service: "Hot Stone Therapy" },
  { id: 4, client: "David Miller", therapist: "Lisa Anderson", time: "03:30 PM", service: "Sports Massage" },
]

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Welcome back! Here's an overview of your massage business." />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Clients"
          value={stats.totalClients}
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Upcoming Appointments"
          value={stats.upcomingAppointments}
          icon={<Calendar className="h-6 w-6" />}
        />
        <StatCard title="Active Therapists" value={stats.activeTherapists} icon={<UserCog className="h-6 w-6" />} />
        <StatCard
          title="Today's Appointments"
          value={stats.todayAppointments}
          icon={<Clock className="h-6 w-6" />}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    {appointment.client
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.client}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{appointment.time}</p>
                  <p className="text-sm text-muted-foreground">{appointment.therapist}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
