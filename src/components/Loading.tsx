function Spinner() {
  return <div className="spinner spinner-default"></div>;
}

export default function Loading() {
  return (
    <div className="size-full flex items-center justify-center">
      <Spinner />
    </div>
  );
}
