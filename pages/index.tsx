// import type { ReactElement } from 'react'

// COMPONENTS
import Head from 'next/head'
import Logo from '@/components/Logo'

// MUI
import { Box, Card, styled, Container } from '@mui/material'

// PAGES
import EdenArtFrontPage from '@/components/EdenArtFrontPage'

// CSS
// import BaseLayout from 'src/layouts/BaseLayout'

// ROUTES
// import { ROUTES } from '@/const/routes'

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`,
)

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`,
)

export default function IndexPage({ changeTheme, isDarkTheme }) {
  return (
    <OverviewWrapper>
      <Head>
        <title>Eden.Art</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            {/* <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Link href={ROUTES.EDEN_DEV.DEV_GARDEN} sx={{ ml: 2 }}>
                  DEV GARDEN
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.EDEN_DEV.IDEAS} sx={{ ml: 2 }}>
                  IDEAS
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.EDEN_DEV.APPS} sx={{ ml: 2 }}>
                  APPS
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.EDEN_DEV.FAQ} sx={{ ml: 2 }}>
                  FAQ
                </Link>
              </Box>
              <CardHeader
                action={
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
                      }
                      label="🌙"
                    />
                  </FormGroup>
                }
              />
              <Box>
                <Button
                  component={Link}
                  href={ROUTES.EDEN_ART.CREATIONS}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  To Eden.Art
                </Button>
              </Box>
              <Box>
                <Button
                  component={Link}
                  href={ROUTES.EDEN_DEV.HOME}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  To Eden.Dev
                </Button>
              </Box>
              <Box>
                <Button
                  component={Link}
                  href={ROUTES.TEST.HOME}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  To Test Home
                </Button>
              </Box>
            </Box> */}
          </Box>
        </Container>
      </HeaderWrapper>
      <EdenArtFrontPage />
      {/* <EdenDevFrontPage /> */}
      {/* <Footer /> */}
    </OverviewWrapper>
  )
}

// export default IndexPage

// IndexPage.getLayout = function getLayout(page: ReactElement, props) {
//   return <BaseLayout {...props}>{page}</BaseLayout>
// }
