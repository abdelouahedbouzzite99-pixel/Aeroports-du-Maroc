var wms_layers = [];

var lyr_Satellite_MAR_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Satellite_MAR<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Satellite_MAR_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-2002497.267052, 2357901.996478, -104107.232564, 4314978.307744]
        })
    });
var format_Limitesdupays_1 = new ol.format.GeoJSON();
var features_Limitesdupays_1 = format_Limitesdupays_1.readFeatures(json_Limitesdupays_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdupays_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdupays_1.addFeatures(features_Limitesdupays_1);
var lyr_Limitesdupays_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdupays_1, 
                style: style_Limitesdupays_1,
                popuplayertitle: 'Limites du pays',
                interactive: true,
                title: '<img src="styles/legend/Limitesdupays_1.png" /> Limites du pays'
            });
var format_LimitesdesrgionsMarocaines_2 = new ol.format.GeoJSON();
var features_LimitesdesrgionsMarocaines_2 = format_LimitesdesrgionsMarocaines_2.readFeatures(json_LimitesdesrgionsMarocaines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesdesrgionsMarocaines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdesrgionsMarocaines_2.addFeatures(features_LimitesdesrgionsMarocaines_2);
var lyr_LimitesdesrgionsMarocaines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesdesrgionsMarocaines_2, 
                style: style_LimitesdesrgionsMarocaines_2,
                popuplayertitle: 'Limites des régions Marocaines',
                interactive: true,
                title: '<img src="styles/legend/LimitesdesrgionsMarocaines_2.png" /> Limites des régions Marocaines'
            });
var format_AeroportsduMaroc_3 = new ol.format.GeoJSON();
var features_AeroportsduMaroc_3 = format_AeroportsduMaroc_3.readFeatures(json_AeroportsduMaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeroportsduMaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportsduMaroc_3.addFeatures(features_AeroportsduMaroc_3);
cluster_AeroportsduMaroc_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AeroportsduMaroc_3
});
var lyr_AeroportsduMaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AeroportsduMaroc_3, 
                style: style_AeroportsduMaroc_3,
                popuplayertitle: 'Aeroports du Maroc',
                interactive: true,
                title: '<img src="styles/legend/AeroportsduMaroc_3.png" /> Aeroports du Maroc'
            });
var group_transp = new ol.layer.Group({
                                layers: [lyr_AeroportsduMaroc_3,],
                                fold: 'close',
                                title: 'transp'});
var group_limites = new ol.layer.Group({
                                layers: [lyr_Limitesdupays_1,lyr_LimitesdesrgionsMarocaines_2,],
                                fold: 'close',
                                title: 'limites'});
var group_tiff = new ol.layer.Group({
                                layers: [lyr_Satellite_MAR_0,],
                                fold: 'close',
                                title: 'tiff'});

lyr_Satellite_MAR_0.setVisible(true);lyr_Limitesdupays_1.setVisible(true);lyr_LimitesdesrgionsMarocaines_2.setVisible(true);lyr_AeroportsduMaroc_3.setVisible(true);
var layersList = [group_tiff,group_limites,group_transp];
lyr_Limitesdupays_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_LimitesdesrgionsMarocaines_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_AeroportsduMaroc_3.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'Capacite_A': 'Capacite_A', 'Capacite_1': 'Capacite_1', 'Capacite_2': 'Capacite_2', });
lyr_Limitesdupays_1.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_LimitesdesrgionsMarocaines_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_AeroportsduMaroc_3.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'TextEdit', 'Capacite_A': 'TextEdit', 'Capacite_1': 'TextEdit', 'Capacite_2': 'TextEdit', });
lyr_Limitesdupays_1.set('fieldLabels', {'OBJECTID': 'hidden field', });
lyr_LimitesdesrgionsMarocaines_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'CODE_REGIO': 'hidden field', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'hidden field', 'Etrangers': 'hidden field', 'Marocains': 'hidden field', 'Non_ar': 'hidden field', });
lyr_AeroportsduMaroc_3.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'inline label - always visible', 'iata': 'hidden field', 'Capacite_A': 'hidden field', 'Capacite_1': 'inline label - always visible', 'Capacite_2': 'hidden field', });
lyr_AeroportsduMaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});