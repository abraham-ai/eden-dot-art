import React, { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import { Fade, Button, CircularProgress, Typography } from '@mui/material'

function DelayingAppearance() {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('idle')
  const timerRef = useRef<number>()

  useEffect(
    () => () => {
      clearTimeout(timerRef.current)
    },
    [],
  )

  const handleClickLoading = () => {
    setLoading(prevLoading => !prevLoading)
  }

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (query !== 'idle') {
      setQuery('idle')
      return
    }

    setQuery('progress')
    timerRef.current = window.setTimeout(() => {
      setQuery('success')
    }, 2000)
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? 'Stop loading' : 'Loading'}
      </Button>
      <Box sx={{ height: 40 }}>
        {query === 'success' ? (
          <Typography>Success!</Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== 'idle' ? 'Reset' : 'Simulate a load'}
      </Button>
    </Box>
  )
}

export default DelayingAppearance
