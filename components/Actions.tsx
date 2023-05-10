import { Action } from "@/public/types";
import InventoryButton from "./updateInventory";
import styles from "../styles/Actions.module.css"

export default function Actions (props : {actions : Action[]}) {
    if(props.actions.length > 0) {
        return (<>
            <h3>Qual ação tomar?</h3>
            <div className={styles.door_container}>
                {props.actions.map((action:Action) => (
                <InventoryButton key={action.id} action={action}></InventoryButton>
                ))}
            </div>
            </>)
    } else {
        return <></>
    }
 
}