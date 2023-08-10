import api from "@/api/axios";
import type { IMovie } from "../@types/movies";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

class MoviesService {
  static getAllMovies(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<IMovie[]>> {
    return api().get("/movies", config);
  }

  static getMovieDetails(id: string) {
    return api().get(`/movies/${id}`);
  }
  static getBookmarkedMovies() {
    return api().get(`/movies/?isBookmarked=true`);
  }
  static updateBookmarkedMovie(id: string, data: any) {
    return api().patch(`/movies/${id}`, data);
  }
}
export default MoviesService;
