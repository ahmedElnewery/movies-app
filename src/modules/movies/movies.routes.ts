import Movies from "./view/Index.vue";
import WishList from "./view/WishList.vue";
export default [
  { name: "movies", path: "/movies", component: Movies },
  { name: "wishlist", path: "wishlist", component: WishList },
];
