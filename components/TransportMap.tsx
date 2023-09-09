import { RouteCoords } from '@/interfaces/route-coords.interface';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import LineString from 'ol/geom/LineString';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import { useGeographic } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import OSM from 'ol/source/OSM';
import { Stroke, Style } from 'ol/style';
import { useEffect } from 'react';

const TransportMap = (props: { coords: RouteCoords[] }) => {
    useGeographic();

    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [28.192285, 45.909805],
                zoom: 12.8,
            }),
        });

        const pointsSource = new VectorSource();
        const lineSource = new VectorSource();

        const pointsLayer = new VectorLayer({
            source: pointsSource,
        });

        const lineLayer = new VectorLayer({
            source: lineSource,
            style: new Style({
                stroke: new Stroke({
                    color: 'blue',
                    width: 1.5,
                }),
            }),
        });

        map.addLayer(pointsLayer);
        map.addLayer(lineLayer);

        const createPoint = (coordinates) => {
            return new Feature({
                geometry: new Point(coordinates),
            });
        };

        const busRoute = props.coords.map((coord) => createPoint([coord.lat, coord.long]));

        const line = new Feature({
            geometry: new LineString(
                Object.values(busRoute).map((point: Feature<Point>) => point.getGeometry()!.getCoordinates())
            ),
        });

        pointsSource.addFeatures([busRoute[0], busRoute[busRoute.length - 1]]);
        lineSource.addFeature(line);

        return () => {
            map.dispose();
        };
    }, [props.coords]);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default TransportMap;
