import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { LANGUAGE, AUTHOR, AUTHOR_WEBSITE } from '../../constants/settings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-base text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="w"
          status="correct"
        />
        <Cell value="u" />
        <Cell value="n" />
        <Cell value="ô" />
        <Cell value="k" />
      </div>
      <p className="text-base text-gray-500 dark:text-gray-300">
        The letter <strong>w</strong> is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ch" />
        <Cell value="8" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="k"
          status="present"
        />
        <Cell value="u" />
        <Cell value="n" />
      </div>
      <p className="text-base text-gray-500 dark:text-gray-300">
        The letter <strong>k</strong> is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ty" />
        <Cell value="â" />
        <Cell value="q" />
        <Cell isRevealing={true} isCompleted={true} value="a" status="absent" />
        <Cell value="s" />
      </div>
      <p className="text-base text-gray-500 dark:text-gray-300">
        The letter <strong>a</strong> is not in the word in any spot.
      </p>
      <br />
      <hr />
      <p className="mt-6 text-base text-gray-500 dark:text-gray-300">
        This is an open source clone of the game Wordle adapted to {LANGUAGE} by
        <br />
        <a href={AUTHOR_WEBSITE} className="underline font-bold">
          {AUTHOR}
        </a>
        .
      </p>
    </BaseModal>
  )
}
