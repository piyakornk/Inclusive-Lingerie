import react from 'react'
import "../../App.css"

function Home (){
    return(
        <> 
        <h1>Special Offer</h1>
        <p>some content home</p>
        <img src={require('./productCoverTiffany')}/>
        </>

    );
}

export default Home;