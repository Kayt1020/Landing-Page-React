import { Navbar } from "./Navbar.jsx"

export function App(){
  return (
    <>
    <Navbar />
    <Test />
    <Section />
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

