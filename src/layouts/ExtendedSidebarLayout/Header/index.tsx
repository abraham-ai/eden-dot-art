import { useContext, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  Box,
  alpha,
  InputLabel,
  Stack,
  lighten,
  MenuItem,
  Divider,
  IconButton,
  FormControl,
  Select,
  Tooltip,
  styled,
  useTheme,
  Typography
} from '@mui/material';

// NAV
// import { EdenNavTop } from '../../../components';

// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { ConnectButton } from '@rainbow-me/rainbowkit';

// VIEW ICONS
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  const [model, setModel] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value as string);
  };

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      {/* <EdenNavTop /> */}
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack>
      <Box display="flex" alignItems="center">
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={'eden-clip-x'}>Newest</MenuItem>
          <MenuItem value={'stable-diffusion'}>Praise</MenuItem>
          <MenuItem value={'vqgan'}>Burn</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={'eden-clip-x'}>Eden Clip X</MenuItem>
          <MenuItem value={'stable-diffusion'}>Stable Diffusion</MenuItem>
          <MenuItem value={'vqgan'}>VQGAN</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layout</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={'stable-diffusion'}>
            <GridViewIcon />
            <Typography>Grid</Typography>
          </MenuItem>
          <MenuItem value={'vqgan'}>
            <ViewQuiltIcon />
            <Typography>Quilt</Typography>
          </MenuItem>
          <MenuItem value={'vqgan'}>
            <ViewColumnIcon />
            <Typography>Masonry</Typography>
          </MenuItem>
          <MenuItem value={'eden-clip-x'}>
            <ListIcon />
            <Typography>List</Typography>
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={'eden-clip-x'}>Vertical</MenuItem>
          <MenuItem value={'stable-diffusion'}>Landscape</MenuItem>
          <MenuItem value={'vqgan'}>Square</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Source</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={'eden-clip-x'}>Web3</MenuItem>
          <MenuItem value={'stable-diffusion'}>Discord</MenuItem>
          <MenuItem value={'vqgan'}>Bots</MenuItem>
        </Select>
      </FormControl>

      <ConnectButton />
    </HeaderWrapper>
  );
}

export default Header;
