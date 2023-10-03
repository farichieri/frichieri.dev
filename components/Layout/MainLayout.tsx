import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col w-full min-h-screen h-full px-4 pt-8 pb-24 max-w-5xl'>
      {children}
    </div>
  );
}
