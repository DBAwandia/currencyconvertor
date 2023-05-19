import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Getstarted from "./Pages/Getstarted/Getstarted"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Getstarted/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
