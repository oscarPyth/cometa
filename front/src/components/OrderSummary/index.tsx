import { useState } from 'react';
import AccordionButton from './AcordionButton';
import { RoundList, Invoice } from '../../stores/interfaces';
import { FaFileInvoice } from 'react-icons/fa';
import Receipt from '../Receipt';

interface OrderSummaryProps {
  dataOrder: RoundList | {};
  invoice: Invoice | {};
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ dataOrder, invoice }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (Object.keys(dataOrder).length === 0) {
    return null; 
  }
  const { total_price, rounds, table_number, total_beers } = dataOrder as RoundList;
  const {items, total, tip, tax, sub_total } = invoice as Invoice

  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  console.log(items)
  return (
    <>
      <h1>Mesa {table_number}</h1>
      {rounds.map((round, index) => (
        <AccordionButton
          key={index}
          title={`Orden ${index + 1}`}
          beerQuantity={round.quantity}
          beerType={round.beer.name}
        />
      ))}
      <h3>Total de cervezas: {total_beers}</h3>
      <h2>Total: ${total_price}</h2>
      <button
              onClick={togglePopup}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
            >
              <FaFileInvoice className="mr-2" />
              Invoice
            </button>

            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Receipt items={items} subtotal={sub_total} tax={tax} tip={tip} total={total} />
                  <button
                    onClick={togglePopup}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Close
                  </button>
                </div>
                <div
                  className="fixed inset-0 bg-black opacity-50"
                  onClick={togglePopup}
                ></div>
              </div>
            )}
    </>
  );
};

export default OrderSummary;
