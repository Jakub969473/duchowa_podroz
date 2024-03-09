export interface GameBoard {
    [key: number]: string | number;
}

export interface WinCombo {
    index: number;
    player: string;
}
