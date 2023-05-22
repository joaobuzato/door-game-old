import { ExpandedText as ExpandedTextType } from "@/public/types";
import styles from "../styles/ExpandedText.module.css";
import ExpandedText from "./ExpandedText";

import React from "react";

export default function ExpandedTextWrapper(props: {
  onClick: Function;
  expandedTexts: ExpandedTextType[];
}) {
  function expandedTextClickHandler(expandedText: string) {
    props.onClick(expandedText);
  }

  if (props.expandedTexts && props.expandedTexts.length > 0) {
    return (
      <>
        <div data-testid="expanded-texts-wrapper" className={styles.wrapper}>
          {props.expandedTexts.map((expandedText: ExpandedTextType) => (
            <ExpandedText
              onClick={expandedTextClickHandler}
              key={expandedText.id}
              expandedText={expandedText}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
