import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <p>Integracao Asp.Net Core e React consumindo "Openweathermap"</p>
            
        </div>;
    }
}
