import Link from "next/link"
import { Door } from "../public/types"

export const DoorLink = (props:{door:Door}) => {
    return (
        <>
            <div><Link href={props.door.path}>{props.door.text}</Link></div>
        </>
    )
}