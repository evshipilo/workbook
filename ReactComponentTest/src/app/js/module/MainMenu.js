import React, { useContext, useEffect } from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { StoreContext } from './Store'
import { observer } from 'mobx-react'
import { SongsClass } from './SongsData'

export const MainMenu = observer(() => {
  const store = useContext(StoreContext)
  const myTabs = SongsClass.map((songClass, number) =>
    <Tab
      key={songClass}
      label={songClass}
    />
  )

  useEffect(() => store.setRightAnswer(), [])

  return (
    <Tabs
      className='bird-classes-tabs'
      variant='scrollable'
      value={store.songClass}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      {myTabs}
    </Tabs>
  )
})
