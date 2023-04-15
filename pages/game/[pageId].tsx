
import { map } from "../../public/map"
import Link from 'next/link'
import Parser from 'html-react-parser';
import {Room, Door, Action, Item} from "../../public/types"
import { DoorLink} from "../../components/DoorLink"
import styles from "../../styles/[pageId].module.css"
import Inventory from "@/components/Inventory";
import InventoryButton from "@/components/updateInventory";

export async function getStaticProps(context:any) {
    const {params} = context
    const rooms:Room[] = map
    const room = rooms.find(r => r.id == params.pageId)
    return {
        props: {room}
    }
}

export async function getStaticPaths() {
    const rooms:Room[] = map
    const paths = rooms.map((room) => {
        return {
            params: {
                pageId: `${room.id}`
            }
        }
    })

    return { paths, fallback:false}
}


export default function Page({ room } :any) {
    
    return (<>
    <div className={styles.room_card}>
        <h1 className={styles.room_title}>{room.title}</h1>
        <p className={styles.room_p}>{Parser(room.text)}</p>

        <h3>Qual ação tomar?</h3>
        <div className={styles.door_container}>
            {room.actions.map((action:Action) => (
            <InventoryButton action={action}></InventoryButton>
            ))}
        </div>

        <h3 className={styles.question}>Em qual porta entrar?</h3>

        <div className={styles.door_container}>
            {room.doors.map((door:Door) => (
            <DoorLink door={door}></DoorLink>
            ))}
        </div>
    </div>
    <Inventory></Inventory>
    
    
    </>)

}