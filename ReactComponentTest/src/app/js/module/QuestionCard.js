import React, { createRef, useContext } from 'react'
import { observer } from 'mobx-react'
import { StoreContext } from './Store'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import question from '../../img/question.svg'
import { SongsData } from './SongsData'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export const QuestionCard = observer(() => {
  const store = useContext(StoreContext)
  const url = 'https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/'
  const player = createRef()

  return (
    <div className='question-card'>

      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames='image-transition'
          key={store.isRightAnswer ? 'aa' : 'bb'
          }
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
        >
          {
            store.isRightAnswer
              ? <img src={url + SongsData[store.songClass][store.rightAnswer]?.image}
                alt="img"/>
              : <img src={question} alt="question"/>
          }
        </CSSTransition>
      </SwitchTransition>

      <div className='question-audio'>
        {store.isRightAnswer
          ? <> <h1>{SongsData[store.songClass][store.rightAnswer]?.name}</h1>
            <h3>song: {SongsData[store.songClass][store.rightAnswer]?.id}</h3></>
          : <h1>***</h1>
        }
        <AudioPlayer
          className='question-audio-player'
          showJumpControls={false}
          src={url + SongsData[store.songClass][store.rightAnswer]?.audio}
          ref={player}
          autoPlayAfterSrcChange={false}
          onPlay={() => {
            store.getAudioFromQuestionCard(player.current.audio.current)
            store.audioFromAnswerCard.pause()
          }}
        />

      </div>
    </div>

  )
})
