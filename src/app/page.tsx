import { Card1, Card2, Card3 } from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 space-y-5"> 
      <h1 className="font-bold text-emerald-500 text-4xl underline">Welcome to the Home Page</h1>
      <Card1 />
      <Card2 />
      <Card3 />
      {/* Component ko multiple times use kiya ja sakta hai.For example: */}
      {/* <Card1 />
      <Card1 />
      <Card1 /> */}
    </div>
  );
}
