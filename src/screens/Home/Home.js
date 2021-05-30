import Storis from "./components/Storis";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import Delivery from "./components/Delivery";
import LastOrder from "./components/LastOrder";
import Viewed from "./components/Viewed";
import "./Home.scss"

export default function Home() {
    return (
        <div className="Home">
            <div className="Home__storis">
                <Storis/>
            </div>
            <div className="Home__search">
                <Search/>
            </div>
            <div className="Home__schedule">
                <Schedule/>
            </div>
            <div className="Home__delivery">
                <Delivery/>
            </div>
            <div className="Home__last-order">
                <LastOrder/>
            </div>
            <div className="Home__viewed">
                <Viewed/>
            </div>
        </div>
    )
}