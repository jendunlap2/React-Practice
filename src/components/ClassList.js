import React, { Component } from 'react';

export default class ClassList extends Component {
    constructor(props){
        console.log('Constructed')
        super(props);
        this.state = {
            kekambas_class: []
        }

    }


    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    kekambas_class: data
                })
            })
    }

    render() {
        console.log('Rendered')
        return (
            <>
                <h1>Kekambas-79 Class</h1>
                <ul>
                    {this.state.kekambas_class.map((k) => (<li>{k.first_name} {k.last_name}</li>))}
                </ul>

            </>
        );
    }
}