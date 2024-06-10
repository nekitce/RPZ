import {csrftoken} from "../global";

export function requestGet(setFurniture)
{
    fetch('http://localhost:8000/furniture/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            credentials: 'include'
        }
    )
        .then(response  => {
            if (response.ok)
                return response.json()
            else
                console.log(response.status, response.links())
        })
        .then((data) => {setFurniture(data)})
}


export function requestPost(OneFurniture)
{
    return fetch('http://localhost:8000/create_furniture/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(OneFurniture),
            credentials: 'include'
        }
    )
        .then(response => {
            if (response.ok)
                return response.json()
            else
                console.log("PostSurveys: " + response.status)
        })
}

export function requestPut(OneFurniture)
{
    return fetch('http://localhost:8000/update_furniture/', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(OneFurniture),
            credentials: 'include'
        }
    )
        .then(response => {
            if (response.ok)
                return response.json()
            else
                console.log("PutSurveys: " + response.status)
        })
}

export function requestDelete(id)
{
    console.log(id)
    return fetch('http://localhost:8000/furniture/delete/' + id +"/", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': csrftoken,
            },
            credentials: 'include'
        }
    )
        .then(response => {
            if (response.ok)
                return response.json()
            else
                console.log("DeleteSurveys: " + response.status)
        })
}