import { useState } from "react"
import MultiDropDownSelect from "./MultiDropDownSelect"
import './App.scss'

const App: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  return (
    <div className="app-container">
      <MultiDropDownSelect />
    </div>
  )
}

export default App
