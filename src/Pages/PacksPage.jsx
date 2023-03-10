import Contact from "../Components/Contact/Contact";
import PacksHero from "../Components/PacksHero/PacksHero";
import PacksOurPacks from "../Components/PacksOurPacks/PacksOurPacks";
import PacksPack1 from "../Components/PacksPacks/PacksPack1";
import PacksPack2 from "../Components/PacksPacks/PacksPack2";
import PacksPack3 from "../Components/PacksPacks/PacksPack3";
import "../scss/Pages/PacksPage.scss";

export default function PacksPage() {
  return (
    <div className="PacksPage">
      <PacksHero />
      <PacksOurPacks />
      <PacksPack1 />
      <PacksPack2 />
      <PacksPack3 />
      <Contact />
    </div>
  );
}
