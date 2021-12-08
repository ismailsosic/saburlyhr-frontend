import axios from 'axios'
import React, {useState} from 'react'
import './Cardform.css'

const CardForm = (props) => {

    const url = 'https://shrb2.herokuapp.com/api/cards/'
    const [data, setData] = useState({
        date_from: "",
        date_to: "",
        description: ""
    })

    const submit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.post(url, {
            date_from: data.date_from,
            date_to: data.date_to,
            description: data.description
        },
            config
        )
        window.location.replace("https://cranky-heisenberg-878d76.netlify.app/dashboard/cardlist/")
    }


    const handle = (e) => {
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    return (
        <div className="cardForm">
            <form className="cardF" onSubmit={(e) => submit(e)}>
                <div className="formDiv">
                    <label className="cardLabel">Date from: &nbsp; </label>
                    <input onChange={(e) => handle(e)} value={data.date_from} type="date" name="date_from"/>
                    <label className="cardLabel">Date to: &nbsp;</label>
                    <input onChange={(e) => handle(e)} value={data.date_to} type="date" name="date_to"/>
                    <label className="cardLabel">Description: &nbsp;</label>
                    <textarea onChange={(e) => handle(e)} value={data.description} className="textArea" cols="40" rows="6" name="description"></textarea>
                </div>

                <div className="submitDiv">
                    <input className="submitbtn" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default CardForm;