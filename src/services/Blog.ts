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

/**
 *获取博客详情数据
 *
 * @export
 * @param {number} id
 * @return {*}  {Promise<MainSiteApi.Blog>}
 */
export async function queryBlogDetailById(
  id: number,
): Promise<MainSiteApi.Blog> {
  const { data: detail = {} } = await request('/api/mainsite/blog/detail', {
    params: { id },
  });

  return detail;
}
