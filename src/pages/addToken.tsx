import type { NextPage } from "next";
import { Button, InputGroup, Logo, ShootingStar } from "../components";
import { Input } from "../components/Input/Input";

const AddToken: NextPage = () => {
  return (
    <div className="max70">
      <header>
        <Logo />
        <div className="flex between">
          <ShootingStar />
        </div>

        <div className="flex between">
          Add Token
          <Button bgColor="grey" onClick={() => (window.location.href = "./")}>
            Go Back
          </Button>
        </div>
      </header>

      <div className="flex center column">
        <InputGroup>
          <label htmlFor="token">Token</label>
          <Input id="token" />
        </InputGroup>

        <InputGroup>
          <label htmlFor="balance">Balance</label>
          <Input id="balance" />
        </InputGroup>

        <Button align="End">Save</Button>
      </div>
    </div>
  );
};

export default AddToken;
