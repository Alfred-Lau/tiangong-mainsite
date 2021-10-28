import { MatchParams } from './hook';

/**
 *导出 query 参数
 *
 * @export
 * @param {MatchParams} props
 * @return {*}
 */
export default function useQuery(props: MatchParams) {
  console.log('params', props);

  return props?.location?.query;
}
