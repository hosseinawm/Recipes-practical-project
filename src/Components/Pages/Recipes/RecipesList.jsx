import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../Store/slices/favoriteSlice";

const RecipesList = ({ recipes }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const isFavorited = (recipe) => {
    return favorites.some((item) => item.id === recipe.id);
  };

  const handleToggleFavorite = (recipe) => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
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
                  {isFavorited(recipe) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
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
              <Typography variant="h6">ingredients:</Typography>
              <Typography variant="body1">{recipe.ingredients}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipesList;
