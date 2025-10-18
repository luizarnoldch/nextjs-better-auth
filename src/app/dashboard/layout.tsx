import NavHeader from '@/components/modules/sidebar/components/nav-header'
import { AppSidebar } from '@/components/modules/sidebar/templates/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

type DashBoardLayoutProps = {
  children: React.ReactNode
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <NavHeader />
        <div className="w-full h-full p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashBoardLayout
