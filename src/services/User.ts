import request from '@/utils/request';

/**
 * 查看主站的标签列表
 *
 * @export
 * @return {*}  {Promise<MainSiteApi.TagItem[]>}
 */
export async function queryUserInfo(): Promise<MainSiteApi.User> {
  const data = await request('/api/user/info');
  return data;
}
