import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export const Admin = () => {
  const token = useSelector((state: RootState) => state.token.value);

  return token ? (
    <div>{token}</div>
  ) : (
    <div>Non hai accesso a questa pagina</div>
  );
};
