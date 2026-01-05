import { Metadata } from 'next';
import AboutContent from './content';

export const metadata: Metadata = {
  title: 'About | Anurag Srivastav',
  description: 'Full-stack engineer turned backend specialist. I build high-performance tools using Go and distributed systems.',
};

export default function AboutPage() {
  return <AboutContent />;
}
