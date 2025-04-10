function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go to Home
      </a>
    </div>
  );
}
export default Error404;