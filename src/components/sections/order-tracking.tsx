import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

export function OrderTracking() {
  return (
    <section id="track" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">Track Your Order</CardTitle>
            <CardDescription>Enter your order ID below to see the latest status of your binding project.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-4">
              <Input
                type="text"
                placeholder="Enter your order ID (e.g., BB-12345)"
                className="flex-grow"
              />
              <Button type="submit">Track Order</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
