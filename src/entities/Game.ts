import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";



export interface Game {
  slug: string;
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[]
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
