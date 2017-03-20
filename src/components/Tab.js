import React, { Component } from "react";

export default function Tab({loginStatus}){
    if(loginStatus){
        return (
            <div>已经登陆！</div>
        );
    }else{
        return (
            <div>暂未登陆！</div>
        );
    }
}