import DocsPage from "../pages/Docs";
import ComponentPage from '../pages/Components';
import Resources from '../pages/Resources';
 
export const navbar = [
    {
        id: 1,
        title: 'Docs',
        path: '/docs',
        Element: <DocsPage/>,
        private: false,
    },
    {
        id: 2,
        title: 'Components',
        path: '/components',
        Element: <ComponentPage/>,
        private: false,
    },
    {
        id: 3,
        title: 'Resources',
        path: '/resources',
        Element: <Resources/>,
        private: false,
    },
]