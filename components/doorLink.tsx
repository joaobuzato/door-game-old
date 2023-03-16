import Link from "next/link"
import { Door } from "../public/types"

export const DoorLink = (props:{door:Door}) => {
    const doorPath = `/game/${props.door.path}`
    return (
        <>
            <div><Link href={doorPath}>{props.door.text}</Link></div>
        </>
    )
}