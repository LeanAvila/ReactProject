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
    // componentDidMount(){

        
        
        // var init = {
        //     method: "GET",
        //     headers: new Headers({
                
        //     })
        // }
        
        // function fetchJson (url/*, headers*/){
        //     return fetch( url/*, headers*/).then(function(response){
        //         if(response.ok){
        //             return response.json();
        //         }
        //         throw new Error(response.statusText);
        //     })
        // }
        
        // function fetchJsonList (urls/*,init*/){
        //     return Promise.all(urls.map(url => fetchJson(url/*,init*/)));
        // }
        
        
        
        // fetchJsonList(urls/*,init*/).then(function (values){
        //     var data = values
        //     console.log(data[0])
        //     this.setState({array: data[0]})

        // }).catch (function(error){
        //     console.log (error);
        // })
    // }

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