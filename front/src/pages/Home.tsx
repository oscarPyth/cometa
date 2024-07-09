import React from 'react';
import { useStore } from '../stores/useStore';
import Table from '../components/Table';
import CardBeer from '../components/CardBeer'

const Home: React.FC = () => {
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);
  const resetCount = useStore((state) => state.resetCount);
  const headers = [
    {name:'Producto', column:'product'}, 
    {name:'Cantidad', column: 'amount'},
    {name:'Precion', column: 'price'},
    {name:'Disponibilidad', column: 'available'}
  ];
  const data= [
    { product: "Club Colombia", amount: 5, price: 6000, available: true },
    { product: "Pocker", amount: 60, price: 3000, available: false },
    { product: "BBC", amount: 300, price: 9000, available: true },
    { product: "Club Colombia", amount: 5, price: 6000, available: true },
    { product: "Pocker", amount: 60, price: 3000, available: false },
    { product: "BBC", amount: 300, price: 9000, available: true },
    { product: "Club Colombia", amount: 5, price: 6000, available: true },
    { product: "Pocker", amount: 60, price: 3000, available: false },
    { product: "BBC", amount: 300, price: 9000, available: true },
    { product: "Club Colombia", amount: 5, price: 6000, available: true },
    { product: "Pocker", amount: 60, price: 3000, available: false },
    { product: "BBC", amount: 300, price: 9000, available: true },
  ];

  return (
    <>      
      <div className='grid gap-4 grid-cols-6'>
        <h1 className='col-start-1 col-span-4'>Stock</h1>
        <div className='col-start-1 col-span-3'>
          <Table headers={headers} data={data} />
        </div>
        <div className='col-start-5 col-span-7'>
          <CardBeer price="10" count="10" name="BBC" sourceImage="https://osolemio.com.co/89/cerveza-corona.jpg"/>
        </div>
        
      </div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Contadores</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
};

export default Home;
