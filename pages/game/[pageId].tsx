import { useRouter } from "next/router"
import { map,Room } from "../../public/map"
import Link from 'next/link'

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

    
    console.log(room)

    return (<>
    {room.text}
    <ul>
        {room.doors.map((door:{path:string,text:string}) => (
            <li><Link href={door.path}>{door.text}</Link></li>
        ))}
    </ul>
    </>)

}