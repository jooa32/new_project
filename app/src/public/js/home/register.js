"use strict";
//html 과 연결되어있는 프론트엔드 js 파일 

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const name = document.querySelector("#name");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

// console.log("hello register");

registerBtn.addEventListener("click", register);
function register(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        
    };
    console.log(req)
    console.log(JSON.stringify(req))

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log("회원가입중 에러발생");
    });
}
