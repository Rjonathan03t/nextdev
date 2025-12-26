import Sum from '../../components/sum/Sum';
import Substraction from '@/components/substraction/substract';
import Quotient from '../../components/quotient/Quotient';
import Times from '@/components/multiplication/times';
import Container from '../../components/common/container';

export default function Calculator() {
  return (
    <Container>
    <h1 className='text-4xl py-12 font-light uppercase'>
        Mini basic calculator
    </h1>
      <Sum />
      <Substraction />
      <Quotient/>
      <Times/>
    </Container>
  );
}
