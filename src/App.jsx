import { Footer } from "./Footer.jsx";
import { Hero } from "./HeroSection.jsx";
import { Navbar } from "./Navbar.jsx";


export function App(){
  return (
    <>
    <Navbar />
    <Hero/>
    <Test />
    <Section />
    <Footer />
    </>
  )
}


export default App

export function Test() {
  return <div className=""> </div>
}
export function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

