import React from 'react'
import { useEffect } from 'react';
import { formatDistanceToNow, formatRelative, subDays, parseISO } from "date-fns"
const Timeago = (props) => {
  // console.log(props.data);

  let timeago = ""
  if (props.data) {
    const time = parseISO(props.data)
    timeago = formatDistanceToNow(time)


  }
 
  return (
    <div>
      {timeago} ago
    </div>
  )
}

export default Timeago
