import {useEffect} from 'react';
import { useStore } from '../stores/useStore';
import Table from '../components/Table';
import OrderSummary from '../components/OrderSummary';
import React from 'react';


const Orders: React.FC = () => {
  const getOrders = useStore((state) => state.getOrders)
  const orders = useStore((state) => state.orders)
  const getRounds = useStore((state) => state.getRounds)
  const rounds = useStore((state) => state.rounds)
  const invoice = useStore((state) => state.invoice)


  useEffect(() => {
    getOrders();
    return () => {};
  }, []);

  const headersOrders = [
    {name:'Mesa N°', column:'table_id'}, 
    {name:'Cantidad', column: 'total_beers'},
    {name:'Precio', column: 'total_price'},
  ];

  return (
      <div className='grid gap-4 grid-cols-6'>
        <h1 className='col-start-1 col-span-4'>Ordenes</h1>
        <div className='col-start-1 col-span-2'>
            <Table headers={headersOrders} data={orders} onRowClick={(data) => getRounds(data.session_id)}/>
        </div>
        <div className='col-start-3 col-span-7'>
            <OrderSummary dataOrder={rounds} invoice={invoice}/>
        </div>
        
      </div>
  );
};

export default Orders;
