import { ExpandedText as ExpandedTextType } from "@/public/types";
import styles from "../styles/ExpandedText.module.css"
import ExpandedText from "./ExpandedText";

export default function ExpandedTextWrapper (props : {expandedTexts : ExpandedTextType[]}) {
    if(props.expandedTexts.length > 0) {
        return (<>
            <div className={styles.wrapper}>
                {props.expandedTexts.map((expandedText:ExpandedTextType) => (
                    <ExpandedText key={expandedText.id} expandedText={expandedText} />
                ))}
            </div>
            </>)
    } else {
        return <></>
    }
 
}