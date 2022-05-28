import * as React from "react";

import Card from "../components/card";
import BigCard from "../components/big_card";
import MainButton from "../components/button";

import "../home_contents.css"

const HomeContents = () => {
    return (
        <div className="home-contents">
            <div className="all-contents">
                <h1>コンテンツ</h1>
                <div className="card-contents">
                    <Card icon="🔰" title="プラ塾とは？" description="初めてプラ塾を受講する方に向けてご案内！" url="/about/"/>
                    <Card icon="☕" title="はじめてのJava講座" description="Javaも何もわからない方向けのゼロから教えるJava講座！" url="/java-beginner/"/>
                    <Card icon="🌱" title="初級プラグイン講座" description="Javaの基礎を学んだ後は初めてのプラグイン制作！" url="/plugin-beginner/"/>
                    <Card icon="⌨️" title="中級プラグイン講座" description="ちょっとプラグインづくりになれてきたら次のステップ！" url="/plugin-intermediate/"/>
                    <Card icon="🍙" title="実際に作るシリーズ" description="慣れてきたら色んなものを一緒に作ろう！" url="/make-together/"/>
                    <Card icon="🧩" title="マニアックなプラグイン講座" description="かなり深く掘り下げちゃうよ" url="/plugin-mania/"/>
                </div>
            </div>
            <div className="teacher-contents">
                <h1>講師紹介</h1>
                <div className="card-contents">
                    <BigCard icon="https://pbs.twimg.com/profile_images/1401341636781641733/NIU5YeZ0_400x400.jpg" name="tererun / てれるん" mainDescription="「作りたいものを、好きなだけ。」" subDescription="現役高校生のプラ塾の塾長。今年受験。色んな活動をしています。"/>
                </div>
            </div>
            <div className="link-contents">
                <h1>リンク</h1>
                <p>各種リンクはこちらから! 受講者と交流できるDiscordコミュニティもあります。</p>
                <div className="card-contents">
                    <MainButton text="Twitter" color="#5c8d89" url="https://www.twitter.com/Purajuku/"/>
                    <MainButton text="Discord" color="#5c8d89" url="http://links.purajuku.dev/discord/"/>
                </div>
            </div>
        </div>
    )
};

export default HomeContents;