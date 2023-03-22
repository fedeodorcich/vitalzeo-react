import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeContainer = () => {

const router = useRouter();

  return (
    <>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Image
            className="w-full h-full"
            src={"/assets/images/hero.jpg"}
            alt="Example image"
            layout="fill"
            objectFit="cover"
            style={{ objectPosition: "center center" }}
          />
          <Box className="relative inset-x-0 top-0 h-16">
            <div className="flex justify-center items-center">
              <Image
                src={"/assets/images/vitalzeo.png"}
                alt="Example image"
                width={75}
                height={75}
              />
              <span className="inline-block align-middle text-white font-medium text-5xl bg-teal-500 ml-2">VitalZEO</span>
            </div>
          </Box>
        </Grid>
        <Grid
          className="absolute inset-x-0 bottom-10"
          item
          container
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{ py: 4 }}
        >
          <Grid item>
            <Button color="primary" variant="contained" className="bg-teal-500" onClick={()=>{router.push('/health')}}>VitalZEO Salud</Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" className="bg-teal-500">VitalZEO Animales</Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" className="bg-teal-500">VitalZEO Agricultura</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeContainer;
