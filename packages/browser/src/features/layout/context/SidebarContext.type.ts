export type SidebarContextType = Readonly<{
  sidebarIsOpen: boolean;
}>;

export type SidebarActionsContextType = Readonly<{
  toggleSidebar: () => void;
}>;

export type SidebarContextProps = {
  children: React.ReactNode;
};
