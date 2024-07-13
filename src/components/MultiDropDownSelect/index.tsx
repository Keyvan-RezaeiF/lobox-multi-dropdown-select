import React, { useRef, useState } from 'react'
import BackDrop from '../BackDrop'
import ChevronUp from '../icons/ChevronUp'
import Check from '../icons/Check'
import styles from './styles.module.scss'

interface MultiDropDownSelectProps {
  initialItems: Item[];
  selectedItems: Item[];
  onSelect: React.Dispatch<React.SetStateAction<Item[]>>;
}

const MultiDropDownSelect: React.FC<MultiDropDownSelectProps> = (props) => {
  const { initialItems, onSelect, selectedItems } = props
  const [items, setItems] = useState<Item[]>(initialItems)
  const [inputValue, setInputValue] = useState<string>('')
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(true)
  const itemsRef = useRef<HTMLDivElement | null>(null)

  const toggleDropDown = (): void => setIsDropDownOpen(prev => !prev)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setItems(prev => [
        { id: prev.length + 1, title: inputValue, icon: '🧪', isSelected: false },
        ...prev
      ])
      setInputValue('')
      itemsRef.current?.scrollTo(0, 0)
    }
  }

  const onSelectItem = (selectedItem: Item): void => {
    onSelect(prev => {
      if (!prev.find(item => item.id === selectedItem.id)) return [selectedItem, ...prev]

      return prev.filter(item => item.id !== selectedItem.id)
    })
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.inputContainer}>
          <input
            value={inputValue}
            onChange={handleInput}
            onKeyDown={onEnter}
            className={styles.textInput}
            placeholder={'Add new item ...'}
          />
          <div
            onClick={toggleDropDown}
            className={styles.chevron}
          >
            <ChevronUp className={isDropDownOpen ? styles.noRotate : styles.rotate180} />
          </div>
        </div>
        {isDropDownOpen && (
          <>
            <div className={styles.items} ref={itemsRef}>
              {items.map(item => (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className={styles.item}
                >
                  <div>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <div>{item.icon}</div>
                  </div>
                  <div className={styles.checkIcon}>
                    {selectedItems.map(item => item.id).includes(item.id) && (
                      <Check className={styles.checkStroke} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {isDropDownOpen && <BackDrop onClick={toggleDropDown} />}
    </>
  )
}

export default MultiDropDownSelect