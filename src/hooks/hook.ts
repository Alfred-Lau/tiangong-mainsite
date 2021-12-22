export type MatchParams = {
  match: {
    params: {
      [key: string]: any;
    };
  };
  location: {
    query: {
      [key: string]: any;
    };
  };
};
