"use client"

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {addDoc, collection, where, getDocs, query} from "@firebase/firestore";
import { firestore } from "@/firebase";
import { usePathname, useRouter } from "next/navigation";

export default function Auth() {
    const [isLoginMode, setLoginMode] = useState(true)
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [pwConfirm, setPwConfirm] = useState("");
    const pathname = usePathname();
    const router = useRouter();
    

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>
                <label>name: </label>
                <input value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>PW: </label>
                <input
                    type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
            </div>
            {!isLoginMode && (
                <div>
                    <label>PW confirm</label>
                    <input
                        type="password"
                        value={pwConfirm}
                        onChange={(e) => setPwConfirm(e.target.value)}
                    />
                </div>
            )}
            <button
                onClick={async() => {
                    if (isLoginMode) {
                        const storedUser =await getDocs(
                            query (collection(firestore,"users"),
                            where("name","==",id))
                        );
                        const targetUsers = [];
                        storedUser.forEach((doc) => targetUsers.push(doc.data()));
                        if (targetUsers.length === 0) {
                            window.alert("해당 계정으로 가입된 정보가 없습니다");
                            return;
                        }
                        if (targetUsers.length > 1) {
                            console.error("데이터가 꼬인 것 같아요");
                            return;
                        }
                        const targetUser = targetUsers[0]
                        if (targetUser.pw !== pw){
                            window.alert("비밀번호가 다릅니다")
                            return;
                        }

                        window.alert("로그인에 성공했습니다.")
                        localStorage.setItem("user",JSON.stringify(targetUser));
                        router.push("/")
                        return;
                    }
                    //validation
                    if(pw !== pwConfirm){
                        window.alert("두 개의 비밀번호가 다릅니다");
                        return;
                    }  
                    const storedUser =await getDocs(
                        query (collection(firestore,"users"),
                        where("name","==",id))
                    );
                    const targetUsers = [];
                    storedUser.forEach((doc) => targetUsers.push(doc.data()))
                    if(targetUsers.length > 0) {
                        window.alert(
                            "중복된 계정 정보 이름이 있습니다. 이름을 변경해주세요"
                        );
                        return;
                    }

                    const newUser = {
                        id: uuidv4(),
                        name:id,
                        pw,
                    };
                    await addDoc(collection(firestore, "users"),newUser);
                    localStorage.setItem("user",JSON.stringify(newUser));
                    console.log(newUser);
                    window.alert("회원가입에 완료했습니다")
                    router.push("/") 
                }}
                >

                {isLoginMode ? "로그인" : "회원가입"}
            </button>


            <button onClick={() => setLoginMode(!isLoginMode)}>
                {isLoginMode ? "회원가입 하러 가기" : "로그인 하러가기"}
                </button>
           
        </main>
    )
}