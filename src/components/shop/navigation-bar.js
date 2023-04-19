import { Box, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DropdownMenu from './dropdown-menu';
import IconBusinessRoles from 'public/assets/img/icon-business-roles.svg';
import IconApplicationRoles from 'public/assets/img/icon-application-roles.svg';
import IconAzureLicenses from 'public/assets/img/icon-licenses.svg';
import IconAzureAdminRoles from 'public/assets/img/icon-ad-admin.svg';
import IconAzureRBACRoles from 'public/assets/img/icon-rbac-roles.svg';
import IconManagementRoles from 'public/assets/img/icon-management-roles.svg';
import IconMailboxes from 'public/assets/img/icon-mailboxes.svg';
import IconComputers from 'public/assets/img/icon-computers.svg';
import IconSharedFolders from 'public/assets/img/icon-shared-folders.svg';

const menuList = [
  {
    title: 'Business Roles',
    icon: IconBusinessRoles,
  },
  {
    title: 'Application Roles',
    icon: IconApplicationRoles,
  },
  {
    title: 'Azure Licenses',
    icon: IconAzureLicenses,
  },
  {
    title: 'Azure Admin Roles',
    icon: IconAzureAdminRoles,
  },
  {
    title: 'Azure RBAC Roles',
    icon: IconAzureRBACRoles,
  },
  {
    title: 'Management Roles',
    icon: IconManagementRoles,
  },
  {
    title: 'Mailboxes',
    icon: IconMailboxes,
  },
  {
    title: 'Computers',
    icon: IconComputers,
  },
  {
    title: 'Shared Folders',
    icon: IconSharedFolders,
  },
];

export const NavigationBar = ({ isGridView, setIsGridView }) => {
  const theme = useTheme();
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      borderBottom={`1px solid ${theme.palette.gray.light}`}
      width='100%'
    >
      <DropdownMenu menuList={menuList} />
      <Box alignItems='center' sx={{ display: { sm: 'flex', xs: 'none' } }}>
        <Button
          sx={{
            padding: '0',
            width: '24px',
            height: '24px',
            color: isGridView
              ? theme.palette.primary.main
              : theme.palette.black.darkest,
          }}
          onClick={() => setIsGridView(true)}
        >
          <FormatListBulletedIcon width={3} height={3} />
        </Button>
        <Button
          sx={{
            padding: '0',
            width: '24px',
            height: '24px',
            color: !isGridView
              ? theme.palette.primary.main
              : theme.palette.black.darkest,
          }}
          onClick={() => setIsGridView(false)}
        >
          <ContentCopyIcon width={3} height={3} />
        </Button>
      </Box>
    </Box>
  );
};
