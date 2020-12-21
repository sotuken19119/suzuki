import React, { useState, useEffect } from "react";
import firebase from 'firebase';
import 'firebase/storage';

export default function Auth(){
    const [data,setData] = useState([]);
    //idだよ
    const [id_str,setId] = useState("");
    const [pass_str,setPass] = useState("");
    const [render, setRender] = useState(true);
    const [error_str,setError] = useState("");
    useEffect(()=>{
        getFireData();

    })
    //IDとpassの判定処理
    //login可能かの処理
    function getFireData(){
        //database取得
        let db = firebase.database();
        //データパスの取得
        let ref = db.ref("userID/");

        //データ取得時のメソッド
        ref
            //並び変えメゾット
            //キーによって並び変える
            .orderByKey()
            //フィルターメゾット
            //最初から引数の数だけ取り出す
            .limitToFirst(10)
            //第一引数処理のイベント名
            //snapshotはイベント時にうけとった
            //データの情報をまとめたオブジェクト
            .on('value',snapshot=>{
                setData(snapshot.val());
            });
    }

    function doChangeID(e) {
        setId(e.target.value);
    }

    //パスワードの変更
    function doChangePass(e) {
        setPass(e.target.value);
    }

    function doAction(e) {
        addFireData();
        setRender(false);
    }

    function checkStr(ID,pass){
        if(ID == '' && pass == ''){
            setError("IDとパスワードを入力してください");
            return false;
        }else{
            if(checkID(ID) && checkPass(pass)) return true;
        }
    }

    function checkID(ID){
        if(ID == ''){
            setError("IDを入力してください");
            return false;
        }
        return true;
    }

    function checkPass(pass){
        if(pass == ''){
            setError("パスワードを入力してください");
            return false;
        }
        return true;
    }

    function addFireData() {
        var flug = false;
        if(checkStr(id_str,pass_str)){
            for(let i in data){
                console.log(data[i].ID);
                if(data[i].ID == id_str){
                    if(data[i].Pass == pass_str){
                        flug = true;
                    }
                }
            }
        }
        if(flug == true){
            console.log("a");
        }else{
            setId("");
            setPass("");
            setError("IDまたはパスワードが間違っています。")
        }
    }
        
    return (
        <div
            // モーダルのデザイン
            style={{
                opacity: render ? 1 : 0,　//render-stateがtrueだったら透明化解除
                height: "100px",
                width: "150px",
                marginTop: -150,
                position: "absolute",
                background: "rgba(0,0,0,0.3)", //alphaは透明度の指定
                zIndex: 9999
                }}
        >
            <div>
                <input
                type="text"
                placeholder="your ID."
                onChange={doChangeID}
                value={id_str}
                />
                <input
                type="text"
                placeholder="your password."
                onChange={doChangePass}
                value={pass_str}
                />
                <div>{error_str}</div>
                <button onClick={doAction}>login</button>
            </div>
        </div>
    );
}