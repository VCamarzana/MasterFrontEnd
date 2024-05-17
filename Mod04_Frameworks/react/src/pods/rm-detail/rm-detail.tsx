import { routes } from "@/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button } from "@mui/material";
import { CharDetailEntity, createDefaultCharDetail } from "./rm-detail.vm";
import { setColor } from "./components/rm-detail-color";
import "./rm-detail.styles.css";

export const RmDetail: React.FC = () => {
  const [char, setChar] = React.useState<CharDetailEntity>(createDefaultCharDetail());
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(setChar);
  }, []);

  return (
    <>
      <div className="rm-body">
        <div className="rm-detail-content">
          <Card>
            <CardMedia
              className="rm-img"
              component="img"
              alt={`Profil image of ${char.name}`}
              image={char.image}
            />
            {setColor(char)}
            <CardContent>
              <h2>{char.name}</h2>
              <p className="rm-text">
                Id: <span> {char.id}</span>
                <br />
                Status: <span> {char.status}</span>
                <br />
                Species: <span> {char.species}</span>
                <br />
                Gender: <span> {char.gender}</span>
                <br />
                Location: <span> {char.location.name}</span>
                <br />
                Origin: <span> {char.origin.name}</span>
              </p>
            </CardContent>
            <CardActions className="rm-detail-button">
              <Button
                variant="outlined"
                color="success"
                size="large"
              >
                <Link
                  className="rm-link"
                  to={routes.rmList}
                >
                  Close
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
