import { HeaderProps } from "./Header.proops";
import styles from "./Header.module.css";

export const Header = ({ ...prop }: HeaderProps): JSX.Element => {
  return <header {...prop}>HEADER</header>;
};
