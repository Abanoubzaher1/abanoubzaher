"use client"

import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Marker, Callout } from "react-native-maps"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import ClusteredMapView from "react-native-maps-clustering"
import MachineCallout from "../components/MachineCallout"

const MapScreen = () => {
  const machines = useSelector((state: RootState) => state.machines.list)
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={styles.container}>
      <ClusteredMapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        clusterColor="#007AFF"
        clusterTextColor="#ffffff"
      >
        {machines.map((machine) => (
          <Marker
            key={machine.id}
            coordinate={{
              latitude: machine.latitude,
              longitude: machine.longitude,
            }}
          >
            <Callout>
              <MachineCallout machine={machine} />
            </Callout>
          </Marker>
        ))}
      </ClusteredMapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
})

export default MapScreen

