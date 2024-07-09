import React, {useState} from 'react';
import { useStore } from '../stores/useStore';
import Table from '../components/Table';
import OrderSummary from '../components/OrderSummary';
import { FaFileInvoice } from 'react-icons/fa';
import Receipt from '../components/Receipt';

const Orders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);
  const resetCount = useStore((state) => state.resetCount);
  const headersOrders = [
    {name:'Mesa', column:'table'}, 
    {name:'Cantidad', column: 'amount'},
    {name:'Precion', column: 'price'},
  ];
  const dataOrders= [
    { table: "1", amount: 5, price: 6000},
    { table: "3", amount: 60, price: 3000},
    { table: "5", amount: 300, price: 9000},
    { table: "10", amount: 5, price: 6000},
    { table: "4", amount: 60, price: 3000},
    { table: "8", amount: 300, price: 9000},
    { table: "7", amount: 5, price: 6000},
    { table: "6", amount: 60, price: 3000},
  ];
  const dataOrder =  {
      tableNumber: "3",
      total: "150.00",
      orders: [
        { beerQuantity: "1", beerType: "Stella Artois" },
        { beerQuantity: "3", beerType: "Guinness" },
        { beerQuantity: "4", beerType: "Guinness" },
        { beerQuantity: "2", beerType: "Guinness" },
      ],
    }
    
    const items = [
      { name: 'Apple', quantity: 2, price: 1.5 },
      { name: 'Banana', quantity: 3, price: 1.0 },
      { name: 'Orange', quantity: 1, price: 1.25 },
    ];
  
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const tax = subtotal * 0.07;
    const tip = subtotal * 0.1; 
    const total = subtotal + tax + tip;

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  


  return (
      <div className='grid gap-4 grid-cols-6'>
        <h1 className='col-start-1 col-span-4'>Ordenes</h1>
        <div className='col-start-1 col-span-2'>
            <Table headers={headersOrders} data={dataOrders} />
        </div>
        <div className='col-start-3 col-span-7'>
            <OrderSummary dataOrder={dataOrder}/>
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
                  <Receipt items={items} subtotal={subtotal} tax={tax} tip={tip} total={total} />
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
        </div>
        
      </div>
  );
};

export default Orders;
