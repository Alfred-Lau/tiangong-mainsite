declare namespace MainSiteApi {
  interface WorkPiece {
    id: number;
    title: string;
    desc: string;
    tags: string[];
    link: string;
    cover: string;
  }

  interface Blog {
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
