import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import epochLogo from '../../assets/epochLogo.png';
import Paper from '@mui/material/Paper';



export default function LogIn() {
  return (
    <>
    <style>
        {`
          body {
            background-color: #9dc183;
            margin: 0; 
            height: 100vh; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <Paper sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', padding:'0rem 1rem 3rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        backdropFilter: 'blur(10px)' }} elevation={12} square={false}>
        <CardMedia
          component="img"
          sx={{ height: 225 }}
          image={epochLogo}
          alt="Epoch"
          margin="0"
        />
        <CardContent>
        <Typography>Time Well Spent Starts Here...</Typography>
          <Typography gutterBottom variant="h5" component="div">
            Log In
          </Typography>
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              alert(JSON.stringify(formJson));
            }}
          >
            <Stack spacing={1}>
              <Input
                type="email"
                placeholder="Type your email here"
                variant="plain"
                size="md"
                required
                sx={{
                  '&::before': {
                    border: '1.5px solid var(--Input-focusedHighlight)',
                    transform: 'scaleX(0)',
                    left: '2.5px',
                    right: '2.5px',
                    bottom: 0,
                    top: 'unset',
                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                    borderRadius: 0,
                    borderBottomLeftRadius: '64px 20px',
                    borderBottomRightRadius: '64px 20px',
                  },
                  '&:focus-within::before': {
                    transform: 'scaleX(1)',
                  },
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                variant="plain"
                size="md"
                required
                sx={{
                  '&::before': {
                    border: '1.5px solid var(--Input-focusedHighlight)',
                    transform: 'scaleX(0)',
                    left: '2.5px',
                    right: '2.5px',
                    bottom: 0,
                    top: 'unset',
                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                    borderRadius: 0,
                    borderBottomLeftRadius: '64px 20px',
                    borderBottomRightRadius: '64px 20px',
                  },
                  '&:focus-within::before': {
                    transform: 'scaleX(1)',
                  },
                }}
              />
              <Button>Sign in</Button>
              <Link href="#" underline="hover">
                {'Forgot Password'}
              </Link>
            </Stack>
          </form>
        </CardContent>
      </Paper>
    </>
  );
}