import { Post } from "@/.contentlayer/generated";
import React from "react";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "../tags/Category";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./patterns.scss";
import { useTheme } from "next-themes";

type Props = {
  post: Post;
};

export default function DocHeading({ post }: Props) {
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${post.coverImage}`;
  const formattedDate = getFormattedDate(post.date);

  return (
    <div className={``}>
      <article className="lg:grid lg:grid-cols-2 lg:items-center mx-auto max-w-4xl flex  flex-col gap-5 justify-center   text-black dark:text-white">
        <div className="flex justify-center">
          <div className=" flex flex-col  gap-5 ">
            <div className="text-black dark:text-white lg:text-5xl text-4xl  font-lora font-bold   tracking-wide ">
              {post.title}
            </div>

            <div className=" lg:text-3xl text-xl flex flex-wrap items-center text-black dark:text-white font-lora font-semibold    tracking-wide gap-x-3">
              {" "}
              {post.bookAuthor ? `${post.bookAuthor},` : ""}{" "}
              {post.bookYear ? post.bookYear : ""}
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Category text={post.category} />{" "}
              <div className="flex  text-sm  uppercase dark:text-slate-400 text-black">
                <FaRegCalendarAlt />
                <div className="tracking-wider  ml-3 ">{formattedDate}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            priority={true}
            className="rounded-md lg:ml-0 ml-3 object-cover my-0 
                  w-[224px] h-[343px] 
                  lg:w-[224px] lg:h-[343px] 
                  md:w-[224px] md:h-[343px] "
            alt={imageUrl}
            src={imageUrl}
            width={354}
            height={539}
          />
        </div>
      </article>
    </div>
  );
}
