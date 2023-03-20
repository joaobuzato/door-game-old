import Link from "next/link"
import { Door } from "../public/types"
import  styles  from "../styles/doorLink.module.css"

export const DoorLink = (props:{door:Door}) => {
    const doorPath = `/game/${props.door.path}`
    const doorColor = props.door.color ? props.door.color : "white"
    return (
        <>
            <div className={styles.door_div}>
                <Link href={doorPath}><div className={styles.door_link} style={{backgroundColor:doorColor}}></div></Link>
                <p className={styles.door_p}>{props.door.text}</p>
            </div>
        </>
    )
}