import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import BackDrop from '../BackDrop'
import ChevronUp from '../icons/ChevronUp'
import Check from '../icons/Check'
import styles from './styles.module.scss'

interface MultiDropDownSelectProps {
  initialItems: Item[];
  selectedItems: Item[];
  onSelect: (args: Item) => void;
  displayValue: string;
}

const MultiDropDownSelect: React.FC<MultiDropDownSelectProps> = (props) => {
  const { initialItems, onSelect, selectedItems, displayValue } = props
  const [items, setItems] = useState<Item[]>(initialItems)
  const [inputValue, setInputValue] = useState<string>('')
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(true)
  const itemsRef = useRef<HTMLDivElement | null>(null)
  const [error, setError] = useState<string>('')

  const toggleDropDown = (): void => setIsDropDownOpen(prev => !prev)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (!inputValue) {
        setError('Enter something!')

        return
      }

      setItems(prev => [
        { id: uuidv4(), title: inputValue, isSelected: false },
        ...prev
      ])
      setInputValue('')
      setError('')
      itemsRef.current?.scrollTo(0, 0)
    }
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
                  onClick={() => onSelect(item)}
                  className={styles.item}
                >
                  <div>
                    <span className={styles.itemTitle}>{(item as any)[displayValue]}</span>
                    {item.icon && <div>{item.icon}</div>}
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
        <p className={styles.error}>{error}</p>
      </div>
      {isDropDownOpen && <BackDrop onClick={toggleDropDown} />}
    </>
  )
}

export default MultiDropDownSelect