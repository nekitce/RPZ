import React, {useEffect, useState} from "react";
import "./SurveysPanel.css"
import "./UserPanel.css"
import "./Message.css"


function FurniturePanel({Furniture_one, setFurniture_one, setShowPanel, deleteChange, saveChange}) {

    const [change, setChange] = useState(false)


    const [furniture_name, setFurniture_name] = useState(Furniture_one.furniture_name)
    const [count_part, setCount_part] = useState(Furniture_one.count_part)
    const [material, setMaterial] = useState(Furniture_one.material)
    const [weight, setWeight] = useState(Furniture_one.weight)
    const [parts, setParts] = useState(Furniture_one.parts)

    const [newPartsName, setNewPartsName] = useState("")
    const [newPartsWeig, setNewPartsWeig] = useState("")
    const [newPartsFlag, setNewPartsFlag] = useState("")

    useEffect(()=>{
        setParts(parts)
        console.log("df")
    })

    const CloseFurPanel = () => {
        setShowPanel(false)
    }

    const ChangeFurPanel = () => {
        setChange(true)
    }

    const SaveFurPanel = () => {
        setChange(false)
        var ch = Furniture_one
        ch.furniture_name = furniture_name
        ch.count_part = count_part
        ch.material = material
        ch.weight = weight
        ch.parts = parts
        setFurniture_one(ch)
        saveChange()
    }

    const AddNewPar = () => {
        if (newPartsFlag !=="" && newPartsWeig !=="" && newPartsName !=="")
        {
            var ch = parts
            ch.push({"flag":newPartsFlag, "part_weight":newPartsWeig, "part_name":newPartsName})
            setParts(ch)
            setNewPartsName("")
            setNewPartsWeig("")
            setNewPartsFlag("")
        }
    }

    return (
        <div className="SurveysPanel_main" >
            Название
            <br/>
            <input placeholder="Название" className="SurveysPanel_input" value={furniture_name} onChange={e => setFurniture_name(e.target.value)} disabled={!change}/>
            <br/>

            Количество деталей
            <br/>
            <input placeholder="Количество деталей" className="SurveysPanel_input" value={count_part} onChange={e => setCount_part(e.target.value)} disabled={!change}/>

            Материал
            <br/>
            <input placeholder="Материал" className="SurveysPanel_input" value={material} onChange={e => setMaterial(e.target.value)} disabled={!change}/>

            Общий вес
            <br/>
            <input placeholder="Общий вес" className="SurveysPanel_input" value={weight} onChange={e => setWeight(e.target.value)} disabled={!change}/>

            <hr/>
            <table className="Message_table">
                <thead>
                <tr><th className="Message_th1">Название детали</th><th className="Message_th2">вес детали</th><th className="Message_th2">Имеется</th></tr>
                </thead>
                <tbody>
                {parts.map((item, index) => {
                    return <tr key={index}>
                        <td className="Message_td1">{item.part_name}</td>
                        <td className="Message_td2">{item.part_weight}</td>
                        {item.flag ? <td className="Message_td2_green">{item.flag}</td>:<td className="Message_td2_red">{item.flag}</td>}
                    </tr>
                })}
                <tr>
                    <td className="Message_td1"><input className="SurveysPanel_input" value={newPartsName} onChange={e => setNewPartsName(e.target.value)} disabled={!change}/></td>
                    <td className="Message_td2"><input className="SurveysPanel_input" value={newPartsWeig} onChange={e => setNewPartsWeig(e.target.value)} disabled={!change}/></td>
                    <td className="Message_td2"><input className="SurveysPanel_input" value={newPartsFlag} onChange={e => setNewPartsFlag(e.target.value)} disabled={!change}/></td>
                </tr>
                </tbody>
            </table>
            {change && <button className="AddUserPanel_button" onClick={AddNewPar}>+</button>}
            <hr/>
            <button className="AddUserPanel_button" onClick={CloseFurPanel}>Закрыть</button>
            {change ?<button className="AddUserPanel_button" onClick={SaveFurPanel}>Сохранить</button>:<button className="AddUserPanel_button" onClick={ChangeFurPanel}>Изменить</button>}
            <button className="AddUserPanel_button" onClick={deleteChange}>Удалить</button>

        </div>
    );
}



export default FurniturePanel;