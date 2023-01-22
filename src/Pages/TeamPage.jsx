import HomeAboutUs from "../Components/HomeAboutUs/HomeAboutUs";
import HomeYourHouse from "../Components/HomeYourHouse/HomeYourHouse";
import "../scss/Pages/HomePage.scss";

export default function TeamPage() {
  return (
    <>
      <div className="PagePadding"></div>
      <HomeAboutUs />
      <HomeYourHouse />
    </>
  );
}
