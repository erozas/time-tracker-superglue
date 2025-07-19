// import your page component
// e.g import PostsEdit from '../views/posts/edit'

// Mapping between your props template to Component, you must add to this
// to register any new page level component you create. If you are using the
// scaffold, it will auto append the identifers for you.
//
// For example:
//
// const pageIdentifierToPageComponent =  {
//   'posts/new': PostNew
// };
//
//
// If you are using a build tool that supports globbing, you can automatically
// populate `pageIdentiferToPageComponent`. For example, if you are using vite,
// you can use the following snippet instead of manually importing.
//
// ```
// const pageIdentifierToPageComponent = {}
// const pages = import.meta.glob('../views/**/*.jsx', {eager: true})
//
// for (const key in pages) {
//   if (pages.hasOwnProperty(key)) {
//     const identifier = key.replace("../views/", "").split('.')[0];
//     pageIdentifierToPageComponent[identifier] = pages[key].default;
//   }
// }
// ```
//

import Home from '../views/pages/home'
import DashboardIndex from '../views/dashboard/index'
import ProjectIndex from '../views/projects/index'
import ProjectsNew from '../views/projects/new'
import SessionsNew from '../views/sessions/new'
import PostIndex from '../views/posts/index'
import PostShow from '../views/posts/show'

export const pageIdentifierToPageComponent = {
  "pages/home": Home,
  "sessions/new": SessionsNew,
  "dashboard/index": DashboardIndex,
  "projects/index": ProjectIndex,
  "projects/new": ProjectsNew,
  "posts/index": PostIndex,
  "posts/show": PostShow,
};