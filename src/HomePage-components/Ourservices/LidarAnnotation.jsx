import React from 'react';
import './LidarAnnotation.css';
// import logo from './assets/logo-2-550x123-1.jpg';
import Navbar from '../../HomePage-components/Navbar/Navbar';
import Footer from '../footer/footer';

const LidarAnnotation =()=>{

   
    return(
        <div>
        <Navbar/>
        <div>
<br /><br /><br /><br />
        <div className="content-section">
        <h2>LIDAR ANNOTATION</h2>
        <p>Under Data Annotation and Data Labeling services one of the most important annotations for autonomous vehicles is LiDAR annotation. LiDAR  Annotation: Identifies objects in a 3D point cloud and draws bounding cuboids around the specified objects, returning the positions and sizes of these boxes.</p>
        <p>
        LiDAR annotation is similar to image labeling apart from the difference in practice for a simple reason: It is a 3D representation on a flat-screen. In addition, humans have to deal with a huge amount of points that are not contained by particular boundaries. So, even for professional humans, it is not easy to understand which point belongs to which object, and if you zoom into the point cloud image, this difficulty becomes clear. Even for LiDAR data, annotation is mostly done using the same ideas that guide the image labeling practices, such as bounding boxes or cuboids. 
        </p>
        <p>LiDAR Annotation is training ML algorithms better </p>
        <p>LiDAR annotation technology is helping ML algorithms mainly by making semantic and instance segmentation of long sequences of LiDAR data highly efficient and accurate. Now it is possible to segment those long sequences in minimal time and with exceptional results, Lidar annotation  INTEGRATED WITH MACHINE LEARNING  is helping many ways to bring out efficient and accurate results.  LiDAR has undergone major changes over the past years, and the most important thing is it has become increasingly very significant due to its fundamental role in autonomous vehicles to safely navigate our roads.</p>
        <p>Learning Spiral, Data Labeling company offers qualitative data annotation and data labeling services including LiDAR annotation. Our professional team is capable of drawing bounding boxes, cuboids, polygon, picture classification/ tagging, text annotation, image masking annotation, data annotation & labeling, 2D & 3D annotation, Semantic segmentation, 3D LIDAR Annotation, autonomous vehicle, tagging of aerial view pictures, drone technology, contour annotation, etc.</p>
    </div>
    </div>
    <Footer/>
</div>    

    );
};

export default LidarAnnotation;