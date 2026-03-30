'use client';

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  LayoutDashboardIcon,
  Settings2,
} from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavigationTeamSwitcher } from '../components/NavigationTeamSwitcher';
import { NavigationMain } from '../components/NavigationMain';
import { AuthNavUser } from '@/features/auth/components/AuthNavUser';
import { Separator } from '@/components/ui/separator';

// This is sample data.
const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboardIcon,
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
  ],
};

export function SidebarView({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavigationTeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <div className="px-4">
        <Separator />
      </div>
      <SidebarContent>
        <NavigationMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <AuthNavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
