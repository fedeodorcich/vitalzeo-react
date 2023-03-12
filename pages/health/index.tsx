import NavbarComponent from "./components/navbar.component"
import Box from '@mui/material/Box';
import CardComponent from './components/card.component';
import CarrouselComponent from "./components/carrousel.component";

const HealthContainer = ()=>{
    return(
        <>
        <Box className="">
        <NavbarComponent/>
        <Box>
            <Box className="zeo-primary">
                <span className="text-9xl zeo-text-secondary" style={{fontFamily:'OswaldExtraLight'}}>Vital</span>
                <span className="text-9xl zeo-text-secondary" style={{fontFamily:'OswaldRegular'}}>ZEO</span>
            </Box>
            <CarrouselComponent>
                
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                
            </CarrouselComponent>
        </Box>
        </Box>
           
        </>
    )
}

export default HealthContainer