// "use client";

// import Image from "next/image";
// import wallpaper from "@/public/images/wukong_wallpaper.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import { Metadata } from "next";
// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from "lodash";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// export default function Home() {
//   const [isVisible, setVisible] = useState(false);

//   return (
//     <main>
//       <h1>Hello World</h1>
//       <button onClick={() => setVisible(true)}>Show</button>
//       {isVisible && <HeavyComponent />}
//       &nbsp; &nbsp;
//       <button
//         onClick={async () => {
//           const _ = (await import("lodash")).default;

//           const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
//           const sorted = _.orderBy(users, ["name"]);
//           console.log(sorted);
//         }}
//       >
//         Sort
//       </button>
//     </main>
//   );
// }

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />

      <HeavyComponent />
    </main>
  );
  // return (
  //   <main className="relative h-screen">
  //     {/*
  //       This image component whill automatically compresses and resizes
  //       our images based on the device size under the hood
  //     */}
  //     <Image
  //       src="https://bit.ly/react-cover"
  //       alt="wallpaper"
  //       fill
  //       className="object-cover"
  //       sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  //       quality={75}
  //       // Beacuse images will be lazy loading, and this property will tell browser to download this image first
  //       priority
  //     />
  //     {/* <Image src={wallpaper} alt="wallpaper" /> */}
  //   </main>
  // );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
