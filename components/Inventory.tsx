// components/Inventory.tsx
import { Item } from "@/public/types";
import { useInventory } from "../contexts/InventoryContext";

const Inventory: React.FC = () => {
  const { inventory } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item:Item) => (
          <li key={item.name}>
            {item.name} x{item.param}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;