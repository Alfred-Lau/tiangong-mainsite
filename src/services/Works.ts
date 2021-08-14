import { request } from 'umi';

/**
 * 查看主站的个人项目列表
 *
 * @export
 * @return {*}  {Promise<MainSiteApi.WorkPiece[]>}
 */
export async function queryWorks(): Promise<MainSiteApi.WorkPiece[]> {
  const result = await request('/api/mainsite/work/list');
  return result;
}
