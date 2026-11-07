var wms_layers = [];

var format_Limitesdupays_0 = new ol.format.GeoJSON();
var features_Limitesdupays_0 = format_Limitesdupays_0.readFeatures(json_Limitesdupays_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdupays_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdupays_0.addFeatures(features_Limitesdupays_0);
var lyr_Limitesdupays_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdupays_0, 
                style: style_Limitesdupays_0,
                popuplayertitle: 'Limites du pays',
                interactive: true,
                title: '<img src="styles/legend/Limitesdupays_0.png" /> Limites du pays'
            });
var format_LimitesdesrgionsMarocaines_1 = new ol.format.GeoJSON();
var features_LimitesdesrgionsMarocaines_1 = format_LimitesdesrgionsMarocaines_1.readFeatures(json_LimitesdesrgionsMarocaines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesdesrgionsMarocaines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdesrgionsMarocaines_1.addFeatures(features_LimitesdesrgionsMarocaines_1);
var lyr_LimitesdesrgionsMarocaines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesdesrgionsMarocaines_1, 
                style: style_LimitesdesrgionsMarocaines_1,
                popuplayertitle: 'Limites des régions Marocaines',
                interactive: true,
                title: '<img src="styles/legend/LimitesdesrgionsMarocaines_1.png" /> Limites des régions Marocaines'
            });
var format_AeroportsduMaroc_2 = new ol.format.GeoJSON();
var features_AeroportsduMaroc_2 = format_AeroportsduMaroc_2.readFeatures(json_AeroportsduMaroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeroportsduMaroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportsduMaroc_2.addFeatures(features_AeroportsduMaroc_2);
var lyr_AeroportsduMaroc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroportsduMaroc_2, 
                style: style_AeroportsduMaroc_2,
                popuplayertitle: 'Aeroports du Maroc',
                interactive: true,
                title: '<img src="styles/legend/AeroportsduMaroc_2.png" /> Aeroports du Maroc'
            });
var group_transp = new ol.layer.Group({
                                layers: [lyr_AeroportsduMaroc_2,],
                                fold: 'open',
                                title: 'transp'});
var group_limites = new ol.layer.Group({
                                layers: [lyr_Limitesdupays_0,lyr_LimitesdesrgionsMarocaines_1,],
                                fold: 'open',
                                title: 'limites'});

lyr_Limitesdupays_0.setVisible(true);lyr_LimitesdesrgionsMarocaines_1.setVisible(true);lyr_AeroportsduMaroc_2.setVisible(true);
var layersList = [group_limites,group_transp];
lyr_Limitesdupays_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_LimitesdesrgionsMarocaines_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_AeroportsduMaroc_2.set('fieldAliases', {'Nom (En Français)': 'Nom (En Français)', 'Nom (En Arabe)': 'Nom (En Arabe)', 'iata': 'iata', 'Capacité': 'Capacité', 'Capacité Actuelle (Passagers/An)': 'Capacité Actuelle (Passagers/An)', 'Objectif Horizon 2030 (Extension)': 'Objectif Horizon 2030 (Extension)', });
lyr_Limitesdupays_0.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_LimitesdesrgionsMarocaines_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_AeroportsduMaroc_2.set('fieldImages', {'Nom (En Français)': 'TextEdit', 'Nom (En Arabe)': 'TextEdit', 'iata': 'TextEdit', 'Capacité': 'TextEdit', 'Capacité Actuelle (Passagers/An)': 'TextEdit', 'Objectif Horizon 2030 (Extension)': 'TextEdit', });
lyr_Limitesdupays_0.set('fieldLabels', {'OBJECTID': 'hidden field', });
lyr_LimitesdesrgionsMarocaines_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'CODE_REGIO': 'hidden field', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'hidden field', 'Etrangers': 'hidden field', 'Marocains': 'hidden field', 'Non_ar': 'hidden field', });
lyr_AeroportsduMaroc_2.set('fieldLabels', {'Nom (En Français)': 'inline label - always visible', 'Nom (En Arabe)': 'inline label - always visible', 'iata': 'hidden field', 'Capacité': 'hidden field', 'Capacité Actuelle (Passagers/An)': 'inline label - always visible', 'Objectif Horizon 2030 (Extension)': 'hidden field', });
lyr_AeroportsduMaroc_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});