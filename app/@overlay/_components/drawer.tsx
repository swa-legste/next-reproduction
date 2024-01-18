"use client";
import { useRouter } from "next/navigation";

export const Drawer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { back } = useRouter();
  return (
    <div className="absolute inset-0 bg-black/40 flex items-stretch z-20">
      <button className="flex-grow" onClick={back} />
      <div className="relative w-1/3 bg-white flex flex-col items-stretch py-6">
        <button className={'absolute top-2 right-2 h-6 aspect-square rounded-lg bg-black text-white'} onClick={back}>X</button>
        <h1 className="mx-auto">{title}</h1>
        {children}
      </div>
    </div>
  );
};
