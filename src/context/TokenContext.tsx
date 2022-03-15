import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react";

type TokenCredentials = {
  token: string;
  balance: string;
};

type TokenContextData = {
  tokens: TokenCredentials[];
  addToken: (data: TokenCredentials) => void;
  tokenExists: (token: string) => boolean;
  findTokenByTokenName: (token: string) => TokenCredentials | undefined;
  deleteToken: (token: string) => void;
  saveToken: (token: string, data: TokenCredentials) => void;
};

export const TokenContext = createContext({} as TokenContextData);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState<TokenCredentials[]>([]);

  useEffect(() => {
    const tokens = localStorage.getItem("@tokens");

    if (tokens) {
      setTokens(JSON.parse(tokens));
    }
  }, []);

  const findTokenByTokenName = useCallback(
    (token: string) => {
      return tokens.find((t) => t.token === token);
    },
    [tokens]
  );

  const tokenExists = useCallback(
    (token: string) => {
      return tokens.some((t) => t.token === token);
    },
    [tokens]
  );

  const addToken = useCallback(
    ({ token, balance }: TokenCredentials) => {
      setTokens((prev) => prev.concat({ token, balance }));

      const newData = [...tokens, { token, balance }];

      localStorage.setItem("@tokens", JSON.stringify(newData));
    },
    [tokens]
  );

  const deleteToken = useCallback(
    (token: string) => {
      const newTokens = tokens.filter((t) => t.token !== token);
      localStorage.setItem("@tokens", JSON.stringify(newTokens));
    },
    [tokens]
  );

  const saveToken = useCallback(
    (
      token: string,
      { token: newTokenName, balance: newBalance }: TokenCredentials
    ) => {
      const tokenData = findTokenByTokenName(token);
      if (!tokenData) return;

      tokenData.token = newTokenName;
      tokenData.balance = newBalance;

      localStorage.setItem("@tokens", JSON.stringify(tokens));
    },
    [tokens]
  );

  return (
    <TokenContext.Provider
      value={{
        tokens,
        addToken,
        tokenExists,
        findTokenByTokenName,
        deleteToken,
        saveToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
