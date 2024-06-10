import React, {useEffect, useState} from "react";
import {requestDelete, requestGet, requestPost, requestPut} from "../request/requests";
import FurnitureCard from "../components/FurnitureCard";
import FurniturePanel from "../components/FurniturePanel";
import './Users.css';



function Furniture({}) {

    const [Furniture, setFurniture] = useState([{"furniture_name":"name1", "count_part":"2", "material":"wood", "weight":"56", "parts":[{"part_name":"partname1", "part_weight":"34", "flag":true}]}]) //идеи
    const [Furniture_one, setFurniture_one] = useState([]) //выбранная идея
    const [Furniture_one_index, setFurniture_une_index] = useState([]) //выбранная идея
    const [ShowPanel, setShowPanel] = useState(false)

    const [itsNew, setItsNew] = useState(false)

    useEffect(()=>{
            requestGet(setFurniture) // Получить
    }, [])

    const deleteChange = () => {
      var ch = Furniture
        delete ch[Furniture_one_index]
        setFurniture(ch)
        setShowPanel(false)
        requestDelete(Furniture_one.id_furniture)
    }

    const saveChange = () => {
        if (itsNew){
            var ch = Furniture
            ch.push(Furniture_one)
            setFurniture(ch)
            requestPost(Furniture_one)
        }
        else {
            var ch = Furniture
            ch[Furniture_one_index] = Furniture_one
            setFurniture(ch)
            requestPut(Furniture_one)
        }

    }

    const readSurveys = (item,index) => (event) => {
        setFurniture_one(item)
        setFurniture_une_index(index)
        setShowPanel(true)
        setItsNew(false)
    }

    const addSurveysClick = () => {
        setFurniture_one({"furniture_name":"", "count_part":"", "material":"", "weight":"", "parts":[]})
        setItsNew(true)
        setShowPanel(true)
    }

    return (
        <div className="User_main">
            <div className="UserAddButton" onClick={addSurveysClick}>
                <p className="UserAddButton_p">+</p>
            </div>
            {ShowPanel && <FurniturePanel Furniture_one = {Furniture_one} setFurniture_one = {setFurniture_one} setShowPanel = {setShowPanel} deleteChange={deleteChange} saveChange={saveChange}> </FurniturePanel>}
            {Furniture.map((item, index)=>
            {
                return (<div key={index} onClick={readSurveys(item,index)}><FurnitureCard furniture_name={item.furniture_name}/></div>)
            })
            }
        </div>
    );
}

export default Furniture;