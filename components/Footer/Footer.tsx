import { myPages } from '@/utils/myPages';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className='w-full flex justify-center items-center border-t max-w-5xl mx-auto border-[var(--box-shadow-light)]'>
      <div className='flex w-full mt-auto max-w-4xl py-10 gap-8 flex-col'>
        <div className='mx-auto max-w-3xl sm:gap-x-10 grid grid-cols-3 sm:grid-cols-4'>
          {myPages.map((page) => (
            <Link
              href={page.path}
              key={page.name}
              className={`rounded-3xl text-sm px-3 py-1 duration-300 hover:opacity-100 ${
                router.asPath === page.path ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <span className='text-[var(--textColor)]'>{page.name}</span>
            </Link>
          ))}
        </div>
        <Link
          className='mx-auto text-xs opacity-50 hover:opacity-100 duration-300'
          href={'https://github.com/farichieri'}
          target={'_blank'}
        >
          © 2023 Fabricio Richieri
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
