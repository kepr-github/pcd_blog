import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';


// const DEBUG_MODE:boolean = true;

// function trace(...args:any[]):void {
//   if (DEBUG_MODE && window.console && typeof window.console.log != "undefined") {
//       let str:string = "";
//       if (args.length > 0)
//           str = args.join(", ");

//       console.log(str);
//   }
// }






// タグの型定義
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ライターの型定義
export type Writer = {
  name: string;
  profile: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

// ブログの型定義
export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  writer?: Writer;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
 }

if (!process.env. NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  console.log("テスト")
  console.log(queries)
  const listData = await client
    .getList<Blog>({
      endpoint: 'blog',
      queries,
    })
    .catch(notFound);
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  console.log("mmsq")
  console.log(queries)
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blog',
      contentId,
      queries,
    })
    .catch(notFound);
  console.log("詳細")
  console.log(detailData)
  return detailData;
};

// タグの一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: 'tags',
      queries,
    })
    .catch(notFound);

  return listData;
};

// タグの詳細を取得
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: 'tags',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};
