import Main from "@/components/Main";
import Box from "@/components/common/Box";
import Vessel from "@/components/common/Vessel";
import Footer from "@/components/footers/Footer";
import Banner from "@/components/headers/Banner";
import Title from "@/components/headers/Title";
import Nav from "@/components/headers/nav/Nav";

const notFound = () => {
  return (
    <Vessel>
      <Banner>
        <Nav />
      </Banner>
      <Main>
        <Vessel>
          <Title title="Error 404: Page Not Fonud" />
          <Box>
            <h5>
              Sorry, the page you have requested could not be found.
              <br />
              Please contact support if you feel this is unintended behavior.
            </h5>
          </Box>
        </Vessel>
      </Main>
      <Footer children={undefined}></Footer>
    </Vessel>
  );
};
export default notFound;
