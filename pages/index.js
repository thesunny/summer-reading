import range from "lodash/range"
import shuffle from "lodash/shuffle"
import styled from "@emotion/styled"
import { useState } from "react"

const Container = styled.div`
  text-align: center;
  padding: 1em;
`
const Title = styled.h1``
const Word = styled.p`
  font-size: 12em;
`

const Bar = styled.div``
const Green = styled.div`
  display: inline-block;
  height: 2em;
  background: green;
`
const Red = styled.div`
  display: inline-block;
  height: 2em;
  background: #c00;
`

const list = [
  "b",
  "d",
  "bad",
  "dab",
  "lab",
  "lad",
  "bart",
  "dart",
  "beer",
  "deer",
  "brat",
  "drat",
  "bid",
  "dib",
]

const shuffledList = shuffle(list)

export default function() {
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const wrong = index - correct
  const finished = index >= shuffledList.length

  const yes = () => {
    setIndex(index => index + 1)
    setCorrect(correct => correct + 1)
  }
  const no = () => {
    setIndex(index => index + 1)
  }
  return (
    <Container>
      <Title>Read these words!</Title>
      <Word>{shuffledList[index]}</Word>
      {!finished ? (
        <div>
          <button className="btn btn-primary" onClick={yes}>
            Correct
          </button>
          <button className="btn btn-danger" onClick={no}>
            Wrong
          </button>
        </div>
      ) : (
        <div>Your score is:</div>
      )}
      <p style={finished ? { fontSize: "12em" } : null}>
        {correct} / {index}
      </p>
      <Bar>
        <Green style={{ width: correct * 50 }} />
        <Red style={{ width: wrong * 50 }} />
      </Bar>
    </Container>
  )
}
