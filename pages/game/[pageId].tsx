
import { map } from "../../public/map"
import Link from 'next/link'
import Parser from 'html-react-parser';
import {Room, Door, Action, Item} from "../../public/types"
import { DoorLink} from "../../components/DoorLink"
import styles from "../../styles/[pageId].module.css"
import { ActionButton } from "@/components/ActionButton";
import { useEffect } from "react";

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

//TODO gerenciamento de inventario




export default function Page({ room } :any) {

    let inventory: Item[]
    useEffect(() => {
       
        inventory = JSON.parse(window.sessionStorage.getItem("inventory") || "[]") as Item[]
    })

    return (<>
    <div className={styles.room_card}>
        <h1 className={styles.room_title}>{room.title}</h1>
        <p className={styles.room_p}>{Parser(room.text)}</p>

        <h3>Qual ação tomar?</h3>
        <div className={styles.door_container}>
            {room.actions.map((action:Action) => (
            <ActionButton inventory={inventory} action={action}></ActionButton>
            ))}
        </div>

        <h3 className={styles.question}>Em qual porta entrar?</h3>

        <div className={styles.door_container}>
            {room.doors.map((door:Door) => (
            <DoorLink door={door}></DoorLink>
            ))}
        </div>
    </div>
    </>)

}