import React, { useMemo } from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Headertest from "../components/Headertest";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

function showDetail() {
  return (
    <div>
      <Headertest />

      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center lg:text-left">
          <div class="px-6 py-12 md:px-12">
            <div class="grid lg:grid-cols-2 lg:gap-x-12 items-center">
              <div class="mb-12 lg:mb-0">
                <h2 class="my-12 text-5xl font-bold tracking-tight leading-tight">
                  Are you ready <br />
                  <span class="text-green-600">for an adventure?</span>
                </h2>
                <a
                  class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </a>
                <a
                  class="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out mb-2"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="success"
                  href="#!"
                  role="button"
                >
                  Learn more
                </a>
              </div>

              <div class="mb-12 lg:mb-0">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/051.jpg"
                  class="w-full rounded-lg sshadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default showDetail;
