'use client';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { NavigationHeader } from '@/features/sidebar/components/NavigationHeader';
import { SidebarView } from './SidebarView';
import { ImpersonationBanner } from '@/components/impersonation-banner';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarView />
      <SidebarInset>
        <ImpersonationBanner />
        <NavigationHeader />
        <div className="w-full h-full p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
