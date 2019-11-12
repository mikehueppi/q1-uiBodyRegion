import React                        from 'react';
//import ScaleIndex                   from './ScaleIndex';
//import YesNoIndex                   from './YesNoIndex';
//import DateIndex                    from './DateIndex';
//import BodyIndex                    from './BodyIndex';

// Styles
//import css                          from '../../styles/PStyles.css';
//import lightBaseTheme               from 'material-ui/styles/baseThemes/lightBaseTheme';
//import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme                  from 'material-ui/styles/getMuiTheme';

import BodyIndex from './BodyIndex';

class ComponentsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            widget: 'date'
        };
    }

    shouldComponentUpdate(nextState) {
        return(
            this.state.widget !== nextState.widget
        );
    }

    handleChangeView = (w) => this.setState({widget:w});

    render() {
        return (
            <div>
                <BodyIndex />
            </div>
        );
    }
}

export default ComponentsIndex;