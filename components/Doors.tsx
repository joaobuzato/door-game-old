import { Door } from "@/public/types";
import { DoorLink } from "./DoorLink";
import styles from "../styles/Doors.module.css";
import React from "react";

export default function Doors(props: { doors: Door[] }) {
  return (
    <>
      <h3 className={styles.question}>Em qual porta entrar?</h3>
      <div data-testid="doors-container" className={styles.door_container}>
        {props.doors.map((door: Door) => (
          <DoorLink key={door.id} door={door}></DoorLink>
        ))}
      </div>
    </>
  );
}
