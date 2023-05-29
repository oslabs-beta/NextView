export interface Props {
  fakeProp: string;
}

const Page1 = (props: Props) => {
  return <h1 className='bg-green-200 px-0 '>Test Page1</h1>;
};

export default Page1;
