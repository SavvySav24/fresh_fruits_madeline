const React = require('react');
const DefaultLayout = require('../Default.jsx')

class New extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <form action="/fruits" method="post">
                    <fieldset>
                    <legend>Create a New Fruit</legend>
                    <label>
                        NAME:<input type="text" name="name" placeholder="Enter Fruit Name" />
                    </label>
                    <label>
                        COLOR:<input type="text" name="color" placeholder="Enter Fruit Color" />
                    </label>
                    <label> READY TO EAT:<input type="checkbox" name="readyToEat" /> </label>
                    </fieldset>
                    <input type="submit" value="create New fruit" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New