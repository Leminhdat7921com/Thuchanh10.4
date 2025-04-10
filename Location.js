import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectLocationScreen() {
  const [zoneOpen, setZoneOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState(null);

  const [zones, setZones] = useState([
    { label: 'MinhDat', value: 'MinhDat' },
    { label: 'Dhanmondi', value: 'Dhanmondi' },
    { label: 'Gulshan', value: 'Gulshan' },
  ]);

  const [areas, setAreas] = useState([
    { label: 'Block A', value: 'Block A' },
    { label: 'Block B', value: 'Block B' },
    { label: 'Block C', value: 'Block C' },
  ]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/map.png')} // bạn nên thay thế bằng icon phù hợp
        style={styles.image}
      />
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      <Text style={styles.label}>Your Zone</Text>
      <DropDownPicker
        open={zoneOpen}
        value={zone}
        items={zones}
        setOpen={setZoneOpen}
        setValue={setZone}
        setItems={setZones}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Text style={styles.label}>Your Area</Text>
      <DropDownPicker
        open={areaOpen}
        value={area}
        items={areas}
        setOpen={setAreaOpen}
        setValue={setArea}
        setItems={setAreas}
        placeholder="Types of your area"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginBottom: 5,
  },
  dropdown: {
    borderColor: '#ccc',
    marginBottom: 10,
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#39B54A',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
