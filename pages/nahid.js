import { useSelector } from 'react-redux';

function nahid() {
  const { name, age } = useSelector((state) => state.nameState);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
    </div>
  );
}

export default nahid;
