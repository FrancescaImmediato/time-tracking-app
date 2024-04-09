import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import epochLogo from '../../assets/epochLogo.png';
import Paper from '@mui/material/Paper';



export default function ForgotPw() {
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
      <Paper sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', padding: '0rem 2rem 4rem 2rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        backdropFilter: 'blur(10px)' }} elevation={24} square={false}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={epochLogo}
          alt="Epoch"
        />
        <CardContent>
         
          <Typography gutterBottom variant="h5" component="div">
            Forgot Password
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
              <Button>Request New Password</Button>
            
            </Stack>
          </form>
        </CardContent>
      </Paper>
    </>
  );
}