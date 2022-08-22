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

    fetch("/login", {
        method: "POST",
        headeres: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    });
}
