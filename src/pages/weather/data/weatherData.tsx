import Papa from 'papaparse';

import type { StationItemProps, StationListProps } from './weatherType';

export const loadStationList = (csvStationList : string) : StationListProps => {
    const parsed = Papa.parse<StationItemProps>(csvStationList, {
        header: true,
        delimiter: ";",
        skipEmptyLines: true,
    });
    return {stationList : parsed.data};
}