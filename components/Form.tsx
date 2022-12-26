import Link from "next/link";
import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Headertest from "./Headertest";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  // const [creator, setCreator] = useState("");

  const router = useRouter();
  const { data: session } = useSession();
  
  console.log( "url is " ,process.env.URL);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const creator = session?.user?.email;
    const deployedUrl = "https://next-meetups-production.up.railway.app";

    const url = (process.env.NEXTAUTH_URL || deployedUrl) + "/api/new-meetup";

    const payload = {
      title,
      description,
      address,
      image,
      creator,
      // createdBy: session?.user?.email
    }
    console.log(payload);
    try {
      const {data} = await axios({
        url: url,
        method: "POST",
        data: payload,
      }) 
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
    router.push("/");
  };



  return (
    <>
      <Headertest />
      <div className="bg-rose-100 rounded mx-auto max-w-md mt-20">
        <form onSubmit={handleSubmit} className="p-4 flex flex-col space-y-6" action="">
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Title
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              
              className={`bg-rose-100 ${title ? "border-gray-400" : "border-red-500"} border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={title}
            />
          </div>
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Description
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className={`bg-rose-100 ${description ? "border-gray-400" : "border-red-500"} border-2 rounded outline-none px-1 text-slate-600`}

              type="text"
              value={description}
            />
          </div>
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Address
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className={`bg-rose-100 ${address ? "border-gray-400" : "border-red-500"} border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={address}
            />
          </div>
          <div>
            <label htmlFor="image">
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Image
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              id="image"
              placeholder="Paste the image URL here"
              className={`bg-rose-100 ${image ? "border-gray-400" : "border-red-500"} border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={image}
            />
          </div>

          {title && description && address && image ? (
            <button
            className="text-rose-500 w-full border border-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-600 font-bold uppercase px-8 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
            type="submit"
            
          >
            Add Meetup
          </button>) : (
            <p className="text-red-500 text-center font-semibold text-lg bg-red-200 py-1 animate-pulse">Please fill all the details</p>)}
        </form>
      </div>
    </>
  );
}

export default Form;
