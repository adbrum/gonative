import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ title }) => (
  <View>
    <Text>
      {title}
    </Text>
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

const style = StyleSheet.create({});

export default Todo;
