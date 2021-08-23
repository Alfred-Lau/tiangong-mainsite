export type MatchParams = {
  match: {
    params: {
      [key: string]: any;
    };
  };
};

export default function useParams(props: MatchParams) {
  const { match } = props;
  return match;
}
