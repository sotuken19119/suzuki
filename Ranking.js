import React,{ useState, useEffect } from "react";
import RankingEasy from "./RankingEazy";
import RankingNormal from "./RankingNormal";
import RankingHard from "./RankingHard";

export default function Ranking ({setflgRank}){
    const [render, setRender] = useState(false);
    const [radio,setRadio] = useState("a");
    useEffect(() => {
        setTimeout(() => {  // 時間を止める
          setRender(true);
        }, 1000);
    }, []);

    function cancel(){
        setRender(false);
        setflgRank(false);
    }

    return (
        <div
            style={{
                opacity: render ? 1 : 0,
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: 5,
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold",
            }}
        >  
            <div
                style={{
                    opacity: render ? 1 : 0,
                    height: "50%",
                    width: "30%",
                    position: "absolute",
                    background: "rgba(8,8,8,0.5)",
                    zIndex: 5,
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight:"700px",
                    left: 0,
                    right: 0,
                    minWidth:"500px",

                }}
            >
                <div style={{
                        fontSize:"20px",
                        marginBottom:"5%",
                        marginTop:"5%",
                    }}
                >
                    Ranking
                </div>
                <div>
                    <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                            onChange={() => setRadio("a")}
                            />                      
                    <label
                        style={{
                            paddingRight:"5%"
                        }}
                    >
                        Easy
                    </label>
                    <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                            onChange={() => setRadio("b")}
                            /> 
                    <label
                        style={{
                            paddingRight:"5%"
                        }}
                    >
                        Normal
                    </label>

                    <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                            onChange={() => setRadio("c")}
                            /> 
                    <label>Hard</label>
                    <div
                        style={{
                            marginTop:"5%"
                        }}>
                        {radio == "a" ? (
                            <RankingEasy /> 
                        ):( radio == "b" ?(
                            <RankingNormal /> 
                        ):(
                            <RankingHard />
                        )
                        )}                                
                    </div>
                        

                </div>
                
                
                <button onClick = {cancel}>戻る</button>
            </div>
        </div>
    );
}
