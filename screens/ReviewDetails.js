import React, { Fragment } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { globalStyles, images } from '../styles/Global'

import Card from '../shared/Card'

const ReviewDetails = ({ navigation, route }) => {

    const navBack = () => {
        navigation.goBack()
    }

    //get data from home page
    const { title, body, rating } = route.params;

    //const rating = route.params.rating

    return(
        <Fragment>
            <View style={globalStyles.container}>
                <Text>ReviewDetails screen</Text>
                <Button onPress={navBack} title="Go back"></Button>
            </View>
            <View style={globalStyles.container}>
                <Card>
                    <Text>{ title }</Text>
                    <Text>{ body }</Text>
                    <View style={styles.rating}>
                        <Text>Gamezone rating:</Text>
                        <Image source={images.ratings[route.params.rating]}></Image>
                    </View>
                </Card>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
  });

export default ReviewDetails