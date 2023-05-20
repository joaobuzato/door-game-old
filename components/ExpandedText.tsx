import { ExpandedText as ExpandedTextType } from "@/public/types";
import styles from "../styles/ExpandedText.module.css";
import React from "react";
export default function ExpandedText(props: {
  onClick: Function;
  expandedText: ExpandedTextType;
}) {
  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    props.onClick(props.expandedText.text);
    event.currentTarget.style.visibility = "hidden";
  }

  return (
    <button
      key={props.expandedText.id}
      className={styles.text}
      onClick={clickHandler}
    >
      {props.expandedText.sentence}
    </button>
  );
}
