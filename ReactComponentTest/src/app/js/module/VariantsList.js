import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { SongsClass, SongsData } from './SongsData'
import { StoreContext } from './Store'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import HelpOutlineIcon from '@material-ui/icons/HelpRounded'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

export const VariantsList = observer(() => {
  const store = useContext(StoreContext)
  const
    url = 'https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/'

  function playSound() {
    if (store.isRightAnswer) {
      store.audioFromQuestionCard.pause()
      store.audioFromAnswerCard.pause()
      const audio = new Audio(url + 'Success.mp3')
      audio.play().then(() => null)
    } else {
      const audio = new Audio(url + 'Mistake.mp3')
      audio.play().then(() => null)
    }
  }

  const myList = SongsData[store.songClass].map((author, num) =>
    <div key={author.name}>
      <ListItem
        button
        onClick={store.isRightAnswer
          ? () => store.setClickedListItem(num)
          : () => {
            store.addToArrayOfAnswers(num)
            store.setClickedListItem(num)
            playSound()
          }
        }
      >
        {store.arrayOfAnswers.includes(num)
          ? num === store.rightAnswer
            ? <CheckCircleOutlineIcon
              className='variant-icon'
              fontSize="small"
              color="action"/>
            : <RemoveCircleOutlineIcon
              className='variant-icon'
              fontSize="small"
              color="secondary"
            />
          : <HelpOutlineIcon
            className='variant-icon'
            fontSize="small"
            color="primary"
          />

        }
        <ListItemText
          primary={author.name}/>
      </ListItem>
      {num === SongsClass.length - 1 ? null
        : <Divider key={author.name + 'b'} light/>}
    </div>
  )
  return (
    <List component="nav" aria-label="mailbox folders">
      {myList}
    </List>
  )
})
