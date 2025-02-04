import './App.css'
import { Navbar, Footer, Transactions, Loader, Services, Welcome } from './components'
function App() {

  return (
    <>
      <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
     
    </>
  )
}

export default App