"use client"
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useSearchParams } from "next/navigation";

const NotFound: React.FC = () => {
    const router = useRouter();
    const query = useSearchParams()

  return (
    <div className="flex justify-center items-center flex-col">


        <p className="text-center text-2xl flex justify-center items-center h-[40vh] w-[100vw]">
        :( <br/>   The page you are looking for does not exist!
        </p>

      <Button onClick={()=>router.push(query.get("previousRoute") || "/")}>&lt;- go back</Button>
    </div>
  );
};

export default NotFound;
