// // src/routes/index.tsx
// import { createBrowserRouter } from 'react-router-dom';
// import Layout from '../components/Layout';
// import Home from '../pages/Home';
// import Blog from '../pages/Blog';
// import BlogPost from '../pages/BlogPost';
// import NotFound from '../pages/NotFound';

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />
//             },
//             {
//                 path: 'blog',
//                 element: <Blog />
//             },
//             {
//                 path: 'blog/:id',
//                 element: <BlogPost />
//             },
//             {
//                 path: '*',
//                 element: <NotFound />
//             }
//         ]
//     }
// ]);