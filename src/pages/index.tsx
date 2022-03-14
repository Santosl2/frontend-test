import type { NextPage } from "next";
import { Button, Logo, ShootingStar } from "../components";
import { FiEdit } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Logo />
      <div className="flex between">
        <ShootingStar />
        <Button>Add Token</Button>
      </div>

      <div className="flex center">
        <table>
          <tr>
            <th></th>
            <th>Tokens</th>
            <th>Balance</th>
          </tr>
          <tr>
            <td>
              <FiEdit size={16} />
            </td>
            <td>KLV</td>
            <td>10,250.50</td>
          </tr>

          <tr>
            <td>
              <FiEdit size={16} />
            </td>
            <td>DVK</td>
            <td>50,250.70</td>
          </tr>

          <tr>
            <td>
              <FiEdit size={16} />
            </td>
            <td>KFI</td>
            <td>10</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
