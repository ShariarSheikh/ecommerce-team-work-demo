/* eslint-disable react/prop-types */
const Badge = ({
  count,
  badgeTopStyle = '-top-3',
  badgeRightStyle = '-right-[15px]',
  children,
}) => {
  return (
    <div className="relative">
      {children}

      <span
        className={`${badgeTopStyle} ${badgeRightStyle} flex text-sm bg-green-600 text-white items-center justify-center 
        overflow-hidden rounded-full w-[20px] h-[20px] absolute top-0 right-0`}
      >
        {count}
      </span>
    </div>
  );
};

export default Badge;
