import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-lg border-2 border-accent/20">
          <CardHeader className="text-center">
            <div className="mx-auto bg-accent/10 rounded-full p-3 w-fit mb-4">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-headline text-3xl">Get in Touch</CardTitle>
            <CardDescription>Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
