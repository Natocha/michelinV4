import { Button, Card, Container, Grid, Image, Row, Text } from "@nextui-org/react";
import React from "react";
import NavbarSecondary from "./NavbarSecondary";

const SectionHome = () => {
  return (
    <Container fluid className="container-bg">
      <NavbarSecondary />
      <Grid.Container
        css={{
          display: "flex",
          alignContent: "flex-end",
          height: "85%",
        }}
      >
        <Grid sm={6}>
          <Image
            src={"/img/tires.png"}
            alt="imagen de tires"
            width={620}
            height={420}
            css={{ pt: "70px" }}
          />
        </Grid>
        <Grid sm={6}>
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "430px",
            }}
          >
            <Text h1 className="title-home">
              Used Tires
            </Text>
            <Text h2 className="subtitle-home">
              At very Affordable Prices
            </Text>
            <Text className="p-home">
              Without tires, no travel by car or motorbike. Vehicle tires must
              be in good condition and suitable for the type of road. When the
              time comes to change them, sometimes even in an emergency if you
              have a flat tire, you often have to seek a tire sales professional
              quickly. We would like him to be able to offer us a wide range of
              tires at reasonable prices.
            </Text>
            <Button className="btn-primary">Contact us</Button>
          
          </Row>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center">
        <Grid
        xs={10}
        >
        <Card css={{ margin:"-264px auto 0", width:"80%",zIndex:"1", position:"absolute"}}>
        <Card.Image
        src="../img/bg-img.png"
        objectFit="cover"
        width="100%"
        height={401}
        alt="Card image background"
        zIndex="50"
        justify-content="Center"
        />
         <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, }}>
         <Text className="p-home" css={{maxW:'432px',p:"3%"}}>
            At BISITIRES, you can buy good quality tires that will 
            guarantee you the safe driving you need for your vehicle 
            and at an unbeatable price. We have a large catalog where 
            you are bound to find what you are looking for. Among our 
            stock you will find passenger vehicle tires suitable for
            your use of your car at the ideal size.
          </Text>
          </Card.Header>
     
            </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default SectionHome;
