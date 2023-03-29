import {Item} from "./types"

export default class InventoryManager {
    inventory:Item[]
    constructor(inventory:Item[], window:Window){
        if (!inventory){
            window.sessionStorage.setItem("inventory", "[]")
            inventory = []
        }
        this.inventory = inventory
        
        console.log(this.inventory)
    }

    storeItem(item:string,param:number){
        const foundItem = this.inventory.filter(i => i.name==item)[0]
        
        if(foundItem){
            const index = this.inventory.indexOf(foundItem);
            this.inventory[index].param = foundItem.param + param
            console.log(this.inventory)
        } else {
            this.inventory.push({name:item,param})
            console.log(this.inventory)
        }
        window.sessionStorage.inventory = JSON.stringify(this.inventory)
        
    }

    useItem(item:string,param:number){
        const foundItem = this.inventory.filter(i => i.name==item)[0]
        const index = this.inventory.indexOf(foundItem);
        if(foundItem.param > param){
            this.inventory[index].param = foundItem.param - param
            console.log(this.inventory)
        } else {
            this.inventory = this.inventory.splice(index, 1);
            console.log(this.inventory)
        }

        window.sessionStorage.inventory = JSON.stringify(this.inventory)
    }

    getItemByName(name:string){
        return this.inventory.filter(i => i.name==name)[0]
    }
    
}