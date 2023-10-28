"use client";

import Image from 'next/image'
import { Feed } from './components/Feed';
import { useState } from 'react';


// 새로운 이미지를 올리는 화면
// feeds 다른 사람들의 피드를 보는 화면
// my 내 정보화면

const DUMMY_DATA = [
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fshop-phinf.pstatic.net%2F20200909_179%2F1599633595238PNrcu_JPEG%2F11.JPG%3Ftype%3Dw860&type=sc960_832",
    text:"나무 이쁘네"  ,
    liked: [],
  },
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDdfMTAw%2FMDAxNjk0MDgzNzgwOTk3.--_ESjoeRolMpf0k7hFlfwcFYizdWiip6zk3r0wchoQg.EbtPIknedLzAaX36PTOTk0TtoMn50jn4skBLmYrc2yAg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_86.png&type=sc960_832",
    text:"우사깈ㅋㅋ"  ,
    liked: [],
  },
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://t1.daumcdn.net/cfile/tistory/2423053D5673B63503",
    text:"이제 곧 크리스마스!!"  ,
    liked: [],
  },
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDFfODIg%2FMDAxNjkzNTU0MzE0NDA1.n_2lUBW1EVSaU2aWDdqhECba-rx8YzzO5NPDaHr7-uEg.jtBYPeeDkob3HKQFaWyL4lF6qE4BO3sOTsvRdDmnKQUg.JPEG.puhaha6594%2FIMG_4423.JPG&type=sc960_832",
    text:"프라하 또 가구 싶다!!"  ,
    liked: [],
  },
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://t1.daumcdn.net/cfile/tistory/2423053D5673B63503",
    text:"이제 곧 크리스마스!!"  ,
    liked: [],
  },
  {
    id:"xxxx",
    author: {
      id:"adsmlq",
      name:"Rim",
      profileImg:
        "https://cdn-icons-png.flaticon.com/512/1361/1361876.png",
    },
    location:"Seoul",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MjFfMTg5%2FMDAxNjk1MzAwNDc4Nzg4.WFUx6VZZ6w9AMZYSS2z5uUyCK6dQpM_WTIiFdVppRgEg.bOLPd7dpPbquis1DwQrfq6HGwJ4QVdIh6yMk95K2UTEg.JPEG.suunone%2F1695300414675.jpg&type=sc960_832",
    text:"이제 곧 크리스마스!!"  ,
    liked: [],
  },
  
]

export default function Home() {
  const [ contents, serContents ] = useState( DUMMY_DATA );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {contents.map((content) => (
        <Feed key={content.id} content={content} />
      ))}
    </main>
  );
}
