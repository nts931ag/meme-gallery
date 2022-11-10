import React, {useState } from "react";
import MemeList from "../MemeList";
import FetchButton from "../FetchButton";



const Gallery = () => {
    const [memes, setMemes] = useState([])
    const URL_API = 'https://api.imgflip.com/get_memes'

    return (
        <>
            <FetchButton url={URL_API} setMemes={setMemes}/>
            <MemeList memes={memes}/>
        </>
    )
}

export default Gallery