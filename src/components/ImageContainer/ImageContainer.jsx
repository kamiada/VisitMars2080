import React, { useState, useEffect } from "react";
import { Container, CustomImage } from "./ImageContainer.styles";

const accessKey = {accessKey: `${process.env.REACT_APP_ACCESS_KEY}`};

export const ImageContainer = () => {
  const [data, setUnsplashResponse] = useState({url: 'empty'});

useEffect(() => {
    function fetchData() {
      const data = fetch(`https://api.unsplash.com/photos/nDV6ahWLvEg?client_id=${accessKey.accessKey}`);
      return data;
    }
    fetchData()
      .then((result) => {
        setUnsplashResponse({url: result.url});
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

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
