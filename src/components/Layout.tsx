import { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useAppContext } from '../hooks/useAppContext';
import { Sheet, SheetContent, SheetTrigger } from './Sheet';
import { Moon, Sun, LayoutGrid, BarChart3, Sparkles, HelpCircle, User, LogOut, Menu } from 'lucide-react';

const Layout = ({ children }: { children: ReactNode }) => {
  const { logout, theme, toggleTheme } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'}`;

  const NavContent = () => (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <NavLink to="/dashboard" className={navLinkClasses}>
        <LayoutGrid className="h-4 w-4" />
        Dashboard
      </NavLink>
      <NavLink to="/stats" className={navLinkClasses}>
        <BarChart3 className="h-4 w-4" />
        Stats
      </NavLink>
      <NavLink to="/programs" className={navLinkClasses}>
        <Sparkles className="h-4 w-4" />
        Programs
      </NavLink>
      <NavLink to="/petunjuk" className={navLinkClasses}>
        <HelpCircle className="h-4 w-4" />
        Petunjuk
      </NavLink>
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="">Sehat & Prima</span>
            </Link>
          </div>
          <div className="flex-1">
            <NavContent />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="">Sehat & Prima</span>
                </Link>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Page title or search could go here */}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <NavLink to="/account" className={navLinkClasses}>
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </NavLink>
          <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
