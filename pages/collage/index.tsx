import type { ReactElement } from 'react'
import React from 'react'

import Head from 'next/head'

// NAV
import NavLayout from '@/layouts/NavLayout'

// UI
import { Container, Box, Typography } from '@mui/material'

function EdenCollagePage() {
  return (
    <>
      <Head>
        <title>Collage App</title>
      </Head>

      <Container
        sx={{ display: 'flex', alighItems: 'center', justifyContent: 'center' }}
      >
        <Box>
          <Typography>Collage App</Typography>
        </Box>
      </Container>
    </>
  )
}

EdenCollagePage.getLayout = function getLayout(page: ReactElement, props) {
  return <NavLayout {...props}>{page}</NavLayout>
}

export default EdenCollagePage
