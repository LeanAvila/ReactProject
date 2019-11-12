import React from 'react';


class Llamada extends React.Component {
    constructor () {
        super()
        this.state  = {
            array: []
        }

    }

    async componentDidMount() {
        var urls = [
            "http://localhost:5000/api/cities"
        ]

        var resp = await fetch(urls[0]).
            then(res => res.json());
        console.log(resp);
        this.setState({ array: resp });
        console.log(this.state.array);
        }

        render (){
            return (
                <ul>
                    {this.state.array.map((item) =>{
                        return <li key={item._id}>{item.city}, {item.country}</li>
                    })}
                </ul>
            )
        }
    }
    
    export default Llamada