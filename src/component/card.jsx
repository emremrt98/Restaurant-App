import Header from "./header";
import Image from "./image";
import Detail from "./detail";

function Card({ show }) {
    return (
        <div className="container" >
            <div className="picture" ><Image img={show.logo} /> </div>
            <div className="head" >
                <Header title={show.name} type={show.type} />
                <Detail desc={show.description} address={show.address}  />
            </div>
        </div>
    )
}

export default Card;