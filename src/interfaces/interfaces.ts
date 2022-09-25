export interface PanelProperities {
    mode?: boolean;
    id?: number;
    title: string;
}

export interface Account {
    id?: string;
    name: string;
    description: string;
}

export interface DisplayProps {
    tab: string;
    mode: boolean;
}

export interface SidebarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export interface ModeSwitchProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}
