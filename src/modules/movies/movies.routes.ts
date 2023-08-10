import MoviesList from "./view/MoviesList.vue";
import WishList from "./view/WishList.vue";
import MovieDetails from "./view/MovieDetails.vue";
import MoviesIndex from "./view/Index.vue";
export default [
  {
    name: "moviesIndex",
    path: "/movies",
    component: MoviesIndex,
    children: [
      { name: "movies", path: "", component: MoviesList },
      { name: "movieDetails", path: ":id", component: MovieDetails },
      { name: "wishlist", path: "wishlist", component: WishList },
    ],
  },
];
