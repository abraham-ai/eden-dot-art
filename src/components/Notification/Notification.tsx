import React from 'react'

// COMPONENTS
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

// TYPES
import type { AlertColor } from '@mui/lab/Alert'

interface NotificationProps {
  type: AlertColor
  data: {
    message: string
    description: string
  }
}

const Notification = (props: NotificationProps) => {
  const { type, data } = props
  const { message, description } = data

  return (
    <Alert severity={type || 'success'}>
      <AlertTitle>{message}</AlertTitle>
      {description}
    </Alert>
  )
}

export default Notification

// export function sendError(message) {
//   return (
//     <Alert severity={type}>
//       <AlertTitle>{message}</AlertTitle>
//       {description}
//     </Alert>

//     <Notification
//       type={'error'}
//       data={{
//         message: 'Failed to Sign!',
//         description: `Connection issue - ${message}`,
//       }}
//     />
//   )
// }

// export function sendSignSuccess(message) {
//   return (
//     <Notification
//       type={'success'}
//       data={{
//         message: 'Signed in successfully',
//         description: `${message}`,
//       }}
//     />
//   )
// }
