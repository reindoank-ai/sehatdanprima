import { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useAppContext } from '../hooks/useAppContext';

const Layout = ({ children }: { children: ReactNode }) => {
  const { logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="">Sehat & Prima</span>
          </Link>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'text-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive ? 'text-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            Stats
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive ? 'text-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/upgrade"
            className={({ isActive }) =>
              isActive ? 'text-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            Upgrade
          </NavLink>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
