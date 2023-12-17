import GoogleMapReact from 'google-map-react';
import {  FaMapMarkerAlt } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div style={{color:'red'}}><FaMapMarkerAlt className='text-2xl'></FaMapMarkerAlt></div>;
const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 22.5726,
            lng: 88.3639
        },
        zoom: 12
    };
    return (
        <div>
            <div style={{ height: '700px', width: '700px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `${import.meta.env.VITE_GOOGLE_API_KEY}` }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text=""
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default GoogleMap;