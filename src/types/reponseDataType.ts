export type ResponseData = {
  results: ResponseDataResult[];
};

export type InfiniteResponseData = {
  response: ResponseData;
};

export type ResponseDataResult = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, unknown>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
      image_background: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
};

export type Genres =
  | "name"
  | "released"
  | "added"
  | "created"
  | "updated"
  | "rating"
  | "metacritic"
  | "-name"
  | "-released"
  | "-added"
  | "-created"
  | "-updated"
  | "-rating"
  | "-metacritic";
