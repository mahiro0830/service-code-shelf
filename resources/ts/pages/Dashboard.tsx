import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleProjectClick = () => {
  };

  const handleTagClick = () => {
  };

  return (
    <>
      <div className="py-[3.2rem] bg-gray-100 text-center">
        <h1 className="text-[4.2rem] font-bold text-gray-600">Your components</h1>
      </div>
      <div className="max-w-[1200px] mx-auto pb-[12rem]">
        <div className="flex">
        </div>
        <h2 className="text-[2.4rem] font-bold mt-12 mb-6 text-center">Projects</h2>
        <Stack direction="row"
          spacing={1}
          justifyContent="center">
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
        </Stack>

        <h2 className="text-[2.4rem] font-bold mt-12 mb-6 text-center">Tags</h2>
        <Stack direction="row"
          spacing={1}
          justifyContent="center">
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
          <Chip label="Clickable" sx={{ fontSize: '1.4rem' }} onClick={handleClick} />
        </Stack>

        <div className="mt-[5rem] text-center">
          <Link to="/items/">
            <button type="button" className="inline-block text-white rounded-[9.4rem] text-[1.8rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">Add new component</button>
          </Link>
        </div>

        <div className="mt-[6.5rem]">
          <Grid container spacing={2}>
            <Grid xs={4} sm={4} md={4}>
              <Card sx={{ width: '100%' }}>
                <CardActionArea>
                  <div className="h-[20rem] bg-gray-50 p-5 flex items-center justify-center">
                    <div>
                      <button type="button" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">Sign up</button>
                    </div>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Component name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Card sx={{ width: '100%' }}>
                <CardActionArea>
                <div className="h-[20rem] bg-gray-50 p-5 flex items-center justify-center">
                    <div>
                      <button type="button" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-red-500">Logout</button>
                    </div>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Component name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Card sx={{ width: '100%' }}>
                <CardActionArea>
                  <div className="h-[20rem] bg-gray-50 p-5 flex items-center justify-center">
                    <div>
                      <button type="button" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">Sign up</button>
                    </div>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Component name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Card sx={{ width: '100%' }}>
                <CardActionArea>
                <div className="h-[20rem] bg-gray-50 p-5 flex items-center justify-center">
                    <div>
                      <button type="button" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-red-500">Logout</button>
                    </div>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Component name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
