interface postT {
  body: string;
  publishedDate: string;
  tags: Array<string>;
  title: string;
  user: {
    username: string;
    _id: string;
  };
  _id: string;

}

export type { postT };
