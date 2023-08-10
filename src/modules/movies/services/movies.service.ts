import api from "@/api/axios";
import type { IMovie } from "../@types/movies";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

class MoviesService {
  static getAllMovies(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<IMovie[]>> {
    return api().get("/movies", config);
  }
}
export default MoviesService;
