import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useRouter } from "next/router";
import WaitingComponent from "../components/waiting/waiting.component";

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
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ py: 4 }}
        >
          <Grid item  xs={1}  className="icon-link" onClick={()=>{router.push('/health')}}>
            <div className="icons"></div>
            <span className="mx-auto highlighter rounded-lg">VitalZEO Industrial</span>
          </Grid>
          <Grid item xs={1}  className="icon-link" onClick={()=>{router.push('/industrial')}}>
            <div className="icons"></div>
            <span className="mx-auto highlighter rounded-lg">VitalZEO Industrial</span>
          </Grid>
          <Grid item xs={1}  className="icon-link" onClick={()=>{router.push('/agro')}}>
            <div className="icons"></div>
            <span className="mx-auto highlighter rounded-lg">VitalZEO Agropecuario</span>
          </Grid>
        </Grid>
      </Grid>
      <WaitingComponent/>
    </>
  );
};

export default HomeContainer;
