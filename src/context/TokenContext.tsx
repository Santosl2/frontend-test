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

  return (
    <TokenContext.Provider
      value={{
        tokens,
        addToken,
        tokenExists,
        findTokenByTokenName,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
