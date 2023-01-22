import React from 'react'
import './Meme.css'


export const Meme = () => {


    

   

    const [allMemes, setAllMemes] = React.useState([])

    const [memeImage , setMemeImage] = React.useState("https://i.imgflip.com/3qqcim.png")

    const [formData, setFormData] = React.useState({
        topTextField:'',
        bottomTextField:''
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])
    
    function getMemeImg(){
        const randNum = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randNum].url
        setMemeImage(url) 
    }

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormdata => ({
            ...prevFormdata,
            [name]: [value]
        }))
    }


  return (
    <div className='meme-div'>
        <div className='form'>
            <input
                type='text'
                name='topTextField'
                className='topTextField'
                onChange={handleChange}
                value = {formData.topTextField}
            />
            <input
                type='text'
                name='bottomTextField'
                onChange={handleChange}
                value = {formData.bottomTextField}
            />

            <button className='get-img-btn'
            onClick={getMemeImg}> Get Image</button>

        </div>

        <div className='meme-img-div'>
            <img src ={`${memeImage}`}
            alt='dsd'
             className='meme-img'
             />

             <h1 className='top-title'>{formData.topTextField}</h1>
             <h1 className='bottom-title'>{formData.bottomTextField}</h1>
        </div>

    </div>
  )
}
