import request from '@/utils/request';

/**
 * 查看主站的个人项目列表
 *
 * @export
 * @return {*}  {Promise<MainSiteApi.WorkPiece[]>}
 */
export async function queryWorks(): Promise<{
  data: { list: MainSiteApi.WorkPiece[]; total: number };
}> {
  const result = await request('/api/mainsite/work/list');
  return result;
}
