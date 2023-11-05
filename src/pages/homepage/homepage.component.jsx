// import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

function HomePage() {
  return (
    <>
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </>
  );
}

export default HomePage;
