import "../styles/HomePage.css"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import Gallery from "./Gallery"
import Services from "./Services"
import TopBanner from "./TopBanner"


export default function HomePage(){
    return(
        <div>
{/* <h1>Home Page</h1> */}
<TopBanner />
<AboutPage />
<Services />
<Gallery />
<ContactPage />
        </div>
    )
}