export interface HomeItemProps {
    id: string;
    title: string;
    text: string;
}

export interface HomeProps {
    homeDataList: HomeItemProps[];
}