import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the sequence of bird emojis in 6 tries. Bird emojis may occur more than once, but never next to itself.
        After each guess, the color of the tiles will change to show how close your guess was to the solution.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🧀"
          status="correct"
        />
        <Cell value="🍒" />
        <Cell value="🍆" />
        <Cell value="🍭" />
        <Cell value="🥑" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🧀 is in the solution and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🍔" />
        <Cell value="🍆" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🍑"
          status="present"
        />
        <Cell value="🍿" />
        <Cell value="🍔" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🍑 is in the solution but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🍭" />
        <Cell value="🍒" />
        <Cell value="🍆" />
        <Cell isRevealing={true} isCompleted={true} value="🍫" status="absent" />
        <Cell value="🍿" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🍫 is not in the solution in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
      Jordan Feldstein © 2022  -{' '}
          Check Out Jordan's Main Website
        </a>, Here!{' '}
        <a
          href="https://jordanfeldstein.com"
          className="underline font-bold"
        >here</a>{' '}
      </p>
    </BaseModal>
  )
}
