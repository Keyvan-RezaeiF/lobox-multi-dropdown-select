import { useState } from 'react'
import MultiDropDownSelect from './components/MultiDropDownSelect'
import classes from './App.module.scss'

const items = [
  { id: 0, title: 'Education', icon: '📚' },
  { id: 1, title: 'Science', icon: '🔬' },
  { id: 2, title: 'Art', icon: '🎨' },
  { id: 3, title: 'Sport', icon: '⚽️' },
  { id: 4, title: 'Games', icon: '🎮' },
  { id: 5, title: 'Health', icon: '🩺' },
]

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([])

  return (
    <div className={classes.appContainer}>
      <MultiDropDownSelect
        initialItems={items}
        selectedItems={selectedItems}
        onSelect={setSelectedItems}
      />
    </div>
  )
}

export default App
