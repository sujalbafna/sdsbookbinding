import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    question: 'What file types do you accept for printing?',
    answer: 'We accept PDF, DOC, DOCX, and other common document formats. For best results, we recommend providing a high-quality PDF file.',
  },
  {
    question: 'What is the turnaround time for an order?',
    answer: 'Turnaround time depends on the complexity of your order and our current workload. Typically, orders are completed within 5-10 business days. You can track your order status on our website.',
  },
  {
    question: 'Can I make changes to my order after it has been placed?',
    answer: 'Please contact our support team as soon as possible. If we have not started production, we may be able to accommodate changes. However, once production begins, changes may not be possible.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we offer international shipping. Shipping costs and times will vary depending on the destination. Please see our shipping policy for more details.',
  },
  {
    question: 'What is your return policy?',
    answer: 'As each book is a custom project, we generally do not accept returns. However, if there is a defect in our workmanship, please contact us within 7 days of receiving your order, and we will be happy to address the issue.',
  },
];


export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="faq" className="py-16 sm:py-24">
          <div className="container">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
