import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen w-full max-w-5xl flex-col px-4 pb-24">
      {children}
    </div>
  );
}
