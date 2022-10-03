export interface PanelProperities {
    mode?: boolean;
    id?: number;
    title: string;
    description?: string;
    displayIcon?: boolean;
    icon?: string;

}

export interface Account {
    id?: string;
    name: string;
    description: string;

    settingsOpen?: boolean;
    setSettings: () => void;
}

export interface UserAccount {
    id?: string;
    name: string;
    description: string;
}

export interface HeaderProps {
    tab: string;
    mode: boolean;
    expansion?: boolean;
    setExpansion: (value: boolean) => void;
}

export interface DisplayContentProps {
    tab: string;
    mode: boolean;
}


export interface SidebarProps {
    darkMode: boolean;
    expansion: boolean;
    setDarkMode: (value: boolean) => void;
    projectName: string;
}

export interface ModeSwitchProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export interface Settings {
    name: string;
}