"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Bell, Shield, Palette } from "lucide-react"

const settingsSections = [
  {
    title: "Business Profile",
    description: "Update your business information and contact details.",
    icon: Building2,
  },
  {
    title: "Notifications",
    description: "Configure email and SMS notification preferences.",
    icon: Bell,
  },
  {
    title: "Security",
    description: "Manage passwords, two-factor authentication, and access.",
    icon: Shield,
  },
  {
    title: "Appearance",
    description: "Customize the look and feel of your CRM dashboard.",
    icon: Palette,
  },
]

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your CRM preferences and business configuration." />

      <div className="grid gap-4 md:grid-cols-2">
        {settingsSections.map((section) => {
          const Icon = section.icon
          return (
            <Card key={section.title} className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
