import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 300,
        backgroundColor: "#E64848",
        color: "white",
        border: "3px solid #E64848",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 180, backgroundColor: "grey" }}
        image={element.img}
        title={element.title}
      />
      <CardContent sx={{ height: 35 }}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body">${element.price}.-</Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/itemDetail/${element.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button size="small" variant="contained" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
