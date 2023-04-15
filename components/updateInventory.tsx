import { Action, Condition, Item } from "../public/types"
import { useInventory } from "../contexts/InventoryContext";

const InventoryButton = (props:{action:Action}) => {
  const { inventory, updateInventory } = useInventory();

  const storeItem = (item: Item) => {
    const newInventory = [...inventory]; // faz uma cópia do estado original
    const foundItemIndex = newInventory.findIndex(i => i.name === item.name);
  
    if (foundItemIndex !== -1) {
      // item já existe no inventário, atualiza a quantidade
      newInventory[foundItemIndex] = {
        name: item.name,
        param: newInventory[foundItemIndex].param + item.param,
      };
    } else {
      // item não existe no inventário, adiciona ao final
      newInventory.push(item);
    }
  
    // atualiza o estado do contexto com a nova cópia
    updateInventory(newInventory);
  };

  const useItem = (item: Item) => {
  const foundItemIndex = inventory.findIndex(i => i.name === item.name);

  if (foundItemIndex !== -1) {
    const newInventory = inventory.map((i, index) => {
      if (index === foundItemIndex) {
        const newItemParam = i.param - item.param;

        return {
          name: i.name,
          param: newItemParam
        };
      }

      return i;
    }).filter(i => i.param > 0);

    updateInventory(newInventory);
  }
};

  const isConditionsMet = (conditions:Condition[]) => {
    if(conditions.length === 0){
      return true
    }
    let isConditionsMet = true;
    let element1 = 0;
    let element2 = 0;
    
    for(const cond of conditions){
        if(typeof cond.element1 == "string"){
            const item = getItemByName(cond.element1)
            console.log(item)
            element1 = item ? item.param : 0
        } else if (typeof cond.element1 == "number"){
            element1 = cond.element1
        }
        if(typeof cond.element2 == "string"){
            const item = getItemByName(cond.element2)
            element2 = item? item.param : 0
        } else if (typeof cond.element2 == "number"){
            element2 = cond.element2
        }
        console.log(element1, cond.type, element2)
        switch(cond.type){
            case "equals":
                if (element1 != cond.element2){
                    isConditionsMet = false;
                }
                break
            case "greater":
                if (element1 <= cond.element2){
                    isConditionsMet = false;
                }
                break
            case "lesser":
                if (element1 >= cond.element2){
                    isConditionsMet = false;
                }
                break
        }
    }
    return isConditionsMet
  }

  const getItemByName = (name:string) => {
    return inventory.filter(i => i.name==name)[0]
}

  const handleClick = () => {

    if(!isConditionsMet(props.action.conditions)){
      console.log("A CONDIÇÃO NÃO FOI ATINGIDA")
      return
    }
    const item:Item = {name:props.action.element, param:props.action.param}
    if (props.action.type === "get") {
      storeItem(item)
    } else if (props.action.type === "use") {
      useItem(item)
    }
    
  };
  return (<button key={props.action.id} onClick={handleClick}>{props.action.buttonText}</button>);
}

export default InventoryButton;