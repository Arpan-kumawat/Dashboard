// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// import WorldLocations from "./WorldLocations.ts";
// import WorldUtils from "./WorldUtils.ts"
// // import { IgrGeographicMapModule } from "igniteui-react-maps";
// // import { IgrGeographicMap } from "igniteui-react-maps";


// import { IgrGeographicProportionalSymbolSeries } from "igniteui-react-maps";
// // import { IgrDataChartInteractivityModule } from "igniteui-react-charts";
// import { IgrValueBrushScale } from "igniteui-react-charts";
// // import { IgrCustomPaletteBrushScale } from "igniteui-react-charts";
// import { IgrSizeScale } from "igniteui-react-charts";
// import { IgrDataContext } from "igniteui-react-core";
// import { MarkerType } from "igniteui-react-charts";
// // import { BrushSelectionMode } from "@infragistics/igniteui-react-charts";

// import { IgrGeographicMapModule, IgrGeographicMap } from 'igniteui-react-maps';
// import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';



// IgrGeographicMapModule.register();
// IgrDataChartInteractivityModule.register();

// export default class MapTypeScatterBubbleSeries extends React.Component {

//     public geoMap: IgrGeographicMap;

//     constructor(props: any) {
//         super(props);

//         this.onMapRef = this.onMapRef.bind(this);
//         this.createTooltip = this.createTooltip.bind(this);
//     }

//     public render(): JSX.Element {
//         return (
       
//               <div style={{ height: "100%", width: "100%" }}>
//       <IgrGeographicMap
//         width="1000px"
//         ref={this.onMapRef}
//         height="400px"
//         zoomable="true" />
//     </div>


        
//         );
//     }

//     public onMapRef(geoMap: IgrGeographicMap) {
//         if (!geoMap) { return; }

//         this.geoMap = geoMap;
//         this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

//         this.addSeriesWith(WorldLocations.getAll());
//     }

//     public addSeriesWith(locations: any[])
//     {
//         const sizeScale = new IgrSizeScale({});
//         sizeScale.minimumValue = 4;
//         sizeScale.maximumValue = 60;

//         const brushes = [
//             "rgba(14, 194, 14, 0.4)",  // semi-transparent green
//             "rgba(252, 170, 32, 0.4)", // semi-transparent orange
//             "rgba(252, 32, 32, 0.4)",  // semi-transparent red
//         ];

//         const brushScale = new IgrValueBrushScale({});
//         brushScale.brushes = brushes;
//         brushScale.minimumValue = 0;
//         brushScale.maximumValue = 30;

//         const symbolSeries = new IgrGeographicProportionalSymbolSeries ( { name: "symbolSeries" });
//         symbolSeries.dataSource = locations;
//         symbolSeries.markerType = MarkerType.Circle;
//         symbolSeries.radiusScale = sizeScale;
//         symbolSeries.fillScale = brushScale;
//         symbolSeries.fillMemberPath = "pop";
//         symbolSeries.radiusMemberPath = "pop";
//         symbolSeries.latitudeMemberPath = "lat";
//         symbolSeries.longitudeMemberPath = "lon";
//         symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
//         symbolSeries.tooltipTemplate = this.createTooltip;

//         this.geoMap.series.add(symbolSeries);
//     }

//     public createTooltip(context: any) {
//         const dataContext = context.dataContext as IgrDataContext;
//         if (!dataContext) return null;

//         const dataItem = dataContext.item as any;
//         if (!dataItem) return null;

//         const pop = dataItem.pop.toFixed(1) + " M";
//         const lat = WorldUtils.toStringLat(dataItem.lat);
//         const lon = WorldUtils.toStringLon(dataItem.lon);

//         return <div>
//             <div className="tooltipTitle">{dataItem.name}</div>
//             <div className="tooltipBox">
//                 <div className="tooltipRow">
//                     <div className="tooltipLbl">Country:</div>
//                     <div className="tooltipVal">{dataItem.country}</div>
//                 </div>
//                 <div className="tooltipRow">
//                     <div className="tooltipLbl">Store Name:</div>
//                     <div className="tooltipVal">{pop}</div>
//                 </div>
//                 <div className="tooltipRow">
//                     <div className="tooltipLbl">Date:</div>
//                     <div className="tooltipVal">{lat}</div>
//                 </div>
//                 <div className="tooltipRow">
//                     <div className="tooltipLbl">Device:</div>
//                     <div className="tooltipVal">{lon}</div>
//                 </div>
//             </div>
//         </div>
//     }
// }

// // // rendering above class to the React DOM
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<MapTypeScatterBubbleSeries/>);
import React from 'react';
import WorldLocations from "./WorldLocations.ts";
import WorldUtils from "./WorldUtils.ts"
import { IgrGeographicProportionalSymbolSeries } from "igniteui-react-maps";
import { IgrValueBrushScale } from "igniteui-react-charts";
import { IgrSizeScale } from "igniteui-react-charts";
import { IgrDataContext } from "igniteui-react-core";
import { MarkerType } from "igniteui-react-charts";
import { IgrGeographicMapModule, IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterBubbleSeries extends React.Component {
  public geoMap: IgrGeographicMap;

  constructor(props: any) {
    super(props);
    this.onMapRef = this.onMapRef.bind(this);
    this.createTooltip = this.createTooltip.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <IgrGeographicMap
          width="100%"
          ref={this.onMapRef}
          height="500px"
          zoomable={true}
        />
      </div>
    );
  }

  public onMapRef(geoMap: IgrGeographicMap) {
    if (!geoMap) { return; }

    this.geoMap = geoMap;
    this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

    this.addSeriesWith(WorldLocations.getAll());
  }

  public addSeriesWith(locations: any[]) {
    const sizeScale = new IgrSizeScale({});
    sizeScale.minimumValue = 4;
    sizeScale.maximumValue = 60;

    const brushes = [
      "rgba(14, 194, 14, 0.4)",  // semi-transparent green
      "rgba(252, 170, 32, 0.4)", // semi-transparent orange
      "rgba(252, 32, 32, 0.4)",  // semi-transparent red
    ];

    const brushScale = new IgrValueBrushScale({});
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const symbolSeries = new IgrGeographicProportionalSymbolSeries({ name: "symbolSeries" });
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.radiusScale = sizeScale;
    symbolSeries.fillScale = brushScale;
    symbolSeries.fillMemberPath = "pop";
    symbolSeries.radiusMemberPath = "pop";
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
    symbolSeries.tooltipTemplate = this.createTooltip;

    this.geoMap.series.add(symbolSeries);
  }

  public createTooltip(context: any) {
    const dataContext = context.dataContext as IgrDataContext;
    if (!dataContext) return null;

    const dataItem = dataContext.item as any;
    if (!dataItem) return null;

    const pop = dataItem.pop.toFixed(1) + " M";
    const lat = WorldUtils.toStringLat(dataItem.lat);
    const lon = WorldUtils.toStringLon(dataItem.lon);

    return <div>
      <div className="tooltipTitle">{dataItem.name}</div>
      <div className="tooltipBox">
        <div className="tooltipRow">
          <div className="tooltipLbl">Country:</div>
          <div className="tooltipVal">{dataItem.country}</div>
        </div>
        <div className="tooltipRow">
          <div className="tooltipLbl">Store Name:</div>
          <div className="tooltipVal">{pop}</div>
        </div>
        <div className="tooltipRow">
          <div className="tooltipLbl">Date:</div>
          <div className="tooltipVal">{lat}</div>
        </div>
        <div className="tooltipRow">
          <div className="tooltipLbl">Device:</div>
          <div className="tooltipVal">{lon}</div>
        </div>
      </div>
    </div>;
  }
}
