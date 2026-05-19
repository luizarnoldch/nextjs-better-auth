'use client'

import {
  LayoutDashboardIcon,
  Settings2,
  Building2,
  ShieldAlert,
} from 'lucide-react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import OrganizationSwitcher from '@/features/organization/components/OrganizationSwitcher'
import { NavigationMain } from '../components/NavigationMain'
import { AuthNavUser } from '@/features/auth/components/AuthNavUser'
import { Separator } from '@/components/ui/separator'
import { useSession } from '@/lib/auth-client'

const navMain = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Organizations',
    url: '/dashboard/organizations',
    icon: Building2,
  },
  {
    title: 'Payments',
    url: '/dashboard/payments',
    icon: Settings2,
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: Settings2,
  },
]

export function SidebarView({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'admin'

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher />
      </SidebarHeader>
      <div className="px-4">
        <Separator />
      </div>
      <SidebarContent>
        <NavigationMain items={navMain} />
        {isAdmin && (
          <NavigationMain
            items={[
              {
                title: 'Admin Dashboard',
                url: '/dashboard/admin/users',
                icon: ShieldAlert,
              },
            ]}
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        <AuthNavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
