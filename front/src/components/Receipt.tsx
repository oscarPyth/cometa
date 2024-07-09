import React from 'react';

interface ReceiptProps {
  items: Array<{
    name: string
    total_price: number
    quantity: number
  }>;
  total: number;
  tax: number;
  subtotal: number;
  tip: number;
}

const Receipt: React.FC<ReceiptProps> = ({ items, total, tax, subtotal, tip }) => {
  console.log({ items, total, tax, subtotal, tip })
  return (
    <div className="bg-white p-6 max-w-sm mx-auto border border-gray-300 shadow-md font-mono text-black">
      <div className="text-center">
        <h1 className="text-xl font-bold">Pepito's Store</h1>
        <p>1234 Market St.</p>
        <p>Anytown, USA 12345</p>
        <p>Tel: (555) 555-5555</p>
        <hr className="my-2" />
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Receipt #: 123456</p>
        <hr className="my-2" />
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.quantity} x {item.name}</span>
            <span>${(item.total_price).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <hr className="my-2" />
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tip:</span>
        <span>${tip.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="text-center mt-4">
        <p>Thank you for your business!</p>
      </div>
    </div>
  );
};

export default Receipt;
