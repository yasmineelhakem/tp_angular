export interface Cv {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: string;
  job: string;
  path: string;
  favoriteQuote: string;
  workDescription: string;
  keywords: string;
  motto: string;
  stats: {
    followers: number;
    following: number;
    projects: number;
  };
}
