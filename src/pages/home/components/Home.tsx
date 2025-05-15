import "./Home.css";

import type { HomeProps } from "../data/homeType";

const Home = ({homeDataList} : HomeProps) => {
    return(
        <section className="home-container">
            <section className="home-section">
                <h2>Home</h2>
                {homeDataList.map( (item) => (
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Home;