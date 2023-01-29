import Contact from "../Components/Contact/Contact";
import HomeAboutUs from "../Components/HomeAboutUs/HomeAboutUs";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomePacks from "../Components/HomePacks/HomePacks";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import HomeYourHouse from "../Components/HomeYourHouse/HomeYourHouse";
import PopUp from "../Components/PopUp/PopUp";
import "../scss/Pages/HomePage.scss";

export default function HomePage() {
  return (
    <div className="HomePage">
      <PopUp />
      <HomeHero />
      <HomeAboutUs />
      <HomeYourHouse />
      <HomeProjects />
      <HomePacks />
      <Contact />
    </div>
  );
}
