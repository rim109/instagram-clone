import Photo from "../icons/Photo";

export default function New() {
  //새로운 feed를 생성
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[400px] bg-white mb-1">
        <div id="header" className="flex items-center justify-between p-2">
          {/* profile */}
          <div className="flex items-center ">
            <div
              className={`rounded-full w-10 h-10
              bg-[url('https://cdn-icons-png.flaticon.com/512/1361/1361876.png')]
            bg-contain mr-2`}
            />
            <div>
              <div className="font-semibold">{"작성자"}</div>
              <div className="font-light">{"위치"}</div>
            </div>
          </div>
          {/* 더보기 버튼 */}
          {/* <div>
            <Menu />
          </div> */}
        </div>
        <div id="content" className="w-[400px] h-[400px] flex justify-center items-center">
          <button>
            <Photo />
          </button>
          {/* <img
            className="object-cover	w-[400px] h-[400px]"
            src={"이미지 링크"}
            alt="img"
          /> */}
        </div>
        
        
        <div id="comments" className="p-2">
          
          <div>
            <b>{"입력자"}</b> {"콘텐츠의 내용"}
          </div>
          {/* 내가 작성한 컨텐츠의 글 */}
          {/* 댓글들 */}
        </div>
      </div>
    </main>
  )
}

