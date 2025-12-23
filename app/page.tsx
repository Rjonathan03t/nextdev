import Sum from '../components/sum/Sum';
import Substraction from '@/components/substraction/substract';
import Quotient from '../components/quotient/Quotient';
import Times from '@/components/multiplication/times';

export default function Home() {
  return (
    <>
      <Sum />
      <Substraction />
      <Quotient/>
      <Times/>
    </>
  );
}
