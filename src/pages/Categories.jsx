import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";
import { ImageWrapper, Img } from "../containers/ImageWrapper";

const Categories = () => {
  const params = useParams();
  const state = useSelector((state) => state.products);
  const upperCaseParams =
    params.id.charAt(0).toUpperCase() + params.id.slice(1);

  return (
    <Container>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text
          title={upperCaseParams + " Category"}
          variant="h3"
          color="#053886"
          marginTop="4rem"
          textAlign="center"
        />
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12} flex="flex" padding="2rem">
        {state.map((item) =>
          item.category === params.id ? (
            <Item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
              key={item.id}
              margin="0.5rem"
            >
              <Item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                width="100%"
                padding="1rem"
              >
                <ImageWrapper
                  height="150px"
                  width="100%"
                  flex="flex"
                  align="center"
                  justify="center"
                >
                  <Img
                    src={item.image}
                    alt={item.name}
                    height="100%"
                    objectFit="contain"
                    maxWidth="100%"
                  />
                </ImageWrapper>
              </Item>
              <Item xs={12} sm={6} md={8} lg={9} xl={9}>
                <Text title={item.name} />
              </Item>
            </Item>
          ) : null
        )}
      </Item>
    </Container>
  );
};

export default Categories;