import React from 'react'
import '../../App.css'
import '../Breadcrumbs.css'
//import ContactForm from '../ContactForm'
import "../ProductCardComponents.css"
import { Link } from 'react-router-dom'
import ContactForm from "../Form"

function AboutUs() {
    return (
        <main id="content" role="main" className='AboutUs'>
            <script>
                {document.title="About Us"}
            </script>
            <div className='Content'>
                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li>About Us</li>
                </ul>

                <h1 className="bottom__margin">About Us</h1>

                <div className="bottom__margin">
                    <img className="product__section__content" src={process.env.PUBLIC_URL + "/Images/aboutUsLaughingWomen.png"} alt="Laughing women cherishing their diversity in shape" />
                </div>

                <h2 className="bottom__margin">Our Belief</h2>
                <p className="bottom__margin">
                    Beauty is not defined by size, color, height or anything else. Beauty is not how you look compared with some unreachable standard. Beauty is how you see yourself, how comfortable you are with your body and most of all, how much you love yourself.
                </p>
                <p className="bottom__margin">
                    Every person on Earth should have the opportunity to feel beautiful and validated. It is for this reason that we created the LoveMe lingerie line with sizes that span from XXS to 4XL in order to accommodate as many women’s needs as possible. We try our best to have a fit for all people, because everybody has the right to feel powerful and desirable and love their body.
                </p>

                <h2 className="bottom__margin">Our History</h2>
                
                <p className="bottom__margin">Born in 2018, LoveMe is a lingerie line that makes all women feel welcome and seen. The founders, Marta and Piyakorn, are two young ladies very passionate about inclusivity and self love. They met in 2015 in Paris where they were attending some courses about Humans and Social Interactions. From talking about their perception of the world we live in today, they started then digging deeper in how society defines women and categorises them. The underlying idea that a woman is beautiful when she loves herself was agreed on immediately. From there in an avalanche of interconnecting ideas, in a few weeks time the project of LoveMe was born. It took a while to define and build the chain of collaborators, but after a few years of hard work, LoveMe was finally reality. The safe place where all women can shop to feel beautiful and empowered.</p>

                <h3 className="bottom__margin">Talk to us</h3>

                <div className="product__container" >
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}


export default AboutUs
