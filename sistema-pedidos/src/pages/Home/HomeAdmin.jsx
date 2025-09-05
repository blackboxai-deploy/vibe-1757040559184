import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import Navbar from "../../layouts/Navbar";
import BottomActions from "../../layouts/BottomsActions";

// Styled components for modern UI
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'var(--brot-brown)',
  color: 'var(--brot-white)',
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: 'var(--brot-brown-dark)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '3rem',
    color: 'var(--brot-gold)',
  },
}));

// Admin dashboard with modern grid layout and animated cards
export default function HomeAdmin() {
  const navigate = useNavigate();

  const adminMenuItems = [
    {
      icon: <ShoppingCartIcon />,
      label: "PEDIDOS",
      path: "/nuevo",
      description: "Gestionar pedidos"
    },
    {
      icon: <PeopleIcon />,
      label: "USUARIOS",
      path: "/ver",
      description: "Administrar usuarios"
    },
    {
      icon: <GroupIcon />,
      label: "CLIENTES",
      path: "/clientes",
      description: "Gestionar clientes"
    },
    {
      icon: <InventoryIcon />,
      label: "PRODUCTOS",
      path: "/elaboracion",
      description: "Administrar productos"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--brot-gold-dark) 0%, var(--brot-gold) 100%)',
      py: 4
    }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {adminMenuItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.path}>
              <StyledPaper 
                elevation={3}
                onClick={() => navigate(item.path)}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <IconWrapper>
                  {item.icon}
                </IconWrapper>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.label}
                </Typography>
                <Typography variant="body2" color="var(--brot-gold-light)">
                  {item.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <BottomActions showBack={false} />
    </Box>
  );
}
