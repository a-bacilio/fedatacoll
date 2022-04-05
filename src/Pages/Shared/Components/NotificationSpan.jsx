import React from 'react'

const NotificationSpan = ({children,className}) => {
  return (
    <span className={`${className} w-full text-xs text-center text-yellow-400`}>{children}</span>
  )
}

export default NotificationSpan