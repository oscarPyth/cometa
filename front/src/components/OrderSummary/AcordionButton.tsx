import React, { useState } from 'react';

interface AccordionButtonProps {
    title: string;
    beerQuantity: number;
    beerType: string;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({ title, beerQuantity, beerType }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 border rounded shadow-lg">
            <button
                onClick={toggleAccordion}
                className="w-full text-left px-4 py-2 bg-[#FAFDEA] text-[#504c3d] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                <div className="flex justify-between items-center">
                    <span>{title}</span>
                    <span className='font-bold'>{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            {isOpen && (
                <div className="px-4 py-2 bg-[#FAFDEA] text-[#504c3d] border-t">
                    <p>Beer Quantity: {beerQuantity}</p>
                    <p>Beer Type: {beerType}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionButton;
