import MoviesIndex from "./view/Index.vue";
export default [
  {
    name: "moviesIndex",
    path: "/movies",
    component: MoviesIndex,
    children: [
      {
        name: "movies",
        path: "",
        component: () => import("./view/MoviesList.vue"),
      },
      {
        name: "movieDetails",
        path: ":id",
        component: () => import("./view/MovieDetails.vue"),
      },
      {
        name: "wishlist",
        path: "wishlist",
        component: () => import("./view/WishList.vue"),
      },
    ],
  },
];
