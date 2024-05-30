import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  // return (
  //   <li className={styles.list}>
  //     <Link href={`/articles/${article.id}`} className={styles.link}>
  //       {article.thumbnail ? (
  //         <picture>
  //           <source
  //             type="image/webp"
  //             media="(max-width: 640px)"
  //             srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
  //           />
  //           <source
  //             type="image/webp"
  //             srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
  //           />
  //           <img
  //             src={article.thumbnail?.url || `/noimage.png`}
  //             alt=""
  //             className={styles.image}
  //             width={article.thumbnail?.width}
  //             height={article.thumbnail?.height}
  //           />
  //         </picture>
  //       ) : (
  //         <Image
  //           className={styles.image}
  //           src="/no-image.png"
  //           alt="No Image"
  //           width={1200}
  //           height={630}
  //         />
  //       )}
        {/* <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
} */}


return (
  <li className="flex mb-6">
    <Link href={`/articles/${article.id}`} className="flex items-start hover:shadow-lg transition-shadow">
      {article.thumbnail ? (
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
          />
          <img
            src={article.thumbnail?.url || `/noimage.png`}
            alt=""
            className="w-60 h-32 object-cover mr-4"
            width={240}
            height={126}
          />
        </picture>
      ) : (
        <Image
          className="w-60 h-32 object-cover mr-4"
          src="/no-image.png"
          alt="No Image"
          width={240}
          height={126}
        />
      )}
      <dl className="flex flex-col justify-between p-4 bg-white">
        <dt className="text-xl font-bold">{article.title}</dt>
        <dd className="mt-2">
          <TagList tags={article.tags} hasLink={false} />
        </dd>
        <dd className="mt-2 text-gray-500">
          <PublishedDate date={article.publishedAt || article.createdAt} />
        </dd>
      </dl>
    </Link>
  </li>
);
}