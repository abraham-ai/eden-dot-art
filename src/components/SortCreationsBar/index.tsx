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

const SortCreationsBarStyles = styled('section')(
  ({ theme }) => `
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    .select-sort-form {
      min-width: 100px; 
      margin: 5px; 
    }
    .filter-select {
      width: 150;
      display: 'flex';
      align-items: 'center';
    }
    .filter-select > div {
      display: flex;
      align-items: center;
    }
    .filter-icon {
      font-size: 1.5rem; 
      margin-right: 10px;
    }
`,
)

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
        }}
      >
        <FormControl className="select-sort-form" size="small">
          <InputLabel id="filter-select-label">Sort</InputLabel>
          <Select
            labelId="filter-label"
            className="filter-select"
            value={sort}
            label={'Sort'}
            onChange={handleSortChange}
            autoWidth
          >
            <MenuItem value={'newest'} id="select-menu-item">
              <IoFlashOutline style={{ fontSize: '1.5rem', marginRight: 10 }} />
              Newest
            </MenuItem>
            <MenuItem value={'praise'} className="select-menu-item">
              <TbArrowBigTop style={{ fontSize: '1.5rem', marginRight: 10 }} />
              Up Votes
            </MenuItem>
            <MenuItem value={'burn'} className="select-menu-item">
              <TbArrowBigDown style={{ fontSize: '1.5rem' }} />
              Down Votes
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
