import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: '1. Get a Quote',
    description: 'Use our AI-powered price estimator to get an instant quote for your project. Simply upload your document and select your binding preferences.',
  },
  {
    title: '2. Place Your Order',
    description: 'Once you are happy with your quote, you can place your order securely through our website. You will receive an order confirmation and an order ID.',
  },
  {
    title: '3. We Get to Work',
    description: 'Our expert binders will start crafting your book with care and precision, using the high-quality materials you selected.',
  },
  {
    title: '4. Track Your Order',
    description: 'You can use your order ID to track the progress of your book at any time on our website.',
  },
  {
    title: '5. Delivery',
    description: 'Once your book is ready, we will carefully package it and ship it to your address. You will receive a notification once it is dispatched.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our process is simple and transparent. Here's a step-by-step guide to getting your documents professionally bound.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 font-headline text-2xl">
                      <CheckCircle className="h-8 w-8 text-primary" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
