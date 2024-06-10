import React, {useEffect, useState} from "react";
import './CriticismCard.css';

function FurnitureCard({furniture_name}) {

    return (
        <div className="CriticismCard_main" >
            <p className="CriticismCard_p1">{furniture_name}</p>
        </div>
    );
}

export default FurnitureCard;