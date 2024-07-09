interface CardProps {
  price: string;
  count: string;
  name: string;
  sourceImage: string;
}

const Card: React.FC<CardProps> = ({ price, count, name, sourceImage }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary h-full ">
      <img
        className="h-[60%]"

        src={sourceImage}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="mb-4 flex justify-around">
          <span>Articulo:</span>
          <span>{name}</span>
        </div>
        <hr className="my-4" />
        <div className="mb-4 flex justify-around">
          <span>Precio:</span>
          <p>{price}</p>
        </div>
        <hr className="my-4" />
        <div className="mb-4 flex justify-around">
          <span>Cantidad:</span>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
