import React from 'react';
import AccordionButton from './AcordionButton';

interface Order {
  beerQuantity: string;
  beerType: string;
}

interface DataOrder {
  tableNumber: string;
  total: string;
  orders: Order[];
}

interface OrderSummaryProps {
  dataOrder: DataOrder;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ dataOrder }) => {
  const { tableNumber, total, orders } = dataOrder;
  
  return (
    <>
      <h1>Mesa {tableNumber}</h1>
      {orders.map((order, index) => (
        <AccordionButton
          key={index}
          title={`Orden ${index + 1}`}
          beerQuantity={order.beerQuantity}
          beerType={order.beerType}
        />
      ))}
      <h2>Total: ${total}</h2>
    </>
  );
};

export default OrderSummary;
