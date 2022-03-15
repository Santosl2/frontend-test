import type { NextPage } from "next";
import { Button, Logo, ShootingStar } from "../components";
import { FiEdit } from "react-icons/fi";
import { useToken } from "../hooks/useToken";

const Home: NextPage = () => {
  const { tokens } = useToken();

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
          <thead>
            <tr>
              <th></th>
              <th>Tokens</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => {
              return (
                <tr key={token.token}>
                  <td
                    onClick={() => {
                      window.location.href = `/editToken/${token.token}`;
                    }}
                  >
                    <FiEdit size={16} />
                  </td>
                  <td>{token.token}</td>
                  <td>
                    {new Intl.NumberFormat("pt-BR").format(
                      Number(token.balance)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
