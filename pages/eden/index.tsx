import { useState } from 'react';

// NEXTJS
import Head from 'next/head';

// COMPONENTS
import Footer from '@/components/Footer';
import AppLogo from '@/components/AppLogo';
import ImageListQuilted from '@/components/ImageListQuilted';
import ImageListStandard from '@/components/ImageListStandard';
import { Authenticated } from '@/components/Authenticated';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import {
  Button,
  Container,
  Autocomplete,
  TextField,
  createFilterOptions,
  styled,
  Box,
  Typography
} from '@mui/material';

// ROUTER
import Link from '@/components/Link';

// ICONS || ACTIONS
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';

// ICONS || CREATE INPUT
import { FaDiscord } from 'react-icons/fa';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

// STYLES
const CreationsStyles = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .recent-creations {
      display: flex;
    }
    label { 
      right: 0;
      text-align: center;
    }
    .recent-creations-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0 0 0;
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
    .recent-creation-img {
      width: 30px;
      height: 30px;
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
`
);

const filter = createFilterOptions<FilmOptionType>();

function DashboardTasks() {
  const [value, setValue] = useState<FilmOptionType | null>(null);
  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="lg">
        <Link href="/api/discord/login" passHref>
          <FaDiscord />
          <Button>Discord Login</Button>
        </Link>

        <CreationsStyles className="main-creations-wrapper">
          <AppLogo logo="eden" />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setValue({
                  title: newValue
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some(
                (option) => inputValue === option.title
              );
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="Create prompt" />
            )}
          />

          <section className="recent-creations-wrapper">
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
          </section>

          <section className="recent-creations-wrapper">
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
            <Typography variant={'h4'}>People also prompt</Typography>... 
            <div className="discover-img-wrapper">
              <Typography>Avocado chair<Typography/>V
              <Typography>Astronaut on a horse<Typography/>V
              <Typography>Water Lily Pond<Typography/>V
              <Typography>City skyline in the style of Van Gogh<Typography/>V
            </div>
          </section>

          <ImageListStandard />

          <ImageListQuilted />
        </CreationsStyles>
      </Container>
      <Footer />
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977
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
    year: 1964
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
    year: 1983
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
    year: 2004
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
  { title: 'Monty Python and the Holy Grail', year: 1975 }
];

DashboardTasks.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default DashboardTasks;
