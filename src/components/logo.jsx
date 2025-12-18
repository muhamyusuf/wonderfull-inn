import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Logo = ({ url, className, children, ...props }) => {
  return (
    <a href={url} className={cn("flex max-h-8 items-center gap-2", className)} {...props}>
      {children}
    </a>
  );
};

Logo.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const LogoImage = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={cn("block h-8", className)} {...props} />
);

LogoImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const LogoText = ({ children, className, ...props }) => (
  <span className={cn("text-lg font-semibold tracking-tighter", className)} {...props}>
    {children}
  </span>
);

LogoText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Logo, LogoImage, LogoText };
