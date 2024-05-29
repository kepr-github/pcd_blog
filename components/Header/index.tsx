import Image from 'next/image';
import Link from 'next/link';
import './index.module.css';

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <Link href="/">
//         <Image
//           src="/logo.svg"
//           alt="SIMPLE"
//           className={styles.logo}
//           width={348}
//           height={133}
//           priority
//         />
//       </Link>
//     </header>
//   );
// }

export default function Header() {
  return (
<header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
  <div className="container mx-auto flex items-center justify-between">
    <Link href="/">
      <Image
        src="/newlogo.png"
        alt="Point Cloud"
        className="w-16 h-auto"
        width={176}
        height={67}
        priority
      />
    </Link>
    <nav>
      <ul className="flex space-x-8 text-white text-lg">
        <li>
          <Link href="/" className="hover:underline">
            Hone
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  );
}