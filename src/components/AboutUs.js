import React,{ useState } from 'react'
import './About.css'


export default function AboutUs() {
    
    const [mode,changeMode] =useState({
        color:"black",
        backgroundColor:"white"
    });
    const [btnText,TextChange]=useState("light Mode");
    

    let Mode =()=>
    { 
        if(mode.color=="black")
        {
            changeMode({
                color:"white",
                backgroundColor:"black"


            })
            TextChange("light Mode");
        }
        else 
        {
            changeMode({
                color:"black",
                backgroundColor:"white"
            })
            TextChange("Dark Mode");
        }
       
        
       }
    
  return (
    <>
     <div className="container my-4" style={mode}>
      <p>
        Lorem i psum dolor sit amet consectetur, adipisicing elit. Rerum sit
         nemo eius? Magnam cumque soluta molestiae consectetur itaque asperiores 
         perferendis, dignissimos nobis consequatur unde architecto rerum ea 
         excepturi nesciunt nisi, officia odio quod repellat perspiciatis 
         temporibus veniam culpa debitis voluptatibus! Quam cupiditate, eum 
         odit similique facere veritatis magnam non quisquam alias molestiae. 
         Excepturi magni quidem vel placeat quibusdam culpa explicabo ab eaque,
          qui repudiandae deserunt itaque, ipsum adipisci necessitatibus non sint 
          laudantium? Mollitia aspernatur, doloremque aut non accusamus nisi rem 
          possimus perspiciatis incidunt, hic laudantium odio corporis. Nobis!
      </p>
     </div>
     <div className="container">
     <button type="button" onClick={Mode} className="btn btn-warning">{btnText}</button>

     </div>
    </>
   
  )
}
