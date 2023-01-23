import axios from "axios";
import Headertest from "../../components/Headertest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsCard from "../../components/DetailsCard";
import Loading from "../../components/Loading";

function MeetupDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [meetup, setMeetup] = useState({
    _id: "",
    title: "",
    address: "",
    image: "",
    description: "",
    creator: "",
    date: "",
  });
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  const baseUrl = "https://next-meetups.onrender.com";
=======
  // const baseUrl = "https://stirring-cupcake-b97d3c.netlify.app/";
  const baseUrl = process.env.NEXT_PUBLIC_URL;
>>>>>>> 1e054643bda89bf3fd502efa4110f5a92c7169ea
  const url = baseUrl + `/api/get-meetup/${id}`;

  const getCurrentMeetupData = async () => {
    try {
      const { data } = await axios({
        url: url,
        method: "GET",
      });
      setMeetup(data);
      setLoading(false);
      console.log("data is ", data);
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  useEffect(() => {
    getCurrentMeetupData();
  }, []);

  return (
    <div>
      <Headertest />
      {!loading ? (
        <DetailsCard meetup={meetup!} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default MeetupDetails;
