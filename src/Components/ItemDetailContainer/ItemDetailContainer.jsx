import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";

import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={productSelected.img}
          alt={productSelected.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productSelected.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemDetailContainer;
