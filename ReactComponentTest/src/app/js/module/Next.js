import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { observer } from 'mobx-react'
import { StoreContext } from './Store'

export const Next = observer(() => {
  const store = useContext(StoreContext)

  function handleClick() {
    if (store.songClass === 5) {
      store.setShowModal(true)
    } else store.nextRound()
  }

  return (
    store.isRightAnswer
      ? <Button
        className='next-btn'
        variant="contained"
        color="primary"
        onClick={() => handleClick()}
      >
        Next
      </Button>
      : <Button
        className='next-btn'
        variant="contained"
        disabled
      >
        Next
      </Button>
  )
})
