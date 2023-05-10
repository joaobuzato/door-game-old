
import { map } from "../../public/map"
import Parser from 'html-react-parser';
import {Room, Door, Action, Item} from "../../public/types"
import { DoorLink} from "../../components/DoorLink"
import styles from "../../styles/[pageId].module.css"
import Inventory from "@/components/Inventory";
import Actions from "@/components/Actions";
import ExpandedTextWrapper from "@/components/ExpandedTextWrapper";

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

        <Actions actions = {room.actions}/>
        <ExpandedTextWrapper expandedTexts={room.expandedTexts}/>

        <h3 className={styles.question}>Em qual porta entrar?</h3>
        <div className={styles.door_container}>
            {room.doors.map((door:Door) => (
            <DoorLink key={door.id} door={door}></DoorLink>
            ))}
        </div>
        <Inventory></Inventory>
    </div>
    
    
    
    </>)

}