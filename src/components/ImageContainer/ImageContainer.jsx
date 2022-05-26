import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Container, CustomImage } from "./ImageContainer.styles";

const api = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
});

export const ImageContainer = () => {
  const [data, setUnsplashResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://source.unsplash.com/1600x900/?mars`);
      return data;
    }
    fetchData()
      .then((result) => {
        setUnsplashResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  console.log(data);

    if(data !== null || undefined ) {
        return (
            <Container>
                <CustomImage alt="mars" source={data.url}/>
            </Container>
        )
    } else {
        return (
            <p> No Image </p>
        )
    }
};
