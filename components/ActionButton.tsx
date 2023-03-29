import Link from "next/link"
import { Action, Item, Condition } from "../public/types"
import InventoryManager from "@/public/inventoryManager";

export const ActionButton = (props:{window:Window, action:Action, inventory: Item[]}) => {
    const inventoryManager = new InventoryManager(props.inventory, props.window)

    const isConditionsMet = (conditions:Condition[]) => {
        let isConditionsMet = true;
        let element1;
        let element2;
        for(const cond of conditions){
            if(typeof cond.element1 == "string"){
                const item = inventoryManager.getItemByName(cond.element1)
                element1 = item? item.param : 0
            } else if (typeof cond.element1 == "number"){
                element1 = cond.element1
            }
            if(typeof cond.element2 == "string"){
                const item = inventoryManager.getItemByName(cond.element2)
                element2 = item? item.param : 0
            } else if (typeof cond.element2 == "number"){
                element2 = cond.element2
            }
            switch(cond.type){
                case "equals":
                    if (cond.element1 != cond.element2){
                        isConditionsMet = false;
                    }
                    break
                case "greater":
                    if (cond.element1 <= cond.element2){
                        isConditionsMet = false;
                    }
                    break
                case "lesser":
                    if (cond.element1 >= cond.element2){
                        isConditionsMet = false;
                    }
                    break
            }
        }
        return isConditionsMet
    }

    const actionHandler = () => {
        const action = props.action;
        if(!isConditionsMet(action.conditions)){

        }
        if (action.type === "get") {
            inventoryManager.storeItem(props.action.element, props.action.param)
        } else if (action.type === "use") {
            inventoryManager.useItem(props.action.element, props.action.param)
        }



         
        console.log(props.action.text)
        console.log(JSON.parse(window.sessionStorage.inventory))
    }
    return (
        <>
            <button onClick={actionHandler} />
        </>
    )
}