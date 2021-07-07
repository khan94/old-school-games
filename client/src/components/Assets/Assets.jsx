import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Assets = () => {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    // effect;
    axios
      .get(`http://localhost:5000/api/get-assets`)
      .then((res) => {
        console.log("res: ", res);
        setAssets(res.data);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  const AssetsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  `;

  return (
    <AssetsContainer>
      {assets.map((asset, i) => {
        return <div>asset {i}</div>;
      })}
    </AssetsContainer>
  );
};

export default Assets;
