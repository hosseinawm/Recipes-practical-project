import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { toggleFavorite } from "../../../Store/slices/favoriteSlice";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleToggleFavorite = (recipe) => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: 3 }} color="#081c15">
        Favorites Items
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          You have no favorite items yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((recipe) => (
            <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#c8d5b9",
                  boxShadow: "3px 3px 10px #9E9E9E",
                }}
              >
                <CardHeader
                  sx={{ width: "100%", height: 100 }}
                  action={
                    <IconButton
                      onClick={() => handleToggleFavorite(recipe)}
                      aria-label="favorite"
                    >
                      <FavoriteIcon color="error" />
                    </IconButton>
                  }
                  title={recipe.name}
                  subheader={recipe.difficulty}
                />
                <CardMedia
                  component="img"
                  height="300px"
                  width="300px"
                  image={recipe.image}
                  alt={recipe.name}
                />
                <CardContent>
                  <Typography variant="h6">Ingredients:</Typography>
                  <Typography variant="body1">{recipe.ingredients}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Favorite;
