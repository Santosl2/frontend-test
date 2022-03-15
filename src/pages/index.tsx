import type { NextPage } from "next";
import { Button, Logo, ShootingStar } from "../components";
import { FiEdit } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="max70">
      <header>
        <Logo />
        <div className="flex between">
          <ShootingStar />
          <Button onClick={() => (window.location.href = "./addToken")}>
            Add Token
          </Button>
        </div>
      </header>
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
