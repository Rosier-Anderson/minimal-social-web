"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import z from "zod";

export default function ThreadActions() {

  const [preview, setPreview] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return null;
    setPreview(URL.createObjectURL(file));
 
  };
  return (
    <div className="flex flex-col justify-between my-auto  ">
      <label htmlFor="thread_image"> </label>{" "}
      <input
 
        onChange={handleChange}
        id="thread_image"
        name="thread_image"
        type="file"
        placeholder=""
        className="cursor-pointer"
      />
      <span className="">
        {" "}
        <LuImagePlus />
      </span>
      <label htmlFor="thread_emoji">
        <input id="thread_emoji" name="thread_emoji" className="cursor-pointer" />
        <span className="">
          {" "}
          <HiOutlineEmojiHappy />
        </span>
      </label>
      <label htmlFor="thread_localisation"> </label>
      <input id="thread_localisation" name="thread_localisation" className="cursor-pointer" />
      <span className="">
        {" "}
        <IoLocationOutline />
      </span>


     
    </div>
  );
}
