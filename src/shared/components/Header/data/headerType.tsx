export interface NavItemProps {
    id: string;
    name: string;
    path: string;
}

export interface HeaderProps {
    navList: NavItemProps[];
}