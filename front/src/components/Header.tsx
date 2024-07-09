import React from 'react';
import Button from './Button';
import logo from '../assets/cometa-drinks-removebg-preview.png';

const Header: React.FC = () => {
  return (
    <div className='bg-secondary flex justify-between items-center pr-[1rem] shadow-md h-[4rem]'>
      <div className='flex-shrink-0 h-full ml-4'>
        <img src={logo} alt="Descripción de la imagen" className='h-full' />
      </div>

      <div className='flex gap-3'>
        <Button conf={{ path: '/', text: 'Stock' }} />
        <Button conf={{ path: 'orders', text: 'Ordenes' }} />
        <Button mainButton conf={{ path: '/generate-order', text: 'Generar Orden' }} />
      </div>
    </div>
  );
};

export default Header;
