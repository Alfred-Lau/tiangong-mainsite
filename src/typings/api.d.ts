declare namespace MainSiteApi {
  export type ResponseData<T> = {
    success: boolean;
    message: string | null;
    data: T;
  };
  type Tag = ResponseData<{
    total: number;
    list: TagItem[];
  }>;

  type Blog = ResponseData<{
    total: number;
    list: BlogItem[];
  }>;

  type User = {
    access: 'admin' | 'guest';
    createdAt: Date;
    currentAuthority: 'admin' | 'guest';
    id: number;
    nickName: string;
    password: string;
    portrait: string;
    status: 'ok' | 'error';
    token: string;
    updatedAt: Date;
    username: string;
  };

  interface WorkPiece {
    id: number;
    title: string;
    desc: string;
    tags: string[];
    link: string;
    cover: string;
  }
  interface TagItem {
    title: string;
    id: number;
  }

  interface BlogItem {
    key: number;
    id: number;
    title: string;
    description: string;
    content: string;
    tags: string;
    link: string;
    createdAt: string;
    author: string;
  }
}

declare interface Window {
  user: any;
}
