import ProductList from '@/features/payments/components/ProductList';
import PaymentsLayout from '@/features/payments/views/PaymentsLayout';

const PaymentsPage = () => {
  return (
    <PaymentsLayout>
      <ProductList />
    </PaymentsLayout>
  );
};

export default PaymentsPage;
