import axios from "axios";
import Headertest from "../components/Headertest";
import MeetupsList from "../components/MeetupsList";
import { Data } from "../typings";
interface Props {
  meetups: Data[]
  base_url: string
}
// require('dotenv').config()


function Home({ meetups, base_url }: Props) {

  return (
    <>
      {/* <Header /> */}
      <Headertest />
      <MeetupsList base_url={base_url} meetups={meetups} />
    </>
  );
}
// console.log("location is",window.location.href);
// const url = process.env.NEXT_PUBLIC_URL + "/api/get-meetups";

export const getServerSideProps = async () => {
  const {data} = await axios({
    url: process.env.PROD_URL + "/api/get-meetups",
    // url: url,
    method: "GET",
  }) 

  return {
    props: {
      meetups: data,
      base_url: process.env.PROD_URL
    }
  }
}


export default Home;
