import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as models from '../model/models';
import * as $ from 'jquery';
import { Button, Row } from 'react-bootstrap';

interface RootState {
    root: models.RootObject
    loading: boolean
}

export class WeatherComponents extends React.Component<RouteComponentProps<{}>, RootState> {
    constructor() {
        super();
        this.state = {
            root: models.RootObject.bind(this),
            loading: true,
        };
        fetch('api/Weather/City?city=Belo Horizonte')
            .then(response => response.json() as Promise<models.RootObject>)
            .then(data => {
                this.setState({
                    root: data,
                    loading: false,
                });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTable(this.state.root);
        return <div>
            <h1>Pesquisa de Clima:</h1>
            <div>
                <label>Cidade: </label>
            </div>
            <Row>
                <div>
                    <input type="text" name="city" id="city" /> <Button bsStyle="primary" onClick={() => { this.Seach() }}>Pesquisar</Button>
                    <br />
                </div>
            </Row>


            {contents}
        </div>
    }


    Seach() {
        var paramCity = $('#city').val();
        debugger;
        fetch('api/Weather/City?city=' + paramCity)
            .then(response => response.json() as Promise<models.RootObject>)
            .then(data => {
                this.setState({
                    root: data,
                    loading: false,
                });
            });
    }



    private renderTable(root: models.RootObject) {
        var imgsrc = "http://openweathermap.org/img/w/" + root.weather[0].icon + ".png";
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Cidade</th>
                    <th>Temperatura</th>
                    <th>Temperatura Max.</th>
                    <th>Temperatura Min.</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr key={root.id}>
                    <td>
                    </td>
                    <td>{root.name}</td>
                    <td>{root.main.temp}</td>
                    <td>{root.main.temp_max}</td>
                    <td>{root.main.temp_min}</td>
                    <td>
                        <img src={imgsrc} />
                    </td>
                </tr>
            </tbody>
        </table>
    }
}