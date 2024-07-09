import React from 'react';
import { useStore } from '../stores/useStore';
import Button from './Button';

const Header: React.FC = () => {
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);
  const resetCount = useStore((state) => state.resetCount);

  return (
    <div className='bg-secondary flex justify-end items-center gap-3 pr-[1rem] shadow-md h-[4rem]'>
      <Button conf={{path: 'orders', text: 'Ordenes'}}/>
      <Button conf={{path: '/', text: 'Stock'}}/>
      <Button mainButton conf={{path: '/', text: 'Generar Orden'}}/>
    </div>
  );
};

export default Header;