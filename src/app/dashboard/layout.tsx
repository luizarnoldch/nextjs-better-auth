import SidebarLayout from '@/features/sidebar/views/SidebarLayout';
import React from 'react';

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default DashBoardLayout;
