'use client';

import type React from 'react';
import OrganizationGuard from '@/features/organization/components/OrganizationGuard';
import SidebarLayout from '@/features/sidebar/views/SidebarLayout';

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <OrganizationGuard>
      <SidebarLayout>{children}</SidebarLayout>
    </OrganizationGuard>
  );
};

export default DashBoardLayout;
