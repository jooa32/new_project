"use strict";
//html 과 연결되어있는 프론트엔드 js 파일 

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);
function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req)
    console.log(JSON.stringify(req))

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){ 
            location.href = "/";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러발생"));
    });
}
