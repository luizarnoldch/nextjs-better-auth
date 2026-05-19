'use client';

import Link from 'next/link';
import { Building2, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { OrganizationResponse } from '../../schema/organization.types';

export default function OrganizationCard({ org }: { org: OrganizationResponse }) {
  return (
    <Link href={`/dashboard/organizations/${org.slug}`}>
      <Card className="hover:bg-accent transition-colors cursor-pointer">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
            {org.logo ? (
              <img src={org.logo} alt="" className="size-6 rounded" />
            ) : (
              <Building2 className="size-5 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-base">{org.name}</CardTitle>
            <p className="text-muted-foreground text-xs">{org.slug}</p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users className="size-4" />
          <span>{org.members?.length ?? 0} members</span>
          {org.slug && <Badge variant="secondary">member</Badge>}
        </CardContent>
      </Card>
    </Link>
  );
}
