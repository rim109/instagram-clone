import { Bookmark } from "../icons/Bookmark"
import { Chat } from "../icons/Chat"
import { DM } from "../icons/DM"
import { Heart } from "../icons/Heart"
import { Menu } from "../icons/Menu"

export const Feed = () => {
    return (
    <div className="w-[400px] bg-white"> 
        <div id="header" className="flex items-center justify-between p-2">
            {/* profile */}
    
         
         <div className ="flex items-center m-1">
            <div className ="rounded-full w-10 h-10 
            bg-[url('https://cdn-icons-png.flaticon.com/512/1361/1361876.png')] 
            bg-contain mr-2"
            />
            <div>
                <div className ="font-semibold">Rim</div>
                <div className ="font-light">Seoul</div>
            </div>
         </div>
         {/* 더보기 버튼 */}
         <div>
            <Menu />
         </div>
        </div> 
        <div id ="content" className="w-[400px] h-[400px] ">
            <img
                className="object-cover w-[400px] h-[400px]"
                src="https://t1.daumcdn.net/cfile/tistory/2423053D5673B63503"
                alt="img"
            />
        </div>
        <div id ="footer" className ="flex items-center justify-between p-2">
            {/* 좋아요 버튼, 댓글버튼, dm버튼 */}
            <div className="flex items-center w-1/4 justify-space">
                <Heart />
                <Chat />
                <DM />
            </div>    
            {/* 저장 버튼 */}
            <div>
                <Bookmark />
            </div>
        </div>
        <div id ="comments" className="p-2">

            {/* 누가 좋아요했는지 + 좋아요한사람의 수*/}
            <div>
                Liked by <b>{100} others</b>
            </div>
            <div>
                <b>Rim</b> 이제 곧 크리스마스!!
            </div>
            {/* 내가 작성한 컨텐츠의 글*/}
            {/* 댓글들 */}
        </div>
    </div>
    )
} 