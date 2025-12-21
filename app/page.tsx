import Sum from '../components/sum/Sum';
import Substraction from '@/components/substraction/substract';
import Quotient from '../components/quotient/Quotient';

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl font-light py-2">
        Mini basic calculator
      </h1>
      <Sum />
      <Substraction />
      <Quotient/>
    </>
  );
}
