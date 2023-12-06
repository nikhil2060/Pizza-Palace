import { formatCurrency } from "../../utils/helpers";
import Button from "../../ UI/Button";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "greyscale opacity-70" : ""}`}
      />
      <div className="flex grow  flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium uppercase text-stone-500">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p>Sold out</p>
          )}

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
