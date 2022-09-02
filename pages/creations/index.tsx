import { useState } from 'react'
import Head from 'next/head'

// NAV
import Footer from '@/components/Footer'
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// UI
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  Select,
  SelectChangeEvent,
} from '@mui/material'

// COMPONENTS
import CreationCardIG from '@/components/CreationCardIG'
import Masonry from '@mui/lab/Masonry'

// CONSTS
import { GET_CREATIONS } from '@/const/get-creations'

// ICONS
import { IoFlashOutline } from 'react-icons/io5'
import { HiOutlineSparkles } from 'react-icons/hi'
import { FaDiscord, FaRobot } from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'
import { AiOutlineFire } from 'react-icons/ai'

// LAYOUT ICONS
import { TbRectangleVertical, TbSquare } from 'react-icons/tb'
import { MdOutlineCropLandscape } from 'react-icons/md'

// VIEW ICONS
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'

function CreationsPage() {
  const [model, setModel] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value as string)
  }

  // label={
  //   <>
  //     <HiChip /> "Model"
  //   </>
  // }

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="lg">
        {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )} */}

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 10,
            pb: 3,
          }}
        >
          <FormControl
            sx={{ minWidth: 100, m: 0.5 }}
            className="select-sort-form"
          >
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label={'Model'}
              onChange={handleChange}
              sx={{ width: 150, display: 'flex', alignItems: 'center' }}
            >
              <MenuItem value={'eden-clip-x'}>
                <IoFlashOutline
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Newest
              </MenuItem>
              <MenuItem value={'stable-diffusion'}>
                <HiOutlineSparkles
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Praise
              </MenuItem>
              <MenuItem value={'vqgan'}>
                <AiOutlineFire
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Burn
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 100, m: 0.5 }}
            className="select-sort-form"
          >
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Model"
              onChange={handleChange}
              sx={{ width: 150, display: 'flex', alignItems: 'center' }}
            >
              <MenuItem value={'eden-clip-x'}>
                <span
                  style={{
                    background: 'red',
                    height: 10,
                    width: 10,
                    marginRight: 10,
                    borderRadius: '50%',
                    position: 'relative',
                  }}
                ></span>
                Eden Clip X
              </MenuItem>
              <MenuItem value={'stable-diffusion'}>Stable Diffusion</MenuItem>
              <MenuItem value={'vqgan'}>VQGAN</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 100, m: 0.5 }}
            className="select-sort-form"
          >
            <InputLabel id="demo-simple-select-label">Layout</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Model"
              onChange={handleChange}
              sx={{ width: 150, display: 'flex', alignItems: 'center' }}
            >
              <MenuItem className="menu-item" value={'stable-diffusion'}>
                <GridViewIcon style={{ fontSize: '1.5rem', marginRight: 10 }} />
                Grid
              </MenuItem>
              <MenuItem className="menu-item" value={'vqgan'}>
                <ViewQuiltIcon
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Quilt
              </MenuItem>
              <MenuItem className="menu-item" value={'deforum-diffusion'}>
                <ViewColumnIcon
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Masonry
              </MenuItem>
              <MenuItem className="menu-item" value={'eden-clip-x'}>
                <ListIcon style={{ fontSize: '1.5rem', marginRight: 10 }} />
                List
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 150, m: 0.5, display: 'flex' }}
            className="select-sort-form"
          >
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Model"
              onChange={handleChange}
              sx={{ width: 150, display: 'flex', alignItems: 'center' }}
            >
              <MenuItem value={'eden-clip-x'}>
                <TbRectangleVertical
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Vertical
              </MenuItem>
              <MenuItem value={'stable-diffusion'}>
                <MdOutlineCropLandscape
                  style={{ fontSize: '1.5rem', marginRight: 10 }}
                />
                Landscape
              </MenuItem>
              <MenuItem value={'vqgan'}>
                <TbSquare style={{ fontSize: '1.5rem', marginRight: 10 }} />
                Square
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 150, m: 0.5, display: 'flex' }}
            className="select-sort-form"
          >
            <InputLabel id="demo-simple-select-label">Source</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value={'eden-clip-x'}>
                <SiEthereum style={{ fontSize: '1.5rem', marginRight: 10 }} />
                Web3
              </MenuItem>
              <MenuItem value={'stable-diffusion'}>
                <FaDiscord style={{ fontSize: '1.5rem', marginRight: 10 }} />
                Discord
              </MenuItem>
              <MenuItem value={'vqgan'}>
                <FaRobot style={{ fontSize: '1.5rem', marginRight: 10 }} />
                Bots
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: '100%', minHeight: 393 }}>
          <Masonry columns={4} spacing={2}>
            {GET_CREATIONS.map((creation, index) => {
              const rand = Math.random()
              if (rand > 0.5) {
                return <CreationCardIG key={index} creation={creation} />
              } else {
                return <CreationCardIG key={index} creation={creation} />
                // return <CreationCardMedia key={index} creation={creation} />;
              }
            })}
          </Masonry>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

CreationsPage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default CreationsPage
