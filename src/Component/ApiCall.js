import React, { useState } from 'react'
import axios from 'axios'

export default function ApiCall() {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('')
    const new_quote = () => {
        axios.get('https://api.quotable.io/random').then(response => {
            console.log(response.data.content, ' by ', response.data.author)
            setContent(response.data.content)
            setAuthor(response.data.author)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='container p-5'>
            <h2 className='text-success'>{content}</h2>
            <br/> <br/>
            <p className='text-danger m-5 mt-0'>{author}</p>
            <div className='container my-3'>
                <button className='btn btn-success' onClick={new_quote}>Generate Quote</button>
            </div>
        </div>
    )
}
