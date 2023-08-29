import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Player = Loadable(lazy(() => import('views/player/')));
const UsersDetail = Loadable(lazy(() => import('views/player/PlayerDetail')));
const TournamentList = Loadable(lazy(() => import('views/tournament-manage')));
const TournamentCreate = Loadable(lazy(() => import('views/tournament-manage/TournamentCreat')));
const TournamentCancel = Loadable(lazy(() => import('views/tournament-manage')));
const TournamentDetail = Loadable(lazy(() => import('views/tournament-manage/TournamentDetail')));
const Default = Loadable(lazy(() => import('views/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/dashboard/default',
            element: <Default />
        },
        {
            path: '/dashboard/player',
            element: <Player />
        },
        {
            path: '/dashboard/player/detail/:id',
            element: <UsersDetail />
        },
        {
            path: 'dashboard/tournament',
            element: <TournamentList />
        },
        {
            path: 'tournament/create',
            element: <TournamentCreate />
        },
        {
            path: 'tournamentlist',
            element: <TournamentCancel />
        },
        {
            path: 'tournamentDetail',
            element: <TournamentDetail />
        }
    ]
};

export default MainRoutes;
