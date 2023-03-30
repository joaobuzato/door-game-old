import {Item} from "./types"

export default class InventoryManager {
    inventory:Item[]
    constructor(inventory:Item[], window:Window){
        if (!inventory){
            window.localStorage.setItem("inventory", "[]")
            inventory = []
        }
        this.inventory = inventory
    };

    storeItem(name:string,param:number){
        const foundItem = this.inventory.filter(i => i.name==name)[0]
        
        if(foundItem){
            console.log("foundItem storeItem", foundItem)
            const index = this.inventory.indexOf(foundItem);
            this.inventory[index].param = foundItem.param + param
            console.log("storeItem Inventory", this.inventory)
        } else {
            console.log("foundItem storeItem", foundItem)
            this.inventory.push({name,param})
            console.log("storeItem Inventory", this.inventory)
        }
        window.localStorage.inventory = JSON.stringify(this.inventory)
        
    }

    useItem(name:string,param:number){
        console.log("inventory", this.inventory)
        console.log(name,param)
        console.log("useItem", this.inventory.filter(i => i.name == name))
        const foundItem = this.inventory.filter(i => i.name==name)[0]
        const index = this.inventory.indexOf(foundItem);
        if(foundItem && foundItem.param > param){
            this.inventory[index].param = foundItem.param - param
        } else {
            this.inventory = this.inventory.splice(index, 1);
        }

        window.localStorage.inventory = JSON.stringify(this.inventory)
    }

    getItemByName(name:string){
        return this.inventory.filter(i => i.name==name)[0]
    }
    
}