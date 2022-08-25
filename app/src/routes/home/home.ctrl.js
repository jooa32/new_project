"use strict";

const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    }, 
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
};




const process = {
    login: async (req, res) => {
        // 클라이언트가 전달한 req
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
        // 클라이언트에 res 로 던져줌 
        // return res.json(response);
    }, 

    register: (req, res) => {
        // 클라이언트가 전달한 req
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
        // 클라이언트에 res 로 던져줌 
        // return res.json(response);
    }


};


module.exports = {
    output,
    process,
}


