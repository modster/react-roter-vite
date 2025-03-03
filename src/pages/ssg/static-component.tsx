const StaticComponent = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center">
      <h1>Static Component</h1>
      <p>This is a static component</p>
      <button
        type="button"
        className="mt-4 bg-blue-500 text-white rounded"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </button>
    </div>
  );
};
export default StaticComponent;
