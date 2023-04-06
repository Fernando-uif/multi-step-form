import card from "./sass/layouts/card.module.scss";
import { BannerImage, PersonalInfo } from "./components";

function App() {
  return (
    <>
      <section className={card.card}>
        <BannerImage/>
       <PersonalInfo/>
      </section>
    </>
  );
}

export default App;
