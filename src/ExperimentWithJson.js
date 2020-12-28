import myJson from './products-data.json';

function ExperimentWithJson() {
    

    return (
        <>
            <h1>{myJson[0].name}</h1>
            <h1>{myJson[1].name}</h1>

        </>
  );    
}

export default ExperimentWithJson;