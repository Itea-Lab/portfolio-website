import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <a
        onClick={() => navigate("/")}
        className="mt-6 text-blue-500 hover:underline cursor-pointer"
      >
        Go to Home
      </a>
    </div>
  );
}
export default Error404;