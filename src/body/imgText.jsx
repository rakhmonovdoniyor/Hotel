import React from 'react'
import {  Botton2, Centertext, Images, LeaveText, Luxdef ,Piii,Testimoni,Wrapp ,Column, Btn} from '../head/navbar'
import img1 from "../assets/imgwrap1.png"
import img2 from "../assets/imgwrap.png"
export const ImgText = () => {
  return (
    <div>
        <Centertext>All our room types are including complementary breakfast</Centertext>
       <Wrapp>
        <Luxdef>
            <h1 style={{fontSize: 70}}>Luxury redefined</h1>
            <p style={{fontSize: 30, 

            fontWeight: 400,
            // lineHeight: 40,
            textAlign: 'left'
            }}>
             Our rooms are designed to transport <br />
             you into an environment made for leisure. <br />
             Take your mind off the day-to-day of home <br />
             life and find a private paradise for yours <br />
             <Botton2>EXPLORE</Botton2>
            </p>
        </Luxdef>
        <LeaveText>
            <Images src= {img1} alt="alt" /></LeaveText>
        </Wrapp>
        <Wrapp>
        <Luxdef>
            <h1 style={{fontSize: 70}}>Leave your worries <br />in 
the sand</h1>
            <p style={{fontSize: 30, 

            fontWeight: 400,
            // lineHeight: 40,
            // textAlign: 'left'
            }}>
            Leave your worries in 
            the sand <br />
            We love life at the beach. Being close<br />
            to the ocean with access to endless sandy<br />
            beach ensures a relaxed state of mind. It <br />
            seems like time stands still watching the <br />
            ocean. 
            <br />
             <Botton2>EXPLORE</Botton2>
            </p>
        </Luxdef>
        <LeaveText>
            <Images src= {img2} alt="alt" /></LeaveText>
        </Wrapp>
            <Column>
            <Testimoni> <h1 style={{fontSize:60,fontWeight:600}}>Testimonials </h1> 
                         
                        
                            </Testimoni>
                            <Piii> "Calm, Serene, Retro – What a way to relax and enjoy" </Piii> 
                           <Piii> Mr. and Mrs. Baxter, UK </Piii>
                            <div>
                            <Btn style={{marginRight:20}}> 2 </Btn>
                            <Btn> 2 </Btn></div>
                            </Column>
    </div>
  )
}

export default ImgText;
