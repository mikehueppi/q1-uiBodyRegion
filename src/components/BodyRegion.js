//React
import React                        from 'react';
//import { translate }              from 'react-i18next';
import css                          from '../styles/BodyRegion.module.css';

class BodyRegion extends React.Component {

    constructor(props){
        super(props);
        this.state = {selectedRegion: {region: undefined, side: undefined}};
    }

    shouldComponentUpdate(nextState) {
        return this.state.selectedRegion !== nextState.selectedRegion
    }

    onChange() {
        return this.props.onChange || null;
    }

    selectBodyRegion = (code, side) => {
        this.setState({selectedRegion:{region: code, side: side}});
    };

    getBodyRegionData = (code,bodyRegions) => {
        let bodyRegion = ['','',''];
        bodyRegions.map (function(region, i){
            if (code === region.code) {
                bodyRegion[0] = region.label;
                bodyRegion[1] = region.numberDec;
                bodyRegion[2] = region.numberHex;
            }
            return bodyRegion;
        });
        return bodyRegion;
    };

    getBodyRegionObject = (code,bodyRegions) => {
        let bodyRegionObj = {};
        bodyRegions.map (function(region, i){
            if (code === region.code) {
                bodyRegionObj = region;
            }
            return bodyRegionObj;
        });
        return bodyRegionObj;
    };

    render() {
        console.log("BCBodyRegion.render");

        const URL = 'http://localhost:3000/img/humanbody.svg';
        const bodyRegionsAll = [
            {code: 1, label: 'Kopf', label2: '', label3: '', numberDec: '2852126720', numberHex: 'AA000000', position: [[78,18]], circleSize: 15, multipleSides: false},
            {code: 2, label: 'Rücken', label2: '', label3: '', numberDec: '3137339392', numberHex: 'BB000000', position: [[222,86],[]], circleSize: 15, multipleSides: false},
            {code: 3, label: 'Halswirbel', label2: 'Nacken', label3: '', numberDec: '3138387968', numberHex: 'BB100000', position: [[222,52],[]], circleSize: 15, multipleSides: false},
            {code: 4, label: 'Brustwirbel', label2: 'Rücken', label3: '', numberDec: '3139436544', numberHex: 'BB200000', position: [[222,86],[]], circleSize: 15, multipleSides: false},
            {code: 5, label: 'Lendenwirbel', label2: 'Lendenwirbelsäule', label3: '', numberDec: '3140485120', numberHex: 'BB300000', position: [[222,118],[]], circleSize: 15, multipleSides: false},
            {code: 6, label: 'Kreuzbeinwirbel', label2: '', label3: '', numberDec: '3141533696', numberHex: 'BB400000', position: [[],[]], circleSize: 0, multipleSides: false},
            {code: 7, label: 'Steissbeinwirbel', label2: 'Steissbein', label3: '', numberDec: '3142582272', numberHex: 'BB500000', position: [[222,150],[]], circleSize: 15, multipleSides: false},
            {code: 8, label: 'Thorax', label2: '', label3: '', numberDec: '3422552064', numberHex: 'CC000000', position: [[78,98],[]], circleSize: 20, multipleSides: false},
            {code: 9, label: 'Bauch', label2: '', label3: '', numberDec: '3707764736', numberHex: 'DD000000', position: [[78,142],[]], circleSize: 20, multipleSides: false},
            {code: 11, label: 'Schulter', label2: '', label3: '', numberDec: '3994025984', numberHex: 'EE100000', position: [[40,68],[112,68]], circleSize: 15, multipleSides: true},
            {code: 12, label: 'Oberarm',  label2: '', label3: '',  numberDec: '3995074560', numberHex: 'EE200000', position: [[35,104],[117,104]], circleSize: 15, multipleSides: true},
            {code: 13, label: 'Ellbogen', label2: '', label3: '', numberDec: '3996123136', numberHex: 'EE300000', position: [[270,130],[176,130]], circleSize: 15, multipleSides: true},
            {code: 14, label: 'Unterarm', label2: '', label3: '', numberDec: '3997171712', numberHex: 'EE400000', position: [[27,144],[128,146]], circleSize: 15, multipleSides: true},
            {code: 15, label: 'Handgelenk', label2: '', label3: '', numberDec: '3998220288', numberHex: 'EE500000', position: [[278,170],[166,170]], circleSize: 15, multipleSides: true},
            {code: 16, label: 'Hand', label2: '', label3: '', numberDec: '3999268864', numberHex: 'EE600000', position: [[20,188],[133,188]], circleSize: 15, multipleSides: true},
            {code: 18, label: 'Hüfte', label2: '', label3: '', numberDec: '4279238656', numberHex: 'FF100000', position: [[60,175],[96,175]], circleSize: 15, multipleSides: true},
            {code: 19, label: 'Gesäss', label2: '', label3: '', numberDec: '4280287232', numberHex: 'FF200000', position: [[243,177],[204,177]], circleSize: 15, multipleSides: true},
            {code: 20, label: 'Oberschenkel', label2: '', label3: '', numberDec: '4281335808', numberHex: 'FF300000', position: [[241,219],[206,219]], circleSize: 15, multipleSides: true},
            {code: 21, label: 'Knie', label2: '', label3: '', numberDec: '4282384384', numberHex: 'FF400000', position: [[62,245],[96,245]], circleSize: 15, multipleSides: true},
            {code: 22, label: 'Unterschenkel', label2: '', label3: '', numberDec: '4283432960', numberHex: 'FF500000', position: [[240,273],[206,273]], circleSize: 15, multipleSides: true},
            {code: 23, label: 'Sprunggelenk', label2: '', label3: '', numberDec: '4284481536', numberHex: 'FF600000', position: [[243,321],[209,321]], circleSize: 15, multipleSides: true},
            {code: 24, label: 'Fuss', label2: '', label3: '', numberDec: '4285530112', numberHex: 'FF700000', position: [[56,324],[100,324]], circleSize: 15, multipleSides: true},
            {code: 25, label: 'Becken', label2: '', label3: '', numberDec: '4286578688', numberHex: 'FF800000', position: [[78,158],[]], circleSize: 20}
        ];

        let bodyRegions = [];
        for (let r of this.props.regions) {
            bodyRegions.push(this.getBodyRegionObject(r,bodyRegionsAll));
        }

        //let i18n = this.props.t;
        let visible = typeof this.props.visible === 'undefined' ? true : this.props.visible;
        let sides = [];
        sides['left'] = 'links';
        sides['right'] = 'rechts';
        let bodyRegion = this.getBodyRegionData(this.state.selectedRegion.region,bodyRegionsAll);
        let selectedRegion = this.state.selectedRegion.region;
        let selectedSide = this.state.selectedRegion.side;

        return (
            visible ?
                <div className={ css.bodyRegionWrapper }>
                    <div>
                        <img src={URL} alt='Human Body' />
                    </div>
                    <svg viewBox="0 0 300 350">
                        {
                            bodyRegions.map((bodyItem, i) =>
                                <circle cx={bodyItem.position[0][0]} cy={bodyItem.position[0][1]}
                                        r={bodyItem.circleSize}
                                        onClick={() => this.selectBodyRegion( bodyItem.code, (bodyItem.multipleSides) ? 'right' : '')}
                                        className={ (selectedRegion === bodyItem.code && selectedSide !== 'left') ? css.selected : '' }
                                />
                            )
                        }
                        {
                            bodyRegions.map((bodyItem, i) =>
                                (bodyItem.multipleSides) ?
                                    <circle cx={bodyItem.position[1][0]} cy={bodyItem.position[1][1]}
                                            r={bodyItem.circleSize}
                                            onClick={() => this.selectBodyRegion(bodyItem.code,'left')}
                                            className={ (selectedRegion === bodyItem.code && selectedSide === 'left') ? css.selected : '' }
                                    /> : ''
                            )
                        }
                    </svg>
                    <div className={ css.display }>
                        <strong>{bodyRegion[0]}</strong><br/>
                        {bodyRegion[1]}<br/>
                        {bodyRegion[2]}<br/><br/>
                        <b>{sides[this.state.selectedRegion.side]}</b>
                    </div>
                </div>
                : null
        );
    }
}

export default BodyRegion;