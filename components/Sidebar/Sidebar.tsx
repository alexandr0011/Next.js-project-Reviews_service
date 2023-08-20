import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...prop }: SidebarProps): JSX.Element => {
  return <div {...prop}>SIDEBAR</div>;
};
