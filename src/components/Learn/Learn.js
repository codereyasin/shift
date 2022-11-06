import React from "react";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Question, Video } from "../../data/data";

const Learn = () => {
  const [video, setVideo] = useState(true);
  const handleVideo = () => {
    setVideo(!video);
  };
  return (
    <div className="container bg-red-600 mx-auto rounded-t-md">
      <div className="py-10">
        <h1 className="text-white text-4xl items-center justify-center flex font-bold py-14">
          Read, watch and learn
        </h1>
        <div className="bg-white py-11 pl-7 rounded-t-2xl">
          <div className="items-start gap-5 justify-start flex text-black font-semibold">
            <h1
              className={`${video ? 'text-start rounded-2xl bg-red-200 px-3 py-1' : 'text-start rounded-2xl bg-transparent border px-4 py-1' } `}
              onClick={(e) => handleVideo(false)}
            >
              Questions
            </h1>
            <h1
            className={`${!video ? 'text-start rounded-2xl bg-red-200 px-3 py-1' : 'text-start rounded-2xl bg-transparent border px-4 py-1' } `}
              onClick={handleVideo}
            >
              Videps
            </h1>
          </div>
          {video ? (
            <div className="py-10 space-y-5">
              {Question.map(question => (
                <span key={question.id} className="border-b flex  items-center text-xl justify-between font-semibold">
                {question.question}
                <span>
                  <AiOutlineRight />
                </span>
              </span>
              ))}
            </div>
          ) : (
            <div className=" flex pt-10 gap-16 justify-center flex-wrap items-center ">
              {Video.map(video => (
                <div className="">
                <img
                  className="w-[250px] rounded-2xl"
                  src={video.image}
                  alt=""
                />
                <h1 className="font-bold text-xl">{video.title}</h1>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
