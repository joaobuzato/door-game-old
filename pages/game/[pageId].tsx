import { Room } from "../../public/types";
import styles from "../../styles/[pageId].module.css";
import Inventory from "@/components/Inventory";
import Actions from "@/components/Actions";
import ExpandedTextWrapper from "@/components/ExpandedTextWrapper";
import { useEffect, useState } from "react";
import Doors from "@/components/Doors";
import Head from "next/head";

export async function getStaticProps(context: any) {
  const { params } = context;
  const result = await fetch("http://44.201.179.67:8080/rooms");
  const rooms: Room[] = await result.json();
  const room = rooms.find((r) => r.path == params.pageId);
  return {
    props: { room },
  };
}

export async function getStaticPaths() {
  const result = await fetch("http://44.201.179.67:8080/rooms");
  const rooms: Room[] = await result.json();
  const paths = rooms.map((room) => {
    return {
      params: {
        pageId: `${room.path}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Page({ room }: any) {
  const [text, setText] = useState("");

  function expandText(expandedText: string) {
    setText((oldText) => {
      return `
      ${oldText}
      
      ${expandedText}`;
    });
  }

  return (
    <>
      <Head>
        <title>{room.title}</title>
      </Head>
      <div className={styles.room_card}>
        <h1 className={styles.room_title}>{room.title}</h1>
        <p className={styles.room_p}>
          {room.text}
          {text}
        </p>

        <ExpandedTextWrapper
          onClick={expandText}
          expandedTexts={room.expandedTexts}
        />
        <Actions actions={room.actions} />
        <Doors doors={room.doors}></Doors>

        <Inventory></Inventory>
      </div>
    </>
  );
}
