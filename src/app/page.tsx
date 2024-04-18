import Main from "@/components/Main"
import Vessel from "@/components/common/Vessel"
import Footer from "@/components/footers/Footer"
import Full from "@/components/headers/Full"
import Inspire from "@/components/headers/Inspire"
import Nav from "@/components/headers/nav/Nav"

const Page = () => {
  return (
    <Vessel>
      <Full>
        <Nav />
        <Inspire />
      </Full>
      <Main>

      </Main>
      <Footer>

      </Footer>
    </Vessel>
  )
}
export default Page