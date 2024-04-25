/**
 * Default map sample
 */
import * as React from "react";
import { useEffect } from "react";
import { MapsComponent, Inject, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Legend, MapsTooltip } from '@syncfusion/ej2-react-maps';
import * as data from './default-datasource.json';
import * as worldMap from './world-map.json';

import icon from './mapIcon.png';

// Registering Syncfusion license key
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWNCe0x3Q3xbf1x0ZFZMZVxbRnBPIiBoS35RckVnWHlfdXFSQmRVU0B/');

let datasource = data;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
let markers = [
    { name: 'Asia', latitude: 50.32087157990324, longitude: 90.015625 },
    { name: 'Australia', latitude: -25.88583769986199, longitude: 134.296875 },
    { name: 'Africa', latitude: 16.97274101999902, longitude: 16.390625 },
    { name: 'Europe', latitude: 49.95121990866204, longitude: 18.468749999999998 },
    { name: 'North America', latitude: 59.88893689676585, longitude: -109.3359375 },
    { name: 'South America', latitude: -6.64607562172573, longitude: -55.54687499999999 }
];
const DefaultMaps = (props) => {


    // let store = props.storeData?.map((e) => e.store_city);
    
    // console.log(store);
    
    // let data = props.storeData?.map((e) => ({
    //     latitude: 25.869028,
    //     longitude: -97.502739,
    //     name:` ${e.store_city} : ${e.store_id} <br/> Date : ${new Date(e.subscription_start_date) } <br/> Device : Leap`
    // }));
    
    // console.log(data);


    const cityCoordinates = {
        "Greater Noida": { latitude: 28.474388, longitude: 77.503990 },
        "Matamoros": { latitude: 25.869028, longitude: -97.502739 },
        "Jersey": { latitude: 49, longitude: -2 },
        "New Delhi": { latitude: 28.6139, longitude: 77.2088 },
        "Ghaziabad": { latitude: 28.667856, longitude: 77.449791 },
        "Jaipur": { latitude: 26.922070, longitude: 75.778885 },

        "Chicago": { latitude: 41.8781, longitude: 87.6298 },
        "New York ": { latitude: 40.7128, longitude: 74.0060 },
        "NY ": { latitude: 40.7128, longitude: 74.0060 },

        // "Matamoros": { latitude: 25.869028, longitude: -97.502739 },
        // "Matamoros": { latitude: 25.869028, longitude: -97.502739 },
    };
    
  
    let data = props.storeData?.map((e) => {

        const coordinates = cityCoordinates[e.store_city];
        
        return {
            latitude: coordinates ? coordinates.latitude : 0, // Default to 0 if city coordinates are not found
            longitude: coordinates ? coordinates.longitude : 0,
            name: `${e.store_city} : ${e.store_id} <br/> Date : ${new Date(e.subscription_start_date)} <br/> Device : Leap`
        };
    });
    
    console.log(data);



    const onMapsLoad = (args) => {
        let maps = document.getElementById('maps');
        maps?.setAttribute('title', '');
    };
    const load = (args) => {
    };
    return (<div className='control-panel'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <MapsComponent id="maps" loaded={onMapsLoad.bind(this)} load={load} zoomSettings={{ enable: false }} legendSettings={{ visible: true }} >
                    <Inject services={[Marker, Legend, MapsTooltip]}/>
                    <LayersDirective>
                        <LayerDirective shapeData={worldMap} shapePropertyPath='continent' shapeDataPath='continent' dataSource={datasource.default} shapeSettings={{ colorValuePath: 'color' }}>
                            <MarkersDirective>
                                <MarkerDirective visible={true} template='<div style="font-size: 12px;color:white;text-shadow: 0px 1px 1px black;font-weight: 500;width:50px">{{:name}}</div>' animationDuration={0} dataSource={markers}/>
                                <MarkerDirective visible={true} shape='Image' imageUrl={icon} height={20} width={20} animationDuration={0} tooltipSettings={{ visible: true, valuePath: 'name' }} dataSource={data}/>
                            </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
            </div>
            {/* Source Link */}
           
        </div>);
};
export default DefaultMaps;
