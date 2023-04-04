import React, { useState } from 'react'
import axios from 'axios'

function FetchNews() {
    const[news,setNews]=useState([])
    const FetchBooks=()=>{
        console.log("Clicked")
        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyC13UlcI1M5F0XsYQ9EZQO6QutePqDpvIQ")
        .then((response)=>{
            console.log(response)
            setNews(response.data.items)
        })
    }
  return (
    <div className='container my-3'>
        <div className='row'>
            <div className='col-4'>
                <button className='btn btn-secondary' onClick={FetchBooks}>FetchBooks</button>
                <ul>
                    {news.map(news=><li><h3>{news.volumeInfo.title}</h3> <p>by {news.volumeInfo.authors}</p></li>)}
                    {/* <li>{news.title}</li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FetchNews