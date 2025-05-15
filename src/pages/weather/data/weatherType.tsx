export interface StationItemProps {
    Id_station: string;
    Id_omm?: string;
    Latitude: string;
    Longitude: string;
    Altitude: string;
    Date_ouverture: string ;
    Pack: string;
}

export interface StationListProps {
    stationList : StationItemProps[];
}
