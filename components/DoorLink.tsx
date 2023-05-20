import Link from "next/link";
import { Door } from "../public/types";
import styles from "../styles/DoorLink.module.css";
import React from "react";

export const DoorLink = (props: { door: Door }) => {
  const doorPath = `/game/${props.door.path}`;
  const doorColor = props.door.color ? props.door.color : "white";
  return (
    <>
      <div data-testid="door-wrapper" className={styles.door_div}>
        <Link data-testid="door-address" href={doorPath}>
          <div
            data-testid="door-icon"
            className={styles.door_link}
            style={{ backgroundColor: doorColor }}
          ></div>
        </Link>
        <p data-testid="door-paragraph" className={styles.door_p}>
          {props.door.text}
        </p>
      </div>
    </>
  );
};
