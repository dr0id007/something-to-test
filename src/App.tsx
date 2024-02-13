'use client'
import { useState } from 'react'
import { message } from './message'

export default function Page() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }
  let i = 0
  const s = setInterval(() => {
    console.log(message[i])
    i++
  }, 10000)
  s

  if (i > message.length) {
    clearInterval(s)
  }

  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Are you sure?',
      'What if I asked really nicely?',
      'Pretty please',
      'What about a chai date',
      'With a chocolate cake on top',
      'PLEASE BEAUTIFUL',
      'But :*(',
      'You will break my heart',
      'I will die',
      'Yep im dead',
      'please babe',
      ':((((',
      'PRETTY PLEASE',
      'No :(',
    ]

    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-100">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 mx-auto text-center text-4xl">
            WOOHOOOO!!! I love you babe &lt;3
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 mx-auto text-center text-4xl">
            Will you go on a date with me?
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            >
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
