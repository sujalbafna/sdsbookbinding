import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to start a project? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <Input type="text" placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button asChild className="w-full">
                    <a href="mailto:sdspune1@gmail.com">Send Message</a>
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span>123 Bookbinders Lane, Storyville, BK 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                    <a href="tel:9850271425" className="hover:text-primary">
                      9850271425
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 shrink-0 text-primary" />
                    <a href="mailto:sdspune1@gmail.com" className="hover:text-primary">
                      sdspune1@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9am - 5pm</p>
                    <p><span className="font-semibold text-foreground">Saturday:</span> 10am - 3pm</p>
                    <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                  </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.607498748364!2d-73.9845346242858!3d40.74872397138981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a4c17b9d%3A0x92f3964923f6a258!2sNew%20York%20Public%20Library-Stephen%20A.%20Schwarzman%20Building!5e0!3m2!1sen!2sus!4v1768000578854!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
