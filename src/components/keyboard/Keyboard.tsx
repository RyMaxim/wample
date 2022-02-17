import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ORTHOGRAPHY } from '../../constants/orthography'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[][]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } //
      // Take away key event listener for now
      // else {
      //   const key = e.key.toUpperCase()
      //   if (key.length === 1 && key >= 'A' && key <= 'Z') {
      //     onChar(key)
      //   }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(0, Math.floor(ORTHOGRAPHY.length * 0.4)).map(
          (char) => (
            <Key
              value={char}
              key={char}
              onClick={onClick}
              status={charStatuses[char]}
              isRevealing={isRevealing}
            />
          )
        )}
      </div>
      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(
          Math.floor(ORTHOGRAPHY.length * 0.4),
          Math.floor(ORTHOGRAPHY.length * 0.7)
        ).map((char) => (
          <Key
            value={char}
            key={char}
            onClick={onClick}
            status={charStatuses[char]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={80} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {ORTHOGRAPHY.slice(
          Math.floor(ORTHOGRAPHY.length * 0.7),
          ORTHOGRAPHY.length
        ).map((char) => (
          <Key
            value={char}
            key={char}
            onClick={onClick}
            status={charStatuses[char]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={80} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
