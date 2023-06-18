import { useParams } from 'react-router-dom';

export default function Mock2() {
  const { id } = useParams();

  console.log('useParams', useParams);

  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}
