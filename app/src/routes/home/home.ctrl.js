"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index");
    }, 
    login: (req, res) => {
        res.render("home/login");
    },
};


const  users = {
    id: ["woorim", "나개발", "김팀장"],
    psword: ["1234", "12344", "12345"],
};


const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};


module.exports = {
    output,
    process,
}