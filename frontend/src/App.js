//rafce from redux snippet extension
//arrow function component
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import HomeScreen from "./screens/HomeScreen"; artık <Container> </Container> içine <HomeScreen/> koymuyoruz onun yerie
// routerın outletini koyacağız


const App = () => {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <Outlet/>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
