import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Cake = () => {
    const { id } = useParams();
    const { cakes: cake,} = useFetch("http://localhost:7000/cakes/" + id);

    return (  
        <section>
          {cake &&  <div className="CAKE">
                <div className="cake-details">
                    <img src={cake.image} className="cakeImage" alt={cake.name} />
                    <article>
                        <h1 className="cakeName">{cake.name}</h1>
                        <p>Flavor: {cake.flavor}</p>
                        <p>Price: {cake.price}</p>
                        <p>Reviews: {cake.reviews}</p>
                        <button>BUY</button>
                    </article>
                </div>
                <div>
                    <textarea className="comments" spellCheck="false" defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                </div>
            </div>}
            
        </section>
    );

}

export default Cake;
