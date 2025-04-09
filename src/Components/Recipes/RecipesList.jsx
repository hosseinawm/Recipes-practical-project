import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from "@mui/material";

const RecipesList = ({ recipes }) => {
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
              sx={{ width: 300, height: 100 }}
              title={recipe.name}
              subheader={recipe.difficulty}
            />
            <CardMedia
              component="img"
              height="300px"
              width="300px"
              image={recipe.image}
              alt="Food Image"
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
