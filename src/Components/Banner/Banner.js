import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='buttons'>play</button>
                    <button className='buttons'>My list</button>

                </div>
                <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.d ducimus iusto, neq</h1>

                <div className="fade-bottom">
                    
                </div>

            </div>
            
        </div>
    )
}

export default Banner
