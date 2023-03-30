import Link from "next/link"
import { Action, Item, Condition } from "../public/types"
import InventoryManager from "@/public/inventoryManager";
import { useEffect } from "react";

export const ActionButton = (props:{action:Action, inventory: Item[]}) => {
    let inventoryManager:InventoryManager
    useEffect(() => {

        inventoryManager = new InventoryManager(props.inventory, window)
    })
    

    const isConditionsMet = (conditions:Condition[]) => {
        let isConditionsMet = true;
        let element1 = 0;
        let element2 = 0;
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
                    if (element1 != cond.element2){
                        isConditionsMet = false;
                    }
                    break
                case "greater":
                    console.log(cond)
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
        console.log("isConditionMet", isConditionsMet)
        return isConditionsMet
    }

    const actionHandler = () => {
        const action = props.action;
        if(!isConditionsMet(action.conditions)){
            console.log("A CONDIÇÃO NÃO FOI ATINGIDA")
            return
        }
        if (action.type === "get") {
            inventoryManager.storeItem(props.action.element, props.action.param)
        } else if (action.type === "use") {
            inventoryManager.useItem(props.action.element, props.action.param)
        }
        console.log(props.action.text)
        console.log(JSON.parse(window.localStorage.getItem("inventory") || "[]"))
    }
    return (
        <>
            <button onClick={actionHandler} >ACTION!</button>
        </>
    )
}