import PropTypes from 'prop-types';
import Button from './Button'

const Header = ( {title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Test Button' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Bowl Game',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
