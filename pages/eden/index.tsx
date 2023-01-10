import { useState } from 'react'

// NEXTJS
import Head from 'next/head'

// NAV
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'
import Footer from '@/components/Footer'

// COMPONENTS
import ImageListQuilted from '@/components/ImageListQuilted'
import ImageListStandard from '@/components/ImageListStandard'

// UI
import {
  Button,
  Container,
  Autocomplete,
  TextField,
  createFilterOptions,
  styled,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'

// ROUTER

// ICONS || ACTIONS
import AppLogo from '@/components/AppLogo'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SchoolIcon from '@mui/icons-material/School'

// ICONS || CREATE INPUT
import CreateIcon from '@/components/CreateIcon'
import TuneIcon from '@mui/icons-material/Tune'

// ICONS || CREATE TEMPLATE
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'

// ICONS || MODIFIERS
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

// STYLES
const EdenHomeStyles = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .recent-creations {
      display: flex;
    }
    // TEXT-INPUT
    .text-input-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 100px 0;
      width: 100%;
    }
    // label { 
    //   right: 0;
    //   text-align: center;
    // }
    #text-input-autocomplete {
      display: flex;
      justify-content: center;
    }
    .section-wrapper {
      margin: 20px;
    }
    // TEMPLATES
    .templates-wrapper {
      display: flex:
      align-items: flex-end;
    }
    .recent-templates {
      display: flex;
      align-items: flex-end;
    }
    .single-template {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    .template-color {
      background: lightgray;
      overflow: hidden;
    }
    .template-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .template-square {
      width: 50px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
      padding: 0;
      margin: 0;
    }
    .template-vertical {
      height: 100px;
      width: 50px;
    }
    .template-post {
      height: 100px;
      width: 50px;
    }
    .template-landscape {
      width: 100px;
      min-height: 50px;
    }
    .template-clipx {
      width: 100px;
      height: 100px;
    }
    .template-stablediffusion {
      width: 100px;
      height: 100px;
    }
    // TRENDING MODIFIERS
    .modifiers-wrapper {
      display: flex;
      width: 600px;
      flex: 1;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .single-modifier {
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin: 0 10px 10px 0;
      flex: 0;
      height: 32px;
      max-height: 32px;
      border: 1px solid gray;
      border-radius: 20px;
    }
    .modifier-text {
      padding: 0 10px 0 5px;
    }
    .separator {
      border-right: 1px solid lightgray;
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 70%;
      margin: 5px;
    }
    // RECENT CREATIONS
    .recent-creation-img {
      width: 30px;
      height: 30px;
    }
    .recent-creations-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0 0 0;
    }
    .section-header-wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0 0 15px 0;
      // padding: 0 0 0 40px;
    }
    .recent-creations {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 10px 0;
    }
    .recent-creation-single {
      width: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
    .recent-creation-prompt {
      text-align: center;
      font-size: 11px;
      line-height: 1.2;
      margin: 12px 0 0 0;
    }
    .discover-wrapper {
      margin: 50px;
    }
    .discover-img-wrapper {
      display: flex;
      max-width: 400px;
      margin: 10px 0 0 0;
      width: 400px;
      border-radius: 20px;
      position: relative;
      /* width: 100%; */
      flex: 1;
      overflow: hidden;
    }
    .discover-img-single {
      display: flex;
      flex: 1;
    }
    // DISCOVER IMAGE VARIATIONS || THREEN COLUMNS
    .discover-wrapper.three-columns .discover-img-wrapper .discover-img-single {
      width: 33%;
    }
    // GRID
    .discover-img-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .discover-wrapper.grid-square  .discover-img-wrapper .discover-img-single {
      width: 50%;
    }
`,
)

const filter = createFilterOptions()

function EdenArtHomePage() {
  const [value, setValue] = useState(null)
  return (
    <>
      <Head>
        <title>Eden.Art | Home</title>
      </Head>

      <Container maxWidth="lg">
        {/* <Link href="/api/discord/login" passHref>
          <Button variant="contained">
            <span className="icon-wrapper">
              <FaDiscord />
            </span>
            <Typography>Discord Login</Typography>
          </Button>
        </Link> */}

        <EdenHomeStyles className="main-creations-wrapper">
          <div className="text-input-wrapper">
            {/* <AppLogo logo="eden" size="large" /> */}
            <Autocomplete
              value={value}
              onChange={(_, newValue) => {
                if (typeof newValue === 'string') {
                  setValue({
                    title: newValue,
                  })
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValue({
                    title: newValue.inputValue,
                  })
                } else {
                  setValue(newValue)
                }
              }}
              id="text-input-autocomplete"
              filterOptions={(options, params) => {
                const filtered = filter(options, params)

                const { inputValue } = params
                // Suggest the creation of a new value
                const isExisting = options.some(
                  option => inputValue === option.title,
                )
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: `Add "${inputValue}"`,
                  })
                }

                return filtered
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              options={top100Films}
              getOptionLabel={option => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue
                }
                // Regular option
                return option.title
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.title}</li>
              )}
              sx={{ width: 600 }}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  label="Create prompt"
                  placeholder="Imagine what's on your mind?"
                  // multiline
                  // maxRows={4}
                  sx={{ width: 600 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" color="primary">
                          <TuneIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreateIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>

          <section className="section-wrapper">
            <Typography variant={'h4'}>Explore</Typography>
            <Typography variant={'body1'}>Eden Garden</Typography>

            <div className="recent-creations">
              <Box>
                <Button className="recent-creation-single">
                  <ConnectWithoutContactIcon />
                  <span className="recent-creation-prompt">Curate</span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <TravelExploreIcon />
                  <span className="recent-creation-prompt">Browse</span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <LiveTvIcon />
                  <span className="recent-creation-prompt">Watch</span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <SchoolIcon />
                  <span className="recent-creation-prompt">Learn</span>
                </Button>
              </Box>
            </div>
          </section>

          <section className="section-wrapper templates-wrapper">
            <div className="section-header-wrapper">
              <Typography variant={'h4'}>Templates</Typography>
              <Typography variant={'body1'}>you might like</Typography>
            </div>

            <div className="recent-templates">
              <Box className="single-template">
                <Button className="template-vertical template-color">
                  <AddPhotoAlternateOutlinedIcon />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Story
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-square template-color">
                  <AddPhotoAlternateOutlinedIcon />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Square
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-post template-color">
                  <AddPhotoAlternateOutlinedIcon />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Post
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-landscape template-color">
                  <AddPhotoAlternateOutlinedIcon />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Landscape
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
            </div>
          </section>

          <section className="section-wrapper templates-wrapper">
            <div className="section-header-wrapper">
              <Typography variant={'h4'}>Praises</Typography>
              <Typography variant={'body1'}>you've liked</Typography>
            </div>

            <div className="recent-templates">
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
            </div>
          </section>

          <section className="section-wrapper templates-wrapper">
            <div className="section-header-wrapper">
              <Typography variant={'h4'}>Burns</Typography>
              <Typography variant={'body1'}>trending</Typography>
            </div>

            <div className="recent-templates">
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-stablediffusion template-color">
                  <img
                    className="template-image"
                    src="https://minio.aws.abraham.fun/creations-prd//97abdacdd65d3f25f547c8b6f093e203bfc335530a646740691ccb00e4f77722"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Stable Diffusion
                </Typography>
              </Box>
              <Box className="single-template">
                <Button className="template-clipx template-color">
                  <img
                    className="template-image"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                </Button>
                <Typography variant={'body1'} className="template-type-text">
                  Eden Clip X
                </Typography>
              </Box>
            </div>
          </section>

          <section className="section-wrapper prompt-recommendations">
            <div className="section-header-wrapper">
              <Typography variant={'h4'}>Suggested Modifiers</Typography>
              <Typography variant={'body1'}>
                You'll see top modifiers suggested when creating.
              </Typography>
            </div>
            <div className="modifiers-wrapper">
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Photorealistic
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  4k
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Artstation
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  DSLR
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Ancient
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Renaissance
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Panorama
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Digital
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  2D
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Monochrome
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  3D
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Illustration
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Futuristic
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Detailed
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
              <article className="single-modifier">
                <Typography variant={'h4'} className="modifier-text">
                  Fantasy
                </Typography>
                <AddOutlinedIcon />
                <span className="separator"></span>
                <CloseOutlinedIcon />
              </article>
            </div>
            <div>
              <Typography>See More</Typography>
            </div>
          </section>

          <section className="recent-creations-wrapper">
            <div className="section-header-wrapper">
              <Typography variant={'h4'}>Recent Prompts</Typography>
              <Typography variant={'body1'}>
                Explore your prmopt history.
              </Typography>
            </div>
            <div className="recent-creations">
              <Box>
                <Button className="recent-creation-single">
                  <img
                    className="recent-creation-img"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-6_ut71n2.jpg"
                  />
                  <span className="recent-creation-prompt">
                    Avocado chair...
                  </span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <img
                    className="recent-creation-img"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-3_rv0klz.jpg"
                  />
                  <span className="recent-creation-prompt">
                    Astronaut on a horse...
                  </span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <img
                    className="recent-creation-img"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637363283/abraham-test-image-1_byckuw.jpg"
                  />
                  <span className="recent-creation-prompt">
                    Water lily pond...
                  </span>
                </Button>
              </Box>
              <Box>
                <Button className="recent-creation-single">
                  <img
                    className="recent-creation-img"
                    src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
                  />
                  <span className="recent-creation-prompt">
                    New York by Vangohg...
                  </span>
                </Button>
              </Box>
            </div>
            <Typography>See More</Typography>
          </section>

          <section className="discover-wrapper three-columns">
            <Typography variant={'h4'}>Discover</Typography>
            <Typography variant={'body1'}>
              creations you've been looking for
            </Typography>
            <div className="discover-img-wrapper">
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-6_ut71n2.jpg"
              />
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-3_rv0klz.jpg"
              />
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
              />
            </div>
          </section>

          <section className="discover-wrapper grid-square">
            <Typography variant={'h4'}>Prompt Genres</Typography>
            <Typography variant={'body1'}>you might like</Typography>
            <div className="discover-img-wrapper">
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-6_ut71n2.jpg"
              />
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-3_rv0klz.jpg"
              />
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637103814/test-creation_gikt95.jpg"
              />
              <img
                className="discover-img-single"
                src="https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-4_weecyc.jpg"
              />
            </div>
          </section>

          <section className="prompt-recommendations">
            <Typography variant={'h4'}>People also prompt</Typography>
            <div className="discover-img-wrapper">
              <Typography>Avocado chair</Typography>
              <Typography>Astronaut on a horse</Typography>
              <Typography>Water Lily Pond</Typography>
              <Typography>City skyline in the style of Van Gogh</Typography>
            </div>
          </section>

          <ImageListStandard />

          <ImageListQuilted />
        </EdenHomeStyles>
      </Container>
      <Footer />
    </>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: '4k', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
]

EdenArtHomePage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default EdenArtHomePage
