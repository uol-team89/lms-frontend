"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CrudViewPage from "../components/CrudViewPage";
import { useEffect } from "react";

const EntityList: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const urlQuery = useSearchParams();


  return <>
  {/* <CrudViewPage></CrudViewPage> */}
  <h1>lello
  </h1>
  </>;
};

export default EntityList;
