import "../styles/HomePage.css"
import Services from "./Services"
import TopBanner from "./TopBanner"


export default function HomePage(){
    return(
        <div>
{/* <h1>Home Page</h1> */}
<TopBanner />
<Services />
        </div>
    )
}