import api from "@/api/axios";
import type { IMovie } from "../@types/movies";
import type { AxiosResponse } from "axios";

class MoviesService {
  static getAllMovies(): Promise<AxiosResponse<IMovie[]>> {
    return api().get("/movies");
  }
}
export default MoviesService;
