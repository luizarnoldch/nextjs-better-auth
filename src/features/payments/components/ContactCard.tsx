'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function ContactCard() {
  return (
    <Card className="relative w-full text-left flex flex-col justify-between border-dashed bg-muted/30">
      <CardHeader>
        <CardTitle className="font-medium text-xl">Custom Plan</CardTitle>
        <CardDescription>
          <div className="min-h-12">
            Need something more tailored to your specific business needs? We've got you covered.
          </div>
          <div className="flex flex-col mt-2">
            <span className="font-medium text-foreground text-2xl">Enterprise</span>
            <span className="text-sm text-muted-foreground">Contact us for a quote</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 grow">
        <div className="flex gap-2 text-muted-foreground text-sm">
          <Mail className="h-4 w-4 flex-none text-primary" />
          Dedicated support manager
        </div>
        <div className="flex gap-2 text-muted-foreground text-sm">
          <MessageCircle className="h-4 w-4 flex-none text-primary" />
          Custom service level agreement
        </div>
        <div className="flex gap-2 text-muted-foreground text-sm">
          <Phone className="h-4 w-4 flex-none text-primary" />
          Volume discounts available
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => (window.location.href = 'mailto:support@example.com')}
        >
          Contact Support
        </Button>
      </CardFooter>
    </Card>
  );
}
