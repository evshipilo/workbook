import '../css/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Score } from './module/Score'
import { MainMenu } from './module/MainMenu'
import 'mobx-react-lite/batchingForReactDom'
import { store, StoreContext } from './module/Store'
import { QuestionCard } from './module/QuestionCard'
import { VariantsList } from './module/VariantsList'
import { AnswerCard } from './module/AnswerCard'
import { Next } from './module/Next'
import { EndGameDialog } from './module/EndGameDialog'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <EndGameDialog/>
      <Container
        className='song-bird__container'
        maxWidth="lg">
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Paper className='logo'>
              <h1>
                <span>sound</span>found</h1>
              <Score
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <MainMenu/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Next
            />
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <QuestionCard/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <VariantsList/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <AnswerCard/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </StoreContext.Provider>
  )
}

ReactDOM.render(<App/>, document.querySelector('.root'))
