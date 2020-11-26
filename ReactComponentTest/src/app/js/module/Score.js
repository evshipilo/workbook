import React, { useContext, useEffect } from 'react'
import { StoreContext } from './Store'
import { observer } from 'mobx-react'

export const Score = observer(() => {
  const store = useContext(StoreContext)
  useEffect(() => store.increaseScore(), [store.isRightAnswer])
  return (
    <span
      className='score'>
    Score:{` ${store.score}`}
    </span>
  )
})
