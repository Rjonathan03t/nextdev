import Sum from '../components/sum/Sum';
import Substraction from '@/components/substraction/substract';

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl font-light py-2">
        Mini basic alculator
      </h1>
      <Sum />
      <Substraction />
    </>
  );
}
