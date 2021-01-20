  
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/Button'

const reviewSchema = yup.object({
    title: yup.string()
      .required()
      .min(4),
    body: yup.string()
      .required()
      .min(8),
    rating: yup.string()
      .required()
      .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      })
  });

const ReviewForm = ({ addReview }) => {

    return (
       <View style={globalStyles.container}>
           <Formik
            initialValues={{
                title: '',
                body: '',
                rating: ''
            }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                //console.log(values)
                addReview(values)
                actions.resetForm()
            }}
            >
            {(props) => (
                <View>
                    <TextInput
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                        style={globalStyles.input}
                        placeholder="Review title">
                    </TextInput>
                    <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title}</Text>

                    <TextInput
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                        style={globalStyles.input}
                        multiline
                        minHeight={60}
                        placeholder="Review title">
                    </TextInput>
                    <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body}</Text>

                    <TextInput
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}
                        style={globalStyles.input}
                        placeholder="1-5"
                        keyboardType="numeric">
                    </TextInput>
                    <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating}</Text>

                    {/* 
                    <Button onPress={props.handleSubmit} title="Submit"></Button>
                    */}
                    <FlatButton text="Submit" onModalSubmit={props.handleSubmit}></FlatButton>
                </View>
            )}
           </Formik>
       </View>
    );
}

export default ReviewForm 