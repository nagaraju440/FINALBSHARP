import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Adminnav from '../Admin/Adminnav';
import StackNav from '../TopNavs/stack';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    //   <View>
    //       <StackNav/>
        
        <Adminnav/>
    //   </View>
    );
  }
}

export default AdminPage;
