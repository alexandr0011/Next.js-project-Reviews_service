import { FooterProps } from "./Footer.props";
import { format } from "date-fns";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...prop }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...prop}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
