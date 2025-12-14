import type React from "react"
import { CRMLayout } from "@/components/crm-layout"

export default function CRMRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CRMLayout>{children}</CRMLayout>
}
