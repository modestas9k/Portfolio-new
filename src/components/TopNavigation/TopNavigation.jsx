import { NavLink } from 'react-router-dom';

export default function TopNavigation() {
    return (
        <nav className="container mx-auto flex justify-between align-middle p-4">
            <div className="px-4">
                <a href="/" className="font-bold text-xl">
                    Logo
                </a>
            </div>
            <div className="ml-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        (isActive ? 'bg-yellow-100' : '') +
                        ' font-semibold hover:bg-yellow-100 px-4 py-2 rounded-md mx-2'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/works"
                    className={({ isActive }) =>
                        (isActive ? 'bg-yellow-100' : '') +
                        ' font-semibold hover:bg-yellow-100 px-4 py-2 rounded-md mx-2'
                    }
                >
                    Works
                </NavLink>
            </div>
        </nav>
    );
}
