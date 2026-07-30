import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPageTitle?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPageTitle }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const routeNameMap: Record<string, string> = {
    about: 'About Us',
    services: 'Services & Stock',
    gallery: 'Photo Gallery',
    contact: 'Contact Us'
  };

  return (
    <nav className="bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 py-3 px-4 sm:px-6 lg:px-8 text-sm transition-colors">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-slate-600 dark:text-slate-300">
        <Link 
          to="/" 
          className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
        >
          <Home className="w-4 h-4 mr-1 text-emerald-600 dark:text-emerald-400" />
          <span>Home</span>
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = currentPageTitle || routeNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <React.Fragment key={routeTo}>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              {isLast ? (
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 truncate">
                  {displayName}
                </span>
              ) : (
                <Link 
                  to={routeTo} 
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
