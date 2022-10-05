import { useState } from 'react'

// MUI
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from '@mui/material'

// ICONS
import { IoFlashOutline } from 'react-icons/io5'
import { TbArrowBigDown, TbArrowBigTop } from 'react-icons/tb'

// LAYOUT ICONS
import { TbRectangleVertical, TbSquare } from 'react-icons/tb'
import { MdOutlineCropLandscape } from 'react-icons/md'

// VIEW ICONS
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'

const typeColorPrimary = '#111'

const SortCreationsBarStyles = styled('section')(
  ({ theme }) => `
    color: ${typeColorPrimary};
    font-weight: 600;
    .select-sort-form {
      min-width: 100px; 
      margin: 5px; 
      color: ${typeColorPrimary};
    }
    .filter-select {
      width: 150;
      display: 'flex';
      align-items: 'center';
      color: ${typeColorPrimary};
    }
    .filter-select > div {
      display: flex;
      align-items: center;
      color: ${typeColorPrimary};
    }
    .filter-icon {
      font-size: 1.5rem; 
      margin-right: 10px;
      color: ${typeColorPrimary};
    }
`,
)

const typeColor = '#111'

const TypographyStyles = {
  color: typeColor,
  fontWeight: 600,
}

const MenuItemStyles = {
  backgroundColor: 'white',
}

export default function SortCreationsBar() {
  const [sort, setSort] = useState('newest')
  const [generator, setGenerator] = useState('all')
  const [layout, setLayout] = useState('masonry')
  const [size, setSize] = useState('all')

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string)
  }

  const handleGeneratorChange = (event: SelectChangeEvent) => {
    setGenerator(event.target.value as string)
  }

  const handleLayoutChange = (event: SelectChangeEvent) => {
    setLayout(event.target.value as string)
  }
  const handleSizeChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string)
  }
  return (
    <SortCreationsBarStyles>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <FormControl
          className="select-sort-form"
          size="small"
          sx={{ backgroundColor: 'white' }}
        >
          <InputLabel id="filter-select-label">Sort</InputLabel>
          <Select
            labelId="filter-label"
            className="filter-select"
            value={sort}
            label={'Sort'}
            onChange={handleSortChange}
            autoWidth
            sx={{ backgroundColor: 'white' }}
          >
            <MenuItem
              value={'newest'}
              className="select-menu-item"
              sx={MenuItemStyles}
            >
              <IoFlashOutline style={{ fontSize: '1.5rem', marginRight: 10 }} />
              <Typography sx={TypographyStyles}>Newest</Typography>
            </MenuItem>
            <MenuItem
              value={'praise'}
              className="select-menu-item"
              sx={MenuItemStyles}
            >
              <TbArrowBigTop style={{ fontSize: '1.5rem', marginRight: 10 }} />
              <Typography sx={TypographyStyles}>Up Votes</Typography>
            </MenuItem>
            <MenuItem
              value={'burn'}
              className="select-menu-item"
              sx={MenuItemStyles}
            >
              <TbArrowBigDown style={{ fontSize: '1.5rem' }} />
              <Typography sx={TypographyStyles}>Down Votes</Typography>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className="select-sort-form" size="small">
          <InputLabel id="filter-select-label">Generator</InputLabel>
          <Select
            labelId="filter-label"
            className="filter-select"
            value={generator}
            label="Generator"
            onChange={handleGeneratorChange}
            autoWidth
            sx={{ width: 'auto', display: 'flex', alignItems: 'center' }}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'eden-clip-x'}>
              <span
                style={{
                  background: 'cyan',
                  height: 10,
                  width: 10,
                  marginRight: 10,
                  borderRadius: '50%',
                  position: 'relative',
                }}
              ></span>
              Eden Clip X
            </MenuItem>
            <MenuItem value={'stable-diffusion'}>
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
              Stable Diffusion
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className="select-sort-form" size="small">
          <InputLabel id="filter-select-label">Layout</InputLabel>
          <Select
            labelId="filter-label"
            className="filter-select"
            value={layout}
            label="Layout"
            defaultValue="masonry"
            onChange={handleLayoutChange}
          >
            <MenuItem className="menu-item" value={'stable-diffusion'}>
              <GridViewIcon className="filter-icon" />
              Grid
            </MenuItem>
            <MenuItem className="menu-item" value={'vqgan'}>
              <ViewQuiltIcon className="filter-icon" />
              Quilt
            </MenuItem>
            <MenuItem className="menu-item" value={'masonry'}>
              <ViewColumnIcon className="filter-icon" />
              Masonry
            </MenuItem>
            <MenuItem className="menu-item" value={'list'}>
              <ListIcon className="filter-icon" />
              List
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className="select-sort-form" size="small">
          <InputLabel id="filter-select-label">Size</InputLabel>
          <Select
            labelId="filter-label"
            className="filter-select"
            defaultValue="all"
            value={size}
            label="Size"
            onChange={handleSizeChange}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'vertical'}>
              <TbRectangleVertical className="filter-icon" />
              Vertical
            </MenuItem>
            <MenuItem value={'landscape'}>
              <MdOutlineCropLandscape className="filter-icon" />
              Landscape
            </MenuItem>
            <MenuItem value={'square'}>
              <TbSquare className="filter-icon" />
              Square
            </MenuItem>
          </Select>
        </FormControl>

        {/* <FormControl
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
    </FormControl> */}
      </Box>
    </SortCreationsBarStyles>
  )
}
