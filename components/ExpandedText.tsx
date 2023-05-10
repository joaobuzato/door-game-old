import { ExpandedText as ExpandedTextType } from "@/public/types";
import { useState } from "react";
import styles from "../styles/ExpandedText.module.css"

export default function ExpandedText (props : {expandedText : ExpandedTextType}) {

    const [text,setText] = useState(props.expandedText.sentence)

    function clickHandler() {
        setText(props.expandedText.text)
    }

    return <div key={props.expandedText.id} className={styles.text} onClick={clickHandler}>{text}</div>
 
}