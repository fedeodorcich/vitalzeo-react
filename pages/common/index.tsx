import * as React from "react";
import NavbarComponent from "../../layout/navbar.component/navbar.component";
import Box from "@mui/material/Box";
import CardComponent from "../components/card.component/card.component";
import CarrouselComponent from "../components/carousel.component/carrousel.component";
import Typography from "@mui/material/Typography";
import FooterComponent from "../../layout/footer/footer.component";
import { CardProps } from "../components/card.component/card.component";
import ModalComponent from "../components/modal.component/modal.component";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export type ICard = {
  imagePath: string;
  title: string;
};

export type ICommonProps={
  subName:string;
  gradientsClasses:string;
  primaryColor:string;
}

const CommonContainer = ({subName,gradientsClasses,primaryColor}:ICommonProps) => {
  const mockCards: ICard[] = [
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
    {
      imagePath: "assets/images/hero.jpg",
      title: "Vital ZEO",
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [currentData, setCurrentData] = React.useState<ICard>();

  const handleShowModal = (card: ICard) => {
    setCurrentData(card);
    setShowModal(true);
  };


  return (
    <>
      <Box className="">
        <Box>
          <Box className={gradientsClasses+" w-full h-96 "}>
            <Grid container spacing={2} className="mt-0 mx-auto container px-5 ">
              <Grid xs={6}>
                <Box className="mt-20">
                  <div>
                    <span
                      className="text-8xl text-white"
                      style={{ fontFamily: "OswaldExtraLight" }}
                    >
                      Vital
                    </span>
                    <span
                      className="text-8xl text-white"
                      style={{ fontFamily: "OswaldRegular" }}
                    >
                      ZEO
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-3xl text-white pl-3"
                      style={{ fontFamily: "OswaldExtraLight" }}
                    >
                      {subName}
                    </span>
                  </div>
                </Box>
              </Grid>
              <Grid xs={6}>
                
              </Grid>
            </Grid>
          </Box>

          <Box className="">
            <div className="container mx-auto py-10 px-5 zeo-text-primary">
              <h2 className="text-5xl mb-6">Acerca de nuestros productos</h2>
              <Typography className="text-2xl text-extra-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, repudiandae at dolorum soluta repellat sequi delectus
                amet adipisci aspernatur consectetur, laborum sed ab iste
                eligendi esse dolores fugit. Consequatur quisquam optio minus
                voluptatum repellendus beatae consectetur quia, quae deserunt,
                facilis a! Expedita, animi nostrum unde accusamus consequuntur
                explicabo dicta? Facilis praesentium ad, laudantium consectetur
                eaque saepe exercitationem iure ducimus blanditiis eius
                provident voluptatem molestiae assumenda ab vitae tenetur fugit
                beatae hic odit sit fugiat maxime, tempore reiciendis error!
                Eveniet cupiditate temporibus aperiam. Eligendi hic, eos quae,
                aliquid quo vero id animi cum magnam ratione mollitia autem
                expedita dignissimos velit, obcaecati sit dolores odit maxime
                ducimus deserunt saepe. Vero, dolore quae. Soluta fugit ratione
                molestiae molestias iure distinctio veritatis quam ad odio,
                beatae illo aut porro possimus quisquam doloribus consequuntur
                optio debitis placeat dolore autem quos totam eveniet. Deserunt,
                esse dignissimos magnam veritatis voluptate rerum atque, amet
                porro aspernatur fuga accusantium natus? Rem magnam dolorem
                ducimus perspiciatis assumenda iure in officia. Eum id animi aut
                labore. Quisquam eum ex rem, perspiciatis debitis molestias
                voluptas, dolor earum repudiandae, officia perferendis quibusdam
                eos ipsam amet eveniet sit esse laboriosam nostrum nihil omnis.
                In minima amet eum optio facere adipisci similique laudantium
                sit ipsam.
              </Typography>
            </div>
          </Box>

          <Box className={gradientsClasses}>
            <CarrouselComponent styles="container mx-auto pb-10 px-5">
              {mockCards.map((card, index) => (
                <CardComponent
                  key={index}
                  card={card}
                  handleOpenModal={handleShowModal}
                  primaryColor={primaryColor}
                />
              ))}
            </CarrouselComponent>
          </Box>
        </Box>
      </Box>
      <ModalComponent
        open={showModal}
        modalData={currentData!}
        closeModal={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

export default CommonContainer;
