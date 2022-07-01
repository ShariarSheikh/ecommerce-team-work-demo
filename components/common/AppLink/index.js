import Link from 'next/link';

// eslint-disable-next-line react/prop-types
const AppLink = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default AppLink;
