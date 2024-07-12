import React, { useState } from "react"
import BackDrop from "./BackDrop"
import './MultiDropDownSelect.scss'

const MultiDropDownSelect: React.FC = () => {
  const [items, setItems] = useState([
    { id: 0, title: 'Education', icon: null, isSelected: false },
    { id: 1, title: 'Science', icon: null, isSelected: false },
    { id: 2, title: 'Art', icon: null, isSelected: false },
    { id: 3, title: 'Sport', icon: null, isSelected: false },
    { id: 4, title: 'Games', icon: null, isSelected: false },
    { id: 5, title: 'Health', icon: null, isSelected: false },
    { id: 6, title: 'Test1', icon: null, isSelected: false },
    { id: 7, title: 'Test2', icon: null, isSelected: false },
    { id: 8, title: 'Test3', icon: null, isSelected: false },
    { id: 9, title: 'Test4', icon: null, isSelected: false },
  ])
  const [newItem, setNewItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewItem(e.target.value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setItems(prev => [{ id: prev.length + 1, title: newItem, icon: null }, ...prev])
      setNewItem('')
    }
  }

  // e: React.MouseEvent<HTMLDivElement>
  const selectItem = ({ e, selectedItemId }: { e: React.MouseEvent<HTMLDivElement>, selectedItemId: number }) => {
    e.stopPropagation()

    setItems(prev => prev.map(item => {
      if (item.id === selectedItemId) return { ...item, isSelected: !item.isSelected }

      return item
    }))
  }

  const toggleDropDown = () => setIsOpen(prev => !prev)

  return (
    <div>
      <div className="input-container">
        <input
          value={newItem}
          onChange={handleInput}
          onKeyDown={handleEnter}
          className="text-input"
        />
        <span onClick={toggleDropDown} className="chevron">chevron</span>
      </div>
      {isOpen && (
        <>
          <div className="items">
            {items.map(item => (
              <div
                key={item.id}
                onClick={event => selectItem({ e: event, selectedItemId: item.id })}
                className="item"
              >
                <div>
                  <span>{item.title}</span>
                  <div>{item.icon}</div>
                </div>
                <div>
                  {item.isSelected ? 'checked' : ''}
                </div>
              </div>
            ))}
          </div>
          <BackDrop onClick={toggleDropDown} />
        </>
      )}
    </div>
  )
}

export default MultiDropDownSelect