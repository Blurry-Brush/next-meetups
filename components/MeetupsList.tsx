import React from "react";
import Card from "./Card";
import { Data } from "../typings";
import axios from "axios";
import { useContext } from "react";
import UrlContext from '../context/UrlContext'
import { Skeleton } from "@mui/material";

interface Props {
  meetups: Data[];
  base_url: string;
}

export default function MeetupsList({ meetups, base_url }: Props) {
  const {mainUrl,setMainUrl} = useContext(UrlContext);
  setMainUrl(base_url);
  return (
    <div>
      {meetups?.map((meetup) => {
        return meetup ? (
          <Card base_url={base_url} key={meetup._id} meetup={meetup} />
        ) : (
          <Skeleton variant="circular">
            <Card base_url={base_url} meetup={meetup} />
          </Skeleton>
        );
      })}
    </div>
  );
}
