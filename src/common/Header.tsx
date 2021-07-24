import PropTypes from 'prop-types';

type headerProps = {
  title: string;
};

const Header = ({ title }: headerProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Bowl Game',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
