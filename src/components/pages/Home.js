import react from 'react'
import "../../App.css"
import DataJson from "../../products-data.json"
import ButtonMaster from "../Button"

function Home (){
    return(
        <> 
        <img src={process.env.PUBLIC_URL + "/Images/coverHomeAllWomen.png"} alt="28 women in all shapes, races, and personalities staying together in one group"/>
        <h1>Special Offer 28% Off</h1>
        <ButtonMaster />
        <br/>
        <h2>New Year New Me</h2>
        <p>How many of us have said it but never done it? Change this cycle. Start your journey to self love now and get a little boost of self esteem by wearing some pieces of the collection “New Year New Me”. It is a journey, and not an easy one, but you will eventually look at yourself and appreciate all the little things that you are now insecure about.</p>
        <img src={process.env.PUBLIC_URL + "/Images/homeGreyBackground.png"} alt="A small group of women smiling and hugging each other. With a wheelchair person in the centre."/>
        <br/>
        <h2>Flowers</h2>
        <p>Hever done it? Change this cycle. Start your journey to self love now and get a little boost of self esteem by wearing some pieces of the collection “New Year New Me”. It is a journey, and not an easy one, but you will eventually look at yourself and appreciate all the little things that you are now insecure about.</p>
        <img src={process.env.PUBLIC_URL + "/Images/homeFlowerCollection.png"} alt="Six women wearing the same light pink tone with laces in several sizes with flower-bed background"/>
        
        </>
    );
}

export default Home;