// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconDashboard,
    IconDeviceAnalytics,
    IconWorld,
    IconUsers,
    IconTableOptions,
    IconRobot,
    IconCopy,
    IconFileDescription
} from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconCopy,
    IconFileDescription,
    IconRobot,
    IconTableOptions,
    IconUsers,
    IconWorld
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const build = {
    id: 'dashboard',
    // title: <FormattedMessage id="build" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'players',
            title: <FormattedMessage id="players" defaultMessage="Players" />,
            type: 'item',
            url: '/dashboard/player',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'tournament',
            title: <FormattedMessage id="tournaments" defaultMessage="Tournaments" />,
            type: 'item',
            url: '/dashboard/tournament',
            icon: icons.IconWorld,
            breadcrumbs: false
        }
    ]
};

export default build;
