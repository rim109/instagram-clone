"use client"

import { useState } from "react";
import { Photo } from "../icons/Photo";

export default function New() {
  // 새로운 feed를 생성

  const [file, setFile] = useState()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[400px] bg-white mb-1">
        <div id="header" className="flex items-center justify-between p-2">
          {/* profile */}
          <div className="flex items-center ">
            <div
              className={`rounded-full w-10 h-10
              bg-[url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')]
              bg-contain mr-2`}
            />
            <div>
              <div className="font-semibold">{"작성자"}</div>
              <div className="font-light">{"위치"}</div>
            </div>
          </div>
          {/* 더보기 버튼 */}
          <div>{/* <Menu /> */}</div>
        </div>
        <div
          id="content"
          className="w-[400px] h-[400px] flex justify-center items-center"
        >
          {/* <input 
          id="file-upload" 
          type="file" 
          style={{display: "none"}} 
          value={file} 
          onChange={(e) => {
           const file = e.target.files[0];
           const upload = await uploadBytes(ref(storage, file.name),file);
           console.log({uploaded});
            const path = await ref(storage, file.name);
            console.log({uploaded, path})
          }} /> */}
          <label htmlfor = "file-upload" className="cursor-pointer">
            <Photo />
          </label>
          {/* <img
            className="object-cover	w-[400px] h-[400px]"
            src={"이미지 링크"}
            alt="img"
          /> */}
        </div>

        <div id="comments" className="p-2">
          <div>
            <b>{"입력자"}</b> {"컨텐츠의 내용"}
          </div>
        </div>
      </div>
    </main>
  );
}