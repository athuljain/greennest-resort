import "../styles/HomePage.css"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import Gallery from "./Gallery"
import Services from "./Services"
import TopBanner from "./TopBanner"


export default function HomePage(){
    return(
        <div>

<TopBanner />
<AboutPage />
<Services />
<Gallery />
<ContactPage />
        </div>
    )
}