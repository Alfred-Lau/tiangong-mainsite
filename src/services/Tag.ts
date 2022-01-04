import request, { requestOpenAPI } from '@/utils/request';

/**
 * 查看主站的标签列表
 *
 * @export
 * @return {*}  {Promise<MainSiteApi.TagItem[]>}
 */
export async function queryTags(): Promise<MainSiteApi.TagItem[]> {
  const { data: { list = [] } = {} } = await requestOpenAPI(
    '/api/mainsite/blog/tags',
  );
  return list;
}
