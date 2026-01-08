import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type FloatingCallButtonProps = {
  phoneNumber: string;
};

export function FloatingCallButton({ phoneNumber }: FloatingCallButtonProps) {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Call Now"
    >
      <Link href={`tel:${phoneNumber}`}>
        <Phone className="h-7 w-7" />
      </Link>
    </Button>
  );
}
