// Components
import MainNavigation from './MainNavigation';

// Styling
import classes from './Layout.module.scss';

function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;