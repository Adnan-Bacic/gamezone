import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";

import { globalStyles } from '../styles/Global'

import Card from '../shared/Card'
import ReviewForm from './ReviewForm'

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'title1', rating: 1, body: 'body1', key: '1' },
        { title: 'title2', rating: 3, body: 'body2', key: '2' },
        { title: 'title3', rating: 5, body: 'body3', key: '3' },
    ])

    const [modalOpen, setModalOpen] = useState(false)

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return(
        <Fragment>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Home screen</Text>
                <Button onPress={() => navigation.navigate('Home')} title="Go to Home screen"></Button>
                <Button onPress={() => navigation.navigate('ReviewDetails')} title="Go to review details screen"></Button>
                <Button onPress={() => navigation.navigate('About')} title="Go to about screen"></Button>
            </View>
            <View style={globalStyles.container}>

                <Modal visible={modalOpen}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <Text onPress={() => setModalOpen(false)}>Close modal</Text>
                            <ReviewForm addReview={addReview}></ReviewForm>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <Text onPress={() => setModalOpen(true)}>
                    Open modal
                </Text>

                {/* loop through data */}
                <FlatList data={reviews} renderItem={({ item }) => (
                    //navigate to reviewDetails and send the data from item with it
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item )}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}></FlatList>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    }
});

export default Home