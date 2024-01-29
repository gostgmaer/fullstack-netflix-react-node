"use client"
import { configurationDB, genres } from "@/assets/data";
import { poster_base_url } from "@/config/setting";
import { createNameArray, isDateWithinSixMonths } from "@/helper/services";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { MdAdd, MdChevronRight, MdPlayArrow, MdThumbUp } from "react-icons/md";
const Moviecard = ({ data }) => {

  const router = useRouter();
  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );
  return (
    <div className="group bg-gray-950 col-span relative h-[10vw]">
      <img
        onClick={redirectToWatch}
        // src={data.thumbnailUrl}
        src={`${poster_base_url}${data.backdrop_path
          ? configurationDB.images.backdrop_sizes[2]
          : configurationDB.images.poster_sizes[4]
          }${data?.backdrop_path ? data.backdrop_path : data?.poster_path}`}
        alt="Movie"
        draggable={false}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-0
        w-full
        h-[10vw]
      "
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-1000
        z-10
        invisible
        sm:visible
        delay-0
        w-full
        scale-0
        group-hover:scale-110 
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[0]
        group-hover:opacity-100
      "
      >
        <img
          onClick={redirectToWatch}
          src={`${poster_base_url}${data.backdrop_path
            ? configurationDB.images.backdrop_sizes[2]
            : configurationDB.images.poster_sizes[4]
            }${data?.backdrop_path ? data.backdrop_path : data?.poster_path}`}
          alt="Movie"
          draggable={false}
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[10vw]
        "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3">

            <div className=" flex items-center justify-start gap-1">
              <div

                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              >
                <MdPlayArrow className="text-black w-4 lg:w-6" />

              </div>
              <div

                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              >
                <MdAdd className="text-black w-4 lg:w-6" />

              </div>
              <div

                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              >
                <MdThumbUp className="text-black w-4 lg:w-6" />

              </div>
            </div>
            <div>

            </div>


            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <MdChevronRight className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 text-white mt-2">
            <div className=" flex gap-2 items-center">
              {isDateWithinSixMonths(data.release_date) ? <span className="text-green-600"> {isDateWithinSixMonths(data.release_date) && "New"}</span> : <span className="match text-sm text-green-600">94% match</span>}
              <span className=" shadow-sm border p-1 text-xs">U/A {data.adult ? '18+' : "13+"}</span>
              <span className="text-white text-[10px] lg:text-sm">{data.duration}</span>
              <span className="shadow-sm border p-1 text-xs">HD</span></div>


          </div>
          <div className="flex  gap-2 text-white mt-2 justify-start items-start text-sm">

          <p>
          {createNameArray(data.genre_ids, genres).toString()}
          </p>
          
          </div>


          {/* <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
