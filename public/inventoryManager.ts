import {Item} from "./types"
import InventoryContext from "@/components/InventoryContext"
import { useContext } from "react"

export default class InventoryManager {
    items:Item[];
    setInventory
    constructor(items:Item[], setInventory:(items:Item[])=>{}){
        this.items = items
        this.setInventory = setInventory
    }


    storeItem(name:string,param:number){
        const foundItem = this.items.filter(i => i.name==name)[0]
        
        if(foundItem){
            const index = this.items.indexOf(foundItem);
            this.items[index].param = foundItem.param + param
        } else {
            this.items.push({name,param})
        }
        this.setInventory(this.items)
        
    }

    useItem(name:string,param:number){
        console.log("inventory", this.items)
        console.log(name,param)
        console.log("useItem", this.items.filter(i => i.name == name))
        const foundItem = this.items.filter(i => i.name==name)[0]
        const index = this.items.indexOf(foundItem);
        if(foundItem && foundItem.param > param){
            this.items[index].param = foundItem.param - param
        } else {
            this.items = this.items.splice(index, 1);
        }

        this.setInventory(this.items)
    }

    getItemByName(name:string){
        return this.items.filter(i => i.name==name)[0]
    }
    
}