import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Headertest from "../components/Headertest";
import MeetupsList from "../components/MeetupsList";
import { Data } from "../typings";
interface Props {
  meetups: Data[]
}
// require('dotenv').config()

function Home({ meetups }: Props) {
  return (
    <>
      {/* <Header /> */}
      <Headertest />
      <MeetupsList meetups={meetups} />
    </>
  );
}

const url = process.env.NEXT_PUBLIC_URL + "/api/get-meetups";

export const getServerSideProps = async () => {
  const {data} = await axios({
    // url: "http://localhost:3000/api/get-meetups",
    url: url,
    method: "GET",
  }) 

  return {
    props: {
      meetups: data,
    }
  }
}


export default Home;
