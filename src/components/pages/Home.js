import react from 'react'
import "../../App.css"
import DataJson from "../../products-data.json"

function Home (){
    return(
        <> 
        <h1>Special Offer</h1>
        <p>some content home</p>
        <img src={process.env.PUBLIC_URL + DataJson[0].coverImage.path} alt={DataJson[0].coverImage.alternateText}/>
        </>
    );
}

export default Home;