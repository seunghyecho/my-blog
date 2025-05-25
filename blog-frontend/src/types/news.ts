interface NewsT {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: number | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string | null;
}

export type{ NewsT };