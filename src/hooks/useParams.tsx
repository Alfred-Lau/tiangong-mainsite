import { MatchParams } from './hook';

/**
 *导出 params 参数
 *
 * @export
 * @param {MatchParams} props
 * @return {*}
 */
export default function useParams(props: MatchParams) {
  const { match } = props;
  return match;
}

export { MatchParams };
