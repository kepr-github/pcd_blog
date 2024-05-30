import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Point Cloud Media',
  description: '点群深層学習の最新技術、チュートリアル、モデル比較、3Dデータ解析の実用例を紹介するブログ。',
  openGraph: {
    title: '点群深層学習インサイト - 3Dデータ解析の最新情報',
    description: '点群深層学習と3Dデータ解析の最新トレンドとチュートリアルを提供。',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
  keywords: ['点群', '深層学習', '3Dデータ解析', 'LiDAR', '3Dスキャン', '機械学習', 'PointNet', 'DGCNN', 'PointCNN'],
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
