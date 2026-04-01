'use client';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { NavigationHeader } from '@/features/sidebar/components/NavigationHeader';
import { SidebarView } from './SidebarView';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarView />
      <SidebarInset>
        <NavigationHeader />
        <div className="w-full h-full p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
