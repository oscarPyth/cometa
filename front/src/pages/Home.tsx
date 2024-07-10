import { useEffect } from 'react';
import { useStore } from '../stores/useStore';
import Table from '../components/Table';
import CardBeer from '../components/CardBeer';
import React from 'react';

const Home: React.FC = () => {
  const beers = useStore((state) => state.beers);
  const getBeers = useStore((state) => state.getBeers)
  const beerCard = useStore((state) => state.beerCard)
  const chooseCard = useStore((state) => state.chooseCard)

  const headers = [
    {name:'Producto', column:'name'}, 
    {name:'Cantidad', column: 'quantity'},
    {name:'Precio', column: 'price'},
    {name:'Disponibilidad', column: 'available'}
  ];

  useEffect(() => {
    getBeers();
    return () => {};
  }, []);
  
  return (
    <>      
      <div className='grid gap-4 grid-cols-6'>
        <h1 className='col-start-1 col-span-4'>Stock</h1>
        <div className='col-start-1 col-span-3'>
          <Table headers={headers} data={beers} onRowClick={chooseCard} />
        </div>
        <div className='col-start-5 col-span-7'>
          <CardBeer beer={beerCard}/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
