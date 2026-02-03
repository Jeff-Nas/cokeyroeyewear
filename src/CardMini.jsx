export function CardMini({ image, name = "" }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 md:w-20 md:h-20 overflow-hidden rounded">
        <img
          className="w-full object-cover"
          src={image}
          alt={`Óculos modelo ${name}`}
        />
      </div>
      <p className="font-light text-sm md:font-normal md:text-base">{name}</p>
    </div>
  );
}
