import Link from "next/link"
import { Door } from "../public/types"
import  styles  from "../styles/doorLink.module.css"

export const DoorLink = (props:{door:Door}) => {
    const doorPath = `/game/${props.door.path}`
    return (
        <>
            <div className={styles.door_div}>
                <Link className={styles.door_link} href={doorPath}></Link>
                <span className={styles.door_span}>{props.door.text}</span>
            </div>
        </>
    )
}