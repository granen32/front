import React from 'react'
const nowTime = new Date();

const dafultTime = {
  hours: nowTime.getHours(),
  minutes:  nowTime.getMinutes(),
}

export const Clock = () => {
  return (
    <>
      <h2>{`${dafultTime.hours}시 ${dafultTime.minutes}분`}</h2>
    </>
  )
}
