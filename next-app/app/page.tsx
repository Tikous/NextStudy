// import Image from "next/image";
// import wallpaper from "@/public/images/wukong_wallpaper.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
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
