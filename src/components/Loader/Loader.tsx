// ANTD
import { Progress } from 'antd'

function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Progress />
    </div>
  )
}

export default Loader
