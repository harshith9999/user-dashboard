import { useContext, useState } from "react";
import { MyContext } from "../ContextApis/MyContext";
import ShowMore from "./ShowMore";

function UserTable() {
  const { data } = useContext(MyContext);
const [show,setShow]=useState(false)


  return (
    <div className={`flex justify-center pt-7   `}>
      <table className=" bg-white dark:bg-black">
        <tr className={`border-2 `}>
          <th className="border-2 text-black dark:text-white dark:border-white">
            ID
          </th>
          <th className="border-2 text-black dark:text-white dark:border-white">
            Name
          </th>
          <th className="border-2 text-black dark:text-white dark:border-white">
            Email
          </th>
          <th className="border-2 text-black dark:text-white dark:border-white">
            Company Name
          </th>
          <th className="border-2 text-black dark:text-white dark:border-white">
            
          </th>
         { show &&<>
          <th className="border-2 text-black dark:text-white dark:border-white">
            phone
          </th>
          <th className="border-2 text-black dark:text-white dark:border-white">
            address
          </th>
          </>}
        </tr>
        {data.map((item,i) => (
          <tr className="border-2" key={i}>
            <td className="border-2 text-black dark:text-white dark:border-white">
              {item.id}
            </td>
            <td className="border-2 text-black dark:text-white dark:border-white">
              {item.name}
            </td>
            <td className="border-2 text-black dark:text-white dark:border-white">
              {item.email}
            </td>
            <td className="border-2 text-black dark:text-white dark:border-white">
              {item.company.name}
            </td>
            <ShowMore item={item} onClick={setShow}/>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserTable;
