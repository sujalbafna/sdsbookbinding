import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="about" className="py-16 sm:py-24">
          <div className="container">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl">About Us</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-center text-muted-foreground space-y-4">
                <p>
                  Welcome to Boundless Books, where we believe every story deserves to be preserved in a beautifully crafted book.
                  Our journey began with a simple passion for the art of bookbinding, and a desire to provide a service that honours the content within.
                </p>
                <p>
                  We are a team of skilled artisans and craftspeople dedicated to the timeless tradition of bookbinding. 
                  With decades of combined experience, we merge traditional techniques with modern technology to create books that are not only durable but also works of art. 
                  Whether it's a student's hard-earned thesis, a company's important report, or a family's cherished memories, we handle each project with the utmost care and precision.
                </p>
                <p>
                  Our mission is to provide exceptional quality and service, ensuring that your documents are transformed into lasting legacies. Thank you for trusting us with your stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
