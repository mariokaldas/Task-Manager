import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { SignUp } from './components/sign-up/sign-up';
import { Login } from './components/login/login';
import { Main } from './components/main/main';
import { Home } from './components/home/home';
import { authenticationGuard } from './guards/authentication-guard';
import { TaskList } from './components/TaskList/taskList';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'welcome',
    component: Main,
    canActivateChild: [authenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path:"addtask",
        loadComponent: () => import("./components/TaskInput/taskInput")
      },
      {
        path:"tasks",
        children:[
          {
            path:"all",
            component:TaskList,
            data:{filter:"all"}
          },
          {
            path:"done",
            component:TaskList,
            data:{filter:"done"}
          },
          {
            path:"todo",
            component:TaskList,
            data:{filter:"todo"}
          },
          {
            path:'',
            redirectTo:"all",
            pathMatch:"full"
          }
        ]
      },
      {
        path:"aboutus",
        component: About
      }
    ],
  },
];
