import request from '@/utils/request';

/**
 * 查看主站的个人项目列表
 *
 * @export
 * @return {*}  {Promise<MainSiteApi.Blog[]>}
 */
export async function queryBlogs(): Promise<MainSiteApi.Blog[]> {
  const { data: { list = [] } = {} } = await request('/api/mainsite/blog/list');
  return list;
}
