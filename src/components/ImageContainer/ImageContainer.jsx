import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Container, CustomImage } from "./ImageContainer.styles";

const api = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
});
export const ImageContainer = () => {
  const [data, setUnsplashResponse] = useState({url: 'empty'});

useEffect(() => {
    function fetchData() {
      const data = fetch(`https://images.unsplash.com/photo-1615221025584-086389c99592?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFyc3x8fHx8fDE2NTM1NzA1ODI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600`);
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
  console.log(data.url);

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
