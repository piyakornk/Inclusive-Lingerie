import "../../App.css"
import ButtonMaster from "../Button"
import "../ProductCardComponents.css"
function Home() {
    return (
        <main id="content" role="main" className='Home'>
            <div className="product__container">
                <div className="bottom__margin">
                    <img className="product__section__content" src={process.env.PUBLIC_URL + "/Images/coverHomeAllWomen.png"} alt="28 women in all shapes, races, and personalities staying together in one group" />
                </div>
            </div>
            <h1 className="bottom__margin">Feel at your best with the 2021 Collections</h1>
            <div className="bottom__margin">
                <ButtonMaster />
            </div>
            <div className="product__container" align="left">
                <div className="home__content">
                    <div className="collection__description">
                        <h2>New Year New Me</h2>
                        <p>How many of us have said it but never done it? Change this cycle. Start your journey to self love now and get a little boost of self esteem by wearing some pieces of the collection “New Year New Me”. It is a journey, and not an easy one, but you will eventually look at yourself and appreciate all the little things that you are now insecure about.</p>

                    </div>
                </div>
                <div className="home__content">
                    <img className="product__section__content" src={process.env.PUBLIC_URL + "/Images/homeGreyBackground.png"} alt="A small group of women smiling and hugging each other. With a wheelchair person in the centre." />

                </div>
            </div>
            <div className="product__container" align="left">
                <div className="home__content">
                    <img className="product__section__content" src={process.env.PUBLIC_URL + "/Images/homeFlowerCollection.png"} alt="Six women wearing the same light pink tone with laces in several sizes with flower-bed background" />

                </div>
                <div className="home__content">
                    <div className="collection__description">
                        <h2>Flowers</h2>
                        <p>Hever done it? Change this cycle. Start your journey to self love now and get a little boost of self esteem by wearing some pieces of the collection “New Year New Me”. It is a journey, and not an easy one, but you will eventually look at yourself and appreciate all the little things that you are now insecure about.</p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;