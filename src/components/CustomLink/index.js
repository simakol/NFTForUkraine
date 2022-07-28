import { Link } from "react-scroll";

export default function CustomLink(props) {
  const { linkText, anchor, styles, activeStyles, clickFunc } = props;

  return (
    <Link
      className={styles}
      activeClass={activeStyles}
      to={anchor}
      spy={true}
      hashSpy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={() => (clickFunc ? clickFunc() : "")}>
      {linkText}
    </Link>
  );
}
