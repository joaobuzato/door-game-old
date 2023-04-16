// components/Inventory.tsx
import { Item } from "@/public/types";
import { useInventory } from "../contexts/InventoryContext";
import styles from "../styles/Inventory.module.css"

const Inventory: React.FC = () => {
  const { inventory } = useInventory();

  return (
    <div className={styles.inventory_div}>
      <h2 className={styles.inventory_title}>Inventory</h2>
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