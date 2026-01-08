import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { PriceEstimator } from '@/components/sections/price-estimator';
import { OrderTracking } from '@/components/sections/order-tracking';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <PriceEstimator />
        <OrderTracking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
