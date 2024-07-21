import axios from "axios";

interface responseType {
  email: string;
  message: string;
}

async function getUser(): Promise<responseType> {
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-flex  flex-col justify-center items-center border border-gray-100 p-4">
        <div>Starting with next</div>
        <h2>{user.email}</h2>
      </div>
    </div>
  );
}
