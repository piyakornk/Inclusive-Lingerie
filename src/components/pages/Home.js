import "../../App.css"
import ButtonMaster from "../Button"
import "../ProductCardComponents.css"
function Home() {
    return (
        <main id="content" role="main" className='Home' tabIndex="-1">
            <script>
                {document.title="Home page"}
            </script>
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
                        <p>From forget-me-not to tulips, from orchids to roses, flowers come in such a variety that it is almost impossible to keep track of the colors and shapes they come in, but yet, we find them all beautiful and fascinating. The same is for women. We come in all different colors, shapes and varieties, but we all are undeniably unique and beautiful in our own way. The “Flowers” collection, inspired by the natural diversity, is meant to fit all women and emphasize their natural beauty.</p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;