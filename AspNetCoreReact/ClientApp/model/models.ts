export class Coord {
    lon: number;
    lat: number;
}

export class  Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export class  Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
}

export class  Wind {
    speed: number;
    deg: number;
}


export class  Clouds {
    all: number;
}


export class  Sys {
    message: string;
    country: string;
    sunrise: string;
    sunset: string;
}

export class  RootObject {
    coord: Coord;
    weather: Array<Weather>;
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}