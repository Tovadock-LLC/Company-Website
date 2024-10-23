type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className='border-solid border rounded-md border-white p-8 text-stone-950 bg-white'>
      <div>
        <h2 className='font-bold text-lg'>{title}</h2>
      </div>
      <div>{content}</div>
    </div>
  );
}
