//@ts-nocheck
import {
	GoogleMap,
	InfoWindowF,
	MarkerF,
	useJsApiLoader,
} from '@react-google-maps/api';
import React, { useRef, useState } from 'react';

//убрать //@ts-nocheck и описать типы
interface ICenter {
	lat: number;
	lng: number;
}

interface Props {
	center: ICenter;
	marker_title: string;
}

const MapContacts: React.FC<Props> = ({ center, marker_title = '' }) => {
	const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP;
	const [popupOpen, setPopupOpen] = useState(false);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyC9ofxwIKyzFAYZiDL4l7Xg9SdPqKGqRjg',
	});
	const mapRef = useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback() {
		mapRef.current = undefined;
	}, []);

	var styles = [
		{
			elementType: 'geometry',
			stylers: [
				{
					color: '#212121',
				},
			],
		},
		{
			elementType: 'labels.icon',
			stylers: [
				{
					visibility: 'off',
				},
			],
		},
		{
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [
				{
					color: '#212121',
				},
			],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'administrative.country',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
		{
			featureType: 'administrative.land_parcel',
			stylers: [
				{
					visibility: 'off',
				},
			],
		},
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#bdbdbd',
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{
					color: '#181818',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.stroke',
			stylers: [
				{
					color: '#1b1b1b',
				},
			],
		},
		{
			featureType: 'road',
			elementType: 'geometry.fill',
			stylers: [
				{
					color: '#2c2c2c',
				},
			],
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#8a8a8a',
				},
			],
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{
					color: '#373737',
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [
				{
					color: '#3c3c3c',
				},
			],
		},
		{
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry',
			stylers: [
				{
					color: '#4e4e4e',
				},
			],
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			featureType: 'transit',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [
				{
					color: '#000000',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#3d3d3d',
				},
			],
		},
	];

	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	var mapOptions = {
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		overviewMapControl: true,
		rotateControl: true,
	};

	return (
		<>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
					options={{ styles: styles, disableDefaultUI: true }}
				>
					<MarkerF
						onLoad={onLoad}
						onClick={() => {
							setPopupOpen(true);
						}}
						position={center}
						icon={{
							url: '/images/icon/map-marker.svg',
						}}
					>
						{popupOpen ? (
							<InfoWindowF onCloseClick={() => setPopupOpen(false)}>
								<div>{marker_title}</div>
							</InfoWindowF>
						) : null}
					</MarkerF>
				</GoogleMap>
			) : (
				'Loading map...'
			)}
		</>
	);
};

export default MapContacts;
