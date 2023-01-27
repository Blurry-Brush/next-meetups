import axios from "axios";
import Headertest from "../../components/Headertest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsCard from "../../components/DetailsCard";
import Loading from "../../components/Loading";
import { useContext } from "react";
import UrlContext from '../../context/UrlContext'

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
  const {mainUrl} = useContext(UrlContext);
  const url = mainUrl + `/api/get-meetup/${id}`;

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

