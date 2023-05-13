
import { map } from "../../public/map"
import Parser from 'html-react-parser';
import {Room, Door, Action, Item} from "../../public/types"
import { DoorLink} from "../../components/DoorLink"
import styles from "../../styles/[pageId].module.css"
import Inventory from "@/components/Inventory";
import Actions from "@/components/Actions";
import ExpandedTextWrapper from "@/components/ExpandedTextWrapper";
import { use, useState } from "react";
import Doors from "@/components/Doors";

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

    const [text,setText] = useState(Parser(room.text))
    console.log(room)

    function expandText(expandedText:string) {
        setText((oldText) => {return `${oldText} ${expandedText}` })
    }
    
    return (<>
    <div className={styles.room_card}>
        <h1 className={styles.room_title}>{room.title}</h1>
        <p className={styles.room_p}>{text}</p>
        
        <ExpandedTextWrapper onClick={expandText} expandedTexts={room.expandedTexts}/>
        <Actions actions = {room.actions}/>
        <Doors doors = {room.doors}></Doors>
        
        <Inventory></Inventory>
    </div>
    
    
    
    </>)

}