
import React                        from 'react';
import Box                          from '@material-ui/core/Box';
import BodyRegion                   from '../components/BodyRegion.js'

class BodyIndex extends React.Component {

    handlePropertyChange = (id, attribute, value) => this.props.handlePropertyChange(id, attribute, value);

    render() {
        let regions = [11,13,15,18,19,20,21,22,23,24];
        return (
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} bgcolor="background.paper">
                    <div>
                        <span>Body Region</span>
                    </div>
                    <div>
                        <BodyRegion
                            name='Body Region 01'
                            value=''
                            regions={regions}
                            visible={true}
                            disabled={false}
                        />
                    </div>
                </Box>
            </div>
        )
    }
}

export default BodyIndex;