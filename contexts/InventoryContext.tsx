import { Item } from "@/public/types";
import { createContext, useContext, useState } from "react";

interface InventoryContextData {
  inventory: Item[];
  updateInventory: (updatedInventory: Item[]) => void;
}

export const InventoryContext = createContext<InventoryContextData>({
  inventory: [],
  updateInventory: (param:any) => {},
});

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children } : any) => {
  const [inventory, setInventory] = useState([]);

  const updateInventory = (updatedInventory:any) => {
    setInventory(updatedInventory);
  };

  return (
    <InventoryContext.Provider value={{ inventory, updateInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};